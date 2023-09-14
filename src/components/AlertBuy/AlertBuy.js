import React, { useContext, useEffect } from 'react';
import './alertBuy.scss';
import { ShopContext } from '../../context';

const AlertBuy = () => {

    const {alertName, closeAlert} = useContext(ShopContext)
    
    useEffect(() => {
        const timerId = setTimeout(closeAlert, 3000);

        return () => {
            clearTimeout(timerId)
        }
        // eslint-disable-next-line
    }, [alertName]);

    return (
        <div id='toast-container'>
            <div className="toast">{alertName} добавлен в корзину</div>
        </div>
    );
};

export default AlertBuy;