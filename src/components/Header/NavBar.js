import React from 'react'

// Component
import CartWidget from './CartWidget'

// Styles
import './NavBar.css'

// Imagenes - Logos - Iconos
import logo from './LogoNegro.png'

const navBar = () => {
    return (
        <header className="my-header">
            <h3 className="fw-bold">Imprenta Neograf</h3>
        <nav>
            <div className="navbar navbar-expand-lg navbar-light bg-light justify-content-evenly">
                <div className=" col-6">
                    <a className="navbar-brand" href="#Body">
                    <img src={logo} className="navLogo" alt="Imagen de Logo"></img>
                    </a>
                </div>
                <div className="col-5">
                    <div className="collapse navbar-collapse justify-content-end">
                        <ul className="navbar-nav">
                            <li className="navbar-item"><a href="#Body" className="nav-link">Inicio</a></li>
                            <li className="navbar-item"><a href="#Body" className="nav-link">Productos</a></li>
                            <li className="navbar-item"><a href="#Body" className="nav-link">Iniciar Sesión</a></li>
                            <CartWidget/>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
        </header>
    )
}

export default navBar
