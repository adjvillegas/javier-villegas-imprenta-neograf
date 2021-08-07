import React from 'react'

//Provider
import { useCartContext } from '../../providers/Cart/CartContext'

//Constructor
import FormLogin from './FormLogin'
import OrderBuy from '../Order/OrderBuy.js';

//Styles
import './OrderFormContainer.css'

const OrderFormContainer = ( {User} ) => {

    const { user, newOrder, addOrder } = useCartContext()

    const handleOnSubmit = async (evnt) => {

        await addOrder(user)
      
    }        
 
    return (
        <div className="container-confirm">
        {!newOrder ? <FormLogin fnHandleOnSubmit={handleOnSubmit} user={user.email}/>:
                      <OrderBuy myOrder={newOrder}/> }
        </div>                    
        
    )
}

OrderFormContainer.defaultProps  = {
        user: { email: undefined, }
}

export default OrderFormContainer
