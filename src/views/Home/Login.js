import React, { useEffect, useState } from 'react'
// import React, { useState } from 'react'

// import { Redirect } from 'react-router';

//LINK ROUTER DOM
import { Redirect } from 'react-router';
// import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom'

//Provider
import { useCartContext } from '../../providers/Cart/CartContext'

//Container
import OnLogon from '../../components/User/OnLogon';
import OnCreateUser from '../../components/User/OnCreateUser';

const Login = () => {

    const { user, getUser, createNewUser } = useCartContext()
    const [getViewUser, setGetViewUser] = useState('')
    const { read } = useParams()

    const handleOnSubmitLoging = async (oObject) => {
       
        if (getViewUser) {
            await getUser(oObject)
        } else {
            await createNewUser(oObject)
        }

    }

    const changeView = (evnt) => {
        setGetViewUser(!getViewUser)
    }

    useEffect(() => {
        setGetViewUser({ read })
    }, [read])

    return (
        <main>
            {(user.length < 1) && <OnLogon fnHandleSubmit={handleOnSubmitLoging} read={getViewUser} fnChangeView={changeView} />}
            {(!user.create && user.id) && <Redirect to="/" />}
            {(user.create && user.id) && <OnCreateUser/>}
        </main>
    )
}
export default Login