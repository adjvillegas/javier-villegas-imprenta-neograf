import React from 'react'

const CartHeader = ({getCurrentDay}) => {

    const date = getCurrentDay()
    return (
        <div className="row row-cols-4">
            <p className="col-2 text-end">Fecha:</p>
            <p className="col-10">{date}</p>
        </div>
    )
}

export default CartHeader
