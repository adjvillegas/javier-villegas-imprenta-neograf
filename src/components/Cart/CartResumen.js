// import React, { useState, useEffect } from 'react'
import React from 'react'
//Provider
import { useCartContext } from '../../providers/Cart/CartContext'


const CartResumen = ({carts}) => {

    const { getResumen } = useCartContext()    
    const resume = getResumen(carts)
    
    return (
        <div className="container">
            <div className="row">
                <h5>Resumenes Totales</h5>
            </div>
            <div className="row row-cols-4">
                <p className="col fw-bold text-end">Precio:</p>
                <p className="col-8">{resume.subTotal}</p>
            </div>
            <div className="row row-cols-4">
                <p className="col fw-bold text-end">Impuestos:</p>
                <p className="col-8">{resume.importing}</p>  
            </div>
            <div className="row row-cols-4 text-end">
                <p className="col-9 fw-bold text-end">Total a pagar:</p>
                <p className="col text-start">{resume.price}</p>  
            </div>                        
        </div>
    )
}

export default CartResumen
