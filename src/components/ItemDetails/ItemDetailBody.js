// import React from 'react'
import React, {useState } from 'react'

//Component
import ItemCount from './ItemCount'
// import CartButton from '../CartButton/CartButton'
//Styles
import './ItemDetailBody.css'

//Provider
import { useCartContext } from '../../providers/Cart/CartContext'

const ItemDetailBody = ({detail}) => {
    // debugger
    const { addItem } = useCartContext()
    const [onQuantity, setQuantity] = useState(detail.stock ? 1 : 1) 
    
    const onAddQuantity = () => setQuantity(onQuantity === detail.stock ? onQuantity : onQuantity + 1)
    const onRemoveQuantity = () => setQuantity(onQuantity -1 ? onQuantity - 1 : onQuantity)
    
    const changeItemCount = () => addItem(detail, onQuantity)

    // useEffect(() => {
    //     if (cantidad > 1) {
           
    //         let valuePriceUnidad = document.getElementById("pPrice").innerText.slice(2) 
    //         let priceUnidad = parseInt(valuePriceUnidad)
    //         let priceSubtotal = priceUnidad * cantidad

    //         document.getElementById("divSubTotal").classList.remove("d-none")
            
    //         document.getElementById("pSubTotal").innerText = `$ ${priceSubtotal.toFixed(2)}`

    //     } else {
    //         document.getElementById("divSubTotal").classList.add("d-none")
    //     }
    // },[cantidad])


        // const changeItemCount = () => {
        // let varCount = document.getElementById("spanCartWidget").innerText
        // let myCount = parseInt(varCount) + 1

        // document.getElementById("inputItemCount").value = "1"
        // document.getElementById("divSubTotal").classList.add("d-none")
        
        // document.getElementById("spanCartWidget").innerText = myCount
        // document.getElementById("spanCartWidget").classList.remove("visually-hidden")
    // }

    return (
        <div className="container">
        <div className="row gx-5 item-detail-body">
            <div className="col justify-content-center">
                <div className="item-detail-card item-detail-img">
                    <img src={process.env.PUBLIC_URL + '/img/' + detail.archive} alt={detail.archive}></img>
                </div>
            </div>
            <div className="col">
                <div className="row item-detail-card">
                    <div className="row row-cols-1 gy-4 item-detail-card-top">
                        <h3 className="col gy-2">{detail.descripcion}</h3>
                        <p className="col gy-2">{detail.nota}</p>
                            <div className="container gy-4">
                                <div className="row">
                                    {
                                    detail.stock > 0 && 
                                    <ItemCount stock={detail.stock} cantidad={onQuantity} onAdd={onAddQuantity} onRemove={onRemoveQuantity}/>
                                    }
                                <div className="col item-detail-cantidad-desde"> 
                                        <p className="p-values-cantidad"> x {detail.cantidadDesde} {detail.medicionDesde}</p>
                                    </div>
                                </div>
                            </div>
                    </div>
                    <div className="row row-cols-1 item-detail-card-bottom justify-content-center gy-4">
                        <p className="col align-self-end  text-center p-values-total my-0" id="pPrice">$ {detail.precioDesde}</p>
                        <div id="divSubTotal"
                             className= {( onQuantity > 1 ) ? "row row-cols-2 my-0" : "d-none"} 
                             >
                            <p className="text-end my-0"> Sub total:</p>
                            <p className="text-initial my-0" id="pSubTotal">$ {(parseInt(detail.precioDesde) * onQuantity).toFixed(2)}</p>
                        </div>
                    </div>
                    <div className="row row-cols-1 justify-content-center gy-1">
                        {/* <button className="col-4 btn btn-danger"type="button" onClick={addItem(detail.id, onQuantity )}>COMPRAR</button> */}
                        <button className="col-4 btn btn-danger"type="button" onClick={changeItemCount}>COMPRAR</button>
                    </div>                    
                    {/* <CartButton/> */}
                </div>
            </div>
        </div>
    </div>
    )
}

export default ItemDetailBody
