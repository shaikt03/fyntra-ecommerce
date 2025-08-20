import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { products, categories } from '../data/products';
import ProductCard from '../components/ProductCard';

const ProductCatalog = () => {
  const { categoryName } = useParams();
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [sortBy, setSortBy] = useState('name');
  const [priceRange, setPriceRange] = useState('all');
  const [currentCategory, setCurrentCategory] = useState(null);

  useEffect(() => {
    const category = categories.find(cat => cat.id === categoryName);
    setCurrentCategory(category);
    
    let filtered = products.filter(product => product.category === categoryName);
    
    // Apply price filter
    if (priceRange !== 'all') {
      const [min, max] = priceRange.split('-').map(Number);
      filtered = filtered.filter(product => {
        if (max) {
          return product.price >= min && product.price <= max;
        } else {
          return product.price >= min;
        }
      });
    }
    
    // Apply sorting
    filtered.sort((a, b) => {
      switch (sortBy) {
        case 'price-low':
          return a.price - b.price;
        case 'price-high':
          return b.price - a.price;
        case 'rating':
          return b.rating - a.rating;
        case 'reviews':
          return b.reviews - a.reviews;
        case 'name':
        default:
          return a.name.localeCompare(b.name);
      }
    });
    
    setFilteredProducts(filtered);
  }, [categoryName, sortBy, priceRange]);

  const handleSortChange = (e) => {
    setSortBy(e.target.value);
  };

  const handlePriceRangeChange = (e) => {
    setPriceRange(e.target.value);
  };

  if (!currentCategory) {
    return (
      <div className="container py-5">
        <div className="text-center">
          <h2>Category not found</h2>
          <p>The category you're looking for doesn't exist.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="container py-4">
      {/* Category Header */}
      <div className="row mb-4">
        <div className="col-12">
          <div className="card bg-light border-0 p-4">
            <div className="row align-items-center">
              <div className="col-md-8">
                <h1 className="display-6 fw-bold mb-2">{currentCategory.name}</h1>
                <p className="lead text-muted mb-0">{currentCategory.description}</p>
              </div>
              <div className="col-md-4 text-md-end">
                <img 
                  src={currentCategory.image} 
                  alt={currentCategory.name}
                  className="img-fluid rounded"
                  style={{ maxHeight: '100px', objectFit: 'cover' }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Filters and Sort */}
      <div className="row mb-4">
        <div className="col-12">
          <div className="card border-0 shadow-sm">
            <div className="card-body">
              <div className="row align-items-center">
                <div className="col-md-4">
                  <label className="form-label fw-semibold">Sort by:</label>
                  <select 
                    className="form-select"
                    value={sortBy}
                    onChange={handleSortChange}
                  >
                    <option value="name">Name (A-Z)</option>
                    <option value="price-low">Price: Low to High</option>
                    <option value="price-high">Price: High to Low</option>
                    <option value="rating">Rating</option>
                    <option value="reviews">Most Reviews</option>
                  </select>
                </div>
                
                <div className="col-md-4">
                  <label className="form-label fw-semibold">Price Range:</label>
                  <select 
                    className="form-select"
                    value={priceRange}
                    onChange={handlePriceRangeChange}
                  >
                    <option value="all">All Prices</option>
                    <option value="0-50">$0 - $50</option>
                    <option value="50-100">$50 - $100</option>
                    <option value="100-300">$100 - $300</option>
                    <option value="300-600">$300 - $600</option>
                    <option value="600">$600+</option>
                  </select>
                </div>
                
                <div className="col-md-4 d-flex align-items-end">
                  <div className="text-muted">
                    <i className="fas fa-box me-1"></i>
                    {filteredProducts.length} products found
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Products Grid */}
      {filteredProducts.length > 0 ? (
        <div className="row g-4">
          {filteredProducts.map(product => (
            <div key={product.id} className="col-lg-4 col-md-6">
              <ProductCard product={product} />
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center py-5">
          <div className="card border-0">
            <div className="card-body py-5">
              <i className="fas fa-search fa-3x text-muted mb-3"></i>
              <h3 className="text-muted">No products found</h3>
              <p className="text-muted">
                Try adjusting your filters or search for something else.
              </p>
              <button 
                className="btn btn-outline-primary"
                onClick={() => {
                  setSortBy('name');
                  setPriceRange('all');
                }}
              >
                Clear Filters
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Load More Button (placeholder for pagination) */}
      {filteredProducts.length > 9 && (
        <div className="text-center mt-5">
          <button className="btn btn-outline-primary btn-lg">
            Load More Products
          </button>
        </div>
      )}
    </div>
  );
};

export default ProductCatalog;
