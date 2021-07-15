import React from 'react'

//Component
import Item from './Item'

const ItemList = ({ products }) => {
      
    return (
        
        <div className="mt-4">
            <div className="card-group mt-4 justify-content-center">
                
                <div className="row row-cols-1 row-cols-md-3 mt-4 justify-content-center g-4">

                    {products.map(product => {
                        return (
                            <Item key={product.id} product={product} />
                        )

                    })}
                    
                </div>
            </div>
        </div>
    )

}

export default ItemList