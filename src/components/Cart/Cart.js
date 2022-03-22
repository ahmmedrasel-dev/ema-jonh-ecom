import React from 'react';
import './Cart.css'
const Cart = ({ cart }) => {

  // Calculation Total Price, Shipping Cost, Tax
  let total = 0;
  let shippingCost = 0;

  for (const product of cart) {
    total = total + product.price;
    shippingCost = shippingCost + product.shipping;
  }

  const tax = (total * .1).toFixed(2)
  return (
    <div className='cart-ifo'>
      <h1>Order Summary</h1>
      <p>Selected Items: {cart.length}</p>
      <p>Total Price: ${total}</p>
      <p>Shipping Charge: ${shippingCost}</p>
      <p>Tax: ${tax}</p>
      <h3>Grand Total: $1559.00</h3>
      <button className='clear-cart'>Clear Cart</button>
      <button className='review-order'>Review Order</button>
    </div>
  );
};

export default Cart;