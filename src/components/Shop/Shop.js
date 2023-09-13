import React, { useEffect, useState } from 'react';
import {API_KEY, API_URL} from '../../config';
import Preloader from '../Preloader/Preloader';
import GoodsList from '../GoodsList/GoodsList';
import Cart from '../Cart/Cart';
import BasketList from '../BasketList/BasketList';

const Shop = () => {

    const [goods, setGoods] = useState([]);
    const [loading, setLoading] = useState(true);
    const [order, setOrder] = useState([]);
    const [isBasketShow, setBasketShow] = useState(false);

    useEffect(() => {
        fetch(API_URL, {
            headers: {
                'Authorization': API_KEY,
            }
        }).then(response => response.json()).then(data => {
            data.featured && setGoods(data.daily)
            setLoading(false)
            
        })
    }, [])

    const addOrder = (item) => {
        const itemIndex = order.findIndex(orderItem => orderItem.id === item.id)

        if (itemIndex < 0) {
            const newItem = {
                ...item,
                quantity: 1
            }
            setOrder([...order, newItem])
        } else {
            const newOrder = order.map((orderItem, index) => {
                if(index === itemIndex) {
                    return {
                        ...orderItem,
                        quantity: orderItem.quantity + 1
                    }
                } else {
                    return orderItem;
                }
            })
            setOrder(newOrder);
        }
        
    }

    const removeOrder = (id) => {
        setOrder(order.filter(el => {
            return el.id !== id
        }))
    }

    const handleBasketShow = () => {
        setBasketShow(!isBasketShow);
    }

    const plusQuantity = (id) => {
        setOrder(order.map((orderItem) => {
            if(orderItem.id === id) {
                return {
                    ...orderItem,
                    quantity: orderItem.quantity + 1
                }
            } else {
                return orderItem
            }
        }))
    }

    const minusQuantity = (id) => {
        setOrder(order.map((orderItem) => {
            if(orderItem.id === id) {
                return {
                    ...orderItem,
                    quantity: orderItem.quantity === 0 ? 0 : orderItem.quantity - 1
                }
            } else {
                return orderItem
            }
        }))
    }

    return (
        <main className='container content'>
            <Cart quantity={order.length} handleBasketShow={handleBasketShow}/>
            {
                loading ? <Preloader/> : <GoodsList goods={goods} addOrder={addOrder}/>
            }
            {
                isBasketShow && <BasketList order={order} handleBasketShow={handleBasketShow} removeOrder={removeOrder} plusQuantity={plusQuantity} minusQuantity={minusQuantity}/>
            }
        </main>
    );
};

export default Shop;