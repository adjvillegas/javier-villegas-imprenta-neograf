import React, { useState, useEffect } from 'react'

//Component
import ItemDetailTitles from '../ItemDetails/ItemDetailTitle'
import ItemDetailBody from '../ItemDetails/ItemDetailBody'

const ItemDetailContainer = ({ myId }) => {

    const [detail, setDetail] = useState([]) 

    useEffect(() => {
        fetch("https://run.mocky.io/v3/35a72200-b526-462b-8510-91cf015fb17f")
            .then(response => response.json())
            .then((json) => {
                if (myId !== undefined) {
                    setDetail(json.find(oObject => oObject.id === parseInt(myId)))
                }
            })

    }, [myId])

    return (
        <div className="container-fluid">
                <ItemDetailTitles detail={detail}/>
                <ItemDetailBody detail={detail} />
        </div>
    )
}

export default ItemDetailContainer
