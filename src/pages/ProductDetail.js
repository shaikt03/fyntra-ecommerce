import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { products } from '../data/products';
import { useCart } from '../context/CartContext';

const ProductDetail = () => {
  const { productId } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  
  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [selectedColor, setSelectedColor] = useState('');
  const [selectedSize, setSelectedSize] = useState('');
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [showAddedMessage, setShowAddedMessage] = useState(false);

  useEffect(() => {
    const foundProduct = products.find(p => p.id === parseInt(productId));
    if (foundProduct) {
      setProduct(foundProduct);
      setSelectedColor(foundProduct.colors?.[0] || '');
      setSelectedSize(foundProduct.sizes?.[0] || '');
    }
  }, [productId]);

  useEffect(() => {
    // jQuery animations on mount
    if (window.$) {
      window.$('.product-detail').hide().fadeIn(800);
    }
  }, [product]);

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

  const handleAddToCart = () => {
    addToCart(product, quantity, selectedColor, selectedSize);
    setShowAddedMessage(true);
    
    // jQuery animation for success message
    if (window.$) {
      window.$('.success-message').fadeIn(300);
      setTimeout(() => {
        window.$('.success-message').fadeOut(300);
        setShowAddedMessage(false);
      }, 2000);
    }
  };

  const handleBuyNow = () => {
    addToCart(product, quantity, selectedColor, selectedSize);
    navigate('/cart');
  };

  const discountPercentage = product?.originalPrice 
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : 0;

  if (!product) {
    return (
      <div className="container py-5">
        <div className="text-center">
          <h2>Product not found</h2>
          <p>The product you're looking for doesn't exist.</p>
          <Link to="/" className="btn btn-primary">Return to Home</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="container py-4 product-detail">
      {/* Breadcrumb */}
      <nav aria-label="breadcrumb" className="mb-4">
        <ol className="breadcrumb">
          <li className="breadcrumb-item"><Link to="/">Home</Link></li>
          <li className="breadcrumb-item">
            <Link to={`/category/${product.category}`}>
              {product.category.charAt(0).toUpperCase() + product.category.slice(1)}
            </Link>
          </li>
          <li className="breadcrumb-item active">{product.name}</li>
        </ol>
      </nav>

      {/* Success Message */}
      {showAddedMessage && (
        <div className="success-message alert alert-success alert-dismissible fade show" role="alert">
          <i className="fas fa-check-circle me-2"></i>
          Product added to cart successfully!
        </div>
      )}

      <div className="row">
        {/* Product Image */}
        <div className="col-lg-6 mb-4">
          <div className="card border-0">
            <img 
              src={product.image} 
              className="card-img-top rounded"
              alt={product.name}
              style={{ height: '400px', objectFit: 'cover' }}
            />
          </div>
        </div>

        {/* Product Info */}
        <div className="col-lg-6">
          <div className="card border-0">
            <div className="card-body p-0">
              {/* Product Title and Rating */}
              <h1 className="h2 fw-bold mb-3">{product.name}</h1>
              
              <div className="d-flex align-items-center mb-3">
                <div className="me-3">
                  {renderStars(product.rating)}
                </div>
                <span className="text-muted">
                  {product.rating} ({product.reviews} reviews)
                </span>
              </div>

              {/* Price */}
              <div className="mb-4">
                <span className="h3 product-price">${product.price.toFixed(2)}</span>
                {product.originalPrice && (
                  <>
                    <span className="text-muted text-decoration-line-through ms-2 h5">
                      ${product.originalPrice.toFixed(2)}
                    </span>
                    <span className="badge bg-danger ms-2">
                      Save {discountPercentage}%
                    </span>
                  </>
                )}
              </div>

              {/* Description */}
              <div className="mb-4">
                <h5>Description</h5>
                <p className="text-muted">{product.description}</p>
              </div>

              {/* Features */}
              {product.features && (
                <div className="mb-4">
                  <h5>Key Features</h5>
                  <ul className="list-unstyled">
                    {product.features.map((feature, index) => (
                      <li key={index} className="mb-2">
                        <i className="fas fa-check text-success me-2"></i>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Color Selection */}
              {product.colors && product.colors.length > 1 && (
                <div className="mb-4">
                  <h6 className="fw-semibold">Color: <span className="fw-normal">{selectedColor}</span></h6>
                  <div className="d-flex gap-2 flex-wrap">
                    {product.colors.map(color => (
                      <button
                        key={color}
                        className={`btn btn-outline-secondary ${selectedColor === color ? 'active' : ''}`}
                        onClick={() => setSelectedColor(color)}
                      >
                        {color}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Size Selection */}
              {product.sizes && product.sizes.length > 0 && (
                <div className="mb-4">
                  <h6 className="fw-semibold">Size: <span className="fw-normal">{selectedSize}</span></h6>
                  <div className="d-flex gap-2 flex-wrap">
                    {product.sizes.map(size => (
                      <button
                        key={size}
                        className={`btn btn-outline-secondary ${selectedSize === size ? 'active' : ''}`}
                        onClick={() => setSelectedSize(size)}
                      >
                        {size}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Quantity */}
              <div className="mb-4">
                <h6 className="fw-semibold">Quantity</h6>
                <div className="input-group" style={{ maxWidth: '120px' }}>
                  <button 
                    className="btn btn-outline-secondary"
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  >
                    -
                  </button>
                  <input 
                    type="number" 
                    className="form-control text-center"
                    value={quantity}
                    onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
                    min="1"
                  />
                  <button 
                    className="btn btn-outline-secondary"
                    onClick={() => setQuantity(quantity + 1)}
                  >
                    +
                  </button>
                </div>
              </div>

              {/* Stock Status */}
              <div className="mb-4">
                {product.inStock ? (
                  <span className="badge bg-success fs-6">
                    <i className="fas fa-check me-1"></i>In Stock
                  </span>
                ) : (
                  <span className="badge bg-danger fs-6">
                    <i className="fas fa-times me-1"></i>Out of Stock
                  </span>
                )}
              </div>

              {/* Action Buttons */}
              <div className="d-grid gap-2 d-md-block">
                <button 
                  className="btn btn-primary btn-lg me-md-2 mb-2 mb-md-0"
                  onClick={handleAddToCart}
                  disabled={!product.inStock}
                >
                  <i className="fas fa-shopping-cart me-2"></i>
                  Add to Cart
                </button>
                <button 
                  className="btn btn-success btn-lg"
                  onClick={handleBuyNow}
                  disabled={!product.inStock}
                >
                  <i className="fas fa-bolt me-2"></i>
                  Buy Now
                </button>
              </div>

              {/* Additional Info */}
              <div className="mt-4 pt-4 border-top">
                <div className="row text-center">
                  <div className="col-md-4 mb-3">
                    <i className="fas fa-shipping-fast text-primary mb-2 fs-4"></i>
                    <div className="small text-muted">Free Shipping</div>
                  </div>
                  <div className="col-md-4 mb-3">
                    <i className="fas fa-undo-alt text-primary mb-2 fs-4"></i>
                    <div className="small text-muted">30 Day Returns</div>
                  </div>
                  <div className="col-md-4 mb-3">
                    <i className="fas fa-shield-alt text-primary mb-2 fs-4"></i>
                    <div className="small text-muted">1 Year Warranty</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
