import React from 'react';
import './goodsItem.scss';

const GoodsItem = ({id, name, description, price, full_background}) => {
    return (
        
        <div className="card" id={id}>
            <div className="card-image">
            <img src={full_background} alt='img_card'/>
            </div>
            <div className="card-content">
            <span className="card-title">{name}</span>
            <p>{description}</p>
            </div>
            <div class="card-action">
                <button className='btn'>Купить</button>
                <span className='right' style={{fontSize: '1.8rem'}}>{price} руб.</span>
            </div>
        </div>
    );
};

export default GoodsItem;