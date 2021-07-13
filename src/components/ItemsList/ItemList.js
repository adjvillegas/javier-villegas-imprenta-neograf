import React, { useState, useEffect } from 'react'

//Component
import Item from './Item'

//Provider
import { useCartContext } from '../../providers/Cart/CartContext'

const ItemList = ({router}) => {

    const { products } = useCartContext()    

    // const [productss, setProducts] = useState([])
    const [category, setCategory] = useState([])

    useEffect(() => {
           
        // fetch(process.env.REACT_APP_CATALOGO_URL)
        //     .then(response => response.json())
        //     .then((json) => {
                
                if (router > 0) {
                    // setProducts(json.filter(oObject => oObject.categoria === parseInt(router))) 
                    
                    fetch(process.env.REACT_APP_CATEGORIA_URL)
                    .then(response => response.json())
                    .then(success => {
                        let oObject = success.filter(oObject => oObject.id === parseInt(router))
                        setCategory(oObject[0]) 
                    })

                // } else {

                // setProducts(json)
                // setCategory({"id": 0, "descripcion": "Todos Nuestros Productos"})
            
            // }
            }

            // )
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