export type Category = 'midterm' | 'final';

export type FigureId =
  | 'figure-10-5'
  | 'figure-10-6'
  | 'figure-10-7'
  | 'figure-16-1'
  | 'figure-17-1'
  | 'figure-3-1'
  | 'figure-32-1'
  | 'figure-32-5'
  | 'figure-4-2'
  | 'figure-5-1'
  | 'figure-5-5'
  | 'figure-6-2'
  | 'figure-7-1'
  | 'figure-7-2'
  | 'figure-9-2'
  | 'figure-payoff-2'
  | 'figure-payoff-matrix';

export type Question = {
  id: number;
  question: string;
  options: string[];
  answer: number;
  category: Category;
  figure?: FigureId;
};

export type RandomizedQuestion = {
  id: number;
  question: string;
  options: string[];
  originalIndices: number[];
  correctIndex: number;
  figure?: FigureId;
  category: Category;
};

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
