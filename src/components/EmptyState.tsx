import React from 'react';
import { SearchX, RotateCcw } from 'lucide-react';

interface EmptyStateProps {
  searchQuery: string;
  selectedCategory: string;
  onClearAll: () => void;
}

export const EmptyState: React.FC<EmptyStateProps> = ({
  searchQuery,
  selectedCategory,
  onClearAll
}) => {
  return (
    <section className="empty-state-section" aria-live="polite">
      <div className="container">
        <div className="empty-state-card">
          <div className="empty-icon-bubble" aria-hidden="true">
            <SearchX size={36} className="empty-icon" />
          </div>

          <h2 className="empty-heading font-serif">Nothing matches your search</h2>

          <p className="empty-description">
            {searchQuery && selectedCategory !== 'All' ? (
              <>
                No items found for <strong className="empty-highlight">"{searchQuery}"</strong> in the{' '}
                <strong className="empty-highlight">{selectedCategory}</strong> category.
              </>
            ) : searchQuery ? (
              <>
                We couldn't find any products matching <strong className="empty-highlight">"{searchQuery}"</strong>.
              </>
            ) : (
              <>
                There are currently no items available in the <strong className="empty-highlight">{selectedCategory}</strong> category.
              </>
            )}
            {' '}Try refining your keywords, exploring other categories, or resetting all filters.
          </p>

          <div className="empty-actions">
            <button
              type="button"
              className="empty-reset-btn"
              onClick={onClearAll}
              aria-label="Clear all filters and search query"
            >
              <RotateCcw size={16} aria-hidden="true" />
              <span>Clear all filters</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
