import React, { useEffect, useState } from 'react'

//LINK ROUTER DOM
import { Link } from 'react-router-dom';

//Firebase
import { categoryCollections } from '../../Firebase'

const Category = () => {

    const [ categorias, setCategorias ] = useState([])

    useEffect(() => {
        ( async () => {
            const response = await categoryCollections.get()
            setCategorias(response.docs.map( item => ({id: item.id, ...item.data()})))
        })()
    }, [])

    return (
 
            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                    {categorias.map(category => {
                    return (
                        <li key={category.id}>
                            <Link to={`/category/${category.value}`} className="dropdown-item">
                                {category.descripcion}
                            </Link>
                        </li>
                    )

                })}

            </ul>
 
    )
}

export default Category
