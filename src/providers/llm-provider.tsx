import * as webllm from '@mlc-ai/web-llm';
import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from 'react';

export type WebLLMModelOption = 'Llama-3.1-8B-Instruct-q4f32_1-MLC';

export interface InitProgress {
  progress: number;
  text: string;
  status: 'initializing' | 'success' | 'error' | 'not-started';
}

export interface ChatMessage {
  role: 'user' | 'assistant' | 'system' | 'function';
  content: string;
}

export interface GenerationOptions {
  temperature?: number;
  max_tokens?: number;
  top_p?: number;
  top_k?: number;
  repetition_penalty?: number;
  stop?: string[];
}

export interface GenerationResponse {
  text: string;
  status: 'success' | 'error';
  error?: string;
}

interface LLMProviderState {
  // State
  initProgress: InitProgress;
  initialized: boolean;
  supported: boolean;
  systemInfo: {
    supported: boolean;
    webGPUAvailable: boolean;
    webGLAvailable: boolean;
    sharedArrayBufferAvailable: boolean;
    gpuVendor: string | null;
  };

  // Event handlers
  generateExplanation: (
    questionText: string,
    correctAnswer: string,
    selectedAnswer: string | null
  ) => Promise<GenerationResponse>;
  generateHint: (
    questionText: string,
    options: string[]
  ) => Promise<GenerationResponse>;
  generateText: (
    prompt: string,
    options?: GenerationOptions
  ) => Promise<GenerationResponse>;
  initialize: (modelOption?: WebLLMModelOption) => Promise<boolean>;
  resetChat: () => Promise<void>;
}

const INITIAL_STATE: LLMProviderState = {
  // State
  initProgress: {
    progress: 0,
    text: 'Not initialized',
    status: 'not-started',
  },
  initialized: false,
  supported: false,
  systemInfo: {
    supported: false,
    webGPUAvailable: false,
    webGLAvailable: false,
    sharedArrayBufferAvailable: false,
    gpuVendor: null,
  },

  // Event handlers
  generateExplanation: async () => ({
    text: '',
    status: 'error',
    error: 'LLM not initialized',
  }),
  generateHint: async () => ({
    text: '',
    status: 'error',
    error: 'LLM not initialized',
  }),
  generateText: async () => ({
    text: '',
    status: 'error',
    error: 'LLM not initialized',
  }),
  initialize: async () => false,
  resetChat: async () => {},
};

const LLMContext = createContext<LLMProviderState>(INITIAL_STATE);

export const useLLM = () => {
  const context = useContext(LLMContext);

  if (!context) {
    throw new Error('useLLM must be used within an LLMProvider');
  }

  return context;
};

