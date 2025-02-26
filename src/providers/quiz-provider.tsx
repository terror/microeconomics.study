import { usePersistedState } from '@/hooks/use-persisted-state';
import { questions as originalQuestions } from '@/lib/questions';
import { Category, RandomizedQuestion } from '@/lib/types';
import { createCategoryState, getCategories } from '@/lib/utils';
import { createContext, useContext } from 'react';

type CategoryProgress = Record<
  string,
  { answered: number; total: number; correct: number }
>;

export type QuizState = {
  answeredQuestions: number[];
  correctAnswers: number;
  currentQuestion: number;
  examComplete?: boolean;
  examDuration?: number;
  examMode?: boolean;
  examTimeRemaining?: number;
  generatedExplanations: Record<number, string | undefined>;
  generatedHints: Record<number, string | undefined>;
  randomizedQuestions: RandomizedQuestion[];
  selectedAnswer: number | null;
  selectedCategory: Category | 'all';
  showFeedback: boolean;
  userAnswers: Record<number, number>;
};

interface QuizProviderState {
  activeCategory: Category | 'all';
  answeredQuestionsSet: Set<number>;
  categories: (Category | 'all')[];
  categoryProgress: CategoryProgress;
  currentQuestion: RandomizedQuestion;
  examPercentage: number;
  isCorrect: boolean;
  quizState: QuizState;
  totalAnswered: number;
  handleAnswerClick: (answerIndex: number) => void;
  handleCategoryChange: (category: Category | 'all') => void;
  handleEndExam: () => void;
  handleExamCancel: () => void;
  handleNextQuestion: () => void;
  handlePrevQuestion: () => void;
  handleQuestionClick: (questionIndex: number) => void;
  handleReset: () => void;
  handleStartExam: (duration: number) => void;
  updateQuizState: (updates: Partial<QuizState>) => void;
}

const QuizContext = createContext<QuizProviderState | null>(null);

export const useQuiz = () => {
  const context = useContext(QuizContext);

  if (!context) {
    throw new Error('useQuiz must be used within a QuizProvider');
  }

  return context;
};

type PersistedState = {
  activeCategory: Category | 'all';
  categoriesState: Partial<Record<Category | 'all', QuizState>>;
};

const INITIAL_PERSISTED_STATE: PersistedState = {
  activeCategory: 'all',
  categoriesState: { all: createCategoryState('all') },
};

export const QuizProvider = ({ children }: { children: React.ReactNode }) => {
  const [persistedState, setPersistedState] = usePersistedState<PersistedState>(
    'quiz-state',
    INITIAL_PERSISTED_STATE
  );

  const quizState =
    persistedState.categoriesState[persistedState.activeCategory] ||
    (() => {
      const state = createCategoryState(persistedState.activeCategory);

      setPersistedState({
        ...persistedState,
        categoriesState: {
          ...persistedState.categoriesState,
          [persistedState.activeCategory]: state,
        },
      });

      return state;
    })();

  const answeredQuestionsSet = new Set(quizState.answeredQuestions);

  const questionsCount = getCategories().reduce(
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

  const categoryProgress = getCategories().reduce(
    (acc, category) => {
      const state = persistedState.categoriesState[category];

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

  const updateQuizState = (updates: Partial<QuizState>) => {
    setPersistedState({
      ...persistedState,
      categoriesState: {
        ...persistedState.categoriesState,
        [persistedState.activeCategory]: {
          ...quizState,
          ...updates,
        },
      },
    });
  };

  const handleStartExam = (duration: number) => {
    const freshExamState = createCategoryState(persistedState.activeCategory);

    setPersistedState({
      ...persistedState,
      categoriesState: {
        ...persistedState.categoriesState,
        [persistedState.activeCategory]: {
          ...freshExamState,
          examMode: true,
          examDuration: duration,
        },
      },
    });
  };

  const handleEndExam = () => {
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
    setPersistedState({
      ...persistedState,
      categoriesState: {
        ...persistedState.categoriesState,
        [persistedState.activeCategory]: createCategoryState(
          persistedState.activeCategory
        ),
      },
    });
  };

  const handleExamCancel = () => {
    const newCurrentQuestion = 0;

    updateQuizState({
      currentQuestion: newCurrentQuestion,
      examComplete: false,
      examMode: false,
      showFeedback: answeredQuestionsSet.has(newCurrentQuestion),
    });
  };

  const handleCategoryChange = (category: Category | 'all') => {
    // If we don't have a state for this category yet, create one
    if (!persistedState.categoriesState[category]) {
      setPersistedState({
        ...persistedState,
        categoriesState: {
          ...persistedState.categoriesState,
          [category]: createCategoryState(category),
        },
      });
    }

    setPersistedState({
      ...persistedState,
      activeCategory: category,
    });
  };

  const handleQuestionClick = (questionIndex: number) => {
    if (
      questionIndex >= 0 &&
      questionIndex < quizState.randomizedQuestions.length
    ) {
      const wasAnswered = answeredQuestionsSet.has(questionIndex);

      updateQuizState({
        currentQuestion: questionIndex,
        selectedAnswer: wasAnswered
          ? quizState.userAnswers[questionIndex]
          : null,
        showFeedback: wasAnswered && !quizState.examMode,
      });
    }
  };

  const totalAnswered = Object.keys(quizState.userAnswers).length;

  const examPercentage = Math.round(
    (quizState.correctAnswers / quizState.randomizedQuestions.length) * 100
  );

  const currentQuestion =
    quizState.randomizedQuestions[quizState.currentQuestion];

  const value = {
    activeCategory: persistedState.activeCategory,
    answeredQuestionsSet,
    categories: getCategories(),
    categoryProgress,
    currentQuestion,
    examPercentage,
    isCorrect: quizState.selectedAnswer === currentQuestion?.correctIndex,
    quizState,
    totalAnswered,
    handleAnswerClick,
    handleCategoryChange,
    handleEndExam,
    handleExamCancel,
    handleNextQuestion,
    handlePrevQuestion,
    handleQuestionClick,
    handleReset,
    handleStartExam,
    updateQuizState,
  };

  return <QuizContext.Provider value={value}>{children}</QuizContext.Provider>;
};
