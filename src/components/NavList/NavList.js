import React, {useState, useEffect} from 'react'

import NavLink from './NavLink.js'

const NavList = ({routing}) => {

    const [category, setCategory] = useState([])

    useEffect(() => {
        fetch(routing)
        .then(response => response.json())
        .then(success => {
            setCategory(success)
        })
    },[routing])

    return (
        <div className="shadow-lg p-3 mb-5 bg-white rounded list-group group-aside-product" id="list-tab" role="tablist">
            {
                category.map( linking => {
                    let keyID = linking.id + 1
                    let myClass
                    if (linking.id === "0") {
                        myClass = 'list-group-item list-group-item-action active'
                    } else {
                        myClass = 'list-group-item list-group-item-action'
                    }
                    return (
                        <NavLink key={keyID} myClass={myClass} value={linking.value} descripcion={linking.descripcion}/>
                    )
                })
            }
        </div>
    )
}

export default NavList
