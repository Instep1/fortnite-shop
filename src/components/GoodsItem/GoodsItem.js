import React, { useContext } from 'react';
import { ShopContext } from '../../context';
import './goodsItem.scss';

const GoodsItem = ({id, name, description, price, full_background}) => {
    const { addOrder } = useContext(ShopContext)

    return (
        
        <div className="card">
            <div className="card-image">
            <img src={full_background} alt='img_card'/>
            </div>
            <div className="card-content">
            <span className="card-title">{name}</span>
            <p>{description}</p>
            </div>
            <div className="card-action">
                <button className='btn' onClick={() => addOrder({
                    id, name, price
                })}>Купить</button>
                <span className='right' style={{fontSize: '1.8rem'}}>{price} вб.</span>
            </div>
        </div>
    );
};

export default GoodsItem;