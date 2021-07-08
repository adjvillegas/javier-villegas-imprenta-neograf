import React from 'react'

//LINK ROUTER DOM
import { Link } from 'react-router-dom';

// Component
// import Category from '../Category/Category'
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
            <div className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="col-2 d-flex  justify-content-center">
                    <Link to="/" className="navbar-brand">
                        <img src={logo} className="navLogo" alt="Imagen de Logo"></img>
                    </Link>
                </div>
                <div className="col-8">
                    <div className="collapse navbar-collapse justify-content-center">
                        <ul className="navbar-nav">
                            <li className="navbar-item"><Link to="/home" className="nav-link">Inicio</Link></li>
                            <li className="navbar-item"><Link to="/" className="nav-link">Productos</Link></li>
                            <li className="nav-item dropdown">
                                <span className="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Categorias
                                </span>
                                {/* <Category/> */}
                            </li>
                            <li className="navbar-item"><Link to="/contact" className="nav-link">Contactanos</Link></li>
                        </ul>
                    </div>
                </div>
                <div className="col-2">
                    <div className="collapse navbar-collapse justify-content-start">
                        <ul className="navbar-nav">
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
