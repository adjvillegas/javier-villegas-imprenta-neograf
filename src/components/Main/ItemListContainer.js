import React, { useEffect, useState } from 'react'

import { useParams } from 'react-router'

//Components
import ItemList from '../ItemsList/ItemList'

//Firebase
import { productCollections } from '../../Firebase'

    const ItemListContainer = () => {
        
        const [items, setItems] = useState([])
        const { id } = useParams()

    useEffect(() => {
        ( async () => {
            let container = productCollections
            if (id) container = productCollections.where("categoria", "==", id)
            const response = await container.get()
            setItems(response.docs.map( item => ({id: item.id, ...item.data()})))
        })()
    },[id])

    return (
        <main className="container-fluid">
            <section className="row row-cols-1">
                <article className="col col-md-12" >
                    <ItemList products={items}/>                    
                </article>
            </section>
        </main>
    )

}


export default ItemListContainer