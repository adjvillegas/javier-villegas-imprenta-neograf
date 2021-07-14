// import React, { useEffect, useState } from 'react'
import React from 'react'
//LINK ROUTER DOM
import { Link } from 'react-router-dom';

//Provider
import { useCartContext } from '../../providers/Cart/CartContext'

const Category = () => {

    const { categorias } = useCartContext()
    // const [categoryList, setCategoryList] = useState([])

    // useEffect(() => {
     
    //     fetch(process.env.REACT_APP_CATEGORIA_URL)
    //         .then(response => response.json())
    //         .then(success => {
    //             setCategoryList(success)
    //         })
    // }, [])

    return (
 
            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                {/* {categoryList.map(category => { */}
                    {categorias.map(category => {
                    return (
                        <li key={category.id}>
                            <Link to={`/category/${category.id}`} className="dropdown-item">
                                {category.descripcion}
                            </Link>
                        </li>
                    )

                })}

            </ul>
 
    )
}

export default Category
