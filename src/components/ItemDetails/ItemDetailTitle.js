import React, { useState, useEffect } from 'react'

import { Link } from 'react-router-dom';

//Styles
import './ItemDetailTitle.css'

const ItemDetailTitle = ({detail}) => {

    const [rubro, setRubro] = useState([])
    
    useEffect(() => {
        fetch("https://run.mocky.io/v3/82bb93f2-8e9e-44da-bf44-c89f3a0799f9")
        .then(response => response.json())
        .then(success => {
            // debugger
            // find(oObject => oObject.id === parseInt(myId)))
            // let oObject = success.filter(oObject => oObject.id === parseInt(category))
            setRubro(success.find(oObject => oObject.id === parseInt(detail.category))) 
        })
    },[detail])

    return (
        
            <div>

                        <nav className="navStyle" aria-label="breadcrumb">
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item">
                                <Link to="/">
                                    Productos
                                </Link>
                            </li>
                            <li className="breadcrumb-item" aria-current="page">{rubro.descripcion}</li>
                            <li className="breadcrumb-item active" aria-current="page">{detail.id}</li>    
                        </ol>
                    </nav>  
                   
            </div>   

    )
}

ItemDetailTitle.defaultProps = {
    category: "",
    detail: {
        category: ""
    }
  }

export default ItemDetailTitle
