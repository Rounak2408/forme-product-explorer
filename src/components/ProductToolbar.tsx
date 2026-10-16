import React from 'react';
import type { SortOption, Category } from '../types/product';
import { ArrowUpDown, RotateCcw, X, SlidersHorizontal } from 'lucide-react';

interface ProductToolbarProps {
  totalCount: number;
  filteredCount: number;
  selectedCategory: Category | 'All';
  searchQuery: string;
  sortBy: SortOption;
  onSortChange: (sort: SortOption) => void;
  onClearSearch: () => void;
  onResetCategory: () => void;
  onClearAll: () => void;
}

export const ProductToolbar: React.FC<ProductToolbarProps> = ({
  totalCount,
  filteredCount,
  selectedCategory,
  searchQuery,
  sortBy,
  onSortChange,
  onClearSearch,
  onResetCategory,
  onClearAll
}) => {
  const hasActiveFilters =
    searchQuery.trim() !== '' ||
    selectedCategory !== 'All' ||
    sortBy !== 'featured';

  return (
    <div className="product-toolbar-wrapper" aria-label="Product display controls">
      <div className="container toolbar-inner">
        {/* Left side: Results Count & Active Filter Tags */}
        <div className="toolbar-left">
          <div className="results-count" aria-live="polite">
            <SlidersHorizontal size={16} className="count-icon" aria-hidden="true" />
            <span className="count-bold">{filteredCount}</span>
            <span className="count-label">
              {filteredCount === 1 ? 'product found' : 'products found'}
            </span>
            {filteredCount !== totalCount && (
              <span className="count-context">of {totalCount} total</span>
            )}
          </div>

          {/* Active Filter Tags */}
          {(searchQuery.trim() !== '' || selectedCategory !== 'All') && (
            <div className="active-tags-list" aria-label="Active filters">
              {searchQuery.trim() !== '' && (
                <span className="filter-badge">
                  <span className="badge-key">Search:</span>
                  <span className="badge-value">"{searchQuery.trim()}"</span>
                  <button
                    type="button"
                    onClick={onClearSearch}
                    aria-label={`Remove search filter for ${searchQuery}`}
                    className="badge-remove-btn"
                  >
                    <X size={12} aria-hidden="true" />
                  </button>
                </span>
              )}

              {selectedCategory !== 'All' && (
                <span className="filter-badge">
                  <span className="badge-key">Category:</span>
                  <span className="badge-value">{selectedCategory}</span>
                  <button
                    type="button"
                    onClick={onResetCategory}
                    aria-label={`Remove ${selectedCategory} category filter`}
                    className="badge-remove-btn"
                  >
                    <X size={12} aria-hidden="true" />
                  </button>
                </span>
              )}
            </div>
          )}
        </div>

        {/* Right side: Sort Controls & Clear All Action */}
        <div className="toolbar-right">
          {/* Clear All action button */}
          {hasActiveFilters && (
            <button
              type="button"
              className="toolbar-clear-btn"
              onClick={onClearAll}
              aria-label="Reset all filters and sorting to defaults"
            >
              <RotateCcw size={14} aria-hidden="true" />
              <span>Reset Filters</span>
            </button>
          )}

          {/* Sort Selector */}
          <div className="sort-selector-container">
            <label htmlFor="sort-dropdown" className="sort-label">
              <ArrowUpDown size={14} aria-hidden="true" />
              <span>Sort by:</span>
            </label>
            <div className="select-wrapper">
              <select
                id="sort-dropdown"
                value={sortBy}
                onChange={(e) => onSortChange(e.target.value as SortOption)}
                className="sort-select"
                aria-label="Sort products by criteria"
              >
                <option value="featured">Featured Collection</option>
                <option value="price-asc">Price: Low to High</option>
                <option value="price-desc">Price: High to Low</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
