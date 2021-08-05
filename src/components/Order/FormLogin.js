import React from 'react'

//Styles
import './FormLogin.css'

const FormLogin = ({fnHandleOnSubmit, user, fnSetUserBuyer}) => {

    const confirmShel = () => {

    }

    return (
        <div className="container-confirm">
            <h2 className="text-center">Confirmar compra con usuario {user}</h2>
            <button type="submit" className="col-5 btn btn-success" onClick={confirmShel}>Confirmar</button>
        </div>
    )
}

export default FormLogin
