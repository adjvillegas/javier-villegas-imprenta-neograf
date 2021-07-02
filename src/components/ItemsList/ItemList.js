import React, { useState, useEffect } from 'react'

//Component
import Item from './Item'

const ItemList = ({router}) => {
    
    const [products, setProducts] = useState([])

    useEffect(() => {
        
        fetch("https://run.mocky.io/v3/1728e637-dbe7-4771-aeae-c2dcf19c2d5a")
            .then(response => response.json())
            .then((json) => {
                debugger
                if (router === undefined) {
                    setProducts(json)    
                } else {

                setProducts(json)
            
            }
            }

            )
    }, [router])

    return (
        
        <div className="mt-4">
            <div className="card-group mt-4">
                <div className="row row-cols-1 row-cols-md-4 g-4">

                    {products.map(product => {
                        return (

                            <Item key={product.id} product={product} />

                        )

                    })}
                    
                </div>
            </div>
        </div>
    )

}

export default ItemList