import React, { useEffect, useState } from 'react'

//LINK ROUTER DOM
import { Link } from 'react-router-dom';

const Category = () => {

    const [categoryList, setCategoryList] = useState([])

    useEffect(() => {
        fetch("https://run.mocky.io/v3/85ee2c28-e251-437e-83dd-0099dc600e3b")
            .then(response => response.json())
            .then(success => {
                setCategoryList(success)
            })
    }, [categoryList])

    return (
 
            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                {categoryList.map(category => {
                    return (
                        <li key={category.id}><Link to={`/category/${category.id}`} className="dropdown-item">{category.descripcion}</Link></li>
                    )

                })}

            </ul>
 
    )
}

export default Category