export const LLMProvider: React.FC<{
  children: React.ReactNode;
  autoInitialize?: boolean;
  defaultModel?: WebLLMModelOption;
}> = ({
  children,
  autoInitialize = false,
  defaultModel = 'Llama-3.1-8B-Instruct-q4f32_1-MLC',
}) => {
  const [engine, setEngine] = useState<webllm.MLCEngine | null>(null);
  const [initialized, setInitialized] = useState(false);
  const [supported, setSupported] = useState(false);

  const [initProgress, setInitProgress] = useState<InitProgress>({
    progress: 0,
    text: 'Not initialized',
    status: 'not-started',
  });

  const [systemInfo, setSystemInfo] = useState({
    supported: false,
    webGPUAvailable: false,
    webGLAvailable: false,
    sharedArrayBufferAvailable: false,
    gpuVendor: null as string | null,
  });

  const checkWebLLMSupport = useCallback(async () => {
    if (typeof WebAssembly !== 'object') {
      setSupported(false);
      setSystemInfo((prev) => ({ ...prev, supported: false }));
      return false;
    }

    try {
      // Check for SharedArrayBuffer (needed for multithreading)
      const hasSharedArrayBuffer = typeof SharedArrayBuffer === 'function';

      // Check for WebGPU support
      const hasWebGPU = 'gpu' in navigator;

      // Check for WebGL support
      const canvas = document.createElement('canvas');
      const hasWebGL = !!(
        canvas.getContext('webgl') || canvas.getContext('webgl2')
      );

      // WebLLM can work without SharedArrayBuffer but will be slower
      // It can also fall back to WebGL or CPU
      const isSupported = hasWebGL || hasWebGPU;

      setSupported(isSupported);

      setSystemInfo({
        supported: isSupported,
        webGPUAvailable: hasWebGPU,
        webGLAvailable: hasWebGL,
        sharedArrayBufferAvailable: hasSharedArrayBuffer,
        gpuVendor: null, // Will be populated after initialization
      });

      return isSupported;
    } catch (error) {
      console.error('Error checking WebLLM support:', error);
      setSupported(false);
      setSystemInfo((prev) => ({ ...prev, supported: false }));
      return false;
    }
  }, []);

  const initialize = useCallback(
    async (modelOption: WebLLMModelOption = defaultModel): Promise<boolean> => {
      if (initialized && engine) return true;

      if (!supported) {
        const isSupported = await checkWebLLMSupport();

        if (!isSupported) {
          setInitProgress({
            progress: 0,
            text: 'WebLLM is not supported in this browser',
            status: 'error',
          });

          return false;
        }
      }

      setInitProgress({
        progress: 0,
        text: 'Initializing WebLLM...',
        status: 'initializing',
      });

      try {
        const progressCallback = (report: webllm.InitProgressReport) => {
          setInitProgress({
            progress: report.progress,
            text: report.text,
            status: 'initializing',
          });
        };

        const mlcEngine = await webllm.CreateMLCEngine(modelOption, {
          initProgressCallback: progressCallback,
        });

        setEngine(mlcEngine);
        setInitialized(true);

        setInitProgress({
          progress: 1,
          text: 'WebLLM initialized successfully',
          status: 'success',
        });

        try {
          const vendor = await mlcEngine.getGPUVendor();
          setSystemInfo((prev) => ({ ...prev, gpuVendor: vendor }));
        } catch (e) {
          console.log('Could not get GPU vendor:', e);
        }

        return true;
      } catch (error) {
        console.error('Failed to initialize WebLLM:', error);
        setInitProgress({
          progress: 0,
          text: `Failed to initialize WebLLM: ${error instanceof Error ? error.message : 'Unknown error'}`,
          status: 'error',
        });
        return false;
      }
    },
    [initialized, engine, supported, checkWebLLMSupport, defaultModel]
  );

  const generateText = useCallback(
    async (
      prompt: string,
      options: GenerationOptions = {}
    ): Promise<GenerationResponse> => {
      if (!engine || !initialized) {
        return {
          text: '',
          status: 'error',
          error: 'WebLLM not initialized. Call initialize() first.',
        };
      }

      try {
        const messages: webllm.ChatCompletionMessageParam[] = [
          { role: 'system', content: 'You are a helpful AI assistant.' },
          { role: 'user', content: prompt },
        ];

        const response = await engine.chat.completions.create({
          messages,
          temperature: options.temperature ?? 0.7,
          max_tokens: options.max_tokens,
          top_p: options.top_p,
          stop: options.stop,
        });

        return {
          text: response.choices[0].message.content || '',
          status: 'success',
        };
      } catch (error) {
        console.error('Error generating text with WebLLM:', error);
        return {
          text: '',
          status: 'error',
          error:
            error instanceof Error
              ? error.message
              : 'Unknown error generating text',
        };
      } finally {
      }
    },
    [engine, initialized]
  );

  const generateHint = useCallback(
    async (
      questionText: string,
      options: string[]
    ): Promise<GenerationResponse> => {
      const prompt = `
You are a helpful microeconomics tutor. Give a short hint for the following question without revealing the answer:

Question: ${questionText}

The available options for this question are the following:
  ${options.map((option) => `- ${option}`).join('\n  ')}

Provide a concise hint (2-3 sentences) that guides the student's thinking without giving away the answer.
Your hint:`;

      return generateText(prompt, {
        temperature: 0.5,
        max_tokens: 1000,
      });
    },
    [generateText]
  );

  const generateExplanation = useCallback(
    async (
      questionText: string,
      correctAnswer: string,
      selectedAnswer: string | null
    ): Promise<GenerationResponse> => {
      const isCorrect = selectedAnswer === correctAnswer;

      const prompt = `
You are a microeconomics professor explaining a concept to a student.
Provide a detailed explanation for the following question:

Question: ${questionText}

The correct answer is: "${correctAnswer}"

${selectedAnswer ? `The student selected: "${selectedAnswer}" (which is ${isCorrect ? 'correct' : 'incorrect'})` : 'The student has not selected an answer yet.'}

Please explain:
1. Why the correct answer is right
2. The key economic concept(s) being tested
3. How to approach similar problems in the future
`;

      return generateText(prompt, {
        temperature: 0.7,
        max_tokens: 2500,
      });
    },
    [generateText]
  );

  const resetChat = useCallback(async (): Promise<void> => {
    if (!engine) return;

    try {
      await engine.resetChat();
    } catch (error) {
      console.error('Error resetting chat:', error);
    }
  }, [engine]);

  useEffect(() => {
    const init = async () => {
      await checkWebLLMSupport();

      if (autoInitialize && supported) {
        initialize(defaultModel).catch((error) => {
          console.warn('Auto-initialization failed:', error);
        });
      }
    };

    init();
  }, [autoInitialize, defaultModel, initialize, checkWebLLMSupport, supported]);

  const value: LLMProviderState = {
    // State
    initProgress,
    initialized,
    supported,
    systemInfo,

    // Event handlers
    generateExplanation,
    generateHint,
    generateText,
    initialize,
    resetChat,
  };

  return <LLMContext.Provider value={value}>{children}</LLMContext.Provider>;
};

export default LLMProvider;
