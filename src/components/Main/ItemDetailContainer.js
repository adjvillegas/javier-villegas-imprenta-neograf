import React, { useState, useEffect } from 'react'

//Firebase
import { productCollections } from '../../Firebase'

//Component
import ItemDetailTitles from '../ItemDetails/ItemDetailTitle'
import ItemDetailBody from '../ItemDetails/ItemDetailBody'

const ItemDetailContainer = ({ myId }) => {

    const [detail, setDetail] = useState([]) 

    useEffect(() => {

        ( async () => {
            const response = await productCollections.doc(myId).get()
            setDetail({ id: response.id, ...response.data()}) 
        })()

    }, [myId])

    return (
        <div className="container-fluid">
                <ItemDetailTitles nameProduct={detail.descripcion}/>
                <ItemDetailBody detail={detail} />
        </div>
    )
}

export default ItemDetailContainer
