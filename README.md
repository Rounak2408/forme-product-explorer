# FORME - Product Explorer

A clean, modern product discovery web application built with **React**, **TypeScript**, and **Vite** for the TechCrestaX Web Developer practical assessment. 

The app allows users to search products in real-time, filter by category, sort by price, save items to a wishlist, view item details in a modal, and place an order with an instant confirmation popup.

---

## Features

- **Instant Search:** Search items by name instantly without needing to press enter. Handles uppercase, lowercase, and extra spaces smoothly.
- **Category Filters:** Filter by *All Products*, *Electronics*, *Clothing*, *Accessories*, *Home*, and *Footwear* with live item counts.
- **Sorting Options:** Sort products by Featured, Price: Low to High, and Price: High to Low.
- **Active Filter Badges:** Easily see which filters are active and remove them with one click, or use the "Reset Filters" button.
- **Wishlist & Drawer:** Save items to wishlist with localStorage persistence. Open the slide-over drawer to view saved items, remove them, or buy them directly.
- **Quick View Modal:** Click any product card to see full specifications, material details, and a direct "Buy Now" button.
- **Order Success Popup:** Placing an order opens an order confirmation modal with an Order ID, items summary, and delivery details.
- **Image Fallback:** If an image fails to load, a clean placeholder is shown instead of a broken image icon.
- **Responsive Layout:** Works smoothly on desktop, tablet, and mobile devices without horizontal overflow.

---

## Tech Stack

- **Frontend:** React 19
- **Language:** TypeScript (Strict Mode)
- **Tooling:** Vite
- **Styling:** Modern CSS3 (CSS Variables, Flexbox, CSS Grid)
- **Icons:** Lucide React
- **Dataset:** Local typed dataset (20 products across 5 categories)

---

## Project Structure

```text
product-exploer/
├── public/
│   └── favicon.svg              # Brand icon
├── src/
│   ├── components/
│   │   ├── Header.tsx           # Navigation bar & wishlist counter
│   │   ├── Hero.tsx             # Main headline & search bar
│   │   ├── CategoryFilters.tsx  # Category filter buttons with counts
│   │   ├── ProductToolbar.tsx   # Item count, active tags, and sort dropdown
│   │   ├── ProductCard.tsx      # Product card with hover zoom & wishlist toggle
│   │   ├── ProductGrid.tsx      # Responsive product grid
│   │   ├── EmptyState.tsx       # State shown when no products match
│   │   ├── ProductModal.tsx     # Product detail modal
│   │   ├── WishlistDrawer.tsx   # Slide-over saved items drawer
│   │   ├── OrderSuccessModal.tsx# Order confirmation modal
│   │   └── Footer.tsx           # Footer
│   ├── data/
│   │   └── products.ts          # Sample product catalog
│   ├── types/
│   │   └── product.ts           # TypeScript interfaces and types
│   ├── utils/
│   │   ├── productFilters.ts    # Search, filter, sort, and INR currency helpers
│   │   └── productFilters.test.ts # Unit test cases
│   ├── App.css                  # Main styling
│   ├── App.tsx                  # Main state and layout
│   ├── index.css                # Global styles and CSS variables
│   └── main.tsx                 # App entry point
├── package.json
├── tsconfig.json
└── vite.config.ts
```

---

## Getting Started

Make sure you have Node.js installed (v18 or higher).

### 1. Install dependencies
```bash
npm install
```

### 2. Run the development server
```bash
npm run dev
```
Open your browser at `http://localhost:5173/` (or the port shown in your terminal).

### 3. Run type check
```bash
npx tsc --noEmit
```

### 4. Run tests
```bash
npm test
```

### 5. Build for production
```bash
npm run build
```

---

## Deploy to Vercel

1. Push this project to GitHub.
2. Go to [Vercel](https://vercel.com/) and click **"Add New Project"**.
3. Import this repository.
4. Framework preset will automatically be detected as **Vite**.
5. Click **Deploy**.
