import React from 'react';
import './basketItem.scss';

const BasketItem = ({id, name, price, quantity}) => {
    return (
        <div>
            <li href="#!" className="collection-item">
                {name} x {quantity} = {price}
                <span className="secondary-content">
                    <i className="material-icons basketItem-delete">close</i>
                    </span>
                </li>
        </div>
    );
};

export default BasketItem;