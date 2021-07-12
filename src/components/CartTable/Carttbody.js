import React from 'react'

//LINK ROUTER DOM
import { Link } from 'react-router-dom';

// get our fontawesome imports
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

//Provider
import { useCartContext } from '../../providers/Cart/CartContext'

const Carttbody = () => {

    const { carts, removeItem } = useCartContext()      

    return (
        <tbody>
       {carts.map( cart => {  
                return (
                    <tr key={cart.id}>    
                    <td className="fw-bold">{cart.descripcion}</td>
                    <td>{cart.quantity * parseFloat(cart.cantidadDesde)}</td>
                    <td>{cart.precio}</td>
                    <td>{cart.iva}</td>
                    <td>
                    <Link to="/cart">
                        <button className="btn btn-danger btn-lg" id={`button_${cart.id}`} onClick={removeItem}>
                            <FontAwesomeIcon icon={faTrashAlt} size="1x"/>
                        </button>
                    </Link>                        
                    </td>                                                
                </tr>
                )
            })}
        </tbody>

    )
}

export default Carttbody
