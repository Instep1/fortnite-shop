import React from 'react';
import './cart.scss'

const Cart = ({quantity, handleBasketShow}) => {
    return (
        <div className='cart purple darken-4 white-text' onClick={handleBasketShow}>
            <i className="material-icons">shopping_basket</i>
            {quantity ? <span className='cart-quantity'>{quantity}</span> : null }
        </div>
    );
};

export default Cart;