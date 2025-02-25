import { Button } from '@/components/ui/button';
import { Figure5_1 } from '@/figures/figure-5-1';
import { Figure5_5 } from '@/figures/figure-5-5';
import { Figure7_1 } from '@/figures/figure-7-1';
import { ChevronLeft, ChevronRight, RotateCcw } from 'lucide-react';

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

const INITIAL_STATE: QuizState = {
  answeredQuestions: [],
  correctAnswers: 0,
  currentQuestion: 0,
  selectedAnswer: null,
  showFeedback: false,
  randomizedQuestions: randomizeQuestions(),
  selectedCategory: 'all',
};

const categories: (Category | 'all')[] = [
  'all',
  ...new Set(originalQuestions.map((q) => q.category)),
];

const App = () => {
  const [quizState, setQuizState] = usePersistedState<QuizState>(
    'quiz-state',
    INITIAL_STATE
  );

  const answeredQuestionsSet = new Set(quizState.answeredQuestions);

  const handleAnswerClick = (answerIndex: number) => {
    if (!answeredQuestionsSet.has(quizState.currentQuestion)) {
      setQuizState({
        selectedAnswer: answerIndex,
        showFeedback: true,
        answeredQuestions: [
          ...quizState.answeredQuestions,
          quizState.currentQuestion,
        ],
        correctAnswers:
          answerIndex ===
          quizState.randomizedQuestions[quizState.currentQuestion].correctIndex
            ? quizState.correctAnswers + 1
            : quizState.correctAnswers,
      });
    } else {
      setQuizState({
        selectedAnswer: answerIndex,
        showFeedback: true,
      });
    }
  };

  const handleNextQuestion = () => {
    if (quizState.currentQuestion < quizState.randomizedQuestions.length - 1) {
      setQuizState({
        currentQuestion: quizState.currentQuestion + 1,
        selectedAnswer: null,
        showFeedback: false,
      });
    }
  };

  const handlePrevQuestion = () => {
    if (quizState.currentQuestion > 0) {
      setQuizState({
        currentQuestion: quizState.currentQuestion - 1,
        selectedAnswer: null,
        showFeedback: false,
      });
    }
  };

  const handleReset = () => {
    const newState = {
      ...INITIAL_STATE,
      selectedCategory: quizState.selectedCategory,
      randomizedQuestions: randomizeQuestions(quizState.selectedCategory),
    };

    setQuizState(newState);
  };

  const handleCategoryChange = (category: Category | 'all') => {
    const newState = {
      ...INITIAL_STATE,
      selectedCategory: category,
      randomizedQuestions: randomizeQuestions(category),
    };

    setQuizState(newState);
  };

  if (!quizState.randomizedQuestions?.length) {
    setQuizState(INITIAL_STATE);
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

  const renderedFigure: JSX.Element | null = getFigure(currentQ?.figure);

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
                  quizState.selectedCategory === category
                    ? 'border-b-2 border-primary text-primary'
                    : 'text-muted-foreground hover:text-foreground'
                }`}
                onClick={() => handleCategoryChange(category)}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
                <span className='ml-2 text-xs text-muted-foreground'>
                  ({questionsCount[category]})
                </span>
              </button>
            ))}
          </div>
          <div className='mb-4 flex items-center justify-between'>
            <span className='text-sm text-muted-foreground'>
              Question {quizState.currentQuestion + 1} of{' '}
              {quizState.randomizedQuestions.length}
            </span>
            {answeredQuestionsSet.size !== 0 ? (
              <div className='text-sm text-muted-foreground'>
                {answeredQuestionsSet.size} answered
                {answeredQuestionsSet.size > 0 &&
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
                  } `}
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
              Reset
            </Button>
            <Button
              variant='outline'
              onClick={handleNextQuestion}
              disabled={
                quizState.currentQuestion ===
                quizState.randomizedQuestions.length - 1
              }
              className='flex items-center'
            >
              Next
              <ChevronRight className='ml-2 h-4 w-4' />
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
