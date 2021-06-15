import React from 'react'

// Stilos propios del componente
import './CartWidget.css'

// Imagenes - Logos - Iconos
import logo from './LogoNegro.png'

function CartWidget() {
    return (
        <div className=" col-6">
            <a className="navbar-brand" href="#Body">
                <img src={logo} className="navLogo" alt="Imagen de Logo"></img>
            </a>
        </div>
    )
}

export default CartWidget
