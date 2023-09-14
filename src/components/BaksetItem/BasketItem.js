import React, { useContext } from 'react';
import { ShopContext } from '../../context';
import './basketItem.scss';

const BasketItem = ({id, name, price, quantity}) => {

    const {removeOrder, plusQuantity, minusQuantity} = useContext(ShopContext);

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