import React from 'react'

//LINK ROUTER DOM
import { Link } from 'react-router-dom';

// get our fontawesome imports
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

//Provider
import { useCartContext } from '../../providers/Cart/CartContext'

function CartWidget() {

    const { carts } = useCartContext()
  
    return (
            <li className="navbar-item">
                <div className="position-relative">
                    <Link to="/cart">
                        <FontAwesomeIcon icon={faShoppingCart} size="2x" color="#c43bfc"/>
                    </Link>
                    <span 
                        id="spanCartWidget"
                        className={(carts.length === 0) ? "visually-hidden" : "position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"}
                        >
                        {carts.length}
                    </span>                
                </div>
            </li>
    )
}

export default CartWidget
