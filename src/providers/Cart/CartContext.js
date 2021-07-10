
import React, { createContext, useContext, useState }  from 'react'

export const CartContext = createContext({});

//Hook para importación del CartContext
export const useCartContext = () => useContext(CartContext)

export const CartProvider = ({children}) => {
    
    const [carts, setCarts] = useState([])

    const isInCart = (itemId) => carts.some( cart => cart.id === itemId )

    const addItem = (Item, quantity) => {
     
        if (!isInCart(Item.id)) {

        setCarts(prev => [...prev, {...Item, quantity} ])

    } else {

            const newCarts = carts.map( newCart => {
                if (newCart.id === Item.id) {
                    return {...newCart, quantity: newCart.quantity + quantity}
                } else return newCart
            })
            
            setCarts(newCarts)
    
    }
    }

    const removeItem = (itemId) => {
       
    }

    const clear = () => {
        setCarts([])
    }

    return (

        <CartContext.Provider value={{carts, isInCart, addItem, removeItem, clear}}>        
            {children}
        </CartContext.Provider>
    )
}

