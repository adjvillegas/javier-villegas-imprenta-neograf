import React from 'react'

//Component
import Cartthead from './Cartthead'
import Carttbody from './Carttbody'
 
const CartTable = () => {

return (
        <table className="table align-middle">
            <Cartthead/>
            <Carttbody/>
        </table>
    )
}

export default CartTable
