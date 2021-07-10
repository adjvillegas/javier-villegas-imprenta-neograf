import React from 'react'

// get our fontawesome imports
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


const CartTableRow = ({producto, cantidad, precio, iva}) => {
 
    return (
        <tr>    
            <td>{producto}</td>
            <td>{cantidad}</td>
            <td>{precio}</td>
            <td>{iva}</td>
            <td>
                <button className="btn btn-danger btn-lg">
                    <FontAwesomeIcon icon={faTrashAlt} size="1x"/>
                </button>
            </td>                                                
        </tr>
    )
}

CartTableRow.defaultProps = {
    producto: "Desconocido",
    cantidad: "Sin informarmar",
    precio: "Sin Precio",
    iva: "Sin Impuesto",
}

export default CartTableRow
