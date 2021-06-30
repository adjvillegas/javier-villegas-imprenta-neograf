import React, { useState, useEffect } from 'react'

//Components
// import ItemList from '../ItemsList/ItemList'
import NavList from '../NavList/NavList'

const ItemListContainer = (props) => {

    const [routing, setRouting] = useState([])

    useEffect(() => {
        fetch('https://run.mocky.io/v3/ebbe241f-926e-4a86-b2de-22fe79eb5762')
        .then(response => response.json())
        .then(success => {
            setRouting(success)
        })
    },[])

    // useEffect(() => {
    //     fetch('https://run.mocky.io/v3/1728e637-dbe7-4771-aeae-c2dcf19c2d5a')
    //         .then(response => response.json())
    //         .then((json) => {

    //                 let oObject = []
    //                 let oPush = []
    //                 let check

    //                 for (let index = 0; index < json.length; index++) {

    //                     oObject.push(json[index])

    //                     check = index + 1

    //                     if (check % 4 === 0) {
    //                         oPush.push(oObject)
    //                         oObject = []
    //                     } else if (check === json.length) {
    //                         oPush.push(oObject)
    //                     }
    //                 }

    //                 setProducts(oPush)
    //             }

    //         )
    // })

    return ( 
    <main className = "container-fluid">
        <section className = "row row-cols-2">
            <aside className="col col-md-2">
                <NavList routing={routing.categorias}/>
            </aside>
            <article className = "col col-md-12" >
                {/* {products.map((groupProducts, ind) => {
                    
                    return (
                        <div key={ind} className = "card-group mt-4">
                            <div key={ind} className = "row row-cols-1 row-cols-md-4 g-4">
                            {groupProducts.map(product => {
                                return (
                                <ItemList key={product.id} product={product}/>
                                )

                            })}

                        </div> 
                        </div> 
                    )
                })} */}
            </article> 
        </section> 
    </main>
    )
 
}

export default ItemListContainer