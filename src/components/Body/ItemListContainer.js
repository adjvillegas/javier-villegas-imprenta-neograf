import React from 'react'

//Styles
import './ItemListContainer.css'

function ItemListContainer(props) {
    return (
        <div id="Body" className="div-justify">
            <p className="fw-normal fs-4 text-center">{props.greeting}</p>
        </div>
    )
}

export default ItemListContainer

