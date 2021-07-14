import React, { useEffect, useState } from 'react'

//Components
import ItemList from '../ItemsList/ItemList'

//Firebase
import { productCollections } from '../../Firebase'


// const ItemListContainer = ({match}) => {
    const ItemListContainer = () => {
    
        const [items, setItems] = useState([])

    useEffect(() => {
        ( async () => {
            const response = await productCollections.get()
            setItems(response.docs.map( item => ({id: item.id, ...item.data()})))
        })()
    },[])

    return (
        <main className="container-fluid">
            <section className="row row-cols-1">
                <article className="col col-md-12" >
                    {/* <ItemList routing={match.params.id}/> */}
                    <ItemList products={items}/>                    
                </article>
            </section>
        </main>
    )

}


export default ItemListContainer