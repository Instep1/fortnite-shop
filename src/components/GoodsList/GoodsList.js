import React, { useContext } from 'react';
import GoodsItem from '../GoodsItem/GoodsItem';
import './goodsList.scss';
import { ShopContext } from '../../context';

const GoodsList = () => {

    const {goods} = useContext(ShopContext)

    if(!goods.length) {
        return <h3>Nothing here</h3>
    }

    return (
        <div className='goods'>
            {goods.map(good => {
                return <GoodsItem key={good.id} {...good}/>
            })}
        </div>
    );
};

export default GoodsList;