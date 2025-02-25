import { useQuiz } from '@/providers/quiz-provider';

export const CategoryTabs = ({ className }: { className: string }) => {
  const { activeCategory, categories, handleCategoryChange, categoryProgress } =
    useQuiz();

  return (
    <div className={className}>
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
  );
};
