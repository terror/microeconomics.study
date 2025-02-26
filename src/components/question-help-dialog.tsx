import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Progress } from '@/components/ui/progress';
import { useLLM } from '@/providers/llm-provider';
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
import React, { useState } from 'react';
import Markdown from 'react-markdown';

interface QuestionHelpDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  questionText: string;
  correctAnswer: string | null;
  selectedAnswer: string | null;
}

export const QuestionHelpDialog: React.FC<QuestionHelpDialogProps> = ({
  open,
  onOpenChange,
  questionText,
  correctAnswer,
  selectedAnswer,
}) => {
  const { updateQuizState, quizState } = useQuiz();

  const { generateHint, generateExplanation, initialized, initProgress } =
    useLLM();

  const [activeTab, setActiveTab] = useState<'hint' | 'explanation'>('hint');

  const [explanationError, setExplanationError] = useState(false);
  const [hintError, setHintError] = useState(false);

  const [isLoadingExplanation, setIsLoadingExplanation] = useState(false);
  const [isLoadingHint, setIsLoadingHint] = useState(false);

  const handleGetHint = async () => {
    if (!initialized) return;

    setIsLoadingHint(true);
    setHintError(false);

    try {
      const response = await generateHint(questionText);

      if (response.status === 'success') {
        updateQuizState({ generatedHint: response.text });
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

  const handleGetExplanation = async () => {
    if (!initialized || !correctAnswer) return;

    setIsLoadingExplanation(true);
    setExplanationError(false);

    try {
      const response = await generateExplanation(
        questionText,
        correctAnswer,
        selectedAnswer
      );

      if (response.status === 'success') {
        updateQuizState({ generatedExplanation: response.text });
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
    updateQuizState({ generatedHint: undefined });
    handleGetHint();
  };

  const retryExplanation = () => {
    updateQuizState({ generatedExplanation: undefined });
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

          <div>
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
          {!quizState.generatedHint ? (
            <div className='flex flex-col items-center justify-center space-y-4 rounded-md border border-dashed p-8 text-center'>
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
                  <Markdown>{quizState.generatedHint}</Markdown>
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
            <div className='flex flex-col items-center justify-center space-y-4 rounded-md border border-dashed p-8 text-center'>
              <BookOpen className='h-10 w-10 text-muted-foreground' />
              <div>
                <h3 className='text-lg font-medium'>Answer first</h3>
                <p className='mt-1 text-sm text-muted-foreground'>
                  Submit your answer to be able to generate an explanation
                </p>
              </div>
            </div>
          ) : !quizState.generatedExplanation ? (
            <div className='flex flex-col items-center justify-center space-y-4 rounded-md border border-dashed p-8 text-center'>
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
                  <Markdown>{quizState.generatedExplanation}</Markdown>
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
      <DialogContent className='sm:max-w-lg'>
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
