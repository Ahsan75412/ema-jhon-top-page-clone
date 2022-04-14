import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import useCart from '../../hooks/useCart';
import useProducts from '../../hooks/useProducts';
import { removeFromDb } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import ReviewItem from '../ReviewItem/ReviewItem';
import './Orders.css';

const Orders = () => {
   const [products , setProducts] = useProducts(); //from hooks folder calling a  function
   const navigate = useNavigate();
   const [cart , setCart] = useCart(products);

   const handleRemoveProduct = product =>{
        const rest = cart.filter(pd => pd.id !== product.id);
        setCart(rest);
        removeFromDb(product.id);
   }
    return (
        <div className='shop-container'>
            <div className="review-items-container">
                {
                    cart.map(product => <ReviewItem 
                        key = {product.id}
                        product = {product}
                        handleRemoveProduct = {handleRemoveProduct}
                    ></ReviewItem>)
                }
            </div>
            <div className="cart-container">
                <Cart cart={cart}>
                    {/* <Link to="/inventory">
                        <button>Proceed Checkout</button>
                    </Link> */}
                     <button onClick={()=> navigate('/shipment')}>Proceed Shipping</button>
                </Cart>
            </div>
           
        </div>
    );
};

export default Orders;