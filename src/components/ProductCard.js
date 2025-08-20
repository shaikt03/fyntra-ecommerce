import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();

  const handleQuickAdd = (e) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product, 1);
    
    // jQuery animation for feedback
    if (window.$) {
      window.$(`#product-${product.id}`).addClass('animate__animated animate__pulse');
      setTimeout(() => {
        window.$(`#product-${product.id}`).removeClass('animate__animated animate__pulse');
      }, 1000);
    }
  };

  const renderStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    
    for (let i = 0; i < fullStars; i++) {
      stars.push(<i key={i} className="fas fa-star text-warning"></i>);
    }
    
    if (hasHalfStar) {
      stars.push(<i key="half" className="fas fa-star-half-alt text-warning"></i>);
    }
    
    const emptyStars = 5 - Math.ceil(rating);
    for (let i = 0; i < emptyStars; i++) {
      stars.push(<i key={`empty-${i}`} className="far fa-star text-warning"></i>);
    }
    
    return stars;
  };

  const discountPercentage = product.originalPrice 
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : 0;

  return (
    <div className="card h-100 shadow-sm border-0 product-card" id={`product-${product.id}`}>
      <div className="position-relative">
        <Link to={`/product/${product.id}`}>
          <img 
            src={product.image} 
            className="card-img-top" 
            alt={product.name}
            style={{ height: '250px', objectFit: 'cover' }}
          />
        </Link>
        
        {/* Discount badge */}
        {discountPercentage > 0 && (
          <span className="position-absolute top-0 start-0 badge bg-danger m-2">
            -{discountPercentage}%
          </span>
        )}
        
        {/* Quick add button */}
        <button 
          className="btn btn-primary position-absolute top-0 end-0 m-2 btn-sm"
          onClick={handleQuickAdd}
          title="Quick Add to Cart"
        >
          <i className="fas fa-plus"></i>
        </button>
        
        {/* Stock status */}
        {!product.inStock && (
          <div className="position-absolute bottom-0 start-0 w-100 bg-dark bg-opacity-75 text-white text-center py-2">
            <small>Out of Stock</small>
          </div>
        )}
      </div>
      
      <div className="card-body d-flex flex-column p-3">
        <Link to={`/product/${product.id}`} className="text-decoration-none text-dark">
          <h6 className="card-title mb-2 fw-semibold">{product.name}</h6>
        </Link>
        
        <p className="card-text text-muted small mb-2" style={{ 
          display: '-webkit-box',
          WebkitLineClamp: 2,
          WebkitBoxOrient: 'vertical',
          overflow: 'hidden'
        }}>
          {product.description}
        </p>
        
        {/* Rating */}
        <div className="mb-2">
          <div className="d-flex align-items-center">
            <div className="me-2">
              {renderStars(product.rating)}
            </div>
            <small className="text-muted">
              {product.rating} ({product.reviews} reviews)
            </small>
          </div>
        </div>
        
        {/* Price */}
        <div className="mb-3 mt-auto">
          <span className="product-price">${product.price.toFixed(2)}</span>
          {product.originalPrice && (
            <span className="text-muted text-decoration-line-through ms-2">
              ${product.originalPrice.toFixed(2)}
            </span>
          )}
        </div>
        
        {/* Add to cart button */}
        <div className="d-grid">
          <Link 
            to={`/product/${product.id}`}
            className="btn btn-outline-primary btn-sm"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
