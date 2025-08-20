export const categories = [
  {
    id: 'furniture',
    name: 'Furniture',
    description: 'Modern and stylish furniture for your home',
    image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'
  },
  {
    id: 'electronics',
    name: 'Electronics',
    description: 'Latest technology and gadgets',
    image: 'https://images.unsplash.com/photo-1498049794561-7780e7231661?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'
  },
  {
    id: 'clothing',
    name: 'Clothing',
    description: 'Fashion and apparel for all occasions',
    image: 'https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'
  },
  {
    id: 'home-decor',
    name: 'Home Decor',
    description: 'Beautiful decorative items for your space',
    image: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'
  },
  {
    id: 'books',
    name: 'Books',
    description: 'Knowledge and entertainment in print',
    image: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'
  },
  {
    id: 'sports',
    name: 'Sports & Outdoors',
    description: 'Equipment for active lifestyle',
    image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'
  }
];

export const products = [
  // Furniture Products
  {
    id: 1,
    name: 'Modern Scandinavian Sofa',
    description: 'A beautiful and comfortable 3-seater sofa with clean lines and premium fabric upholstery. Perfect for modern living rooms.',
    price: 899.99,
    originalPrice: 1199.99,
    category: 'furniture',
    image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    rating: 4.8,
    reviews: 124,
    inStock: true,
    features: ['Premium fabric upholstery', 'Solid wood frame', 'Easy assembly', '3-year warranty'],
    colors: ['Gray', 'Beige', 'Navy Blue']
  },
  {
    id: 2,
    name: 'Minimalist Dining Table',
    description: 'Elegant oak wood dining table that seats up to 6 people. Features a sleek design perfect for modern homes.',
    price: 649.99,
    originalPrice: 849.99,
    category: 'furniture',
    image: 'https://images.unsplash.com/photo-1549497538-303791108f95?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    rating: 4.6,
    reviews: 89,
    inStock: true,
    features: ['Solid oak wood', 'Seats up to 6', 'Water-resistant finish', 'Easy to clean'],
    colors: ['Natural Oak', 'Dark Walnut', 'White Oak']
  },
  {
    id: 3,
    name: 'Ergonomic Office Chair',
    description: 'Professional office chair with lumbar support and adjustable height. Perfect for long working hours.',
    price: 299.99,
    originalPrice: 399.99,
    category: 'furniture',
    image: 'https://images.unsplash.com/photo-1541558869434-2840d308329a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    rating: 4.7,
    reviews: 203,
    inStock: true,
    features: ['Lumbar support', 'Height adjustable', 'Breathable mesh', '360° swivel'],
    colors: ['Black', 'Gray', 'White']
  },
  {
    id: 4,
    name: 'Industrial Bookshelf',
    description: 'Five-tier bookshelf with metal frame and wooden shelves. Industrial design meets functionality.',
    price: 179.99,
    originalPrice: 229.99,
    category: 'furniture',
    image: 'https://images.unsplash.com/photo-1594736797933-d0d6c706cf17?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    rating: 4.5,
    reviews: 67,
    inStock: true,
    features: ['5 spacious shelves', 'Metal and wood construction', 'Industrial design', 'Easy assembly'],
    colors: ['Natural Wood', 'Dark Brown']
  },

  // Electronics Products
  {
    id: 5,
    name: 'Wireless Noise-Canceling Headphones',
    description: 'Premium wireless headphones with active noise cancellation and 30-hour battery life.',
    price: 249.99,
    originalPrice: 349.99,
    category: 'electronics',
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    rating: 4.9,
    reviews: 1456,
    inStock: true,
    features: ['Active noise cancellation', '30-hour battery', 'Quick charge', 'Premium sound quality'],
    colors: ['Black', 'Silver', 'Rose Gold']
  },
  {
    id: 6,
    name: '4K Smart TV 55"',
    description: 'Ultra-high definition smart TV with HDR support and built-in streaming apps.',
    price: 599.99,
    originalPrice: 799.99,
    category: 'electronics',
    image: 'https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    rating: 4.6,
    reviews: 892,
    inStock: true,
    features: ['4K UHD resolution', 'HDR support', 'Smart TV features', 'Multiple HDMI ports'],
    colors: ['Black']
  },
  {
    id: 7,
    name: 'Wireless Charging Pad',
    description: 'Fast wireless charging pad compatible with all Qi-enabled devices.',
    price: 29.99,
    originalPrice: 49.99,
    category: 'electronics',
    image: 'https://images.unsplash.com/photo-1609091839311-d5365f9ff1c5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    rating: 4.4,
    reviews: 324,
    inStock: true,
    features: ['Fast charging', 'Qi-compatible', 'LED indicator', 'Non-slip surface'],
    colors: ['Black', 'White']
  },

  // Clothing Products
  {
    id: 8,
    name: 'Premium Cotton T-Shirt',
    description: 'Soft and comfortable 100% organic cotton t-shirt with a modern fit.',
    price: 24.99,
    originalPrice: 34.99,
    category: 'clothing',
    image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    rating: 4.5,
    reviews: 189,
    inStock: true,
    features: ['100% organic cotton', 'Modern fit', 'Pre-shrunk', 'Machine washable'],
    colors: ['White', 'Black', 'Gray', 'Navy'],
    sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL']
  },
  {
    id: 9,
    name: 'Denim Jacket',
    description: 'Classic denim jacket with a vintage wash and comfortable fit.',
    price: 79.99,
    originalPrice: 99.99,
    category: 'clothing',
    image: 'https://images.unsplash.com/photo-1544022613-e87ca75a784a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    rating: 4.7,
    reviews: 156,
    inStock: true,
    features: ['Classic fit', 'Vintage wash', 'Button closure', 'Multiple pockets'],
    colors: ['Light Blue', 'Dark Blue', 'Black'],
    sizes: ['XS', 'S', 'M', 'L', 'XL']
  },

  // Home Decor Products
  {
    id: 10,
    name: 'Ceramic Vase Set',
    description: 'Set of 3 modern ceramic vases in different sizes. Perfect for home decoration.',
    price: 45.99,
    originalPrice: 65.99,
    category: 'home-decor',
    image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    rating: 4.6,
    reviews: 78,
    inStock: true,
    features: ['Set of 3 vases', 'Modern design', 'High-quality ceramic', 'Different sizes'],
    colors: ['White', 'Black', 'Terracotta']
  },
  {
    id: 11,
    name: 'Abstract Wall Art',
    description: 'Modern abstract canvas print that adds sophistication to any room.',
    price: 89.99,
    originalPrice: 129.99,
    category: 'home-decor',
    image: 'https://images.unsplash.com/photo-1541961017774-22349e4a1262?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    rating: 4.8,
    reviews: 92,
    inStock: true,
    features: ['Canvas print', 'Ready to hang', 'Fade-resistant', 'Modern design'],
    colors: ['Multicolor']
  },

  // Books
  {
    id: 12,
    name: 'The Art of Clean Code',
    description: 'Essential guide for software developers to write maintainable and efficient code.',
    price: 34.99,
    originalPrice: 44.99,
    category: 'books',
    image: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    rating: 4.9,
    reviews: 567,
    inStock: true,
    features: ['Paperback edition', '350+ pages', 'Practical examples', 'Expert insights'],
    colors: ['N/A']
  },

  // Sports & Outdoors
  {
    id: 13,
    name: 'Yoga Mat Premium',
    description: 'Non-slip yoga mat with excellent cushioning and grip for all types of yoga practice.',
    price: 39.99,
    originalPrice: 59.99,
    category: 'sports',
    image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    rating: 4.7,
    reviews: 234,
    inStock: true,
    features: ['Non-slip surface', '6mm thickness', 'Eco-friendly material', 'Carrying strap included'],
    colors: ['Purple', 'Blue', 'Pink', 'Black']
  },
  {
    id: 14,
    name: 'Resistance Bands Set',
    description: 'Complete set of resistance bands for home workouts and strength training.',
    price: 24.99,
    originalPrice: 39.99,
    category: 'sports',
    image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    rating: 4.5,
    reviews: 445,
    inStock: true,
    features: ['5 resistance levels', 'Door anchor included', 'Carrying bag', 'Exercise guide'],
    colors: ['Multicolor']
  }
];

// Featured products for homepage
export const featuredProducts = products.filter(product => [1, 5, 8, 10, 12, 13].includes(product.id));

// Best sellers
export const bestSellers = products.filter(product => product.reviews > 200);

export default { products, categories, featuredProducts, bestSellers };
