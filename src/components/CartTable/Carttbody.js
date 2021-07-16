import React from 'react'

//LINK ROUTER DOM
import { Link } from 'react-router-dom';

// get our fontawesome imports
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


const Carttbody = ({ carts, removeItem, show }) => {

    const onRemove = (evnt) => {
        removeItem(evnt.currentTarget.id.slice(7))
    }
    
    return (
        <tbody>
       {carts.map( cart => {  
                return (
                    <tr key={cart.id}>    
                    <td className="fw-bold">{cart.descripcion}</td>
                    <td>{cart.quantity * parseFloat(cart.cantidadDesde)}</td>
                    <td>{cart.precio}</td>
                    <td>{cart.iva}</td>
                    { show &&
                    <td>
                    <Link to="/cart">
                        <button className="btn btn-danger btn-lg" id={`button_${cart.id}`} onClick={onRemove}>                    
                            <FontAwesomeIcon icon={faTrashAlt} size="1x"/>
                        </button>
                    </Link>                        
                    </td>       
                    }                                         
                </tr>
                )
            })}
        </tbody>

    )
}

export default Carttbody
