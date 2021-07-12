import React, { useState, useEffect } from 'react'

//Provider
import { useCartContext } from '../../providers/Cart/CartContext'


const CartResumen = () => {

    const { carts } = useCartContext()
    const [resume, setResume] = useState({})

    useEffect(() => {

        // carts.map( cart => {

        // })
            let subTotal = carts.reduce(
                (total, value) => total + parseInt(value.subPrice) 
            )
            let importing = carts.reduce(
                (total, value) => total + parseInt(value.importing) 
            )
            let price = carts.reduce(
                (total, value) => total + parseInt(value.totalPrice) 
            )
            setResume({ 
                subTotal,
                importing,
                price
             })
             debugger
    },[carts])

    debugger
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
                <p className="col-8">{resume.import}</p>  
            </div>
            <div className="row row-cols-4 text-end">
                <p className="col-9 fw-bold text-end">Total a pagar:</p>
                <p className="col text-start">{resume.price}</p>  
            </div>                        
        </div>
    )
}

export default CartResumen
