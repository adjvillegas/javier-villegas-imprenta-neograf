import React, { useState } from 'react'

import FormAnonimus from './FormAnonimus'
import FormLogin from './FormLogin'

//Styles
import './OrderFormContainer.css'

const OrderFormContainer = ({addOrder, user}) => {

    const initialBuyerState = {
        nombre: '',
        telefono: '',
        email: user.email
    }

    const [ buyer, setBuyer ] = useState(initialBuyerState)

    const handleInputChange = (evnt) => {
        const { name, value } = evnt.target
        setBuyer({ ...buyer, [name]: value })
    }

    const handleOnSubmit = async (evnt) => {
       
        await addOrder(buyer)

        setBuyer({...initialBuyerState})

    }        

    return (
        <div className="container-confirm">
        {!user.email ? <FormAnonimus fnHandleOnSubmit={handleOnSubmit} fnHandleInputChange={handleInputChange} aBuyer={buyer}/> :
                       <FormLogin fnHandleOnSubmit={handleOnSubmit} user={user.email}/>}
        </div>                    
        
    )
}

export default OrderFormContainer
