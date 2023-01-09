import React from 'react';
import "./Products.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'

const Product = (props) => {
    const {product, handleAddToCart} = props;
    const {name, seller, price, img, ratings} = product;
    return (
        <div className='product'>
           <img src={img} alt="INF" />
           <div className="product-details">
           <p className='product-name'>{name}</p>
           <p className="product-price">Price: ${price}</p>
           <p className="product-seller">Manufacturer: {seller}</p>
           <p className="product-rating">Rating: {ratings} stars</p>
           </div>
           <div className="cart-btn">
            <button className='btn' onClick={()=>handleAddToCart(product)}>
                <p>Add to cart</p>
            <FontAwesomeIcon icon={faCartShopping}/>
            </button>
           </div>
        </div>
    );
};

export default Product;