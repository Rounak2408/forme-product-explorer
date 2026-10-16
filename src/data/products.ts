import type { Category, Product } from '../types/product';

export const CATEGORIES: Category[] = [
  'Electronics',
  'Clothing',
  'Accessories',
  'Home',
  'Footwear'
];

export const PRODUCTS: Product[] = [
  {
    id: 'prod-01',
    name: 'Studio ANC Headphones',
    price: 24999,
    category: 'Electronics',
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=800&q=80',
    featured: true,
    tagline: 'Precision tuned acoustic architecture with pure lambskin earcups',
    description: 'Engineered for audio purists. Features custom 40mm titanium drivers, active noise cancellation with transparency pass-through, and 38-hour battery longevity.',
    materialOrSpec: 'Anodized Aluminum & Memory Foam'
  },
  {
    id: 'prod-02',
    name: 'Merino Wool Overshirt',
    price: 7499,
    category: 'Clothing',
    image: 'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?auto=format&fit=crop&w=800&q=80',
    featured: true,
    tagline: 'Heavyweight 320gsm Australian Merino for timeless layering',
    description: 'A structural silhouette crafted from extra-fine Merino wool. Naturally thermoregulating, odor-resistant, and tailored with horn buttons and invisible side pockets.',
    materialOrSpec: '100% Extrafine Merino Wool'
  },
  {
    id: 'prod-03',
    name: 'Leather Weekender Bag',
    price: 18499,
    category: 'Accessories',
    image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=800&q=80',
    featured: true,
    tagline: 'Handcrafted vegetable-tanned Tuscan leather travel holdall',
    description: 'Designed for effortless 72-hour journeys. Features reinforced dual handles, antique brass YKK Excella zippers, and a padded 16-inch laptop compartment.',
    materialOrSpec: 'Tuscan Full-Grain Vachetta Leather'
  },
  {
    id: 'prod-04',
    name: 'Ceramic Table Lamp',
    price: 8999,
    category: 'Home',
    image: 'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&w=800&q=80',
    featured: true,
    tagline: 'Hand-thrown stoneware base with warm ambient diffuser',
    description: 'A sculptural conversation piece cast in matte stoneware with natural mineral flecks. Emits a soothing 2700K ambient glow through a textured linen shade.',
    materialOrSpec: 'Raw Stoneware Ceramic & French Linen'
  },
  {
    id: 'prod-05',
    name: 'Mechanical Keyboard',
    price: 13999,
    category: 'Electronics',
    image: 'https://images.unsplash.com/photo-1587829741301-dc798b83add3?auto=format&fit=crop&w=800&q=80',
    featured: false,
    tagline: 'CNC milled aluminum chassis with factory-lubed linear switches',
    description: 'Heavyweight brass weight plate with gasket-mounted PCB for deep acoustic keystrokes. Dual wireless 2.4GHz and Bluetooth 5.2 connectivity.',
    materialOrSpec: '6063 Aluminum & PBT Dye-Sub Keycaps'
  },
  {
    id: 'prod-06',
    name: 'Tailored Linen Trousers',
    price: 5299,
    category: 'Clothing',
    image: 'https://images.unsplash.com/photo-1479064555552-3ef4979f8908?auto=format&fit=crop&w=800&q=80',
    featured: false,
    tagline: 'Relaxed taper with double pleats and adjustable side tabs',
    description: 'Woven from premium Normandy flax linen with garment-dyed softness. Cut with a high rise and clean break for effortless summer sophistication.',
    materialOrSpec: '100% Normandy Flax Linen'
  },
  {
    id: 'prod-07',
    name: 'Leather Bifold Wallet',
    price: 3499,
    category: 'Accessories',
    image: 'https://images.unsplash.com/photo-1627123424574-724758594e93?auto=format&fit=crop&w=800&q=80',
    featured: false,
    tagline: 'Slimline 6-pocket profile that patinas richly over decades',
    description: 'Hand-burnished edges sealed with natural beeswax. Accommodates up to 10 cards and flat currency without unnecessary pocket bulk.',
    materialOrSpec: 'Italian Buttero Leather'
  },
  {
    id: 'prod-08',
    name: 'Pour-Over Coffee Kettle',
    price: 4799,
    category: 'Home',
    image: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=800&q=80',
    featured: false,
    tagline: 'Gooseneck precision flow with solid walnut handle accent',
    description: 'Designed for meticulous specialty coffee extraction. The balanced counterweighted walnut handle ensures steady laminar water flow at all angles.',
    materialOrSpec: '304 Stainless Steel & American Walnut'
  },
  {
    id: 'prod-09',
    name: 'Leather Derby Shoes',
    price: 11999,
    category: 'Footwear',
    image: 'https://images.unsplash.com/photo-1614252235316-8c857d38b5f4?auto=format&fit=crop&w=800&q=80',
    featured: true,
    tagline: 'Blake-stitched Italian calfskin with lightweight Vibram sole',
    description: 'A contemporary bridge between formal craft and urban utility. Constructed in Marche, Italy using supple box-calf leather and shock-absorbing rubber lug soles.',
    materialOrSpec: 'Full-Grain Calfskin & Vibram Morflex'
  },
  {
    id: 'prod-10',
    name: 'Analog Chronograph Watch',
    price: 21999,
    category: 'Accessories',
    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=800&q=80',
    featured: true,
    tagline: 'Bauhaus inspired dial with sapphire crystal and quick-release strap',
    description: 'Clean typographic dial proportioned to classical 38mm mid-century dimensions. Equipped with a Swiss meca-quartz movement and 50m water resistance.',
    materialOrSpec: '316L Surgical Steel & Anti-Reflective Sapphire'
  },
  {
    id: 'prod-11',
    name: 'Wireless Earbuds',
    price: 12499,
    category: 'Electronics',
    image: 'https://images.unsplash.com/photo-1590658268037-6bf12165a8df?auto=format&fit=crop&w=800&q=80',
    featured: false,
    tagline: 'Beryllium drivers in an aerospace bead-blasted charging case',
    description: 'Audiophile acoustic tuning with hybrid active noise cancellation, triple wind-resistant microphones, and IPX5 moisture resistance for workouts.',
    materialOrSpec: 'Matte Composite & Aerospace Aluminum'
  },
  {
    id: 'prod-12',
    name: 'Waffle Knit Crewneck',
    price: 3999,
    category: 'Clothing',
    image: 'https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?auto=format&fit=crop&w=800&q=80',
    featured: false,
    tagline: 'Structured honeycomb weave with pre-washed vintage drape',
    description: 'Spun from heavy 400gsm GOTS-certified organic cotton yarns. Ribbed collar, cuffs, and hem engineered to maintain structure through seasons of wear.',
    materialOrSpec: '100% GOTS Organic Cotton'
  },
  {
    id: 'prod-13',
    name: 'Hinoki Scent Diffuser',
    price: 3899,
    category: 'Home',
    image: 'https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?auto=format&fit=crop&w=800&q=80',
    featured: false,
    tagline: 'Solid cypress wood vessel for passive botanical oil evaporation',
    description: 'Turned from sustainably harvested ancient Yoshino hinoki wood. Naturally releases woodsy therapeutic notes without synthetic sprays or electrical cords.',
    materialOrSpec: 'Solid Japanese Cypress (Hinoki)'
  },
  {
    id: 'prod-14',
    name: 'Suede Chelsea Boots',
    price: 14499,
    category: 'Footwear',
    image: 'https://images.unsplash.com/photo-1638247025967-b4e38f787b76?auto=format&fit=crop&w=800&q=80',
    featured: true,
    tagline: 'Waxed waterproof suede with Goodyear welted crepe sole',
    description: 'An understated silhouette that softens with every mile. Hand-lasted in Portugal with elasticated side gussets and reinforced vegetable-tanned pull tabs.',
    materialOrSpec: 'Waxed Reverse Suede & Natural Crepe'
  },
  {
    id: 'prod-15',
    name: 'MagSafe Charging Dock',
    price: 6999,
    category: 'Electronics',
    image: 'https://images.unsplash.com/photo-1586105251261-72a756497a11?auto=format&fit=crop&w=800&q=80',
    featured: false,
    tagline: 'Solid walnut block with integrated 15W Qi2 wireless coils',
    description: 'Sculpted from a single block of FSC-certified American walnut with weighted steel base. Seamlessly positions phone and watch at optimal viewing angles.',
    materialOrSpec: 'American Walnut & Braided Kevlar Cable'
  },
  {
    id: 'prod-16',
    name: 'Titanium Sunglasses',
    price: 15999,
    category: 'Accessories',
    image: 'https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&w=800&q=80',
    featured: false,
    tagline: 'Ultralight 14g beta-titanium frame with Carl Zeiss lenses',
    description: 'Engineered for seamless all-day comfort. Features screwless German barrel hinges and category 3 polarized lenses with anti-reflective interior coating.',
    materialOrSpec: 'Japanese Beta-Titanium & Zeiss CR-39 Lenses'
  },
  {
    id: 'prod-17',
    name: 'All-Terrain Running Shoes',
    price: 12999,
    category: 'Footwear',
    image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=800&q=80',
    featured: false,
    tagline: 'Ripstop Cordura upper with responsive nitrogen-infused foam',
    description: 'Built for mixed terrain and urban weather. Features waterproof bootie construction, 5mm multi-directional lugs, and swift-lace tensioning system.',
    materialOrSpec: 'Cordura Ripstop & Vibram Megagrip'
  },
  {
    id: 'prod-18',
    name: 'Fluted Glassware Set',
    price: 2999,
    category: 'Home',
    image: 'https://images.unsplash.com/photo-1574096079513-d8259312b785?auto=format&fit=crop&w=800&q=80',
    featured: false,
    tagline: 'Ultra-thin lead-free crystal with tactile vertical fluting',
    description: 'Each glass is individually mouth-blown by master glassblowers. Exceptional clarity with laser-cut rims designed for signature cocktails and sparkling water.',
    materialOrSpec: 'Lead-Free Borosilicate Crystal Glass'
  },
  {
    id: 'prod-19',
    name: 'Cashmere Scarf',
    price: 6499,
    category: 'Accessories',
    image: 'https://images.unsplash.com/photo-1607522370275-f14206abe5d3?auto=format&fit=crop&w=800&q=80',
    featured: false,
    tagline: 'Woven in Scotland using pure spring water finish',
    description: 'Spun from grade-A Mongolian cashmere with a natural teasel-brushed rippled surface. Generous 200cm length finished with classic twisted fringes.',
    materialOrSpec: '100% Grade-A Cashmere'
  },
  {
    id: 'prod-20',
    name: 'Minimalist Commuter Trench',
    price: 16999,
    category: 'Clothing',
    image: 'https://images.unsplash.com/photo-1544441893-675973e31985?auto=format&fit=crop&w=800&q=80',
    featured: true,
    tagline: 'Bonded 3-layer weatherproof twill with taped internal seams',
    description: 'Clean architectural cut designed to slip over suiting or casual knitwear. Breathable membrane keeps heavy rain out while maintaining a crisp drape.',
    materialOrSpec: 'Bonded 3-Layer Technical Twill'
  }
];
