import React from 'react';
import { Search, X } from 'lucide-react';

interface HeroProps {
  searchQuery: string;
  onSearchChange: (query: string) => void;
  searchRef: React.RefObject<HTMLInputElement | null>;
  totalCount: number;
}

export const Hero: React.FC<HeroProps> = ({
  searchQuery,
  onSearchChange,
  searchRef,
  totalCount
}) => {
  const handleClear = () => {
    onSearchChange('');
    if (searchRef.current) {
      searchRef.current.focus();
    }
  };

  return (
    <section className="hero-section" aria-labelledby="hero-heading">
      <div className="container hero-inner">
        {/* Subtle collection badge */}
        <div className="hero-eyebrow">
          <span className="eyebrow-text">Autumn / Winter Curated Archive · {totalCount} Objects</span>
        </div>

        {/* Editorial Headline */}
        <h1 id="hero-heading" className="hero-headline font-serif">
          Find Your Next Favorite.
        </h1>

        {/* Supporting Text */}
        <p className="hero-subtext">
          Thoughtfully curated essentials across technology, style, and everyday living.
        </p>

        {/* Prominent Instant Search Field */}
        <div className="hero-search-wrapper">
          <div className="search-input-box">
            <Search className="search-field-icon" size={20} aria-hidden="true" />
            
            <label htmlFor="product-search-input" className="visually-hidden">
              Search curated products by name
            </label>
            
            <input
              id="product-search-input"
              ref={searchRef}
              type="text"
              className="search-input"
              value={searchQuery}
              onChange={(e) => onSearchChange(e.target.value)}
              placeholder="Search by product name (e.g., Merino, Headphones, Leather...)"
              autoComplete="off"
              spellCheck="false"
            />

            {searchQuery && (
              <button
                type="button"
                className="search-clear-btn"
                onClick={handleClear}
                aria-label="Clear search input"
                title="Clear search"
              >
                <X size={16} aria-hidden="true" />
              </button>
            )}
          </div>
          
          <div className="search-footer-note">
            <span>Instant discovery</span>
            <span className="bullet-sep" aria-hidden="true">•</span>
            <span>Case-insensitive</span>
            <span className="bullet-sep" aria-hidden="true">•</span>
            <span>Zero latency</span>
          </div>
        </div>
      </div>
    </section>
  );
};
