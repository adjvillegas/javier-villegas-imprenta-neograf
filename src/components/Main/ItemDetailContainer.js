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
    const [isFound, setIsFound ] = useState(true)
    const [loader, setLoader] = useState(true)

    useEffect(() => {

        ( async () => {
            const response = await productCollections.doc(id).get()
        
            if (response.data() !== undefined) {
                setDetail({ id: response.id, ...response.data()})
                setIsFound(true)
            } else {
                setDetail({ id: id, descripcion: "PRODUCTO NO ENCONTRADO", nota: "Este producto no se encuentra dentro de nuestro catalogo",categoria: "...", archive: "https://firebasestorage.googleapis.com/v0/b/imprentaneografreact.appspot.com/o/not-found-image-15383864787lu.jpg?alt=media&token=c500e44f-291e-4b17-82a7-9171120fbd33"})  
                setIsFound(false)
            }
            setLoader(false)
        })()

    }, [id])

    const showComponent = () => {
        return (
            <div>
            <ItemDetailTitles nameProduct={detail.descripcion} category={detail.categoria}/>
            <ItemDetailBody detail={detail} isFound={isFound}/>
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
