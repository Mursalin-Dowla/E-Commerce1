import React from 'react';
import './ReviewCart.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';

const ReviewCart = (props) => {
    const {handleRemoveFromCart, item}= props
    const {name, img, price, shipping, quantity} = item
    return (
        <div className='review-item'>
            <div>
                <img src={img} alt="" />
            </div>
            <div className='review-items-details-container'>
              <div className="review-items-details">
                <p className='item-name' title={name}>
                    {name.length>20 ? name.slice(0,20)+'...' : name}
                    </p>
                <p>Price: ${price}</p>
                <p><small>Shipping: ${shipping}</small></p>
                <p><small>Quantity: {quantity}</small></p>
              </div>
              <div className="review-delete-container">
                <button className='review-delete-btn' onClick={()=>handleRemoveFromCart(item)}>
                    <FontAwesomeIcon className='review-delete-icon' icon={faTrashAlt}></FontAwesomeIcon>
                </button>
              </div>
            </div>

        </div>
    );
};

export default ReviewCart;