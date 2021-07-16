import React from 'react'

import Cartthead from '../CartTable/Cartthead'
import Carttbody from '../CartTable/Carttbody'     

//Component
import CartResumen from './CartResumen.js'

//Provider
import { useCartContext } from '../../providers/Cart/CartContext'


const CartDetail = () => {

    const { carts, removeItem } = useCartContext() 

    return (
      
        <div className="row justify-content-center mt-4">
        <div className="col-8 table-responsive">                
            <table className="table align-middle">
                <Cartthead/>
                <Carttbody carts={carts} removeItem={removeItem}/>
            </table>       
        </div> 
        {(carts.length > 0) ? <CartResumen carts={carts}/> : <h1 className="text-center">No Existen registros</h1>}
        </div>
    )
}

export default CartDetail
