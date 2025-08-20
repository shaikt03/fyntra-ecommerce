import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { categories, featuredProducts, bestSellers } from '../data/products';
import ProductCard from '../components/ProductCard';

const Home = () => {
  useEffect(() => {
    // jQuery animation when component mounts
    if (window.$) {
      window.$('.hero-section').hide().fadeIn(1000);
      window.$('.category-card').hide().fadeIn(1500);
    }
  }, []);

  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <h1 className="display-4 fw-bold mb-4">
                Discover Modern Living
              </h1>
              <p className="lead mb-4">
                Transform your space with our curated collection of modern furniture, 
                electronics, and home essentials. Quality meets style in every piece.
              </p>
              <Link to="/category/furniture" className="btn btn-primary btn-lg me-3">
                Shop Furniture
              </Link>
              <Link to="/category/electronics" className="btn btn-outline-light btn-lg">
                View Electronics
              </Link>
            </div>
            <div className="col-lg-6">
              <img 
                src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Modern Living Room"
                className="img-fluid rounded-3 shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-5">
        <div className="container">
          <div className="row mb-5">
            <div className="col-12 text-center">
              <h2 className="display-5 fw-bold mb-3">Shop by Category</h2>
              <p className="text-muted">Explore our diverse range of products</p>
            </div>
          </div>
          
          <div className="row g-4">
            {categories.map(category => (
              <div key={category.id} className="col-lg-4 col-md-6">
                <Link to={`/category/${category.id}`} className="text-decoration-none">
                  <div className="card category-card h-100 border-0 shadow-sm">
                    <div className="card-img-top position-relative" style={{ height: '200px', overflow: 'hidden' }}>
                      <img 
                        src={category.image}
                        alt={category.name}
                        className="w-100 h-100"
                        style={{ objectFit: 'cover', transition: 'transform 0.3s ease' }}
                        onMouseEnter={(e) => e.target.style.transform = 'scale(1.05)'}
                        onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
                      />
                      <div className="position-absolute top-0 start-0 w-100 h-100 bg-dark bg-opacity-25 d-flex align-items-end">
                        <div className="text-white p-3">
                          <h5 className="card-title mb-1">{category.name}</h5>
                          <p className="card-text mb-0">{category.description}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="py-5 bg-light">
        <div className="container">
          <div className="row mb-5">
            <div className="col-12 text-center">
              <h2 className="display-5 fw-bold mb-3">Featured Products</h2>
              <p className="text-muted">Handpicked items just for you</p>
            </div>
          </div>
          
          <div className="row g-4">
            {featuredProducts.map(product => (
              <div key={product.id} className="col-lg-4 col-md-6">
                <ProductCard product={product} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Best Sellers Section */}
      <section className="py-5">
        <div className="container">
          <div className="row mb-5">
            <div className="col-12 text-center">
              <h2 className="display-5 fw-bold mb-3">Best Sellers</h2>
              <p className="text-muted">Most popular items among our customers</p>
            </div>
          </div>
          
          <div className="row g-4">
            {bestSellers.slice(0, 6).map(product => (
              <div key={product.id} className="col-lg-4 col-md-6">
                <ProductCard product={product} />
              </div>
            ))}
          </div>
          
          <div className="text-center mt-5">
            <Link to="/category/furniture" className="btn btn-primary btn-lg">
              View All Products
            </Link>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="bg-primary text-white py-5">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8 text-center">
              <h2 className="display-6 fw-bold mb-3">Stay Updated</h2>
              <p className="lead mb-4">
                Get the latest updates on new products, special offers, and design inspiration.
              </p>
              <div className="row justify-content-center">
                <div className="col-md-6">
                  <div className="input-group input-group-lg">
                    <input 
                      type="email" 
                      className="form-control" 
                      placeholder="Enter your email"
                    />
                    <button className="btn btn-secondary" type="button">
                      Subscribe
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
