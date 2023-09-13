import React from 'react';
import BasketItem from '../BaksetItem/BasketItem';
import './basketList.scss';

const BasketList = ({order, handleBasketShow}) => {

    const totalPrice = order.reduce((acc, val) => {
            return acc + val.price * val.quantity;
    }, 0)

    return (
        <div>
            <ul className="collection basketList">
                <li className="collection-item active">Корзина</li>
                {
                    order.length ? order.map(el => {
                        return <BasketItem key={el.id} {...el}/>
                }) : <li className="collection-item">Корзина пуста</li>
                }
                <li className="collection-item active">Общая стоимость: {totalPrice} варбаксов.</li>
                <i className='material-icons basketList-close' onClick={handleBasketShow}>close</i>
            </ul>  
        </div>
    );
};

export default BasketList;