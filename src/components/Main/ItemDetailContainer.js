import React, { useState, useEffect } from 'react'

//Component
import ItemDetailTitles from '../ItemDetails/ItemDetailTitle'
import ItemDetailBody from '../ItemDetails/ItemDetailBody'

const ItemDetailContainer = ({ myId }) => {

    const [detail, setDetail] = useState([]) 

    useEffect(() => {
        fetch("https://run.mocky.io/v3/d438ae3f-c2b1-43ed-af56-be70e5c75f19")
            .then(response => response.json())
            .then((json) => {

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
