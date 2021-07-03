import React, { useState, useEffect } from 'react'

//Component
import Item from './Item'

const ItemList = ({router}) => {
    
    const [products, setProducts] = useState([])
    const [category, setCategory] = useState([])

    useEffect(() => {
        
        fetch("https://run.mocky.io/v3/35a72200-b526-462b-8510-91cf015fb17f")
            .then(response => response.json())
            .then((json) => {
                
                if (router > 0) {
                    setProducts(json.filter(oObject => oObject.categoria === parseInt(router))) 
                    
                    fetch("https://run.mocky.io/v3/82bb93f2-8e9e-44da-bf44-c89f3a0799f9")
                    .then(response => response.json())
                    .then(success => {
                        let oObject = success.filter(oObject => oObject.id === parseInt(router))
                        setCategory(oObject[0]) 
                    })

                } else {

                setProducts(json)
                setCategory({"id": 0, "descripcion": "Todos Nuestros Productos"})
            
            }
            }

            )
    }, [router])

    return (
        
        <div className="mt-4">
            <h2 className="text-center">{category.descripcion}</h2>
            <div className="card-group mt-4 justify-content-center">
                
                <div className="row row-cols-1 row-cols-md-3 mt-4 justify-content-center g-4">

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