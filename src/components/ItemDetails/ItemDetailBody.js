import React from 'react'

//Component
import ItemCount from './ItemCount'
import CartButton from '../CartButton/CartButton'
//Styles
import './ItemDetailBody.css'

const ItemDetailBody = ({detail}) => {
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
                                    <ItemCount stock={detail.stock}/>
                                    <div className="col item-detail-cantidad-desde"> 
                                        <p className="p-values-cantidad"> x {detail.cantidadDesde} {detail.medicionDesde}</p>
                                    </div>
                                </div>
                            </div>
                    </div>
                    <div className="row row-cols-1 item-detail-card-bottom justify-content-center gy-4">
                        <p className="col align-self-end  text-center p-values-total my-0" id="pPrice">$ {detail.precioDesde}</p>
                        <div className="row row-cols-2 my-0" id="divSubTotal">
                            <p className="text-end my-0"> Sub total:</p>
                            <p className="text-initial my-0" id="pSubTotal">$ {detail.precioDesde}</p>
                        </div>
                    </div>
                    <CartButton/>
                </div>
            </div>
        </div>
    </div>
    )
}

export default ItemDetailBody
