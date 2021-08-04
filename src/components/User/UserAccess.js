import React from 'react'

//LINK ROUTER DOM
import { Link } from 'react-router-dom';

//Provider
import { useCartContext } from '../../providers/Cart/CartContext'

const UserPanel = () => {

    const { User } = useCartContext()
        
    return (
        
        <li className="navbar-item">
            { (!User.id) ? 
        <Link to="/login" className="nav-link">Iniciar Sesión</Link> : 
        <Link to="/login" className="nav-link">{User.email}</Link> 
        }
        </li>
        
    )
}

export default UserPanel
