import React, { useEffect, useState } from 'react'

import { useParams } from 'react-router'

//Components
import ItemList from '../ItemsList/ItemList'
import NotFound from '../../views/NotFound/PagNotFound';

//Firebase
import { productCollections } from '../../Firebase'

    const ItemListContainer = () => {
        
        const [items, setItems] = useState([])
        const { key } = useParams()

    useEffect(() => {
        ( async () => {
            let container = productCollections
            if (key) container = productCollections.where("categoria", "==", key)
            const response = await container.get()
            if (!response.empty) {
                setItems(response.docs.map( item => ({id: item.id, ...item.data()})))    
            } else {
                setItems(undefined)
            }
                  
        })()
    },[key])

    return (
        <main className="container-fluid">
            <section className="row row-cols-1">
                <article className="col col-md-12" >
                    {(items !== undefined) ? <ItemList products={items}/> : <NotFound/>}    
                </article>
            </section>
        </main>
    )

}


export default ItemListContainer