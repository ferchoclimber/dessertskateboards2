// components/Cart.js
import React from 'react';

const Cart = () => (
  <div id="cart" className="cart">
    <h2>Shopping Cart</h2>
    <ul id="cart-items">
      {/* Items will be dynamically added here */}
    </ul>
    <button onClick={clearCart}>Clear Cart</button>
  </div>
);

const clearCart = () => {
  // Logic to clear cart
};

export default Cart;
