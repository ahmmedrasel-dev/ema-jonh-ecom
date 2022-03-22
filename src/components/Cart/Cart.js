import React from 'react';
import './Cart.css'
const Cart = ({ cart }) => {
  return (
    <div>
      <h1>Order Summary</h1>
      <p>Selected Items: {cart.length}</p>
      <p>Total Price: $1230.00</p>
      <p>Total Shipping Charge: $10.00</p>
      <p>Tax: $120</p>
      <h3>Grand Total: $1559.00</h3>
      <button className='clear-cart'>Clear Cart</button>
      <button className='review-order'>Review Order</button>
    </div>
  );
};

export default Cart;