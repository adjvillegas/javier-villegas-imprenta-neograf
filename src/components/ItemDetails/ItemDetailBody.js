import React from 'react'

//Component
import ItemCount from './ItemCount'

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
                    <div className="item-detail-card-top">
                        <h3>{detail.descripcion}</h3>
                        <p>{detail.nota}</p>
                        <ItemCount stock={detail.stock}/>
                    </div>
                    <div className="item-detail-card-bottom">
                        <p>{detail.precioDesde}</p>
                    </div>
    
                </div>
            </div>
        </div>
    </div>
    )
}

export default ItemDetailBody
