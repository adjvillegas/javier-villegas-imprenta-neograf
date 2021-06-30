import React, {useState, useEffect} from 'react'

//Component
import ItemDetailTitles from '../ItemDetails/ItemDetailTitle'
import ItemDetailBody from '../ItemDetails/ItemDetailBody'

//Styles
import './ItemDetailContainer.css'

const ItemDetailContainer = ({myId}) => {

    const [detail, setDetail] = useState([])

    useEffect(() => {

        fetch('https://run.mocky.io/v3/1728e637-dbe7-4771-aeae-c2dcf19c2d5a').then(response => response.json())
        .then((json) => {
            setDetail(json.find( oObject => oObject.id === parseInt(myId)))
        })

    }, [myId])
    
    return (
        <div className="container-fluid">
            <ItemDetailTitles/>
            <ItemDetailBody detail={detail}/>
        </div>
    )
}

export default ItemDetailContainer
