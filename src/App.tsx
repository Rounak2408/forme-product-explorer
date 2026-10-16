import React, { useState, useMemo, useRef, useEffect, useCallback } from 'react';
import { PRODUCTS, CATEGORIES } from './data/products';
import type { Category, FilterState, Product, SortOption } from './types/product';
import { filterAndSortProducts } from './utils/productFilters';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { CategoryFilters } from './components/CategoryFilters';
import { ProductToolbar } from './components/ProductToolbar';
import { ProductGrid } from './components/ProductGrid';
import { EmptyState } from './components/EmptyState';
import { ProductModal } from './components/ProductModal';
import { WishlistDrawer } from './components/WishlistDrawer';
import { OrderSuccessModal, type OrderData } from './components/OrderSuccessModal';
import { OrderToast } from './components/OrderToast';
import { Footer } from './components/Footer';
import './App.css';

const getFormattedDate = (): string => {
  return new Intl.DateTimeFormat('en-IN', {
    day: 'numeric',
    month: 'short',
    year: 'numeric'
  }).format(new Date());
};

export const App: React.FC = () => {
  // Single source of truth for filter state
  const [filters, setFilters] = useState<FilterState>({
    searchQuery: '',
    category: 'All',
    sortBy: 'featured'
  });

  // Wishlist state: set of product IDs
  const [wishlistIds, setWishlistIds] = useState<Set<string>>(() => {
    try {
      const saved = localStorage.getItem('forme_wishlist');
      return saved ? new Set(JSON.parse(saved)) : new Set();
    } catch {
      return new Set();
    }
  });

  // Drawer & Modal states
  const [isWishlistOpen, setIsWishlistOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [orderData, setOrderData] = useState<OrderData | null>(null);
  const [orderToast, setOrderToast] = useState<OrderData | null>(null);

  // Ref for search input in Hero section
  const searchInputRef = useRef<HTMLInputElement>(null);

  // Synchronize wishlist to localStorage safely
  useEffect(() => {
    try {
      localStorage.setItem(
        'forme_wishlist',
        JSON.stringify(Array.from(wishlistIds))
      );
    } catch {
      // Storage unavailable or disabled
    }
  }, [wishlistIds]);

  // Global hotkey: press "/" to focus search
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (
        e.key === '/' &&
        document.activeElement?.tagName !== 'INPUT' &&
        document.activeElement?.tagName !== 'TEXTAREA'
      ) {
        e.preventDefault();
        searchInputRef.current?.focus();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Filter & sort derived product dataset with useMemo
  const filteredProducts = useMemo(() => {
    return filterAndSortProducts(PRODUCTS, filters);
  }, [filters]);

  // Derived category counts across all products
  const categoryCounts = useMemo(() => {
    const counts: Record<Category | 'All', number> = {
      All: PRODUCTS.length,
      Electronics: 0,
      Clothing: 0,
      Accessories: 0,
      Home: 0,
      Footwear: 0
    };

    PRODUCTS.forEach((p) => {
      if (counts[p.category] !== undefined) {
        counts[p.category]++;
      }
    });

    return counts;
  }, []);

  // Filter state handlers
  const handleSearchChange = useCallback((query: string) => {
    setFilters((prev) => ({ ...prev, searchQuery: query }));
  }, []);

  const handleCategorySelect = useCallback((category: Category | 'All') => {
    setFilters((prev) => ({ ...prev, category }));
  }, []);

  const handleSortChange = useCallback((sortBy: SortOption) => {
    setFilters((prev) => ({ ...prev, sortBy }));
  }, []);

  const handleClearSearch = useCallback(() => {
    setFilters((prev) => ({ ...prev, searchQuery: '' }));
  }, []);

  const handleResetCategory = useCallback(() => {
    setFilters((prev) => ({ ...prev, category: 'All' }));
  }, []);

  const handleClearAll = useCallback(() => {
    setFilters({
      searchQuery: '',
      category: 'All',
      sortBy: 'featured'
    });
    searchInputRef.current?.focus();
  }, []);

  // Wishlist handlers
  const handleToggleWishlist = useCallback((product: Product) => {
    setWishlistIds((prev) => {
      const next = new Set(prev);
      if (next.has(product.id)) {
        next.delete(product.id);
      } else {
        next.add(product.id);
      }
      return next;
    });
  }, []);

  const handleRemoveWishlistItem = useCallback((productId: string) => {
    setWishlistIds((prev) => {
      const next = new Set(prev);
      next.delete(productId);
      return next;
    });
  }, []);

  const handleClearWishlist = useCallback(() => {
    setWishlistIds(new Set());
  }, []);

  // Focus search helper triggered from header
  const handleFocusSearch = useCallback(() => {
    searchInputRef.current?.focus();
    searchInputRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' });
  }, []);

  // Wishlist product items for the drawer
  const wishlistProducts = useMemo(() => {
    return PRODUCTS.filter((p) => wishlistIds.has(p.id));
  }, [wishlistIds]);

  // Order Placement Handlers
  const handleBuySingleItem = useCallback((product: Product) => {
    const randomSuffix = Math.floor(100000 + Math.random() * 900000);
    const newOrder: OrderData = {
      orderId: `FRM-${randomSuffix}`,
      items: [product],
      total: product.price,
      orderDate: getFormattedDate()
    };
    // Trigger corner notification
    setOrderToast(newOrder);

    // Remove bought item from wishlist
    setWishlistIds((prev) => {
      const next = new Set(prev);
      next.delete(product.id);
      return next;
    });

    setIsWishlistOpen(false);
    setSelectedProduct(null);
  }, []);

  const handleBuyAllWishlist = useCallback(() => {
    if (wishlistProducts.length === 0) return;
    const randomSuffix = Math.floor(100000 + Math.random() * 900000);
    const total = wishlistProducts.reduce((sum, p) => sum + p.price, 0);

    const newOrder: OrderData = {
      orderId: `FRM-${randomSuffix}`,
      items: [...wishlistProducts],
      total,
      orderDate: getFormattedDate()
    };
    // Trigger corner notification
    setOrderToast(newOrder);
    setWishlistIds(new Set());
    setIsWishlistOpen(false);
  }, [wishlistProducts]);

  return (
    <div className="app-wrapper">
      {/* Header Landmark */}
      <Header
        wishlistCount={wishlistIds.size}
        onOpenWishlist={() => setIsWishlistOpen(true)}
        onFocusSearch={handleFocusSearch}
      />

      {/* Main Landmark */}
      <main className="main-content" id="main-content">
        {/* Editorial Hero */}
        <Hero
          searchQuery={filters.searchQuery}
          onSearchChange={handleSearchChange}
          searchRef={searchInputRef}
          totalCount={PRODUCTS.length}
        />

        {/* Category Navigation Chips */}
        <CategoryFilters
          categories={CATEGORIES}
          selectedCategory={filters.category}
          onSelectCategory={handleCategorySelect}
          categoryCounts={categoryCounts}
        />

        {/* Product Results Toolbar */}
        <ProductToolbar
          totalCount={PRODUCTS.length}
          filteredCount={filteredProducts.length}
          selectedCategory={filters.category}
          searchQuery={filters.searchQuery}
          sortBy={filters.sortBy}
          onSortChange={handleSortChange}
          onClearSearch={handleClearSearch}
          onResetCategory={handleResetCategory}
          onClearAll={handleClearAll}
        />

        {/* Product Grid or Empty State */}
        {filteredProducts.length > 0 ? (
          <ProductGrid
            products={filteredProducts}
            wishlistIds={wishlistIds}
            onToggleWishlist={handleToggleWishlist}
            onSelectProduct={setSelectedProduct}
          />
        ) : (
          <EmptyState
            searchQuery={filters.searchQuery}
            selectedCategory={filters.category}
            onClearAll={handleClearAll}
          />
        )}
      </main>

      {/* Footer Landmark */}
      <Footer onSelectCategory={handleCategorySelect} />

      {/* Product Detail Modal */}
      <ProductModal
        product={selectedProduct}
        isOpen={selectedProduct !== null}
        isWishlisted={selectedProduct ? wishlistIds.has(selectedProduct.id) : false}
        onClose={() => setSelectedProduct(null)}
        onToggleWishlist={handleToggleWishlist}
        onBuyItem={handleBuySingleItem}
      />

      {/* Wishlist Side Drawer with Buy Now & Checkout */}
      <WishlistDrawer
        isOpen={isWishlistOpen}
        wishlistProducts={wishlistProducts}
        onClose={() => setIsWishlistOpen(false)}
        onRemoveItem={handleRemoveWishlistItem}
        onClearWishlist={handleClearWishlist}
        onSelectProduct={setSelectedProduct}
        onBuyItem={handleBuySingleItem}
        onBuyAll={handleBuyAllWishlist}
      />

      {/* Corner Order Toast Notification */}
      <OrderToast
        order={orderToast}
        onClose={() => setOrderToast(null)}
        onViewDetails={() => {
          setOrderData(orderToast);
          setOrderToast(null);
        }}
      />

      {/* Order Success Confirmation Popup */}
      <OrderSuccessModal
        orderData={orderData}
        onClose={() => setOrderData(null)}
      />
    </div>
  );
};

export default App;
