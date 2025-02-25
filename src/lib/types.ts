export type Category = 'midterm' | 'final';

export type FigureId =
  | 'figure-5-1'
  | 'figure-5-5'
  | 'figure-7-1'
  | 'figure-10-5'
  | 'figure-10-6'
  | 'figure-16-1'
  | 'figure-32-1'
  | 'figure-32-5'
  | 'figure-17-1'
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
  randomizedQuestions: RandomizedQuestion[];
  selectedAnswer: number | null;
  selectedCategory: Category | 'all';
  showFeedback: boolean;
  userAnswers: Record<number, number>;
  examMode?: boolean;
  examDuration?: number;
  examComplete?: boolean;
};
