import React, { useEffect, useState } from 'react'

// import React from 'react'
import { Link } from 'react-router-dom';

//Firebase
import { categoryCollections } from '../../Firebase'

//Styles
import './ItemDetailTitle.css'

const ItemDetailTitle = ({ nameProduct, category }) => {

    const [categoria, setCategoria] = useState({})

    useEffect(() => {

        ( async () => {

            let container = categoryCollections
            if (category) container = categoryCollections.where("value", "==", category)
            const response = await container.get()
            const oObject = response.docs.map( categoria => ({id: categoria.id, ...categoria.data()}))
            setCategoria(oObject[0])
            debugger
        })()

    }, [category])
    debugger
    return (
            <div>
                        <nav className="navStyle" aria-label="breadcrumb">
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item">
                                <Link to="/" className="link-primary">
                                    Productos
                                </Link>
                            </li>
                            <li className="breadcrumb-item">
                                <Link to={`/category/${categoria.value}`} className="link-info">
                                    {categoria.descripcion ? categoria.descripcion : "..."}
                                </Link>
                            </li>                            
                            <li className="breadcrumb-item active" aria-current="page">
                                    {categoria.descripcion ? nameProduct : "..."}
                            </li>    
                        </ol>
                    </nav>  
                   
            </div>   
    )
}

export default ItemDetailTitle
