import React from 'react';
import { Sparkles, Heart, Search } from 'lucide-react';

interface HeaderProps {
  wishlistCount: number;
  onOpenWishlist: () => void;
  onFocusSearch: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  wishlistCount,
  onOpenWishlist,
  onFocusSearch
}) => {
  return (
    <header className="site-header" role="banner">
      <div className="container header-inner">
        {/* Brand identity */}
        <div className="brand-group">
          <a href="#" className="brand-link" aria-label="FORME Home">
            <span className="brand-mark" aria-hidden="true">
              <span className="brand-glyph">F</span>
            </span>
            <div className="brand-text">
              <span className="brand-title">FORME</span>
              <span className="brand-descriptor">Product Explorer</span>
            </div>
          </a>
        </div>


        {/* Header Actions */}
        <div className="header-actions">
          {/* Quick jump to search */}
          <button
            type="button"
            className="action-btn search-trigger-btn"
            onClick={onFocusSearch}
            aria-label="Focus search input"
            title="Search products (Press /)"
          >
            <Search size={18} aria-hidden="true" />
            <span className="search-hint-text">Search</span>
          </button>

          {/* Wishlist toggle */}
          <button
            type="button"
            className="action-btn wishlist-btn"
            onClick={onOpenWishlist}
            aria-label={`Open Wishlist. ${wishlistCount} items saved.`}
            title="Saved items"
          >
            <div className="wishlist-icon-wrap">
              <Heart
                size={18}
                className={wishlistCount > 0 ? 'heart-filled' : ''}
                aria-hidden="true"
              />
              {wishlistCount > 0 && (
                <span className="wishlist-badge" aria-hidden="true">
                  {wishlistCount}
                </span>
              )}
            </div>
            <span className="action-btn-label">Wishlist</span>
          </button>

          {/* Editorial Edition Badge */}
          <div className="edition-tag" title="Editorial Edition 2025">
            <Sparkles size={13} className="edition-icon" aria-hidden="true" />
            <span>Edition 04</span>
          </div>
        </div>
      </div>
    </header>
  );
};
