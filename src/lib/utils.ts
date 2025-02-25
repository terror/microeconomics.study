import { questions as originalQuestions } from '@/lib/questions';
import { Category, QuizState, RandomizedQuestion } from '@/lib/types';
import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const createCategoryState = (category: Category | 'all'): QuizState => ({
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

export const getCategories: () => (Category | 'all')[] = () => [
  'all',
  ...new Set(originalQuestions.map((q) => q.category)),
];

const shuffleArray = <T>(array: T[]): T[] => {
  const shuffled = [...array];

  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }

  return shuffled;
};

/**
 * Randomizes a set of questions for a quiz or exam.
 *
 * This function performs two levels of randomization:
 * 1. It shuffles the order of questions within the specified category (or all categories)
 * 2. For each question, it randomizes the order of answer options
 *
 * The function maintains the correctness of answers by tracking the new position
 * of the correct answer after shuffling the options.
 *
 * @param category - The category of questions to randomize. Use 'all' to include questions from all categories.
 * @returns An array of randomized questions with shuffled answer options and updated correct answer indices.
 *
 * @example
 * // Get randomized questions from the 'microeconomics' category
 * const randomizedMicroQuestions = randomizeQuestions('microeconomics');
 *
 * // Get randomized questions from all categories
 * const randomizedAllQuestions = randomizeQuestions('all');
 */
export const randomizeQuestions = (
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
