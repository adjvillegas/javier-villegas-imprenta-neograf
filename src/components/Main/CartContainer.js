import React from 'react'

//Component
import CartTitle from '../Cart/CartTitle'
import CartHeader from '../Cart/CartHeader'
import CartDetail from '../Cart/CartDetail'
import CartFooter from '../Cart/CartFooter.js'

const CartContainer = () => {

    return (
        <main>
        <div className="container mt-4">
            <CartTitle/>
            <CartHeader/>
            <CartDetail/>
            <CartFooter/>              
        </div>
        </main>
    )
}

export default CartContainer
