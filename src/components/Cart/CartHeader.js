import React from 'react'

const CartHeader = () => {

    const zeroLeft = (n) => {
        return ("00" + n).slice(-2);
    }

    const getCurrentDay = () => {
        const date = new Date()
        
        return [ zeroLeft(date.getDate()),
                 zeroLeft(date.getMonth()+1),
                 date.getFullYear()        
        ].join('/')
        
    }

    return (
        <div className="row row-cols-4">
            <p className="col-2 text-end">Fecha:</p>
            <p className="col-10">{getCurrentDay()}</p>
        </div>
    )
}

export default CartHeader
