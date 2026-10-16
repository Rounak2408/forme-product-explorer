# FORME — Advanced Product Explorer

> **Portfolio-Quality E-Commerce Discovery Platform**  
> *Developed for Round 2 Web Developer Practical Assessment by TechCrestaX*

[![TypeScript](https://img.shields.io/badge/TypeScript-Strict%205.x%2F6.x-blue?style=flat-square&logo=typescript)](https://www.typescriptlang.org/)
[![React](https://img.shields.io/badge/React-19.x-61DAFB?style=flat-square&logo=react)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-8.x-646CFF?style=flat-square&logo=vite)](https://vitejs.dev/)
[![License](https://img.shields.io/badge/License-MIT-green?style=flat-square)](#)

---

## 1. Project Overview

**FORME** is a refined, editorial product discovery web application inspired by luxury commerce platforms and modern lifestyle publications. Built with **React 19**, **TypeScript**, and **Vite**, FORME pairs high-performance state derivation with a tactile, accessible design system.

The application delivers seamless instant search, multi-category filtering, dynamic sorting in Indian Rupees (₹ INR), responsive grid layouts, image fallback protection, a persisted wishlist drawer, and an accessible quick-view product modal.

---

## 2. Key Features

- **Editorial Luxury Aesthetic**:
  - Warm off-white canvas (`#FAF8F5`) paired with deep charcoal typography (`#191816`) and a signature warm terracotta accent (`#9E461E`).
  - Google Fonts pairing: **Playfair Display** (editorial serif headlines) and **Plus Jakarta Sans** (clean, geometric UI typography).
  - 8px scale spacing system with CSS custom properties.

- **Instant High-Efficiency Search**:
  - Live search input matching product names in real time with zero debounce lag.
  - Case-insensitive matching with automatic whitespace trimming.
  - Clear search trigger `(X)` and global keyboard shortcut (`/` key to focus search).

- **Multi-Category Filter Chips**:
  - 6 distinct collections: *All Products*, *Electronics*, *Clothing*, *Accessories*, *Home*, and *Footwear*.
  - Live count indicator on every filter chip dynamically derived from the product catalog.
  - Keyboard accessible with `aria-pressed` states and high-contrast `:focus-visible` indicators.

- **Dynamic Results Toolbar**:
  - Dynamic result counter (`"Showing X products of Y total"`).
  - Multi-criteria sorting:
    - **Featured Collection** (default curated priority)
    - **Price: Low to High** (ascending)
    - **Price: High to Low** (descending)
  - Active filter badges with one-click dismiss buttons.
  - "Reset Filters" action button that restores default view.

- **Fluid Responsive Grid & Cards**:
  - CSS Grid spanning 4 columns on large screens, 2–3 on medium tablets, and 1–2 on mobile viewports.
  - Consistent 4:5 portrait media aspect ratio.
  - Subtle hover zoom (`transform: scale(1.06)`), smooth card lift, and understated "Featured" badge.
  - Indian Rupee currency formatting using `Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR' })`.

- **Graceful Image Fallback & Skeleton Shimmer**:
  - Clean SVG fallback placeholder displayed when an image URL fails to load.
  - CSS shimmer placeholder during image load.

- **Interactive Wishlist System**:
  - Toggle saved items via heart button on cards or modal.
  - Header badge displaying real-time wishlist item count.
  - Slide-over Wishlist Drawer featuring individual remove buttons, live sum calculation, and "Clear All" functionality.
  - LocalStorage persistence across page reloads.

- **Product Detail Quick-View Modal**:
  - Accessible dialog (`role="dialog"`, `aria-modal="true"`, Esc key listener, background scroll locking).
  - Displays product specifications, material composition, craftsmanship highlights, and direct link copy button.

- **Purposeful Empty State**:
  - Rendered dynamically when zero products match the combined criteria.
  - Contextual guidance showing the exact search term and selected category.
  - Functional "Clear all filters" button.

- **Accessibility & Motion Compliance**:
  - Semantic HTML5 landmarks (`<header>`, `<nav>`, `<main>`, `<section>`, `<footer>`).
  - Fully navigable via keyboard (`Tab`, `Enter`, `Space`, `Escape`, `/`).
  - `@media (prefers-reduced-motion: reduce)` support.

---

## 3. Technology Stack

| Layer | Technology | Details |
|---|---|---|
| **Framework** | React 19 | Hooks (`useState`, `useMemo`, `useEffect`, `useCallback`, `useRef`) |
| **Language** | TypeScript 5.8+ | Strict type checking, zero `any`, verbatim module syntax |
| **Bundler & Dev Server** | Vite 8 | Instant HMR, tree-shaking, ES modules |
| **Styling** | Vanilla CSS3 | CSS Variables, CSS Grid, Flexbox, Fluid Typography |
| **Iconography** | Lucide React | Clean, scalable feather-inspired vector icons |
| **Typography** | Google Fonts | Playfair Display & Plus Jakarta Sans |
| **Dataset** | Local TypeScript Catalog | 20 curated sample items across 5 categories |

---

## 4. Project Structure

```text
product-exploer/
├── public/
│   ├── favicon.svg              # Minimalist FORME geometric brand favicon
│   └── icons.svg
├── src/
│   ├── components/
│   │   ├── Header.tsx           # Sticky nav header, brandmark, status & wishlist trigger
│   │   ├── Hero.tsx             # Editorial title, collection badge, instant search
│   │   ├── CategoryFilters.tsx  # Accessible filter chips with item counts
│   │   ├── ProductToolbar.tsx   # Results counter, active filter badges, sort dropdown
│   │   ├── ProductCard.tsx      # Individual product card with image fallback & hover effects
│   │   ├── ProductGrid.tsx      # Responsive CSS grid container
│   │   ├── EmptyState.tsx       # Contextual empty state with reset button
│   │   ├── ProductModal.tsx     # Detailed quick view modal with specs & guarantees
│   │   ├── WishlistDrawer.tsx   # Slide-over saved items drawer with total calculation
│   │   └── Footer.tsx           # Editorial footer with keyboard shortcut reference
│   ├── data/
│   │   └── products.ts          # Curated dataset of 20 realistic products
│   ├── types/
│   │   └── product.ts           # Strict TypeScript interfaces & Category unions
│   ├── utils/
│   │   ├── productFilters.ts    # Pure filtering, sorting, and INR formatting utilities
│   │   └── productFilters.test.ts # 12-point automated test suite for filter pipeline
│   ├── App.css                  # Component-level scoped stylesheet
│   ├── App.tsx                  # Root application state & composition
│   ├── index.css                # Global design system tokens, CSS reset & base styles
│   └── main.tsx                 # Application entry point
├── .gitignore                   # Excludes node_modules, dist, logs, and local env files
├── index.html                   # HTML entry with Google Fonts and SEO metadata
├── package.json                 # Project dependencies and script definitions
├── tsconfig.app.json            # Strict TypeScript configuration
└── vite.config.ts               # Vite configuration
```

---

## 5. Installation & Setup

Ensure you have **Node.js 18+** (Node 20+ or 22+ recommended) installed on your system.

### Step 1: Clone the repository
```bash
git clone <repository-url>
cd "product Exploer"
```

### Step 2: Install dependencies
```bash
npm install
```

---

## 6. Development & Verification Commands

### Start Development Server
```bash
npm run dev
```
Launches the Vite dev server with Hot Module Replacement (typically at `http://localhost:5173/` or `http://localhost:5174/`).

### Run Strict TypeScript Type Check
```bash
npx tsc --noEmit
```
Performs a full compile check ensuring zero type errors and adherence to strict type definitions.

### Run Automated Unit Test Suite
```bash
npm test
```
Executes the 12-case test suite covering:
- Query whitespace trimming & case-insensitivity
- Full and partial name searching
- Category filtering
- Ascending and descending price sorting
- Combined search + category + sort pipeline
- Empty state detection
- Filter reset behavior
- Indian Rupee currency formatting

### Build for Production
```bash
npm run build
```
Creates an optimized production bundle inside the `dist/` directory.

### Preview Production Build
```bash
npm run preview
```

---

## 7. Mandatory Test Cases Covered

| Test Scenario | Expected Outcome | Verification |
|---|---|---|
| Search by full product name | Returns exact product match | **Passed** |
| Search by partial product name | Returns all products containing substring | **Passed** |
| Search with mixed casing (`CERAMIC` vs `ceramic`) | Case-insensitive matching | **Passed** |
| Search with leading/trailing spaces (`"  Kettle  "`) | Spaces trimmed before evaluation | **Passed** |
| Select a category (`Footwear`, `Electronics`, etc.) | Displays only products in selected category | **Passed** |
| Sort by price (ascending & descending) | Correct mathematical price ordering | **Passed** |
| Combined search + category + sort | Correctly filters and sorts simultaneously | **Passed** |
| Reset / Clear all filters | Restores all 20 products and default sorting | **Passed** |
| Empty state on non-matching query | Displays message, icon, and reset button | **Passed** |
| Wishlist toggle & drawer | Persists selection and computes accurate total | **Passed** |

---

## 8. Deployment to Vercel

This application is ready for zero-configuration deployment to [Vercel](https://vercel.com).

### Option A: Via Vercel CLI
1. Install the Vercel CLI globally:
   ```bash
   npm i -g vercel
   ```
2. Run deployment from the project root:
   ```bash
   vercel
   ```
3. Follow the CLI prompts:
   - **Framework Preset**: `Vite`
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
   - **Install Command**: `npm install`

### Option B: Via Vercel Dashboard (GitHub Integration)
1. Push your repository to GitHub.
2. Navigate to [vercel.com/new](https://vercel.com/new).
3. Import your repository.
4. Vercel automatically detects the Vite configuration:
   - **Framework Preset**: `Vite`
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
5. Click **Deploy**. Your application will be live in under a minute with continuous deployments on `main`.

---

## 9. Code Quality & Performance Highlights

- **Pure Derived State**: Zero state duplication. `filteredProducts` and `categoryCounts` are computed cleanly via `useMemo`.
- **Zero Heavy UI Libraries**: Built exclusively with Vanilla CSS variables and Lucide vector icons for a tiny bundle footprint (< 85kB gzip).
- **Graceful Error Boundaries**: Handled failed images, empty search queries, and localStorage exceptions safely.
- **Strict Accessibility**: Follows WCAG 2.1 AA guidelines with keyboard trap handling for modal/drawer dialogs, visible `:focus-visible` outlines, and full ARIA semantics.

---

**Author**: Sudhanshu Rounak
**Assessment**: Round 2 Web Developer Practical Assessment — TechCrestaX
