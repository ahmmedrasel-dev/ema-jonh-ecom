import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Shop.css'

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    fetch('products.json')
      .then(res => res.json())
      .then(data => setProducts(data));
  }, [])

  const addToCart = (product) => {
    const newCart = [...cart, product];
    setCart(newCart);
  }

  return (
    <div className='shop-container'>
      <div className='product-container'>
        {
          products.map(product => {
            return (
              <Product
                key={product.id}
                product={product}
                addToCart={addToCart}>
              </Product>
            )
          })
        }
      </div>
      <div className="cart-container">
        <h1>Order Summary</h1>
        <p>Selected Items: {cart.length}</p>
        <p>Total Price: $1230.00</p>
        <p>Total Shipping Charge: $10.00</p>
        <p>Tax: $120</p>
        <h3>Grand Total: $1559.00</h3>
        <button className='clear-cart'>Clear Cart</button>
        <button className='review-order'>Review Order</button>
      </div>
    </div>
  );
};

export default Shop;