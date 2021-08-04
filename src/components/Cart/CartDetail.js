import React, { useEffect, useState } from 'react'

//Component
import Cartthead from '../CartTable/Cartthead'
import Carttbody from '../CartTable/Carttbody'     
import CartResumen from './CartResumen.js'
import CartFooter from '../Cart/CartFooter.js'

//Provider
import { useCartContext } from '../../providers/Cart/CartContext'


const CartDetail = () => {

    const { carts, removeItem } = useCartContext()
    const [ enabled, setEnabled ] = useState(true)
    
    useEffect(() => {
        if (carts.length === 1) {
   
            setEnabled(false)
           
        } else {
            setEnabled(true)
        }

    }, [carts])

    return (
      
        <div className="row justify-content-center mt-4">
        <div className="col-8 table">                
            <table className="table align-middle">
                <Cartthead/>
                <Carttbody carts={carts} removeItem={removeItem} show={enabled}/>
            </table>       
        </div> 
        {(carts.length > 0) ? 
        <CartResumen carts={carts}/> :  
        <h1 className="text-center">No Existen registros</h1>
        }
                <CartFooter show={carts.length}/>        
        </div>
    )
}

export default CartDetail
