import { Button } from '@/components/ui/button';
import { Figure5_1 } from '@/figures/figure-5-1';
import { Figure5_5 } from '@/figures/figure-5-5';
import { Figure7_1 } from '@/figures/figure-7-1';
import { ChevronLeft, ChevronRight, RotateCcw, Trophy } from 'lucide-react';
import { useEffect, useState } from 'react';

import { ExamMode } from './components/exam-mode';
import { ModeToggle } from './components/mode-toggle';
import { Figure10_5 } from './figures/figure-10-5';
import { Figure10_6 } from './figures/figure-10-6';
import { Figure16_1 } from './figures/figure-16-1';
import { Figure17_1 } from './figures/figure-17-1';
import { Figure32_1 } from './figures/figure-32-1';
import { Figure32_5 } from './figures/figure-32-5';
import { FigurePayoffMatrix } from './figures/figure-payoff-matrix';
import { usePersistedState } from './hooks/use-persisted-state';
import { questions as originalQuestions } from './lib/questions';
import type { Category, QuizState, RandomizedQuestion } from './lib/types';

const getFigure = (id: string | undefined): JSX.Element | null => {
  switch (id) {
    case 'figure-5-1':
      return <Figure5_1 />;
    case 'figure-5-5':
      return <Figure5_5 />;
    case 'figure-7-1':
      return <Figure7_1 />;
    case 'figure-10-5':
      return <Figure10_5 />;
    case 'figure-10-6':
      return <Figure10_6 />;
    case 'figure-16-1':
      return <Figure16_1 />;
    case 'figure-32-1':
      return <Figure32_1 />;
    case 'figure-32-5':
      return <Figure32_5 />;
    case 'figure-17-1':
      return <Figure17_1 />;
    case 'figure-payoff-matrix':
      return <FigurePayoffMatrix />;
    default:
      return null;
  }
};

const shuffleArray = <T,>(array: T[]): T[] => {
  const shuffled = [...array];

  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }

  return shuffled;
};

const randomizeQuestions = (
  category: Category | 'all' = 'all'
): RandomizedQuestion[] => {
  const filteredQuestions =
    category === 'all'
      ? originalQuestions
      : originalQuestions.filter((q) => q.category === category);

  const shuffledQuestions = shuffleArray([...filteredQuestions]);

  return shuffledQuestions.map((q) => {
    const indices = q.options.map((_, idx) => idx);
    const shuffledIndices = shuffleArray(indices);

    return {
      id: q.id,
      question: q.question,
      options: shuffledIndices.map((i) => q.options[i]),
      originalIndices: shuffledIndices,
      correctIndex: shuffledIndices.indexOf(q.answer),
      figure: q.figure,
      category: q.category,
    };
  });
};

const createCategoryState = (category: Category | 'all'): QuizState => ({
  answeredQuestions: [],
  correctAnswers: 0,
  currentQuestion: 0,
  userAnswers: {},
  selectedAnswer: null,
  showFeedback: false,
  randomizedQuestions: randomizeQuestions(category),
  selectedCategory: category,
  examMode: false,
  examComplete: false,
});

// Initialize with a single "all" state to start
const INITIAL_CATEGORIES_STATE: Record<string, QuizState> = {
  all: createCategoryState('all'),
};

const categories: (Category | 'all')[] = [
  'all',
  ...new Set(originalQuestions.map((q) => q.category)),
];

