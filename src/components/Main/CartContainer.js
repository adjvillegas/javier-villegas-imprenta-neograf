import React from 'react'

//Component
import CartTitle from '../Cart/CartTitle'
import CartHeader from '../Cart/CartHeader'
import CartBody from '../Cart/CartBody'

const CartContainer = () => {
    return (
        <div className="container mt-4">
            <CartTitle/>
            <CartHeader/>
            <CartBody/>
        </div>
    )
}

export default CartContainer
