import React, { useState, useEffect } from 'react'

//Components
import ItemList from './ItemList'

const ItemListContainer = (props) => {

    const [products, setProducts] = useState([])

    useEffect(() => {
        fetch('https://run.mocky.io/v3/1728e637-dbe7-4771-aeae-c2dcf19c2d5a')
            .then(response => response.json())
            .then((json) => {

                    let oObject = []
                    let oPush = []
                    let check

                    for (let index = 0; index < json.length; index++) {

                        oObject.push(json[index])

                        check = index + 1

                        if (check % 4 === 0) {
                            oPush.push(oObject)
                            oObject = []
                        } else if (check === json.length) {
                            oPush.push(oObject)
                        }
                    }

                    setProducts(oPush)
                }

            )
    })

    return ( 
    <main className = "container-fluid">
        <section className = "row">
            <article className = "col col-md-12" >
                {products.map((groupProducts, ind) => {
                    
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
                })}
            </article> 
        </section> 
    </main>
    )
 
}

export default ItemListContainer