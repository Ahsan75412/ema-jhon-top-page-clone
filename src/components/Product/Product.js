import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Product.css';

const Product = (props) => {
    const {name , img , seller , price , ratings} = props.product;
    
    return (
        <div className='product'>
            <img src={img} alt="phot" />

          <div className='product-info'>
          <p className='product-name'>{name}</p>
             <p>Price: ${price}</p>
             <p><small>Seller: {seller}</small></p>
             <p><small>Ratings: {ratings} stars</small></p>
          </div>
          <button onClick={() => props.handleAddToCart(props.product)} className='btn-cart'>
            <p className='btn-text'>Add to cart</p>
            <FontAwesomeIcon icon={faCartShopping}></FontAwesomeIcon>
          </button>

        </div>
    );
};

export default Product;