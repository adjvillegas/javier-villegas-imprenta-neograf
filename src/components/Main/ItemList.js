// import React, { useState } from 'react'
import React from 'react'

//Component
import Item from './Item'

const ItemList = ({product}) => {
    
    return (
        
                <div className="col">
                <Item key={product.id} product={product} />
                </div>
                            )
        
}

export default ItemList