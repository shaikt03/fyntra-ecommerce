import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';

const Cart = () => {
  const { 
    cart, 
    removeFromCart, 
    updateQuantity, 
    clearCart, 
    getCartTotal, 
    getCartItemsCount 
  } = useCart();
  
  const [showCheckout, setShowCheckout] = useState(false);
  const [checkoutData, setCheckoutData] = useState({
    email: '',
    firstName: '',
    lastName: '',
    address: '',
    city: '',
    zipCode: '',
    paymentMethod: 'credit'
  });

  useEffect(() => {
    // jQuery animation on mount
    if (window.$) {
      window.$('.cart-container').hide().fadeIn(600);
    }
  }, []);

  const handleQuantityChange = (cartItemId, newQuantity) => {
    updateQuantity(cartItemId, newQuantity);
  };

  const handleRemoveItem = (cartItemId) => {
    // jQuery animation before removal
    if (window.$) {
      window.$(`#cart-item-${cartItemId}`).fadeOut(300, () => {
        removeFromCart(cartItemId);
      });
    } else {
      removeFromCart(cartItemId);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCheckoutData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleCheckout = (e) => {
    e.preventDefault();
    
    // Basic form validation with jQuery
    if (window.$) {
      let hasErrors = false;
      
      // Reset previous errors
      window.$('.is-invalid').removeClass('is-invalid');
      
      // Check required fields
      Object.keys(checkoutData).forEach(key => {
        if (!checkoutData[key] && key !== 'paymentMethod') {
          window.$(`[name="${key}"]`).addClass('is-invalid');
          hasErrors = true;
        }
      });
      
      if (hasErrors) {
        window.$('.checkout-error').fadeIn(300);
        return;
      } else {
        window.$('.checkout-error').fadeOut(300);
      }
    }
    
    // Simulate order processing
    alert(`Order placed successfully! Total: $${getCartTotal().toFixed(2)}`);
    clearCart();
    setShowCheckout(false);
  };

  const cartTotal = getCartTotal();
  const tax = cartTotal * 0.08; // 8% tax
  const shipping = cartTotal > 50 ? 0 : 9.99;
  const finalTotal = cartTotal + tax + shipping;

  if (cart.length === 0) {
    return (
      <div className="container py-5">
        <div className="text-center cart-container">
          <div className="card border-0">
            <div className="card-body py-5">
              <i className="fas fa-shopping-cart fa-5x text-muted mb-4"></i>
              <h2 className="text-muted mb-3">Your cart is empty</h2>
              <p className="text-muted mb-4">
                Looks like you haven't added any items to your cart yet.
              </p>
              <Link to="/" className="btn btn-primary btn-lg">
                Continue Shopping
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="container py-4 cart-container">
      <h1 className="h2 fw-bold mb-4">Shopping Cart</h1>
      
      <div className="row">
        {/* Cart Items */}
        <div className="col-lg-8">
          <div className="card border-0 shadow-sm mb-4">
            <div className="card-header bg-white border-0 py-3">
              <div className="row align-items-center">
                <div className="col">
                  <h5 className="mb-0">
                    Cart Items ({getCartItemsCount()})
                  </h5>
                </div>
                <div className="col-auto">
                  <button 
                    className="btn btn-outline-danger btn-sm"
                    onClick={clearCart}
                  >
                    <i className="fas fa-trash me-1"></i>
                    Clear Cart
                  </button>
                </div>
              </div>
            </div>
            
            <div className="card-body p-0">
              {cart.map((item) => (
                <div 
                  key={item.cartItemId} 
                  id={`cart-item-${item.cartItemId}`}
                  className="border-bottom p-3"
                >
                  <div className="row align-items-center">
                    {/* Product Image */}
                    <div className="col-md-2 mb-3 mb-md-0">
                      <Link to={`/product/${item.id}`}>
                        <img 
                          src={item.image} 
                          alt={item.name}
                          className="img-fluid rounded"
                          style={{ maxHeight: '80px', objectFit: 'cover' }}
                        />
                      </Link>
                    </div>
                    
                    {/* Product Info */}
                    <div className="col-md-4 mb-3 mb-md-0">
                      <Link 
                        to={`/product/${item.id}`} 
                        className="text-decoration-none text-dark"
                      >
                        <h6 className="fw-semibold mb-1">{item.name}</h6>
                      </Link>
                      {item.selectedColor && (
                        <small className="text-muted d-block">
                          Color: {item.selectedColor}
                        </small>
                      )}
                      {item.selectedSize && (
                        <small className="text-muted d-block">
                          Size: {item.selectedSize}
                        </small>
                      )}
                    </div>
                    
                    {/* Quantity */}
                    <div className="col-md-2 mb-3 mb-md-0">
                      <div className="input-group input-group-sm" style={{ maxWidth: '100px' }}>
                        <button 
                          className="btn btn-outline-secondary"
                          onClick={() => handleQuantityChange(item.cartItemId, item.quantity - 1)}
                        >
                          -
                        </button>
                        <input 
                          type="number" 
                          className="form-control text-center"
                          value={item.quantity}
                          onChange={(e) => handleQuantityChange(item.cartItemId, parseInt(e.target.value) || 1)}
                          min="1"
                        />
                        <button 
                          className="btn btn-outline-secondary"
                          onClick={() => handleQuantityChange(item.cartItemId, item.quantity + 1)}
                        >
                          +
                        </button>
                      </div>
                    </div>
                    
                    {/* Price */}
                    <div className="col-md-2 mb-3 mb-md-0">
                      <div className="fw-semibold product-price">
                        ${(item.price * item.quantity).toFixed(2)}
                      </div>
                      <small className="text-muted">
                        ${item.price.toFixed(2)} each
                      </small>
                    </div>
                    
                    {/* Remove Button */}
                    <div className="col-md-2 text-end">
                      <button 
                        className="btn btn-outline-danger btn-sm"
                        onClick={() => handleRemoveItem(item.cartItemId)}
                      >
                        <i className="fas fa-times"></i>
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Continue Shopping */}
          <Link to="/" className="btn btn-outline-primary">
            <i className="fas fa-arrow-left me-2"></i>
            Continue Shopping
          </Link>
        </div>
        
        {/* Order Summary */}
        <div className="col-lg-4">
          <div className="card border-0 shadow-sm">
            <div className="card-header bg-white border-0 py-3">
              <h5 className="mb-0">Order Summary</h5>
            </div>
            
            <div className="card-body">
              <div className="d-flex justify-content-between mb-2">
                <span>Subtotal:</span>
                <span>${cartTotal.toFixed(2)}</span>
              </div>
              
              <div className="d-flex justify-content-between mb-2">
                <span>Tax:</span>
                <span>${tax.toFixed(2)}</span>
              </div>
              
              <div className="d-flex justify-content-between mb-3">
                <span>Shipping:</span>
                <span>
                  {shipping === 0 ? 'FREE' : `$${shipping.toFixed(2)}`}
                </span>
              </div>
              
              <hr />
              
              <div className="d-flex justify-content-between mb-4">
                <strong>Total:</strong>
                <strong className="product-price fs-5">
                  ${finalTotal.toFixed(2)}
                </strong>
              </div>
              
              {cartTotal < 50 && (
                <div className="alert alert-info">
                  <small>
                    <i className="fas fa-info-circle me-1"></i>
                    Add ${(50 - cartTotal).toFixed(2)} more for free shipping!
                  </small>
                </div>
              )}
              
              <div className="d-grid">
                <button 
                  className="btn btn-primary btn-lg"
                  onClick={() => setShowCheckout(!showCheckout)}
                >
                  {showCheckout ? 'Hide Checkout' : 'Proceed to Checkout'}
                </button>
              </div>
            </div>
          </div>
          
          {/* Checkout Form */}
          {showCheckout && (
            <div className="card border-0 shadow-sm mt-4">
              <div className="card-header bg-white border-0 py-3">
                <h5 className="mb-0">Checkout</h5>
              </div>
              
              <div className="card-body">
                <div className="checkout-error alert alert-danger" style={{ display: 'none' }}>
                  Please fill in all required fields.
                </div>
                
                <form onSubmit={handleCheckout}>
                  <div className="mb-3">
                    <label className="form-label">Email*</label>
                    <input 
                      type="email" 
                      className="form-control"
                      name="email"
                      value={checkoutData.email}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  
                  <div className="row mb-3">
                    <div className="col-md-6">
                      <label className="form-label">First Name*</label>
                      <input 
                        type="text" 
                        className="form-control"
                        name="firstName"
                        value={checkoutData.firstName}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                    <div className="col-md-6">
                      <label className="form-label">Last Name*</label>
                      <input 
                        type="text" 
                        className="form-control"
                        name="lastName"
                        value={checkoutData.lastName}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                  </div>
                  
                  <div className="mb-3">
                    <label className="form-label">Address*</label>
                    <input 
                      type="text" 
                      className="form-control"
                      name="address"
                      value={checkoutData.address}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  
                  <div className="row mb-3">
                    <div className="col-md-8">
                      <label className="form-label">City*</label>
                      <input 
                        type="text" 
                        className="form-control"
                        name="city"
                        value={checkoutData.city}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                    <div className="col-md-4">
                      <label className="form-label">ZIP Code*</label>
                      <input 
                        type="text" 
                        className="form-control"
                        name="zipCode"
                        value={checkoutData.zipCode}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                  </div>
                  
                  <div className="mb-4">
                    <label className="form-label">Payment Method</label>
                    <select 
                      className="form-select"
                      name="paymentMethod"
                      value={checkoutData.paymentMethod}
                      onChange={handleInputChange}
                    >
                      <option value="credit">Credit Card</option>
                      <option value="debit">Debit Card</option>
                      <option value="paypal">PayPal</option>
                    </select>
                  </div>
                  
                  <div className="d-grid">
                    <button type="submit" className="btn btn-success btn-lg">
                      <i className="fas fa-credit-card me-2"></i>
                      Place Order (${finalTotal.toFixed(2)})
                    </button>
                  </div>
                </form>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Cart;
