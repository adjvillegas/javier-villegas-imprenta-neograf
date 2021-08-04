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

    const { User, getUser, createNewUser } = useCartContext()
    const [getViewUser, setGetViewUser] = useState('')
    const { read } = useParams()

    const handleOnSubmitLoging = async (oObject) => {
        debugger
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
            {(User.length < 1) && <OnLogon fnHandleSubmit={handleOnSubmitLoging} read={getViewUser} fnChangeView={changeView} />}
            {(!User.create && User.id) && <Redirect to="/" />}
            {(User.create && User.id) && <OnCreateUser/>}
        </main>
    )
}
export default Login