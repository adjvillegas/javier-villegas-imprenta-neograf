import React from 'react'

//Component
import CartTitle from '../Cart/CartTitle'
import CartHeader from '../Cart/CartHeader'
import CartBody from '../Cart/CartBody'
import CartResumen from '../Cart/CartResumen.js'
import CartFooter from '../Cart/CartFooter.js'

const CartContainer = () => {

    return (
        <div className="container mt-4">
            <CartTitle/>
            <CartHeader/>
            <CartBody/>
            <CartResumen/>
            <CartFooter/>              
        </div>
    )
}

export default CartContainer
