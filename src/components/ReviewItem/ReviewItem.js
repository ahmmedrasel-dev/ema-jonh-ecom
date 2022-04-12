import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './ReviewItem.css'

const ReviewItem = ({ product, handleRemoveProduct }) => {
  const { name, price, quantity, img } = product;
  return (
    <div className='reviewItem'>
      <div className='review-thumb'><img src={img} alt="" /></div>
      <div className="review-item-container">
        <div className='review-item-details'>
          <p title={name}>{name.length > 20 ? name.slice(0, 20) + '...' : name}</p>
          <p>Price: {price}</p>
          <p>Quantity: {quantity}</p>
        </div>
        <div className='review-item-delete'>
          <button className='delete-btn' onClick={() => { handleRemoveProduct(product) }}>
            <FontAwesomeIcon className='delete-icon' icon={faTrashAlt} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ReviewItem;