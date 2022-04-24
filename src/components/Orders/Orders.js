import React from 'react';
import { Link } from 'react-router-dom';
import useCart from '../../hooks/useCart';
import { removeFromDb } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import ReviewItem from '../ReviewItem/ReviewItem';
import './Orders.css'

const Orders = () => {
  const [cart, setCart] = useCart()

  const handleRemoveProduct = product => {
    const rest = cart.filter(item => item._id !== product._id)
    setCart(rest)
    removeFromDb(product._id)
  }
  return (
    <div className='shop-container'>
      <div className="review-Item-container">
        {
          cart.map(cartProduct => <ReviewItem
            key={cartProduct._id}
            handleRemoveProduct={handleRemoveProduct}
            product={cartProduct}
          ></ReviewItem>)
        }
      </div>

      <div className="cart-container">
        <Cart cart={cart}>
          <Link to='/shipment'>
            <button className='review-order'>Proceed Checkout</button>
          </Link>
        </Cart>
      </div>
    </div>
  );
};

export default Orders;