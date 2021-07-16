import React from 'react'

//Component
import CartTitle from '../Cart/CartTitle'
import CartHeader from '../Cart/CartHeader'
import CartDetail from '../Cart/CartDetail'

const CartContainer = () => {

    return (
        <main>
        <div className="container mt-4">
            <CartTitle/>
            <CartHeader/>
            <CartDetail/>            
        </div>
        </main>
    )
}

export default CartContainer
