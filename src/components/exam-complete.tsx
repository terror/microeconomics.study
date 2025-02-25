import { Button } from '@/components/ui/button';
import { useQuiz } from '@/providers/quiz-provider';
import { Trophy } from 'lucide-react';

export const ExamComplete = () => {
  const {
    examPercentage,
    quizState,
    totalAnswered,
    handleExamCancel,
    handleReset,
  } = useQuiz();

  return (
    <div className='flex flex-col items-center justify-center space-y-6 py-8 text-center'>
      <div className='flex h-24 w-24 items-center justify-center rounded-full bg-muted'>
        <Trophy className='h-12 w-12 text-primary' />
      </div>
      <h2 className='text-2xl font-bold'>Exam Complete!</h2>

      <div className='text-4xl font-bold'>
        {quizState.correctAnswers} / {quizState.randomizedQuestions.length}
        <span className='ml-2 text-lg text-muted-foreground'>
          ({examPercentage}%)
        </span>
      </div>

      <div className='text-muted-foreground'>
        You answered {totalAnswered} out of{' '}
        {quizState.randomizedQuestions.length} questions
      </div>

      <div className='mt-6 flex items-center gap-4'>
        <Button className='p-4' variant='outline' onClick={handleExamCancel}>
          Review Answers
        </Button>
        <Button onClick={handleReset}>Start New Exam</Button>
      </div>
    </div>
  );
};
