import React from 'react';
import type { Product } from '../types/product';
import { ProductCard } from './ProductCard';

interface ProductGridProps {
  products: Product[];
  wishlistIds: Set<string>;
  onToggleWishlist: (product: Product) => void;
  onSelectProduct: (product: Product) => void;
}

export const ProductGrid: React.FC<ProductGridProps> = ({
  products,
  wishlistIds,
  onToggleWishlist,
  onSelectProduct
}) => {
  return (
    <section className="product-grid-section" aria-label="Product catalog grid">
      <div className="container">
        <div className="product-grid" role="list">
          {products.map((product) => (
            <div key={product.id} role="listitem" className="product-grid-item">
              <ProductCard
                product={product}
                isWishlisted={wishlistIds.has(product.id)}
                onToggleWishlist={onToggleWishlist}
                onSelectProduct={onSelectProduct}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
