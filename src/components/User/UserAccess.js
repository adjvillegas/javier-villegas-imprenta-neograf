import React, { useEffect, useState } from 'react'

//LINK ROUTER DOM
import { Link } from 'react-router-dom';

//Provider
import { useCartContext } from '../../providers/Cart/CartContext'

//Content
import OrderList from '../Order/OrderList'

//Firebase
import { OrderCollections } from '../../Firebase'

const UserPanel = () => {

    const { User } = useCartContext()

    const [orderList, setOrderList] = useState([])

    useEffect(() => {

        (async () => {

            let container = OrderCollections
         
            if (User.email) container = OrderCollections.where("buyer.email", "==", User.email)

            const response = await container.get()
            
            if (!response.empty) {
                setOrderList(response.docs.map(order => ({ id: order.id, ...order.data() })))
            } else {
                setOrderList(undefined)
            }

        })()

    })


    return (

        <li className="navbar-item">
            {(!User.id) ?
                <Link to="/login" className="nav-link">Iniciar Sesión</Link> :
                <OrderList User={User} orderList={orderList} />
            }
        </li>

    )
}

export default UserPanel
