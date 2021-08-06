import React from 'react'

const FormLogin = ({ fnHandleOnSubmit, user }) => {

    const confirmShel = (evnt) => {
        fnHandleOnSubmit(evnt)
    }

    return (
        <div className="row row-cols-1 justify-content-center">
            <h2 className="col">Confirmar compra con usuario {user}</h2>
            <button type="submit" className="col-2 btn btn-success text-center mt-5" onClick={confirmShel}>Confirmar</button>
        </div>
    )
}

export default FormLogin
