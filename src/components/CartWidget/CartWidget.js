import React from 'react'

//LINK ROUTER DOM
import { Link } from 'react-router-dom';

// get our fontawesome imports
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function CartWidget() {
    return (
        <li className="navbar-item">
            <Link to="/shop">
                <FontAwesomeIcon icon={faShoppingCart} size="2x" color="red"/>
            </Link>
        </li>
    )
}

export default CartWidget
