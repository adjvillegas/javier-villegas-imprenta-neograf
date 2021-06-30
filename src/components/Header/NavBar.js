import React from 'react'

//LINK ROUTER DOM
import { Link } from 'react-router-dom';

// Component
import CartWidget from '../CartWidget/CartWidget'

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
                    <Link to="/" className="navbar-brand">
                        <img src={logo} className="navLogo" alt="Imagen de Logo"></img>
                    </Link>
                </div>
                <div className="col-5">
                    <div className="collapse navbar-collapse justify-content-end">
                        <ul className="navbar-nav">
                            <li className="navbar-item"><Link to="/" className="nav-link">Inicio</Link></li>
                            <li className="navbar-item"><Link to="/product" className="nav-link">Productos</Link></li>
                            <li className="navbar-item"><Link to="/contact" className="nav-link">Contactanos</Link></li>
                            <li className="navbar-item"><Link to="/login" className="nav-link">Iniciar Sesión</Link></li>
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
