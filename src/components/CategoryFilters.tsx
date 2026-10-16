import React from 'react';
import type { Category } from '../types/product';
import { Layers, Smartphone, Shirt, Watch, Home, Footprints } from 'lucide-react';

interface CategoryFiltersProps {
  categories: Category[];
  selectedCategory: Category | 'All';
  onSelectCategory: (category: Category | 'All') => void;
  categoryCounts: Record<Category | 'All', number>;
}

// Icon mapping for accessible and visual enhancement
const CATEGORY_ICONS: Record<Category | 'All', React.ReactNode> = {
  All: <Layers size={15} aria-hidden="true" />,
  Electronics: <Smartphone size={15} aria-hidden="true" />,
  Clothing: <Shirt size={15} aria-hidden="true" />,
  Accessories: <Watch size={15} aria-hidden="true" />,
  Home: <Home size={15} aria-hidden="true" />,
  Footwear: <Footprints size={15} aria-hidden="true" />
};

export const CategoryFilters: React.FC<CategoryFiltersProps> = ({
  categories,
  selectedCategory,
  onSelectCategory,
  categoryCounts
}) => {
  const allCategories: (Category | 'All')[] = ['All', ...categories];

  return (
    <nav className="category-nav-wrapper" aria-label="Product categories">
      <div className="container">
        <div className="category-scroll-container" role="group" aria-label="Category filter tabs">
          {allCategories.map((category) => {
            const isSelected = selectedCategory === category;
            const count = categoryCounts[category] || 0;
            const label = category === 'All' ? 'All Products' : category;

            return (
              <button
                key={category}
                type="button"
                className={`category-chip ${isSelected ? 'is-active' : ''}`}
                onClick={() => onSelectCategory(category)}
                aria-pressed={isSelected}
                aria-label={`Filter by ${label}, ${count} products available`}
              >
                <span className="chip-icon">{CATEGORY_ICONS[category]}</span>
                <span className="chip-label">{label}</span>
                <span className="chip-count" aria-hidden="true">
                  {count}
                </span>
              </button>
            );
          })}
        </div>
      </div>
    </nav>
  );
};
