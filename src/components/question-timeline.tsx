import { cn } from '@/lib/utils';
import { useQuiz } from '@/providers/quiz-provider';

export const QuestionTimeline = () => {
  const { quizState, answeredQuestionsSet, handleQuestionClick } = useQuiz();

  const questionsCount = quizState.randomizedQuestions.length;

  const shouldGroup = questionsCount > 30;
  const groupSize = shouldGroup ? Math.ceil(questionsCount / 30) : 1;

  const questionNumbers = Array.from(
    {
      length: shouldGroup
        ? Math.ceil(questionsCount / groupSize)
        : questionsCount,
    },
    (_, i) => i * groupSize + 1
  );

  return (
    <div className='mb-6'>
      <div className='mb-2 flex items-center justify-between'>
        <span className='text-sm font-medium'>Navigator</span>
        {shouldGroup && (
          <span className='text-xs text-muted-foreground'>
            Showing every {groupSize} questions
          </span>
        )}
      </div>

      <div className='relative w-full overflow-x-scroll'>
        <div className='absolute left-0 right-0 top-1/2 h-0.5 -translate-y-1/2 bg-muted' />

        <div className='relative flex justify-between py-2'>
          {questionNumbers.map((num) => {
            const questionIndex = num - 1;

            const isActive =
              questionIndex === quizState.currentQuestion ||
              (shouldGroup &&
                quizState.currentQuestion >= questionIndex &&
                quizState.currentQuestion < questionIndex + groupSize);

            const isAnswered = shouldGroup
              ? Array.from(
                  { length: groupSize },
                  (_, i) => questionIndex + i
                ).some(
                  (idx) => idx < questionsCount && answeredQuestionsSet.has(idx)
                )
              : answeredQuestionsSet.has(questionIndex);

            const isFullyAnswered = shouldGroup
              ? Array.from({ length: groupSize }, (_, i) => questionIndex + i)
                  .filter((idx) => idx < questionsCount)
                  .every((idx) => answeredQuestionsSet.has(idx))
              : isAnswered;

            return (
              <button
                key={num}
                onClick={() => handleQuestionClick(questionIndex)}
                disabled={quizState.examComplete} // Disable during exam review
                className={cn(
                  'flex flex-col items-center space-y-1 transition-opacity',
                  !isActive && !isAnswered && 'opacity-60 hover:opacity-100'
                )}
              >
                <div
                  className={cn(
                    'relative z-10 h-4 w-4 rounded-full',
                    isActive
                      ? 'bg-primary'
                      : isFullyAnswered
                        ? 'bg-green-500 dark:bg-green-600'
                        : isAnswered
                          ? 'bg-amber-500 dark:bg-amber-600'
                          : 'bg-muted-foreground/40'
                  )}
                />

                {isActive && (
                  <span
                    className={cn(
                      'select-none pt-1 text-xs',
                      isActive
                        ? 'opacity-100'
                        : 'opacity-0 group-hover:opacity-100'
                    )}
                  >
                    {shouldGroup && num + groupSize - 1 <= questionsCount
                      ? `${num}-${num + groupSize - 1}`
                      : num}
                  </span>
                )}
              </button>
            );
          })}
        </div>
      </div>

      <div className='mt-2 flex items-center gap-4 text-xs text-muted-foreground'>
        <div className='flex items-center gap-1'>
          <div className='h-3 w-3 rounded-full bg-primary' />
          <span>Current</span>
        </div>
        <div className='flex items-center gap-1'>
          <div className='h-3 w-3 rounded-full bg-green-500 dark:bg-green-600' />
          <span>Answered</span>
        </div>
        {shouldGroup && (
          <div className='flex items-center gap-1'>
            <div className='h-3 w-3 rounded-full bg-amber-500 dark:bg-amber-600' />
            <span>Partially Answered</span>
          </div>
        )}
        <div className='flex items-center gap-1'>
          <div className='h-3 w-3 rounded-full bg-muted-foreground/40' />
          <span>Not Answered</span>
        </div>
      </div>
    </div>
  );
};
