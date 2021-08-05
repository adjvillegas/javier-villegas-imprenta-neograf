import React, { useState } from 'react'

import FormAnonimus from './FormAnonimus'
import FormLogin from './FormLogin'

const OrderFormContainer = ({addOrder, user}) => {

    const initialBuyerState = {
        nombre: '',
        telefono: '',
        email: ''
    }

    const [ buyer, setBuyer ] = useState(initialBuyerState)

    const setUserBuyer = (val) => {

        setBuyer({ ...buyer, email: val})

    }

    const handleInputChange = (evnt) => {
        const { name, value } = evnt.target
        setBuyer({ ...buyer, [name]: value })
    }

    const handleOnSubmit = async (evnt) => {

        evnt.preventDefault()

        addOrder(buyer)

        setBuyer({...initialBuyerState})

    }        

    return (
        <div>
        {!user.email ? <FormAnonimus fnHandleOnSubmit={handleOnSubmit} fnHandleInputChange={handleInputChange} aBuyer={buyer}/> :
                       <FormLogin fnHandleOnSubmit={handleOnSubmit} user={user.email} fnSetUserBuyer={setUserBuyer}/>}
        </div>                    
        
    )
}

export default OrderFormContainer
