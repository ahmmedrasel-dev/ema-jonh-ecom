import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import useProduct from '../../hooks/useProduct';
import { addToDb, getStoreCart } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css'

const Shop = () => {
  const [products] = useProduct();
  const [cart, setCart] = useState([])


  // Load Data From Fake data Store.
  useEffect(() => {
    const storeCart = getStoreCart();
    const saveCart = [];
    for (const id in storeCart) {
      const addedProduct = products.find(product => product.id === id);
      if (addedProduct) {
        const quantity = storeCart[id];
        addedProduct.quantity = quantity;
        saveCart.push(addedProduct);
      }
    }
    setCart(saveCart);
    // Product State ta change hole ai useEffect ta call korbe.
  }, [products])

  const addToCart = (selectedProduct) => {
    let newCart = [];
    const existsProduct = cart.find(product => product.id === selectedProduct.id);
    if (!existsProduct) {
      selectedProduct.quantity = 1
      newCart = [...cart, selectedProduct];
    } else {
      const restProduct = cart.filter(product => product.id !== selectedProduct.id);
      existsProduct.quantity = existsProduct.quantity + 1
      newCart = [...restProduct, existsProduct];
    }
    setCart(newCart);
    addToDb(selectedProduct.id);

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
        <Cart cart={cart}>
          <Link to='/orders'>
            <button className='review-order'>Review Order</button>
          </Link>
        </Cart>
      </div>
    </div>
  );
};

export default Shop;