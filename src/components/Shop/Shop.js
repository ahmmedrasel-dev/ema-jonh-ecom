import React, { useEffect, useState } from 'react';
import { addToDb, getStoreCart } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css'

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  // Load Product Data From API
  useEffect(() => {
    fetch('products.json')
      .then(res => res.json())
      .then(data => setProducts(data));
  }, [])

  // Load Data From Fake data Store.
  useEffect(() => {
    const storeCart = getStoreCart();
    const saveCart = [];
    for (const id in storeCart) {
      const addedProduct = products.find(product => product.id === id);
      if (addedProduct) {
        const qty = storeCart[id];
        addedProduct.quantity = qty;
        saveCart.push(addedProduct);
      }
    }
    setCart(saveCart);
    // Product State ta change hole ai useEffect ta call korbe.
  }, [products])

  const addToCart = (product) => {
    const newCart = [...cart, product];
    setCart(newCart);
    addToDb(product.id);
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
        <Cart cart={cart}></Cart>
      </div>
    </div>
  );
};

export default Shop;