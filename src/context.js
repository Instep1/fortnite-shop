import React, { createContext, useReducer } from 'react';
import { Reducer } from './reducer';

export const ShopContext = createContext();

const initialState = {
    goods: [],
    loading: true,
    order: [],
    isBasketShow: false,
    alertName: '',
}

export const ContextProvider = ({children}) => {
    const [value, dispatch] = useReducer(Reducer, initialState)

    value.closeAlert = () => {
        dispatch({type: 'CLOSE_ALERT'})
    }

    value.removeOrder = (id) => {
        dispatch({type: 'REMOVE_ORDER', payload: {id: id}})
    }

    value.addOrder = (item) => {
        dispatch({type: 'ADD_ORDER', payload: item})
    }

    value.handleBasketShow = () => {
        dispatch({type: 'HANDLE_BASKET_SHOW'})
    }

    value.plusQuantity = (id) => {
        dispatch({type: 'PLUS_QUANTITY', payload: {id: id}})
    }

    value.minusQuantity = (id) => {
        dispatch({type: 'MINUS_QUANTITY', payload: {id: id}})
    }

    value.setGoods = (data) => {
        dispatch({type: 'SET_GOODS', payload: data})
    }

    return <ShopContext.Provider value={value}>
        {children}
    </ShopContext.Provider>
}