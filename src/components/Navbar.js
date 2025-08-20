import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { categories } from '../data/products';

const Navbar = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [isScrolled, setIsScrolled] = useState(false);
  const { getCartItemsCount } = useCart();
  const navigate = useNavigate();
  const cartItemsCount = getCartItemsCount();

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      // Navigate to search results (we'll implement this later)
      console.log('Searching for:', searchQuery);
      setSearchQuery('');
    }
  };

  return (
    <>
      <nav className={`navbar navbar-expand-lg navbar-light bg-white fixed-top ${isScrolled ? 'shadow' : ''}`}>
        <div className="container">
          {/* Brand */}
          <Link className="navbar-brand fw-bold fs-3" to="/">
            <i className="fas fa-store me-2 text-primary"></i>
            Fyntra
          </Link>

          {/* Toggle button for mobile */}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* Navigation items */}
          <div className="collapse navbar-collapse" id="navbarNav">
            {/* Categories dropdown */}
            <ul className="navbar-nav me-auto">
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle fw-semibold"
                  href="#"
                  id="categoriesDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                >
                  <i className="fas fa-th-large me-1"></i>
                  Categories
                </a>
                <ul className="dropdown-menu">
                  {categories.map(category => (
                    <li key={category.id}>
                      <Link
                        className="dropdown-item d-flex align-items-center"
                        to={`/category/${category.id}`}
                      >
                        <img
                          src={category.image}
                          alt={category.name}
                          style={{ width: '30px', height: '30px', objectFit: 'cover' }}
                          className="rounded me-2"
                        />
                        <div>
                          <div className="fw-semibold">{category.name}</div>
                          <small className="text-muted">{category.description}</small>
                        </div>
                      </Link>
                    </li>
                  ))}
                </ul>
              </li>
            </ul>

            {/* Search form */}
            <form className="d-flex me-3" onSubmit={handleSearch} style={{ minWidth: '300px' }}>
              <div className="input-group">
                <input
                  className="form-control"
                  type="search"
                  placeholder="Search products..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <button className="btn btn-outline-primary" type="submit">
                  <i className="fas fa-search"></i>
                </button>
              </div>
            </form>

            {/* Cart and other actions */}
            <div className="d-flex align-items-center">
              {/* Cart */}
              <Link to="/cart" className="btn btn-outline-primary position-relative me-2">
                <i className="fas fa-shopping-cart"></i>
                {cartItemsCount > 0 && (
                  <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill cart-badge">
                    {cartItemsCount > 99 ? '99+' : cartItemsCount}
                  </span>
                )}
              </Link>

              {/* Account dropdown (placeholder for future implementation) */}
              <div className="dropdown">
                <button
                  className="btn btn-outline-secondary dropdown-toggle"
                  type="button"
                  id="accountDropdown"
                  data-bs-toggle="dropdown"
                >
                  <i className="fas fa-user me-1"></i>
                  Account
                </button>
                <ul className="dropdown-menu dropdown-menu-end">
                  <li><a className="dropdown-item" href="#"><i className="fas fa-user me-2"></i>Profile</a></li>
                  <li><a className="dropdown-item" href="#"><i className="fas fa-box me-2"></i>Orders</a></li>
                  <li><a className="dropdown-item" href="#"><i className="fas fa-heart me-2"></i>Wishlist</a></li>
                  <li><hr className="dropdown-divider" /></li>
                  <li><a className="dropdown-item" href="#"><i className="fas fa-sign-out-alt me-2"></i>Logout</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Spacer for fixed navbar */}
      <div style={{ height: '76px' }}></div>
    </>
  );
};

export default Navbar;
