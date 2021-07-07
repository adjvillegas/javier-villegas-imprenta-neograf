import React, { createContext, useContext, useState }  from 'react'

export const CartContext = createContext({});

//Hook para importación del CartContext
export const useCartContext = () => useContext(CartContext)

// const cartInitialState = {
//         "id": 0,
//         "item": {},
//         "cacheQuantity": 1,
//         "quantity": 0,
//         "basePrice": 0,
//         "iva": 0,
//         "totalPrice": 0
//     }

export const CartProvider = ({children}) => {
    
    const [carts, setCarts] = useState([])


    const isInCart = (itemId) => carts.some( cart => cart.Item.id === itemId )
    // const getItemsId = (itemId) => carts.find( cart => cart.Item.id === itemId )

    const addItem = (Item, quantity) => {

        if (!isInCart(Item.id)) {

        setCarts(prev => [...prev, {Item, quantity} ])

    } else {

    }
    }

    const removeItems = (itemId) => {
        debugger
    }

    const clear = () => {
        setCarts([])
    }

    // const addCacheQuantity = () => {

    //     let cacheCarts = carts

    //     cacheCarts.cacheQuantity = cacheCarts.cacheQuantity + 1 

    //     setCarts(cacheCarts)
    //     return cacheCarts.cacheQuantity

    // }

    // const removeCacheQuantity = () => {
    //     let cacheCarts = carts

    //     cacheCarts.cacheQuantity = cacheCarts.cacheQuantity - 1 

    //     setCarts(cacheCarts)
    //     return cacheCarts.cacheQuantity
    // }

    return (
        // <CartContext.Provider value={{carts, addCacheQuantity, removeCacheQuantity}}>
        // <CartContext.Provider value={{carts}}>    
        <CartContext.Provider value={{carts, setCarts, addItem, removeItems, clear}}>        
            {children}
        </CartContext.Provider>
    )
}

