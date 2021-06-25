import React, { useState } from 'react'
// get our fontawesome imports
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ItemCount = ({stock}) => {

    const [cantidad, setCantidad] = useState(0)
    const [classButtonAdd, setclassButtonAdd] = useState("btn btn-outline-success")  
    const [classButtonRemove, setclassButtonRemove] = useState("btn btn-outline-danger disabled")    

    const onAdd = () => {

        if (cantidad < stock) {
         
            setCantidad(cantidad + 1)
            setclassButtonAdd("btn btn-outline-success")
            setclassButtonRemove("btn btn-outline-danger")
        
        } else {

            setclassButtonAdd("btn btn-outline-success disabled")
        
        }

    }

    const onRemove = () => {
      
        if (cantidad > 0) {

        setCantidad(cantidad - 1)
        setclassButtonRemove("btn btn-outline-danger")
        setclassButtonAdd("btn btn-outline-success")

        } else {

            setclassButtonRemove("btn btn-outline-danger disabled")
        
        }

    }

    return (
        <div className = "input-group input-group-sm">
            <button type="button" className = {classButtonRemove} id="btnGroupRemove" onClick={onRemove}><FontAwesomeIcon icon={faMinus} /></button>
            <input type="text" className = "form-control text-center" aria-describedby="btnGroupAddon" value={cantidad}/>
            <button type="button" className = {classButtonAdd} id="btnGroupAddon" onClick={onAdd}><FontAwesomeIcon icon={faPlus} /></button>
        </div>
    )
}

export default ItemCount
