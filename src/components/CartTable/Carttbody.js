import React from 'react'

//Component
import CartTableRow from './CartTableRow'

//Provider
import { useCartContext } from '../../providers/Cart/CartContext'


const Carttbody = () => {

const { carts, removeItem } = useCartContext()   

    return (
        <tbody>
            {carts.map( cart => {
                return (
                    <CartTableRow 
                                producto={cart.descripcion} 
                                cantidad={cart.quantity * parseFloat(cart.cantidadDesde)} 
                                precio={cart.precio} 
                                iva={cart.iva}
                                removeItem={removeItem}/>
                )
            })}
        </tbody>
    )
}

export default Carttbody
