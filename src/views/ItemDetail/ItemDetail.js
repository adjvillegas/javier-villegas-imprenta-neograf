import React from 'react'

//Component
import ItemDetailContainer from '../../components/Main/ItemDetailContainer.js';

const ItemDetail = ({match}) => {

    return (
        <main>
            <ItemDetailContainer myId={match.params.id}/>
        </main>
    )
}

export default ItemDetail
