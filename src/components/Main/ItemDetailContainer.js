import React, { useState, useEffect } from 'react'

//Component
import ItemDetailTitles from '../ItemDetails/ItemDetailTitle'
import ItemDetailBody from '../ItemDetails/ItemDetailBody'

const ItemDetailContainer = ({ myId }) => {

    const [detail, setDetail] = useState([]) 

    useEffect(() => {
        fetch(process.env.REACT_APP_CATALOGO_URL)
            .then(response => response.json())
            .then((json) => {
                    debugger
                    setDetail(json.find(oObject => oObject.id === parseInt(myId)))
 
            })

    }, [myId])

    return (
        <div className="container-fluid">
                <ItemDetailTitles idCategory={detail.category} nameProduct={detail.descripcion}/>
                <ItemDetailBody detail={detail} />
        </div>
    )
}

export default ItemDetailContainer
