import React from 'react'

// Stilos propios del componente
import './CartWidget.css'

// Imagenes - Logos - Iconos
import logo from './LogoNegro.png'

function CartWidget() {
    return (
        <div className=" col-6">
            <a className="navbar-brand" href="#">
                <img src={logo} className="navLogo"></img>
            </a>
        </div>
    )
}

export default CartWidget
