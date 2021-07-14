
import React, { createContext, useContext, useEffect, useState }  from 'react'

//Import Firebase
// import {db} from '../../Firebase'


export const CartContext = createContext({});

//Hook para importación del CartContext
export const useCartContext = () => useContext(CartContext)

export const CartProvider = ({children}) => {
    
    const [carts, setCarts] = useState([])
    const [categorias, setCategorias] = useState([])
          

    useEffect(() => {
        getCategoria()
    },[])    


    const isInCart = (itemId) => carts.some( cart => cart.id === itemId )
    const cartLength = carts.length

    const addItem = (Item, quantity) => {
        
        let subPrice = 0
        let importing = 0
        let totalPrice = 0

        if (!isInCart(Item.id)) {

            subPrice = (Item.precioDesde * quantity).toFixed(2)
            totalPrice = (subPrice * Item.iva).toFixed(2)
            importing = (totalPrice - subPrice).toFixed(2)
            

        setCarts(prev => [...prev, {...Item, quantity, subPrice, importing, totalPrice } ])
    
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
        let newCart = carts
        const index = carts.findIndex( cart => cart.id === parseInt(itemId))
              newCart.splice(index, 1)
        setCarts(newCart)

    }

    const clear = () => {
        setCarts([])
    }

    const getCategoria = () => {
        const docs = []
        // db.collection('categoria').onSnapshot((querySnapshot) => {
  
        //     querySnapshot.forEach( doc => {
        //         docs.push({...doc.data(), id: doc.id })

        //     })
        //     setCategorias(docs)
        // })
    } 

    return (

        <CartContext.Provider value={
            {carts, 
             categorias, 
             isInCart, 
             cartLength, 
             addItem, 
             removeItem, 
             clear}}>        
            {children}
        </CartContext.Provider>
    )
}

