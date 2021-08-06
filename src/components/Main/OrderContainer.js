import React, { useState } from 'react'

//Provider
import { useCartContext } from '../../providers/Cart/CartContext'

// db from Firebase
import { OrderCollections } from '../../Firebase'

//Component
import OrderFormContainer from '../Order/OrderFormContainer';
import OrderBuy from '../Order/OrderBuy.js';

const OrderContainer = () => {

    const { carts, User, clear, getResumen, getCurrentDay } = useCartContext()

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
              date: date,
              estatus: "Generado"
            }).then( ({id}) => {
                debugger
                setOrderId(id)
                clear()

            }).catch(err => {
                debugger
                console.log(err)
            })
    }


    return (
        <main className="container-fluid">   
            {(!orderId ) ? <OrderFormContainer addOrder={addOrder} user={User}/> : <OrderBuy myOrder={orderId}/>}
        </main>      
    )
}

export default OrderContainer
