
import React, { createContext, useContext, useState }  from 'react'

export const CartContext = createContext({});

//Hook para importación del CartContext
export const useCartContext = () => useContext(CartContext)

export const CartProvider = ({children}) => {
    
    const [carts, setCarts] = useState([]) 

    const getResumen = (oData) => {

        let subTotal = oData.reduce((acc, item) => { return acc + (item.precioDesde * item.quantity) },0).toFixed(2)
        let price = oData.reduce((acc, item) => { return acc + (item.precioDesde * item.quantity * item.iva) },0).toFixed(2)        
        let importing = oData.reduce((acc, item) => { return acc + (item.precioDesde * item.quantity * item.iva) - (item.precioDesde * item.quantity) },0).toFixed(2)

        return({ subTotal, importing, price })           
    }

    const isInCart = (itemId) => carts.some( cart => cart.id === itemId )

    const realStock = (product) => {
        const foundItem = carts.find( cart => cart.id === product.id)
        return foundItem ? product.stock - foundItem.quantity : product.stock
    }

    const addItem = (Item, quantity) => {

        if (!isInCart(Item.id)) {

        setCarts(prev => [...prev, {...Item, quantity } ])
    
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
    
        setCarts(carts.filter( cart => cart.id !== itemId))

    }

    const clear = () => {
        setCarts([])
    }

    return (

        <CartContext.Provider value={
            {carts, 
             isInCart,
             realStock, 
             addItem, 
             removeItem, 
             clear,
             getResumen}}>        
            {children}
        </CartContext.Provider>
    )
}

