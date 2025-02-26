import { Markdown } from '@/components/markdown';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Progress } from '@/components/ui/progress';
import { GenerationResponse, useLLM } from '@/providers/llm-provider';
import { useQuiz } from '@/providers/quiz-provider';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@radix-ui/react-tabs';
import {
  AlertCircle,
  ArrowRight,
  BookOpen,
  Lightbulb,
  Loader2,
  RefreshCw,
} from 'lucide-react';
import React, { useCallback, useMemo, useState } from 'react';

interface QuestionHelpDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export const QuestionHelpDialog: React.FC<QuestionHelpDialogProps> = ({
  open,
  onOpenChange,
}) => {
  const { updateQuizState, currentQuestion, quizState } = useQuiz();
  const { initialized, initProgress, generate } = useLLM();

  const [activeTab, setActiveTab] = useState<'hint' | 'explanation'>('hint');

  const [explanationError, setExplanationError] = useState(false);
  const [hintError, setHintError] = useState(false);

  const [isLoadingExplanation, setIsLoadingExplanation] = useState(false);
  const [isLoadingHint, setIsLoadingHint] = useState(false);

  const correctAnswer = useMemo(
    () =>
      quizState.showFeedback
        ? currentQuestion.options[currentQuestion.correctIndex]
        : null,
    [currentQuestion, quizState.showFeedback]
  );

  const selectedAnswer = useMemo(
    () =>
      quizState.selectedAnswer !== null
        ? currentQuestion.options[quizState.selectedAnswer]
        : null,

    [quizState.selectedAnswer, currentQuestion]
  );

  const hasHint = useMemo(
    () =>
      quizState.generatedHints &&
      currentQuestion.id in quizState.generatedHints &&
      quizState.generatedHints[currentQuestion.id] !== undefined,
    [quizState.generatedHints, currentQuestion]
  );

  const hasExplanation = useMemo(
    () =>
      quizState.generatedExplanations &&
      currentQuestion.id in quizState.generatedExplanations &&
      quizState.generatedExplanations[currentQuestion.id] !== undefined,
    [quizState.generatedExplanations, currentQuestion]
  );

  const generateHint = useCallback(
    async (
      questionText: string,
      options: string[]
    ): Promise<GenerationResponse> => {
      if (!initialized || !generate)
        return { status: 'error', text: '', error: 'Model not initialized' };

      const prompt = `
        You are a helpful microeconomics tutor. Give a short hint for the following question without revealing the answer:

        Question: ${questionText}

        The available options for this question are the following:
          ${options.map((option) => `- ${option}`).join('\n  ')}

        Provide a concise hint (2-3 sentences) that guides the student's thinking without giving away the answer.
        Your hint:
      `;

      return generate(prompt, {
        temperature: 0.5,
        max_tokens: 1000,
      });
    },
    [generate, initialized]
  );

  const handleGetHint = async () => {
    setIsLoadingHint(true);
    setHintError(false);

    try {
      const response = await generateHint(
        currentQuestion.question,
        currentQuestion.options
      );

      if (response.status === 'success') {
        updateQuizState({
          generatedHints: {
            ...quizState.generatedHints,
            [currentQuestion.id]: response.text,
          },
        });
      } else {
        setHintError(true);
      }
    } catch (error) {
      console.error('Error getting hint:', error);
      setHintError(true);
    } finally {
      setIsLoadingHint(false);
    }
  };

  const generateExplanation = useCallback(
    async (
      questionText: string,
      correctAnswer: string,
      selectedAnswer: string | null
    ): Promise<GenerationResponse> => {
      if (!initialized || !generate)
        return { status: 'error', text: '', error: 'Model not initialized' };

      const isCorrect = selectedAnswer === correctAnswer;

      const prompt = `
        You are a microeconomics professor explaining a concept to a student.
        Provide a detailed explanation for the following question:

        Question: ${questionText}

        The correct answer is: "${correctAnswer}"

        ${
          selectedAnswer
            ? `The student selected: "${selectedAnswer}" (which is ${isCorrect ? 'correct' : 'incorrect'})`
            : 'The student has not selected an answer yet.'
        }

        Please explain:
        1. Why the correct answer is right
        2. The key economic concept(s) being tested
        3. How to approach similar problems in the future
      `;

      return generate(prompt, {
        temperature: 0.7,
        max_tokens: 2500,
      });
    },
    [generate, initialized]
  );

  const handleGetExplanation = async () => {
    if (!correctAnswer) return;

    setIsLoadingExplanation(true);
    setExplanationError(false);

    try {
      const response = await generateExplanation(
        currentQuestion.question,
        correctAnswer,
        selectedAnswer
      );

      if (response.status === 'success') {
        updateQuizState({
          generatedExplanations: {
            ...quizState.generatedExplanations,
            [currentQuestion.id]: response.text,
          },
        });
      } else {
        setExplanationError(true);
      }
    } catch (error) {
      console.error('Error getting explanation:', error);
      setExplanationError(true);
    } finally {
      setIsLoadingExplanation(false);
    }
  };

  const retryHint = () => {
    updateQuizState({
      generatedHints: {
        ...quizState.generatedHints,
        [currentQuestion.id]: undefined,
      },
    });

    handleGetHint();
  };

  const retryExplanation = () => {
    updateQuizState({
      generatedExplanations: {
        ...quizState.generatedExplanations,
        [currentQuestion.id]: undefined,
      },
    });

    handleGetExplanation();
  };

  const handleTabChange = (value: string) => {
    setActiveTab(value as 'hint' | 'explanation');
  };

  const renderContent = () => {
    if (!initialized) {
      return (
        <div className='space-y-4'>
          <div className='flex items-center gap-2'>
            <p className='text-sm font-medium'>{initProgress.text}</p>
          </div>

          <div className='space-y-2'>
            <div className='flex justify-between text-sm'>
              <span className='font-medium text-primary'>
                {Math.round(initProgress.progress * 100)}%
              </span>
            </div>

            <Progress
              value={initProgress.progress * 100}
              className='h-2 w-full'
            />

            <p className='mt-2 text-xs text-muted-foreground'>
              The model is loading locally in your browser. This may take a
              moment depending on your connection speed.
            </p>
          </div>
        </div>
      );
    }

    return (
      <Tabs
        defaultValue='hint'
        value={activeTab}
        onValueChange={handleTabChange}
        className='w-full'
      >
        <TabsList className='mb-4 grid w-full grid-cols-2'>
          <TabsTrigger
            value='hint'
            className={`flex items-center justify-center gap-2 rounded-l-md px-3 py-2 text-sm font-medium transition-all ${
              activeTab === 'hint'
                ? 'bg-primary text-primary-foreground'
                : 'border border-input bg-background'
            }`}
            onClick={() => setActiveTab('hint')}
          >
            <Lightbulb className='h-4 w-4' />
            Hint
          </TabsTrigger>
          <TabsTrigger
            value='explanation'
            className={`flex items-center justify-center gap-2 rounded-r-md px-3 py-2 text-sm font-medium transition-all ${
              activeTab === 'explanation'
                ? 'bg-primary text-primary-foreground'
                : 'border border-input bg-background'
            }`}
            onClick={() => setActiveTab('explanation')}
          >
            <BookOpen className='h-4 w-4' />
            Explanation
          </TabsTrigger>
        </TabsList>

        <TabsContent value='hint' className='mt-0 space-y-4'>
          {!hasHint ? (
            <div className='flex h-[250px] flex-col items-center justify-center space-y-4 rounded-md border border-dashed p-8 text-center'>
              <Lightbulb className='h-10 w-10 text-muted-foreground' />
              <div>
                <h3 className='text-lg font-medium'>Need a hint?</h3>
                <p className='mt-1 text-sm text-muted-foreground'>
                  Get a helpful nudge in the right direction without revealing
                  the answer
                </p>
              </div>
              <Button
                onClick={handleGetHint}
                disabled={isLoadingHint}
                className='mt-2'
              >
                {isLoadingHint ? (
                  <>
                    <Loader2 className='mr-2 h-4 w-4 animate-spin' />
                    Generating hint...
                  </>
                ) : (
                  <>
                    <ArrowRight className='h-4 w-4' />
                    Get a hint
                  </>
                )}
              </Button>
            </div>
          ) : (
            <div className='space-y-4'>
              <div className='max-h-[600px] overflow-y-scroll rounded-md bg-muted p-4'>
                <div className='flex items-center gap-2 text-sm font-medium'>
                  <Lightbulb className='h-4 w-4 text-amber-500' />
                  <span>Hint</span>
                </div>
                <div className='mt-2 whitespace-pre-wrap text-sm'>
                  <Markdown
                    children={
                      quizState.generatedHints[currentQuestion.id] || ''
                    }
                  />
                </div>
              </div>

              <Button
                variant='outline'
                size='sm'
                onClick={retryHint}
                disabled={isLoadingHint}
                className='flex items-center gap-2'
              >
                {isLoadingHint ? (
                  <Loader2 className='h-3 w-3 animate-spin' />
                ) : (
                  <RefreshCw className='h-3 w-3' />
                )}
                Get another hint
              </Button>
            </div>
          )}

          {hintError && (
            <div className='flex items-center gap-2 rounded-md border border-destructive/30 bg-destructive/10 p-3 text-sm'>
              <AlertCircle className='h-4 w-4 text-destructive' />
              <span>Failed to generate hint</span>
              <Button
                variant='ghost'
                size='sm'
                onClick={retryHint}
                className='ml-auto'
              >
                <RefreshCw className='mr-1 h-3 w-3' />
                Retry
              </Button>
            </div>
          )}
        </TabsContent>

        <TabsContent value='explanation' className='mt-0 space-y-4'>
          {!correctAnswer ? (
            <div className='flex h-[250px] flex-col items-center justify-center space-y-4 rounded-md border border-dashed p-8 text-center'>
              <BookOpen className='h-10 w-10 text-muted-foreground' />
              <div>
                <h3 className='text-lg font-medium'>Answer first</h3>
                <p className='mt-1 text-sm text-muted-foreground'>
                  Submit your answer to be able to generate an explanation
                </p>
              </div>
            </div>
          ) : !hasExplanation ? (
            <div className='flex h-[250px] flex-col items-center justify-center space-y-4 rounded-md border border-dashed p-8 text-center'>
              <BookOpen className='h-10 w-10 text-muted-foreground' />
              <div>
                <h3 className='text-lg font-medium'>Understand the answer</h3>
                <p className='mt-1 text-sm text-muted-foreground'>
                  Get a detailed explanation of the economic concepts involved
                </p>
              </div>
              <Button
                onClick={handleGetExplanation}
                disabled={isLoadingExplanation}
                className='mt-2'
              >
                {isLoadingExplanation ? (
                  <>
                    <Loader2 className='mr-2 h-4 w-4 animate-spin' />
                    Generating explanation...
                  </>
                ) : (
                  <>
                    <ArrowRight className='h-4 w-4' />
                    Get an explanation
                  </>
                )}
              </Button>
            </div>
          ) : (
            <div className='space-y-4'>
              <div className='max-h-[600px] overflow-y-scroll rounded-md bg-muted p-4'>
                <div className='flex items-center gap-2 text-sm font-medium'>
                  <BookOpen className='h-4 w-4 text-blue-500' />
                  <span>Explanation</span>
                </div>
                <div className='mt-2 whitespace-pre-wrap text-sm'>
                  <Markdown
                    children={
                      quizState.generatedExplanations[currentQuestion.id] || ''
                    }
                  />
                </div>
              </div>

              <Button
                variant='outline'
                size='sm'
                onClick={retryExplanation}
                disabled={isLoadingExplanation}
                className='flex items-center gap-2'
              >
                {isLoadingExplanation ? (
                  <Loader2 className='h-3 w-3 animate-spin' />
                ) : (
                  <RefreshCw className='h-3 w-3' />
                )}
                Get another explanation
              </Button>
            </div>
          )}

          {explanationError && (
            <div className='flex items-center gap-2 rounded-md border border-destructive/30 bg-destructive/10 p-3 text-sm'>
              <AlertCircle className='h-4 w-4 text-destructive' />
              <span>Failed to generate explanation</span>
              <Button
                variant='ghost'
                size='sm'
                onClick={retryExplanation}
                className='ml-auto'
              >
                <RefreshCw className='mr-1 h-3 w-3' />
                Retry
              </Button>
            </div>
          )}
        </TabsContent>
      </Tabs>
    );
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className='rounded-md sm:max-w-lg'>
        <DialogHeader>
          <DialogTitle className='flex items-center gap-2'>
            <span className='flex h-7 w-7 items-center justify-center rounded-full bg-primary/10'>
              {activeTab === 'hint' ? (
                <Lightbulb className='h-4 w-4 text-primary' />
              ) : (
                <BookOpen className='h-4 w-4 text-primary' />
              )}
            </span>
            {activeTab === 'hint' ? 'Hint' : 'Explanation'}
          </DialogTitle>
          <DialogDescription>
            {activeTab === 'hint'
              ? 'Get assistance without revealing the answer'
              : 'Understand the economic concepts behind this question'}
          </DialogDescription>
        </DialogHeader>
        {renderContent()}
      </DialogContent>
    </Dialog>
  );
};
