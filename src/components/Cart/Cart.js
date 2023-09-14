import React, { useContext } from 'react';
import './cart.scss'
import { ShopContext } from '../../context';

const Cart = () => {
    const {handleBasketShow, order} = useContext(ShopContext);
    const quantity = order.length; 
    return (
        <div className='cart purple darken-4 white-text' onClick={handleBasketShow}>
            <i className="material-icons">shopping_basket</i>
            {quantity ? <span className='cart-quantity'>{quantity}</span> : null }
        </div>
    );
};

export default Cart;