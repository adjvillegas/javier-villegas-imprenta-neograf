import React, { useState, useEffect } from 'react'

import { useParams } from 'react-router-dom'

//Firebase
import { productCollections } from '../../Firebase'

//Component
import ItemDetailTitles from '../ItemDetails/ItemDetailTitle'
import ItemDetailBody from '../ItemDetails/ItemDetailBody'


    const ItemDetailContainer = () => {    
     
    const {id} = useParams()
    const [detail, setDetail] = useState([]) 
    const [loader, setLoader] = useState(true)

    useEffect(() => {

        ( async () => {
            const response = await productCollections.doc(id).get()
            setDetail({ id: response.id, ...response.data()})
            setLoader(false)
        })()

    }, [id])

    const showComponent = () => {
        return (
            <div>
            <ItemDetailTitles nameProduct={detail.descripcion} category={detail.categoria}/>
            <ItemDetailBody detail={detail} />
            </div>            
        )
    }

    return (
        <div className="container-fluid">
                
                {(loader) ?  <h1>Procesando..</h1> : showComponent()}
                
        </div>
    )
}

export default ItemDetailContainer
