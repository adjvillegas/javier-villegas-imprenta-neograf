import React from 'react'

// get our fontawesome imports
import { faGlasses } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

//LINK ROUTER DOM
import { Link } from 'react-router-dom';

const Item = (props) => {

    return (
            <div className="card h-100">
                <img src={process.env.PUBLIC_URL + '/img/' + props.product.archive} alt={props.product.archive} className="card-img-top"/>
                <div className="card-body">
                    <h5>{props.product.descripcion}</h5>    
                    <p>{props.product.nota}</p>
                </div>
                <div className="card-footer d-flex justify-content-end">
                    <Link to={`/detail/${props.product.id}`}>
                        <FontAwesomeIcon icon={faGlasses}/>
                    </Link>    
                </div>                
            </div>
            
    )
}

export default Item



