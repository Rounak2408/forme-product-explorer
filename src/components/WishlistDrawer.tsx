import React, { useEffect } from 'react';
import type { Product } from '../types/product';
import { formatINR } from '../utils/productFilters';
import { X, Trash2, Heart, ArrowRight } from 'lucide-react';

interface WishlistDrawerProps {
  isOpen: boolean;
  wishlistProducts: Product[];
  onClose: () => void;
  onRemoveItem: (productId: string) => void;
  onClearWishlist: () => void;
  onSelectProduct: (product: Product) => void;
}

export const WishlistDrawer: React.FC<WishlistDrawerProps> = ({
  isOpen,
  wishlistProducts,
  onClose,
  onRemoveItem,
  onClearWishlist,
  onSelectProduct
}) => {
  // Close on Escape
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="drawer-backdrop"
      onClick={onClose}
      role="presentation"
    >
      <aside
        className="wishlist-drawer"
        role="dialog"
        aria-modal="true"
        aria-labelledby="wishlist-drawer-title"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Drawer Header */}
        <div className="drawer-header">
          <div className="drawer-title-group">
            <Heart size={20} className="drawer-heart-icon" aria-hidden="true" />
            <h2 id="wishlist-drawer-title" className="drawer-title font-serif">
              Saved Pieces
            </h2>
            <span className="drawer-badge">{wishlistProducts.length}</span>
          </div>

          <button
            type="button"
            className="drawer-close-btn"
            onClick={onClose}
            aria-label="Close wishlist drawer"
          >
            <X size={20} aria-hidden="true" />
          </button>
        </div>

        {/* Drawer Content */}
        <div className="drawer-body">
          {wishlistProducts.length === 0 ? (
            <div className="drawer-empty-state">
              <div className="drawer-empty-icon-wrap" aria-hidden="true">
                <Heart size={32} />
              </div>
              <h3 className="drawer-empty-title font-serif">Your wishlist is empty</h3>
              <p className="drawer-empty-desc">
                Click the heart icon on any product card to curate your personal collection of favorites.
              </p>
              <button
                type="button"
                className="drawer-explore-btn"
                onClick={onClose}
              >
                <span>Explore Catalog</span>
                <ArrowRight size={16} aria-hidden="true" />
              </button>
            </div>
          ) : (
            <div className="drawer-items-list" role="list">
              {wishlistProducts.map((product) => (
                <div key={product.id} className="drawer-item" role="listitem">
                  <div
                    className="drawer-item-thumb-box"
                    onClick={() => {
                      onSelectProduct(product);
                      onClose();
                    }}
                    role="button"
                    tabIndex={0}
                    aria-label={`View ${product.name}`}
                  >
                    <img
                      src={product.image}
                      alt={product.name}
                      className="drawer-item-img"
                    />
                  </div>

                  <div className="drawer-item-info">
                    <span className="drawer-item-cat">{product.category}</span>
                    <h4
                      className="drawer-item-name"
                      onClick={() => {
                        onSelectProduct(product);
                        onClose();
                      }}
                      role="button"
                      tabIndex={0}
                    >
                      {product.name}
                    </h4>
                    <span className="drawer-item-price">
                      {formatINR(product.price)}
                    </span>
                  </div>

                  <button
                    type="button"
                    className="drawer-item-remove-btn"
                    onClick={() => onRemoveItem(product.id)}
                    aria-label={`Remove ${product.name} from saved items`}
                    title="Remove item"
                  >
                    <Trash2 size={16} aria-hidden="true" />
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Drawer Footer */}
        {wishlistProducts.length > 0 && (
          <div className="drawer-footer">
            <div className="drawer-summary-row">
              <span>Saved Items Total:</span>
              <strong className="drawer-total-amount">
                {formatINR(
                  wishlistProducts.reduce((sum, item) => sum + item.price, 0)
                )}
              </strong>
            </div>
            <button
              type="button"
              className="drawer-clear-all-btn"
              onClick={onClearWishlist}
            >
              <Trash2 size={14} aria-hidden="true" />
              <span>Clear Entire Wishlist</span>
            </button>
          </div>
        )}
      </aside>
    </div>
  );
};
