import React from 'react'

//Component
import CartTable from '../CartTable/CartTable'

const CartBody = () => {
    return (
        <div className="row justify-content-center mt-4">
            <div className="col-8 table-responsive">
                <CartTable/>
            </div>
        </div>
    )
}

export default CartBody
