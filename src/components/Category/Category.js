import React, { useEffect, useState } from 'react'

//LINK ROUTER DOM
import { Link } from 'react-router-dom';

const Category = () => {

    const [categoryList, setCategoryList] = useState([])

    useEffect(() => {
        fetch("https://run.mocky.io/v3/82bb93f2-8e9e-44da-bf44-c89f3a0799f9")
            .then(response => response.json())
            .then(success => {
                setCategoryList(success)
            })
    }, [categoryList])

    return (
 
            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                {categoryList.map(category => {
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
