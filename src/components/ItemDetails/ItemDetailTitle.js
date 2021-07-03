import React from 'react'

// import React from 'react'
import { Link } from 'react-router-dom';

//Styles
import './ItemDetailTitle.css'

const ItemDetailTitle = ({idCategory, nameProduct}) => {

    return (
            <div>
                        <nav className="navStyle" aria-label="breadcrumb">
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item">
                                <Link to="/">
                                    Productos
                                </Link>
                            </li>
                            <li className="breadcrumb-item active" aria-current="page">{nameProduct}</li>    
                        </ol>
                    </nav>  
                   
            </div>   
    )
}

export default ItemDetailTitle
