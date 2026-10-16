import test from 'node:test';
import assert from 'node:assert/strict';
import { filterAndSortProducts, formatINR, normalizeQuery, sortProducts } from './productFilters.ts';
import { PRODUCTS } from '../data/products.ts';
import type { FilterState, Product } from '../types/product.ts';

test('Mandatory Test Suite: Advanced Product Search and Filtering Pipeline', async (t) => {
  await t.test('1. Normalize search query: trims leading/trailing spaces and converts to lowercase', () => {
    assert.equal(normalizeQuery('  Headphones  '), 'headphones');
    assert.equal(normalizeQuery('MERINO WOOL'), 'merino wool');
    assert.equal(normalizeQuery('   '), '');
  });

  await t.test('2. Search by full product name', () => {
    const filters: FilterState = {
      searchQuery: 'Studio ANC Headphones',
      category: 'All',
      sortBy: 'featured'
    };
    const result = filterAndSortProducts(PRODUCTS, filters);
    assert.equal(result.length, 1);
    assert.equal(result[0].name, 'Studio ANC Headphones');
  });

  await t.test('3. Search by partial product name', () => {
    const filters: FilterState = {
      searchQuery: 'Leather',
      category: 'All',
      sortBy: 'featured'
    };
    const result = filterAndSortProducts(PRODUCTS, filters);
    assert.ok(result.length >= 2, 'Should find at least 2 leather products');
    result.forEach((p) => {
      assert.ok(
        p.name.toLowerCase().includes('leather'),
        `Product ${p.name} should include "leather"`
      );
    });
  });

  await t.test('4. Search with uppercase and lowercase characters (case-insensitivity)', () => {
    const upperFilters: FilterState = {
      searchQuery: 'CERAMIC',
      category: 'All',
      sortBy: 'featured'
    };
    const lowerFilters: FilterState = {
      searchQuery: 'ceramic',
      category: 'All',
      sortBy: 'featured'
    };
    const upperResult = filterAndSortProducts(PRODUCTS, upperFilters);
    const lowerResult = filterAndSortProducts(PRODUCTS, lowerFilters);

    assert.ok(upperResult.length > 0);
    assert.equal(upperResult.length, lowerResult.length);
    assert.equal(upperResult[0].id, lowerResult[0].id);
  });

  await t.test('5. Search with leading or trailing spaces', () => {
    const paddedFilters: FilterState = {
      searchQuery: '   Kettle   ',
      category: 'All',
      sortBy: 'featured'
    };
    const result = filterAndSortProducts(PRODUCTS, paddedFilters);
    assert.equal(result.length, 1);
    assert.ok(result[0].name.includes('Kettle'));
  });

  await t.test('6. Select a category (e.g., Electronics)', () => {
    const filters: FilterState = {
      searchQuery: '',
      category: 'Electronics',
      sortBy: 'featured'
    };
    const result = filterAndSortProducts(PRODUCTS, filters);
    assert.ok(result.length > 0);
    result.forEach((p) => {
      assert.equal(p.category, 'Electronics');
    });
  });

  await t.test('7. Sort products by ascending price (Low to High)', () => {
    const filters: FilterState = {
      searchQuery: '',
      category: 'All',
      sortBy: 'price-asc'
    };
    const result = filterAndSortProducts(PRODUCTS, filters);
    assert.equal(result.length, PRODUCTS.length);
    for (let i = 0; i < result.length - 1; i++) {
      assert.ok(
        result[i].price <= result[i + 1].price,
        `Expected ${result[i].price} <= ${result[i + 1].price}`
      );
    }
  });

  await t.test('8. Sort products by descending price (High to Low)', () => {
    const filters: FilterState = {
      searchQuery: '',
      category: 'All',
      sortBy: 'price-desc'
    };
    const result = filterAndSortProducts(PRODUCTS, filters);
    assert.equal(result.length, PRODUCTS.length);
    for (let i = 0; i < result.length - 1; i++) {
      assert.ok(
        result[i].price >= result[i + 1].price,
        `Expected ${result[i].price} >= ${result[i + 1].price}`
      );
    }
  });

  await t.test('9. Combine search + category + sorting', () => {
    const filters: FilterState = {
      searchQuery: 'o', // matches items with letter 'o'
      category: 'Footwear',
      sortBy: 'price-asc'
    };
    const result = filterAndSortProducts(PRODUCTS, filters);
    assert.ok(result.length > 0);
    for (let i = 0; i < result.length - 1; i++) {
      assert.equal(result[i].category, 'Footwear');
      assert.ok(result[i].name.toLowerCase().includes('o'));
      assert.ok(result[i].price <= result[i + 1].price);
    }
  });

  await t.test('10. Show empty state when no products match', () => {
    const filters: FilterState = {
      searchQuery: 'NonexistentProductXYZ123',
      category: 'Electronics',
      sortBy: 'featured'
    };
    const result = filterAndSortProducts(PRODUCTS, filters);
    assert.equal(result.length, 0);
  });

  await t.test('11. Clear all active filters restores full dataset and featured order', () => {
    const resetFilters: FilterState = {
      searchQuery: '',
      category: 'All',
      sortBy: 'featured'
    };
    const result = filterAndSortProducts(PRODUCTS, resetFilters);
    assert.equal(result.length, PRODUCTS.length);
    // Featured products should come first
    assert.equal(result[0].featured, true);
  });

  await t.test('12. Format INR currency properly using Intl.NumberFormat', () => {
    const formatted = formatINR(24999);
    assert.ok(formatted.includes('24,999') || formatted.includes('₹24,999'));
  });
});
