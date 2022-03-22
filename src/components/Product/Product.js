import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faShoppingBag, faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Product.css'

const Product = ({ product, addToCart }) => {
  const { name, img, price, seller, ratings } = product;

  return (
    <div className='product'>
      <img src={img} alt="" />
      <div className='product-info'>
        <p>{name}</p>
        <h3>Price: {price}</h3>
        <p><small>Manufacturer: {seller}</small></p>
        <p><small>Rating: {ratings} Starts</small></p>
      </div>
      <button onClick={() => addToCart(product)}>Add to Cart <FontAwesomeIcon icon={faShoppingCart} /></button>
    </div>
  );
};

export default Product;