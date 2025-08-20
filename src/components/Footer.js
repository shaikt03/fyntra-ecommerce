import React from 'react';
import { Link } from 'react-router-dom';
import { categories } from '../data/products';

const Footer = () => {
  return (
    <footer className="bg-primary text-white mt-5">
      <div className="container py-5">
        <div className="row">
          {/* Brand Section */}
          <div className="col-lg-3 col-md-6 mb-4">
            <h5 className="fw-bold mb-3">
              <i className="fas fa-store me-2"></i>
              Fyntra
            </h5>
            <p className="mb-3">
              Your one-stop destination for modern furniture, electronics, and lifestyle products. 
              Quality meets style in every piece.
            </p>
            <div className="d-flex gap-3">
              <a href="#" className="text-white">
                <i className="fab fa-facebook-f fs-5"></i>
              </a>
              <a href="#" className="text-white">
                <i className="fab fa-twitter fs-5"></i>
              </a>
              <a href="#" className="text-white">
                <i className="fab fa-instagram fs-5"></i>
              </a>
              <a href="#" className="text-white">
                <i className="fab fa-linkedin-in fs-5"></i>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="col-lg-2 col-md-6 mb-4">
            <h6 className="fw-semibold mb-3">Quick Links</h6>
            <ul className="list-unstyled">
              <li className="mb-2">
                <Link to="/" className="text-white-50 text-decoration-none">Home</Link>
              </li>
              <li className="mb-2">
                <a href="#" className="text-white-50 text-decoration-none">About Us</a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-white-50 text-decoration-none">Contact</a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-white-50 text-decoration-none">Blog</a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-white-50 text-decoration-none">FAQ</a>
              </li>
            </ul>
          </div>

          {/* Categories */}
          <div className="col-lg-2 col-md-6 mb-4">
            <h6 className="fw-semibold mb-3">Categories</h6>
            <ul className="list-unstyled">
              {categories.slice(0, 5).map(category => (
                <li key={category.id} className="mb-2">
                  <Link 
                    to={`/category/${category.id}`} 
                    className="text-white-50 text-decoration-none"
                  >
                    {category.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Customer Service */}
          <div className="col-lg-2 col-md-6 mb-4">
            <h6 className="fw-semibold mb-3">Customer Service</h6>
            <ul className="list-unstyled">
              <li className="mb-2">
                <a href="#" className="text-white-50 text-decoration-none">Help Center</a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-white-50 text-decoration-none">Returns</a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-white-50 text-decoration-none">Shipping Info</a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-white-50 text-decoration-none">Track Order</a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-white-50 text-decoration-none">Size Guide</a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="col-lg-3 col-md-6 mb-4">
            <h6 className="fw-semibold mb-3">Contact Info</h6>
            <div className="mb-2">
              <i className="fas fa-map-marker-alt me-2"></i>
              <small>123 Modern Street, City, State 12345</small>
            </div>
            <div className="mb-2">
              <i className="fas fa-phone me-2"></i>
              <small>+1 (555) 123-4567</small>
            </div>
            <div className="mb-2">
              <i className="fas fa-envelope me-2"></i>
              <small>info@Fyntra.com</small>
            </div>
            <div className="mb-3">
              <i className="fas fa-clock me-2"></i>
              <small>Mon-Fri: 9AM-6PM EST</small>
            </div>
            
            {/* Newsletter Signup */}
            <div className="mt-3">
              <h6 className="fw-semibold mb-2">Newsletter</h6>
              <div className="input-group input-group-sm">
                <input 
                  type="email" 
                  className="form-control" 
                  placeholder="Your email"
                />
                <button className="btn btn-secondary" type="button">
                  <i className="fas fa-paper-plane"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="bg-dark py-3">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6">
              <p className="mb-0 small text-white-50">
                © 2024 Fyntra. All rights reserved.
              </p>
            </div>
            <div className="col-md-6 text-md-end">
              <div className="d-flex justify-content-md-end gap-3">
                <a href="#" className="text-white-50 text-decoration-none small">
                  Privacy Policy
                </a>
                <a href="#" className="text-white-50 text-decoration-none small">
                  Terms of Service
                </a>
                <a href="#" className="text-white-50 text-decoration-none small">
                  Cookie Policy
                </a>
              </div>
              <div className="mt-2 text-md-end">
                <small className="text-white-50">
                  <i className="fas fa-credit-card me-1"></i>
                  <i className="fab fa-cc-visa me-1"></i>
                  <i className="fab fa-cc-mastercard me-1"></i>
                  <i className="fab fa-cc-paypal me-1"></i>
                  <i className="fab fa-cc-apple-pay"></i>
                </small>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
