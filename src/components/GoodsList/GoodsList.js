import React from 'react';
import GoodsItem from '../GoodsItem/GoodsItem';
import './goodsList.scss';

const GoodsList = ({goods = [], addOrder}) => {

    if(!goods.length) {
        return <h3>Nothing here</h3>
    }

    return (
        <div className='goods'>
            {goods.map(good => {
                return <GoodsItem key={good.id} {...good} addOrder={addOrder}/>
            })}
        </div>
    );
};

export default GoodsList;