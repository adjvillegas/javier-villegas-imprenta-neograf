import React from 'react'

//Provider
import { useCartContext } from '../../providers/Cart/CartContext'

const CartHeader = () => {

    const { getCurrentDay } = useCartContext()
    
    const today = getCurrentDay('/')

    return (
        <div className="row row-cols-4">
            <p className="col-2 text-end">Fecha:</p>
            <p className="col-10">{today}</p>
        </div>
    )
}

export default CartHeader
