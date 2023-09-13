import React from 'react';
import './basketItem.scss';

const BasketItem = ({id, name, price, quantity, removeOrder, plusQuantity, minusQuantity}) => {
    return (
        <div>
            <li href="#!" className="collection-item">
                {name} <i className='material-icons basketItem-quantity' onClick={() => minusQuantity(id)}>remove</i> x {quantity} <i className='material-icons basketItem-quantity' onClick={() => plusQuantity(id)}>add</i> = {price*quantity} вб.
                <span className="secondary-content">
                    <i className="material-icons basketItem-delete" onClick={() => removeOrder(id)}>close</i>
                    </span>
                </li>
        </div>
    );
};

export default BasketItem;