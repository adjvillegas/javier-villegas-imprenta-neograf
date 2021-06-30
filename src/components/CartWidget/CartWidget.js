import React from 'react'

//LINK ROUTER DOM
import { Link } from 'react-router-dom';

// get our fontawesome imports
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function CartWidget() {
    return (
            <li className="navbar-item">
                <div className="position-relative">
                    <Link to="/shop">
                        <FontAwesomeIcon icon={faShoppingCart} size="2x" color="#c43bfc"/>
                    </Link>
                    <span 
                        id="spanCartWidget"
                        className="
                            position-absolute 
                            top-0 
                            start-100 
                            translate-middle 
                            badge 
                            rounded-pill 
                            bg-danger 
                            visually-hidden">
                        0
                    </span>                
                </div>
            </li>
    )
}

export default CartWidget
