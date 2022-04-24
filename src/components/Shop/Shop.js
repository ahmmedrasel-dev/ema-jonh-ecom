import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import useCart from '../../hooks/useCart';
import { addToDb } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css'

const Shop = () => {
  const [cart, setCart] = useCart();
  const [pageNumber, setPageNumber] = useState(0);
  const [selectedPage, setSelectedPage] = useState(0);
  const [numOfProduct, setNumOfProduct] = useState(10);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/product?selectedPage=${selectedPage}&numOfProduct=${numOfProduct}`)
      .then(res => res.json())
      .then(data => setProducts(data));
  }, [selectedPage, numOfProduct])

  useEffect(() => {
    fetch('http://localhost:5000/product-count')
      .then(res => res.json())
      .then(data => {
        const totalNumber = data.count;
        /* Total product ke divide dite hove per page a joto ta product show korbe. r math.ceil user kora hoichy jate last page a 10 ta product er com hole jen noton page a ase. */
        const pages = Math.ceil(totalNumber / 10)
        setPageNumber(pages)
      })
  }, [])


  const addToCart = (selectedProduct) => {
    let newCart = [];
    const existsProduct = cart.find(product => product._id === selectedProduct._id);
    if (!existsProduct) {
      selectedProduct.quantity = 1
      newCart = [...cart, selectedProduct];
    } else {
      const restProduct = cart.filter(product => product._id !== selectedProduct._id);
      existsProduct.quantity = existsProduct.quantity + 1
      newCart = [...restProduct, existsProduct];
    }
    setCart(newCart);
    addToDb(selectedProduct._id);

  }

  return (
    <div className='shop-container'>
      <div className='products'>
        <div className='product-container'>
          {
            products.map(product => {
              return (
                <Product
                  key={product._id}
                  product={product}
                  addToCart={addToCart}>
                </Product>
              )
            })
          }
        </div>

        <div className='pagination'>
          {
            [...Array(pageNumber).keys()]
              .map(number => <button key={number}
                className={selectedPage === number ? 'selected' : ""}
                onClick={() => setSelectedPage(number)}
              >{number + 1}</button>)
          }

          <select className='numberOfProduct' defaultValue={'selected'} onChange={e => setNumOfProduct(e.target.value)}>
            <option value="10" defaultValue >10</option>
            <option value="20">20</option>
            <option value="30">30</option>
            <option value="40">40</option>
            <option value="50">50</option>
          </select>
        </div>
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