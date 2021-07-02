import React from 'react'

//Components
import ItemList from '../ItemsList/ItemList'

const ItemListContainer = ({match}) => {

    return (
        <main className="container-fluid">
            <section className="row row-cols-1">
                <article className="col col-md-12" >
                    <ItemList router={match.params.id}/>
                </article>
            </section>
        </main>
    )

}


export default ItemListContainer