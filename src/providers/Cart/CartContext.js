import React, { createContext, useState }  from 'react'

export const CartContext = createContext();

const cartInitialState = {
        "id": 0,
        "item": {},
        "cacheQuantity": 1,
        "quantity": 0,
        "basePrice": 0,
        "iva": 0,
        "totalPrice": 0
    }

export const CartProvider = ({defaultValue = cartInitialState, children}) => {

    const [carts, setCarts] = useState(defaultValue)

    const addCacheQuantity = () => {
        let cacheCarts = carts
        debugger
        cacheCarts.cacheQuantity = cacheCarts.cacheQuantity + 1 

        setCarts(cacheCarts)
        return cacheCarts.cacheQuantity
    }

    const removeCacheQuantity = () => {
        let cacheCarts = carts

        cacheCarts.cacheQuantity = cacheCarts.cacheQuantity - 1 

        setCarts(cacheCarts)
        return cacheCarts.cacheQuantity
    }

    return (
        <CartContext.Provider value={{carts, addCacheQuantity, removeCacheQuantity}}>
            {children}
        </CartContext.Provider>
    )
}

