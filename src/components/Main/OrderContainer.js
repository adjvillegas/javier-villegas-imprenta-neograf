import React from 'react'

//Provider
import { useCartContext } from '../../providers/Cart/CartContext'

// // db from Firebase
// import { OrderCollections } from '../../Firebase'

//Component
import OrderFormContainer from '../Order/OrderFormContainer';
import Login from '../../views/Home/Login';

const OrderContainer = () => {

    const { user } = useCartContext()
  
    return (
        <main className="container-fluid">   
            {(!user.email ) ? <Login/> : <OrderFormContainer/>}
        </main>      
    )
}

export default OrderContainer
