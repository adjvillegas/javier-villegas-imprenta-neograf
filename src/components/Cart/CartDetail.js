import React, { useEffect, useState } from 'react'

import Cartthead from '../CartTable/Cartthead'
import Carttbody from '../CartTable/Carttbody'     

//Component
import CartResumen from './CartResumen.js'
import CartFooter from '../Cart/CartFooter.js'

//Provider
import { useCartContext } from '../../providers/Cart/CartContext'

// db from Firebase
import { OrderCollections } from '../../Firebase'

const CartDetail = () => {

    const { carts, removeItem, getResumen } = useCartContext()
    const [ enabled, setEnabled ] = useState(true)

    useEffect(() => {
        if (carts.length === 1) {
   
            setEnabled(false)
           
        } else {
            setEnabled(true)
        }

    }, [carts])

    const zeroLeft = (n) => {
        return ("00" + n).slice(-2);
    }

    const getCurrentDay = () => {
        const date = new Date()
        
        return [ zeroLeft(date.getDate()),
                 zeroLeft(date.getMonth()+1),
                 date.getFullYear()        
        ].join('/')
        
    }    

    const onCreateOrder = async (oObject) => {

        let date = getCurrentDay()
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
        
        await OrderCollections.doc().set({ buyer, items, precio: resume.subTotal, impuesto: resume.importing, total: resume.price, date: date })
    }

    return (
      
        <div className="row justify-content-center mt-4">
        <div className="col-8 table">                
            <table className="table align-middle">
                <Cartthead date={getCurrentDay}/>
                <Carttbody carts={carts} removeItem={removeItem} show={enabled}/>
            </table>       
        </div> 
        {(carts.length > 0) ? <CartResumen carts={carts}/> :  <h1 className="text-center">No Existen registros</h1>}
                <CartFooter show={carts.length} addOrder={onCreateOrder}/>        
        </div>
    )
}

export default CartDetail
