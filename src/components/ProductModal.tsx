import React, { useEffect, useState } from 'react';
import type { Product } from '../types/product';
import { formatINR } from '../utils/productFilters';
import { X, Heart, ShieldCheck, Truck, RefreshCw, Check, ImageOff } from 'lucide-react';

interface ProductModalProps {
  product: Product | null;
  isOpen: boolean;
  isWishlisted: boolean;
  onClose: () => void;
  onToggleWishlist: (product: Product) => void;
}

export const ProductModal: React.FC<ProductModalProps> = ({
  product,
  isOpen,
  isWishlisted,
  onClose,
  onToggleWishlist
}) => {
  const [imgError, setImgError] = useState(false);
  const [copied, setCopied] = useState(false);

  // Close on Escape key
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    // Prevent background scrolling while modal is open
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [isOpen, onClose]);

  // Reset image error state whenever product changes
  useEffect(() => {
    setImgError(false);
    setCopied(false);
  }, [product?.id]);

  if (!isOpen || !product) return null;

  const handleCopyLink = () => {
    if (navigator?.clipboard) {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div
      className="modal-backdrop"
      onClick={onClose}
      role="presentation"
    >
      <div
        className="modal-dialog"
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-product-title"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          type="button"
          className="modal-close-btn"
          onClick={onClose}
          aria-label="Close product details dialog"
        >
          <X size={20} aria-hidden="true" />
        </button>

        <div className="modal-content-grid">
          {/* Modal Media Column */}
          <div className="modal-media-col">
            {!imgError ? (
              <img
                src={product.image}
                alt={product.name}
                className="modal-image"
                onError={() => setImgError(true)}
              />
            ) : (
              <div className="modal-image-fallback">
                <ImageOff size={40} aria-hidden="true" />
                <span>Image unavailable</span>
              </div>
            )}
            {product.featured && (
              <span className="modal-featured-badge">Featured Archival Piece</span>
            )}
          </div>

          {/* Modal Details Column */}
          <div className="modal-details-col">
            <div className="modal-header-meta">
              <span className="modal-category">{product.category}</span>
              {product.materialOrSpec && (
                <span className="modal-spec-tag">{product.materialOrSpec}</span>
              )}
            </div>

            <h2 id="modal-product-title" className="modal-title font-serif">
              {product.name}
            </h2>

            <div className="modal-price-box">
              <span className="modal-price-value">{formatINR(product.price)}</span>
              <span className="modal-tax-note">All taxes included · Complementary shipping</span>
            </div>

            {product.description && (
              <div className="modal-description-box">
                <p className="modal-description">{product.description}</p>
              </div>
            )}

            {/* Quality guarantees / Editorial hallmarks */}
            <div className="modal-guarantees">
              <div className="guarantee-item">
                <ShieldCheck size={18} className="guarantee-icon" aria-hidden="true" />
                <div>
                  <strong>Authentic Craftsmanship</strong>
                  <span>Direct from certified artisanal workshops</span>
                </div>
              </div>
              <div className="guarantee-item">
                <Truck size={18} className="guarantee-icon" aria-hidden="true" />
                <div>
                  <strong>Express White-Glove Dispatch</strong>
                  <span>Delivered within 2–4 business days across India</span>
                </div>
              </div>
              <div className="guarantee-item">
                <RefreshCw size={18} className="guarantee-icon" aria-hidden="true" />
                <div>
                  <strong>Hassle-Free 14-Day Returns</strong>
                  <span>Complimentary pickup on eligible items</span>
                </div>
              </div>
            </div>

            {/* Modal Actions */}
            <div className="modal-action-row">
              <button
                type="button"
                className={`modal-wishlist-toggle-btn ${isWishlisted ? 'is-active' : ''}`}
                onClick={() => onToggleWishlist(product)}
                aria-pressed={isWishlisted}
              >
                <Heart
                  size={18}
                  className={isWishlisted ? 'heart-filled' : ''}
                  aria-hidden="true"
                />
                <span>{isWishlisted ? 'Saved in Wishlist' : 'Add to Wishlist'}</span>
              </button>

              <button
                type="button"
                className="modal-share-btn"
                onClick={handleCopyLink}
                aria-label="Share product link"
              >
                {copied ? (
                  <>
                    <Check size={16} aria-hidden="true" />
                    <span>Copied!</span>
                  </>
                ) : (
                  <span>Share</span>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
