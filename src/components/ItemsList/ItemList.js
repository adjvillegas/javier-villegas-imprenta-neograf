import React from 'react'

//Component
import Item from './Item'

const ItemList = ({ products }) => {

    let groupValues = []
    let currents = []
    let endValues = products.length
    let indx = 0

    return (

        <div className="mt-4">
            {products.map(product => {
                indx = indx + 1
                groupValues.push(product)

                if (indx % 3 === 0 || indx === endValues) {
                    currents = groupValues
                    groupValues = []

                    return (

                        <div key={indx} className="card-group mt-4 justify-content-center">
                            <div className="row row-cols-1 row-cols-md-3 mt-4 justify-content-center g-4">

                                {currents.map(current => {
                                    return (
                                        <Item key={current.id} product={current} />
                                    )

                                })}

                            </div>
                        </div>
                    )
                }

            })

            }




        </div>
    )

}

export default ItemList