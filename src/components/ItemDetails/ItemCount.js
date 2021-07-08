import React from 'react'

// get our fontawesome imports
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ItemCount = ({stock, cantidad, onAdd, onRemove}) => {
        
    return (
        <div className = "col input-group input-group-sm">
            <button type="button" 
                    id="btnGroupRemove" 
                    onClick={onRemove}
                    className = {(cantidad < 2) ? "col-3 btn btn-outline-danger disabled": "col-3 btn btn-outline-danger "}
                    >
                <FontAwesomeIcon icon={faMinus} />
            </button>

            <input id="inputItemCount" type="text" className = "col form-control text-center" aria-describedby="btnGroupAddon" value={cantidad}/>
            
            <button type="button" 
                    id="btnGroupAddon" 
                    onClick={onAdd}
                    className = { (cantidad < stock) ? "col-3 btn btn-outline-success" : "col-3 btn btn-outline-success disabled"} >
                <FontAwesomeIcon icon={faPlus} />
            </button>
        </div>
    )
}

export default ItemCount
