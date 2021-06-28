import React from 'react'

//Component
// import ItemDetailTitles from './components/ItemDetails/ItemDetailTitles'

//Styles
import './ItemDetailContainer.css'

const ItemDetailContainer = () => {
    return (
        <div className="container-fluid">
            {/* <ItemDetailTitles /> */}


            <div className="container-fluid">
                <div className="row gx-2">
                    <div className="col justify-content-center">
                        <div className="cuadro"></div>
                    </div>
                    <div className="col">
                        <div className="cuadro"></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ItemDetailContainer
