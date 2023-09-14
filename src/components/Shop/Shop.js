import React, { useEffect, useContext } from 'react';
import {API_KEY, API_URL} from '../../config';

import { ShopContext } from '../../context';

import Preloader from '../Preloader/Preloader';
import GoodsList from '../GoodsList/GoodsList';
import Cart from '../Cart/Cart';
import BasketList from '../BasketList/BasketList';
import AlertBuy from '../AlertBuy/AlertBuy';

const Shop = () => {
    const {loading, order, isBasketShow, alertName, setGoods} = useContext(ShopContext)


    useEffect(() => {
        fetch(API_URL, {
            headers: {
                'Authorization': API_KEY,
            }
        }).then(response => response.json()).then(data => {
            setGoods(data.daily)
        })
        // eslint-disable-next-line
    }, [])

    return (
        <main className='container content'>
            <Cart quantity={order.length} />
            {
                loading ? <Preloader/> : <GoodsList />
            }
            {
                isBasketShow && <BasketList />
            }
            {
                alertName && <AlertBuy />
            }
        </main>
    );
};

export default Shop;