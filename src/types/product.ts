export type Category = 'Electronics' | 'Clothing' | 'Accessories' | 'Home' | 'Footwear';

export interface Product {
  id: string;
  name: string;
  price: number;
  category: Category;
  image: string;
  featured?: boolean;
  tagline?: string;
  description?: string;
  materialOrSpec?: string;
}

export type SortOption = 'featured' | 'price-asc' | 'price-desc';

export interface FilterState {
  searchQuery: string;
  category: Category | 'All';
  sortBy: SortOption;
}
