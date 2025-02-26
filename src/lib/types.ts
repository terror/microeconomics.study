import { FigureId } from '@/components/figure-display';

export type Category = 'midterm' | 'final';

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
