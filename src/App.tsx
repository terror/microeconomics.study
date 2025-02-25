import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight, RotateCcw } from 'lucide-react';

import { CategoryTabs } from './components/category-tabs';
import { ExamComplete } from './components/exam-complete';
import { ExamSettings } from './components/exam-settings';
import { FigureDisplay } from './components/figure-display';
import { Layout } from './components/layout';
import { useQuiz } from './providers/quiz-provider';

const App = () => {
  const {
    activeCategory,
    answeredQuestionsSet,
    currentQuestion,
    isCorrect,
    quizState,
    handleAnswerClick,
    handleEndExam,
    handleExamCancel,
    handleNextQuestion,
    handlePrevQuestion,
    handleReset,
    handleStartExam,
  } = useQuiz();

  return (
    <Layout>
      <div className='mx-auto max-w-4xl p-4'>
        <div className='m-4'>
          <CategoryTabs className='mb-6 flex flex-wrap gap-2 border-b border-border' />

          {quizState.examComplete ? (
            <ExamComplete />
          ) : (
            <>
              <ExamSettings
                categoryName={
                  activeCategory.charAt(0).toUpperCase() +
                  activeCategory.slice(1)
                }
                totalQuestions={quizState.randomizedQuestions.length}
                onStart={handleStartExam}
                isActive={Boolean(quizState.examMode)}
                onEnd={handleEndExam}
              />

              <div className='mb-4 flex items-center justify-between'>
                <span className='text-sm text-muted-foreground'>
                  Question {quizState.currentQuestion + 1} of{' '}
                  {quizState.randomizedQuestions.length}
                </span>

                {answeredQuestionsSet.size !== 0 ? (
                  <div className='text-sm text-muted-foreground'>
                    {answeredQuestionsSet.size} answered
                    {answeredQuestionsSet.size > 0 &&
                      !quizState.examMode &&
                      ` (${Math.round((quizState.correctAnswers / answeredQuestionsSet.size) * 100)}% correct)`}
                  </div>
                ) : null}
              </div>

              <div className='mb-6'>
                {/* TODO: Markdown rendering? */}
                <h2 className='mb-4 text-xl font-semibold'>
                  {currentQuestion.question}
                </h2>

                {currentQuestion.figure && (
                  <FigureDisplay figureId={currentQuestion.figure} />
                )}

                <div className='space-y-3'>
                  {currentQuestion.options.map((option, index) => (
                    <button
                      key={index}
                      onClick={() => handleAnswerClick(index)}
                      className={`w-full rounded border p-3 text-left transition-colors ${
                        quizState.selectedAnswer === index
                          ? quizState.showFeedback
                            ? isCorrect
                              ? 'border-green-500 bg-green-500/10 dark:bg-green-500/20'
                              : 'border-red-500 bg-red-500/10 dark:bg-red-500/20'
                            : 'border-blue-500 bg-blue-500/10 dark:bg-blue-500/20'
                          : 'hover:bg-muted/50'
                      } ${
                        quizState.showFeedback &&
                        index === currentQuestion.correctIndex
                          ? 'border-green-500 bg-green-500/10 dark:bg-green-500/20'
                          : ''
                      } ${
                        quizState.examMode &&
                        quizState.userAnswers[quizState.currentQuestion] ===
                          index
                          ? 'border-blue-500 bg-blue-500/10 dark:bg-blue-500/20'
                          : ''
                      }`}
                      disabled={quizState.showFeedback}
                    >
                      {String.fromCharCode(65 + index)}. {option}
                    </button>
                  ))}
                </div>
              </div>

              <div className='flex items-center justify-between'>
                <Button
                  variant='outline'
                  onClick={handlePrevQuestion}
                  disabled={quizState.currentQuestion === 0}
                  className='flex items-center'
                >
                  <ChevronLeft className='h-4 w-4' />
                  Previous
                </Button>

                <Button
                  variant='outline'
                  onClick={quizState.examMode ? handleExamCancel : handleReset}
                  className='flex items-center'
                >
                  <RotateCcw className='h-4 w-4' />
                  {quizState.examMode ? 'Cancel Exam' : 'Reset'}
                </Button>

                <Button
                  variant={
                    quizState.examMode &&
                    quizState.currentQuestion ===
                      quizState.randomizedQuestions.length - 1
                      ? 'default'
                      : 'outline'
                  }
                  onClick={handleNextQuestion}
                  disabled={
                    quizState.currentQuestion ===
                      quizState.randomizedQuestions.length - 1 &&
                    !quizState.examMode
                  }
                  className='flex items-center'
                >
                  {quizState.examMode &&
                  quizState.currentQuestion ===
                    quizState.randomizedQuestions.length - 1
                    ? 'Finish Exam'
                    : 'Next'}
                  <ChevronRight className='h-4 w-4' />
                </Button>
              </div>
            </>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default App;
