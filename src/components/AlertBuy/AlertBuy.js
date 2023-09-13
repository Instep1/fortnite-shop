import React, { useEffect } from 'react';
import './alertBuy.scss';

const AlertBuy = ({name, closeAlert}) => {
    
    useEffect(() => {
        const timerId = setTimeout(closeAlert, 3000);

        return () => {
            clearTimeout(timerId)
        }
        // eslint-disable-next-line
    }, [name]);

    return (
        <div id='toast-container'>
            <div className="toast">{name} добавлен в корзину</div>
        </div>
    );
};

export default AlertBuy;