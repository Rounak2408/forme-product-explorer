import type { FilterState, Product, SortOption } from '../types/product';

/**
 * Formats a number in Indian Rupees (INR) using standard Intl.NumberFormat
 * e.g., 24999 -> ₹24,999
 */
export const formatINR = (amount: number): string => {
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0
  }).format(amount);
};

/**
 * Normalizes a text string by trimming leading/trailing whitespace and converting to lowercase.
 */
export const normalizeQuery = (query: string): string => {
  return query.trim().toLowerCase();
};

/**
 * Pure derived data function to filter and sort products based on:
 * 1. Normalized search query (matching product name)
 * 2. Selected category ('All' or specific category)
 * 3. Selected sort mode ('featured' | 'price-asc' | 'price-desc')
 */
export const filterAndSortProducts = (
  products: Product[],
  filters: FilterState
): Product[] => {
  const normalizedQuery = normalizeQuery(filters.searchQuery);

  // 1. Filter by search query & category
  const filtered = products.filter((product) => {
    // Search query check (matches product name)
    const matchesSearch =
      normalizedQuery === '' ||
      product.name.toLowerCase().includes(normalizedQuery);

    // Category check
    const matchesCategory =
      filters.category === 'All' || product.category === filters.category;

    return matchesSearch && matchesCategory;
  });

  // 2. Sort the filtered results
  return sortProducts(filtered, filters.sortBy);
};

/**
 * Sorts products based on chosen sorting criterion:
 * - 'featured': Featured products first, then original catalog order
 * - 'price-asc': Ascending price (Low to High)
 * - 'price-desc': Descending price (High to Low)
 */
export const sortProducts = (
  products: Product[],
  sortBy: SortOption
): Product[] => {
  const list = [...products];

  switch (sortBy) {
    case 'price-asc':
      return list.sort((a, b) => a.price - b.price);

    case 'price-desc':
      return list.sort((a, b) => b.price - a.price);

    case 'featured':
    default:
      // Featured items first; preserve natural order within each grouping
      return list.sort((a, b) => {
        if (a.featured && !b.featured) return -1;
        if (!a.featured && b.featured) return 1;
        return 0;
      });
  }
};
