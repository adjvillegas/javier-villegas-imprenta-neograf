import React, {useState, useEffect} from 'react'



const NavList = () => {

    const [category, setCategory] = useState([])

    useEffect(() => {
        fetch("https://run.mocky.io/v3/85ee2c28-e251-437e-83dd-0099dc600e3b")
        .then(response => response.json())
        .then(success => {
            setCategory(success)
        })
    },[])

    return (
        <div className="shadow-lg p-3 mb-5 bg-white rounded list-group group-aside-product mt-4" id="list-tab" role="tablist">
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
                    //     <NavLink key={keyID} myClass={myClass} myId={linking.id} descripcion={linking.descripcion}/>
                    )
                })
            }
        </div>
    )
}

export default NavList
