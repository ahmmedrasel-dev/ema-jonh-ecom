import React from 'react';
import './Cart.css'
const Cart = (props) => {
  const { cart } = props

  // Calculation Total Price, Shipping Cost, Tax
  let total = 0;
  let shippingCost = 0;
  let quantity = 0;
  for (const product of cart) {
    quantity = quantity + product.quantity
    total = total + product.price * product.quantity;
    shippingCost = shippingCost + product.shipping;
  }
  const tax = (total * .1).toFixed(2)
  const grandTotal = total + shippingCost + parseFloat(tax);

  return (
    <div className='cart-ifo'>
      <h1>Order Summary</h1>
      <p>Selected Items: {quantity}</p>
      <p>Total Price: ${total}</p>
      <p>Shipping Charge: ${shippingCost}</p>
      <p>Tax: ${tax}</p>
      <h3>Grand Total: ${grandTotal.toFixed(2)}</h3>
      <button className='clear-cart'>Clear Cart</button>
      {props.children}
    </div>
  );
};

export default Cart;