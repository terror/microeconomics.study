export type Category = 'midterm' | 'final';

export type Question = {
  id: number;
  question: string;
  options: string[];
  answer: number;
  category: Category;
  figure?: string;
};

export type RandomizedQuestion = {
  id: number;
  question: string;
  options: string[];
  originalIndices: number[];
  correctIndex: number;
  figure?: string;
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
