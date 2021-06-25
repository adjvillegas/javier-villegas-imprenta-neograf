import React from 'react'

//Component
import ItemCount from './ItemCount'

const Item = (props) => {

    return (
            <div className="card h-100">
                <img src={process.env.PUBLIC_URL + '/img/' + props.product.archive} alt={props.product.archive} className="card-img-top"/>
                <div className="card-body">
                    <h5>{props.product.descripcion}</h5>    
                    <p>{props.product.nota}</p>
                </div>
                <div className="card-footer">
                    <ItemCount key={props.product.id} stock={props.product.stock}/>
                </div>                
            </div>
            
    )
}

export default Item



