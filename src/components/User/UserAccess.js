import React from 'react'

//LINK ROUTER DOM
import { Link } from 'react-router-dom';

//Provider
import { useCartContext } from '../../providers/Cart/CartContext'

//Content
import OrderList from '../Order/OrderList'

const UserPanel = () => {

    const { user, order } = useCartContext()

    console.log(order)
    return (

        <li className="navbar-item">
            {(!user.id) ?
                <Link to="/login" className="nav-link">Iniciar Sesión</Link> :
                <OrderList User={user} orderList={order} />
            }
        </li>

    )
}

export default UserPanel
