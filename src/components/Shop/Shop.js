import React, { useEffect, useState } from 'react';
import {API_KEY, API_URL} from '../../config';
import Preloader from '../Preloader/Preloader';
import GoodsList from '../GoodsList/GoodsList';

const Shop = () => {

    const [goods, setGoods] = useState([])
    const [loading, setLoading] = useState(true);

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

    return (
        <main className='container content'>
            {console.log(goods)}
            {
                loading ? <Preloader/> : <GoodsList goods={goods}/>
            }
        </main>
    );
};

export default Shop;