const App = () => {
  // State to track quiz states for all categories
  const [categoriesState, setCategoriesState] = usePersistedState<
    Record<string, QuizState>
  >('categories-quiz-state', INITIAL_CATEGORIES_STATE);

  // State to track which category is currently selected
  const [activeCategory, setActiveCategory] = useState<Category | 'all'>(() => {
    const savedCategory = localStorage.getItem('active-category');

    if (savedCategory) {
      try {
        const parsedCategory = JSON.parse(savedCategory) as Category | 'all';
        if (categories.includes(parsedCategory)) return parsedCategory;
      } catch (error) {
        return 'all';
      }
    }

    return 'all';
  });

  // Save active category to localStorage when it changes
  useEffect(() => {
    localStorage.setItem('active-category', JSON.stringify(activeCategory));
  }, [activeCategory]);

  // Get the quiz state for the active category
  const quizState =
    categoriesState[activeCategory] || createCategoryState(activeCategory);

  const answeredQuestionsSet = new Set(quizState.answeredQuestions);

  // Helper function to update the state for the active category
  const updateQuizState = (updates: Partial<QuizState>) => {
    setCategoriesState({
      ...categoriesState,
      [activeCategory]: {
        ...quizState,
        ...updates,
      },
    });
  };

  const handleStartExam = (duration: number) => {
    // Reset the current category's state for a fresh exam
    const freshExamState = createCategoryState(activeCategory);

    setCategoriesState({
      ...categoriesState,
      [activeCategory]: {
        ...freshExamState,
        examMode: true,
        examDuration: duration,
      },
    });
  };

  const handleEndExam = () => {
    // Calculate the score if not all questions are answered
    const totalAnswered = Object.keys(quizState.userAnswers).length;
    const totalQuestions = quizState.randomizedQuestions.length;

    if (totalAnswered < totalQuestions) {
      const correctAnswers = Object.entries(quizState.userAnswers).reduce(
        (count, [qIndex, answerIndex]) => {
          const correctIndex =
            quizState.randomizedQuestions[parseInt(qIndex)].correctIndex;
          return answerIndex === correctIndex ? count + 1 : count;
        },
        0
      );

      updateQuizState({
        examMode: false,
        examComplete: true,
        correctAnswers,
      });
    } else {
      updateQuizState({
        examMode: false,
        examComplete: true,
      });
    }
  };

  const handleAnswerClick = (answerIndex: number) => {
    if (!answeredQuestionsSet.has(quizState.currentQuestion)) {
      const isCorrect =
        answerIndex ===
        quizState.randomizedQuestions[quizState.currentQuestion].correctIndex;

      updateQuizState({
        selectedAnswer: answerIndex,
        showFeedback: !quizState.examMode, // Only show feedback immediately if not in exam mode
        answeredQuestions: [
          ...quizState.answeredQuestions,
          quizState.currentQuestion,
        ],
        correctAnswers: isCorrect
          ? quizState.correctAnswers + 1
          : quizState.correctAnswers,
        userAnswers: {
          ...quizState.userAnswers,
          [quizState.currentQuestion]: answerIndex,
        },
      });
    } else {
      updateQuizState({
        selectedAnswer: answerIndex,
        showFeedback: !quizState.examMode, // Only show feedback immediately if not in exam mode
        userAnswers: {
          ...quizState.userAnswers,
          [quizState.currentQuestion]: answerIndex,
        },
      });
    }
  };

  const handlePrevQuestion = () => {
    if (quizState.currentQuestion > 0) {
      const prevQuestionIndex = quizState.currentQuestion - 1;
      const wasAnswered = answeredQuestionsSet.has(prevQuestionIndex);

      updateQuizState({
        currentQuestion: prevQuestionIndex,
        selectedAnswer: wasAnswered
          ? quizState.userAnswers[prevQuestionIndex]
          : null,
        showFeedback: wasAnswered && !quizState.examMode, // Only show feedback if not in exam mode
      });
    }
  };

  const handleNextQuestion = () => {
    if (quizState.currentQuestion < quizState.randomizedQuestions.length - 1) {
      const nextQuestionIndex = quizState.currentQuestion + 1;
      const wasAnswered = answeredQuestionsSet.has(nextQuestionIndex);

      updateQuizState({
        currentQuestion: nextQuestionIndex,
        selectedAnswer: wasAnswered
          ? quizState.userAnswers[nextQuestionIndex]
          : null,
        showFeedback: wasAnswered && !quizState.examMode, // Only show feedback if not in exam mode
      });
    } else if (
      quizState.examMode &&
      Object.keys(quizState.userAnswers).length ===
        quizState.randomizedQuestions.length
    ) {
      // If this is the last question in exam mode and all questions are answered
      handleEndExam();
    }
  };

  const handleReset = () => {
    // Reset just the current category's state
    setCategoriesState({
      ...categoriesState,
      [activeCategory]: createCategoryState(activeCategory),
    });
  };

  const handleCategoryChange = (category: Category | 'all') => {
    // If we don't have a state for this category yet, create one
    if (!categoriesState[category]) {
      setCategoriesState({
        ...categoriesState,
        [category]: createCategoryState(category),
      });
    }

    // Update the active category
    setActiveCategory(category);
  };

  if (!quizState.randomizedQuestions?.length) {
    // Initialize the current category if it has no questions
    setCategoriesState({
      ...categoriesState,
      [activeCategory]: createCategoryState(activeCategory),
    });
    return null;
  }

  const currentQ = quizState.randomizedQuestions[quizState.currentQuestion];
  const isCorrect = quizState.selectedAnswer === currentQ.correctIndex;

  const questionsCount = categories.reduce(
    (acc, category) => {
      if (category === 'all') {
        acc[category] = originalQuestions.length;
      } else {
        acc[category] = originalQuestions.filter(
          (q) => q.category === category
        ).length;
      }
      return acc;
    },
    {} as Record<string, number>
  );

  const categoryProgress = categories.reduce(
    (acc, category) => {
      const state = categoriesState[category];

      if (state) {
        acc[category] = {
          answered: state.answeredQuestions.length,
          total: state.randomizedQuestions.length,
          correct: state.correctAnswers,
        };
      } else {
        acc[category] = {
          answered: 0,
          total: questionsCount[category],
          correct: 0,
        };
      }
      return acc;
    },
    {} as Record<string, { answered: number; total: number; correct: number }>
  );

  const renderedFigure: JSX.Element | null = getFigure(currentQ?.figure);

  const totalAnswered = Object.keys(quizState.userAnswers).length;
  const examScore = quizState.correctAnswers;

  const examPercentage =
    totalAnswered > 0 ? Math.round((examScore / quizState.randomizedQuestions.length) * 100) : 0;

  if (quizState.examComplete) {
    return (
      <>
        <div className='m-4 flex items-center font-bold'>
          <a href='/microeconomics.study'>microeconomics.study</a>
          <div className='ml-auto'>
            <ModeToggle />
          </div>
        </div>
        <div className='mx-auto max-w-4xl p-4'>
          <div className='m-4'>
            <div className='mb-6 flex flex-wrap gap-2 border-b border-border'>
              {categories.map((category) => (
                <button
                  key={category}
                  className={`px-4 py-2 text-sm font-medium transition-colors ${
                    activeCategory === category
                      ? 'border-b-2 border-primary text-primary'
                      : 'text-muted-foreground hover:text-foreground'
                  }`}
                  onClick={() => handleCategoryChange(category)}
                >
                  {category.charAt(0).toUpperCase() + category.slice(1)}
                </button>
              ))}
            </div>

            <div className='flex flex-col items-center justify-center space-y-6 py-8 text-center'>
              <div className='flex h-24 w-24 items-center justify-center rounded-full bg-muted'>
                <Trophy className='h-12 w-12 text-primary' />
              </div>
              <h2 className='text-2xl font-bold'>Exam Complete!</h2>

              <div className='text-4xl font-bold'>
                {examScore} / {quizState.randomizedQuestions.length}
                <span className='ml-2 text-lg text-muted-foreground'>
                  ({examPercentage}%)
                </span>
              </div>

              <div className='text-muted-foreground'>
                You answered {totalAnswered} out of{' '}
                {quizState.randomizedQuestions.length} questions
              </div>

              <div className='mt-6 flex items-center gap-4'>
                <Button
                  className='p-4'
                  variant='outline'
                  onClick={() =>
                    updateQuizState({ currentQuestion: 0, examComplete: false, showFeedback: true })
                  }
                >
                  Review Answers
                </Button>
                <Button onClick={handleReset}>Start New Exam</Button>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <div className='m-4 flex items-center font-bold'>
        <a href='/microeconomics.study'>microeconomics.study</a>
        <div className='ml-auto'>
          <ModeToggle />
        </div>
      </div>
      <div className='mx-auto max-w-4xl p-4'>
        <div className='m-4'>
          <div className='mb-6 flex flex-wrap gap-2 border-b border-border'>
            {categories.map((category) => {
              const progress = categoryProgress[category];

              return (
                <button
                  key={category}
                  className={`px-4 py-2 text-sm font-medium transition-colors ${
                    activeCategory === category
                      ? 'border-b-2 border-primary text-primary'
                      : 'text-muted-foreground hover:text-foreground'
                  }`}
                  onClick={() => handleCategoryChange(category)}
                >
                  {category.charAt(0).toUpperCase() + category.slice(1)}
                  <span className='ml-2 text-xs text-muted-foreground'>
                    ({progress.total})
                  </span>
                </button>
              );
            })}
          </div>
          <ExamMode
            categoryName={
              activeCategory.charAt(0).toUpperCase() + activeCategory.slice(1)
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
            <h2 className='mb-4 text-xl font-semibold'>{currentQ.question}</h2>
            {renderedFigure && (
              <div className='mb-6 rounded-lg border bg-muted/50 p-4'>
                {renderedFigure}
              </div>
            )}
            <div className='space-y-3'>
              {currentQ.options.map((option, index) => (
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
                    quizState.showFeedback && index === currentQ.correctIndex
                      ? 'border-green-500 bg-green-500/10 dark:bg-green-500/20'
                      : ''
                  } ${
                    quizState.examMode &&
                    quizState.userAnswers[quizState.currentQuestion] === index
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
              <ChevronLeft className='mr-2 h-4 w-4' />
              Previous
            </Button>
            <Button
              variant='outline'
              onClick={handleReset}
              className='flex items-center'
            >
              <RotateCcw className='mr-2 h-4 w-4' />
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
              <ChevronRight className='ml-2 h-4 w-4' />
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
