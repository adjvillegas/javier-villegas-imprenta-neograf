import React, { useState, useEffect } from 'react'

//Component
import Item from './Item'

//Provider
import { useCartContext } from '../../providers/Cart/CartContext'

//Import Firebase
// import {db} from '../../Firebase'

const ItemList = ({ products }) => {

    // const [ products, setProducts] = useState([])
    const [ currentCategory, setCurrentCategory] = useState({})      
    const { category } = useCartContext()
    
    // useEffect(() => {

    //     getProduct()

    // },[])

    const getProduct = () => {

        const docs = []
     
        // db.collection('catalogo').onSnapshot((querySnapshot) => {
        //     querySnapshot.forEach( collect => {
        //         docs.push({...collect.data(), id: collect.id })
        //     })
        //     if (filterId) {
        //         setProducts(docs.filter( docs => docs.categoria === filterId))
        //         setCurrentCategory(category.find(element => element.id === filterId))
        //     } else {
        //         setCurrentCategory({id: -1, value: 'Todos', descripcion: 'Todos los Productos'})
        //         setProducts(docs)
        //     }
        // })

    } 
  
    return (
        
        <div className="mt-4">
            <h2 className="text-center">{currentCategory.descripcion}</h2>
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