import React, { useState, useEffect, useContext } from 'react'

// get our fontawesome imports
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

<<<<<<< HEAD
const ItemCount = ({stock = 1}) => {
=======
//Provider
import { CartContext } from '../../providers/Cart/CartContext'
>>>>>>> ee40f1aa84f9b9dacb0498ace2ca04ab4cd8d774

const ItemCount = ({stock}) => {
    
    // const [stock, setStock] = useState(carts)
    const cartsContext = useContext(CartContext)
    const [cantidad, setCantidad] = useState(cartsContext.carts.cacheQuantity)
    const [classButtonAdd, setclassButtonAdd] = useState("col-3 btn btn-outline-success")  
    const [classButtonRemove, setclassButtonRemove] = useState("col-3 btn btn-outline-danger disabled")
    
    useEffect(() => {
        if (cantidad > 1) {
           
            let valuePriceUnidad = document.getElementById("pPrice").innerText.slice(2) 
            let priceUnidad = parseInt(valuePriceUnidad)
            let priceSubtotal = priceUnidad * cantidad

            document.getElementById("divSubTotal").classList.remove("d-none")
            
            document.getElementById("pSubTotal").innerText = `$ ${priceSubtotal.toFixed(2)}`

        } else {
            document.getElementById("divSubTotal").classList.add("d-none")
        }
    },[cantidad])

    const onAdd = () => {

        if (cantidad < stock) {
         
            setCantidad(cartsContext.addCacheQuantity)
            setclassButtonAdd("col-3 btn btn-outline-success")
            setclassButtonRemove("col-3 btn btn-outline-danger")
        
        } else {

            setclassButtonAdd("col-3 btn btn-outline-success disabled")
        
        }

    }

    const onRemove = () => {
      
        if (cantidad > 1) {

        setCantidad(cartsContext.removeCacheQuantity)
        setclassButtonRemove("col-3 btn btn-outline-danger")
        setclassButtonAdd("col-3 btn btn-outline-success")

        } else {

            setclassButtonRemove("col-3 btn btn-outline-danger disabled")
        
        }

    }

    return (
        <div className = "col input-group input-group-sm">
            <button type="button" className = {classButtonRemove} id="btnGroupRemove" onClick={onRemove}><FontAwesomeIcon icon={faMinus} /></button>
            {/* <p className="col-6 input-count">{cantidad}</p> */}
            <input id="inputItemCount" type="text" className = "col form-control text-center" aria-describedby="btnGroupAddon" value={cantidad}/>
            <button type="button" className = {classButtonAdd} id="btnGroupAddon" onClick={onAdd}><FontAwesomeIcon icon={faPlus} /></button>
        </div>
    )
}


export default ItemCount
