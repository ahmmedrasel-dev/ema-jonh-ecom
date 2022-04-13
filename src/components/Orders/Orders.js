import React from 'react';
import { Link } from 'react-router-dom';
import useCart from '../../hooks/useCart';
import useProduct from '../../hooks/useProduct';
import { removeFromDb } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import ReviewItem from '../ReviewItem/ReviewItem';
import './Orders.css'

const Orders = () => {
  const [products, setProduct] = useProduct();
  const [cart, setCart] = useCart(products)

  const handleRemoveProduct = product => {
    const rest = cart.filter(item => item.id !== product.id)
    setCart(rest)
    removeFromDb(product.id)
  }
  return (
    <div className='shop-container'>
      <div className="review-Item-container">
        {
          cart.map(cartProduct => <ReviewItem
            key={cartProduct.id}
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