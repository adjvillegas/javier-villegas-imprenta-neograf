import React from 'react'

// get our fontawesome imports
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function CartWidget() {
    return (
        <li className="navbar-item"><FontAwesomeIcon icon={faShoppingCart} size="2x" color="red"/></li>
    )
}

export default CartWidget
