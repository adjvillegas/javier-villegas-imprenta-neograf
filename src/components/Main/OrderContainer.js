import React, { useState } from 'react'

//Provider
import { useCartContext } from '../../providers/Cart/CartContext'

// db from Firebase
import { OrderCollections } from '../../Firebase'

//Component
import OrderForm from '../Order/OrderForm';
import OrderBuy from '../Order/OrderBuy.js';

const OrderContainer = () => {

    const { carts, clear, getResumen, getCurrentDay } = useCartContext()

    const [ orderId, setOrderId ] = useState('')    

    const addOrder = async (oObject) => {
      
        let date = getCurrentDay('.')
        let buyer = oObject
        let resume = getResumen(carts)
        let items = carts.map(cart => {

            let newArray = {
                id: cart.id,
                descripcion: cart.descripcion,
                quantity: cart.quantity,
                iva: cart.iva,
                precio: cart.precioDesde * cart.quantity
            }

            return (newArray)
        })
        
            await OrderCollections.add(
            { buyer, 
              items, 
              precio: resume.subTotal, 
              impuesto: resume.importing, 
              total: resume.price, 
              date: date 
            }).then( ({id}) => {
                
                setOrderId(id)
                clear()

            }).catch(err => {
            
            })
    }


    return (
        <main className="container-fluid">   
            {(!orderId) ? <OrderForm addOrder={addOrder}/> : <OrderBuy myOrder={orderId}/>}
        </main>      
    )
}

export default OrderContainer
