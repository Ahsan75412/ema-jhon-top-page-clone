import React from 'react';

const Cart = (props) => {
    const {cart} = props; //Distracturing
    return (
        <div>
            <h4>Order Summary In Cart</h4>
            <p>Selected Items: {cart.length}</p>
        </div>
    );
};

export default Cart;