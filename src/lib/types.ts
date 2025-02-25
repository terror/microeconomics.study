export type Category = 'midterm' | 'final';

export type Question = {
  id: number;
  question: string;
  options: string[];
  answer: number;
  category: Category;
  figure?: string;
};
