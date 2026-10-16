import React, { useState } from 'react';
import type { Product } from '../types/product';
import { formatINR } from '../utils/productFilters';
import { Heart, Eye, ImageOff } from 'lucide-react';

interface ProductCardProps {
  product: Product;
  isWishlisted: boolean;
  onToggleWishlist: (product: Product) => void;
  onSelectProduct: (product: Product) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({
  product,
  isWishlisted,
  onToggleWishlist,
  onSelectProduct
}) => {
  const [imgError, setImgError] = useState(false);
  const [imgLoaded, setImgLoaded] = useState(false);

  const handleWishlistClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    onToggleWishlist(product);
  };

  return (
    <article
      className="product-card"
      onClick={() => onSelectProduct(product)}
      tabIndex={0}
      role="button"
      aria-label={`View details for ${product.name}, priced at ${formatINR(product.price)}`}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          onSelectProduct(product);
        }
      }}
    >
      {/* Image container */}
      <div className="card-media-wrapper">
        {!imgError ? (
          <>
            <img
              src={product.image}
              alt={product.name}
              className={`product-card-image ${imgLoaded ? 'is-loaded' : 'is-loading'}`}
              onLoad={() => setImgLoaded(true)}
              onError={() => setImgError(true)}
              loading="lazy"
            />
            {!imgLoaded && <div className="image-skeleton-shimmer" aria-hidden="true" />}
          </>
        ) : (
          <div className="image-fallback-container" role="img" aria-label={`Placeholder for ${product.name}`}>
            <ImageOff size={28} className="fallback-icon" aria-hidden="true" />
            <span className="fallback-text">Image unavailable</span>
          </div>
        )}

        {/* Featured understated badge */}
        {product.featured && (
          <span className="featured-pill-badge" aria-label="Featured product">
            Featured
          </span>
        )}

        {/* Wishlist quick action button */}
        <button
          type="button"
          className={`card-wishlist-btn ${isWishlisted ? 'is-active' : ''}`}
          onClick={handleWishlistClick}
          aria-label={
            isWishlisted
              ? `Remove ${product.name} from wishlist`
              : `Save ${product.name} to wishlist`
          }
          aria-pressed={isWishlisted}
          title={isWishlisted ? 'Saved to wishlist' : 'Save to wishlist'}
        >
          <Heart
            size={18}
            className={isWishlisted ? 'heart-icon-filled' : 'heart-icon-outline'}
            aria-hidden="true"
          />
        </button>

        {/* Quick view hover button */}
        <div className="card-quick-view-overlay" aria-hidden="true">
          <span className="quick-view-text">
            <Eye size={14} /> Quick View
          </span>
        </div>
      </div>

      {/* Card Content & Metadata */}
      <div className="card-body">
        <div className="card-meta-row">
          <span className="card-category-label">{product.category}</span>
          {product.materialOrSpec && (
            <span className="card-spec-label">{product.materialOrSpec}</span>
          )}
        </div>

        <h3 className="card-title font-sans">{product.name}</h3>

        {product.tagline && (
          <p className="card-tagline">{product.tagline}</p>
        )}

        <div className="card-price-row">
          <span className="card-price">{formatINR(product.price)}</span>
          <span className="card-currency-tag">INR</span>
        </div>
      </div>
    </article>
  );
};
