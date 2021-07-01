import React from 'react'

//Components
import ItemList from '../ItemsList/ItemList'
import NavList from '../NavList/NavList'

const ItemListContainer = (props) => {

    return (
        <main className="container-fluid">
            <section className="row row-cols-2">
                <aside className="col col-md-2">
                    <NavList />
                </aside>
                <article className="col col-md-10" >
                    <ItemList />
                </article>
            </section>
        </main>
    )

}

export default ItemListContainer