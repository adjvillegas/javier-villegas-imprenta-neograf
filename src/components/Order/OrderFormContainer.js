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

    // const initialBuyerState = {
    //     nombre: '',
    //     telefono: '',
    //     email: user.email
    // }

    // const [ buyer, setBuyer ] = useState(initialBuyerState)

    // const handleInputChange = (evnt) => {
    //     const { name, value } = evnt.target
    //     setBuyer({ ...buyer, [name]: value })
    // }

    const handleOnSubmit = async (evnt) => {

        await addOrder(user)
      
    }        

    // const fnInitBuyer = () => {
    //     setBuyer({...initialBuyerState})
    // }
 
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
