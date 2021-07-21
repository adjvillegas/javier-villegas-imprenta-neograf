import React, { useState } from 'react'

//LINK ROUTER DOM
import { Link } from 'react-router-dom';

//Provider
import { useCartContext } from '../../providers/Cart/CartContext'

// db from Firebase
import { OrderCollections } from '../../Firebase'

const OrderFormContainer = () => {

    const { carts, getResumen, getCurrentDay } = useCartContext()

    const initialBuyerState = {
        nombre: '',
        telefono: '',
        email: ''
    }

    const [ buyer, setBuyer ] = useState(initialBuyerState)
    const [ orderId, setOrderId ] = useState('')    

    const handleInputChange = (evnt) => {
        const { name, value } = evnt.target
        setBuyer({ ...buyer, [name]: value })
    }

    const handleOnSubmit = (evnt) => {
        evnt.preventDefault()
        debugger
        addOrder(buyer)
        setBuyer({...initialBuyerState})
    }    

    const addOrder = async (oObject) => {
        debugger
        let date = getCurrentDay('.')
        let buyer = oObject
        let resume = getResumen(carts)
        let items = carts.map(cart => {

            let newArray = {
                id: cart.id,
                descripcion: cart.descripcion,
                quantity: cart.quantity,
                iva: cart.iva,
                precio: cart.precioDesde * cart.quantity
            }

            return (newArray)
        })
        
            await OrderCollections.add(
            { buyer, 
              items, 
              precio: resume.subTotal, 
              impuesto: resume.importing, 
              total: resume.price, 
              date: date 
            }).then( ({id}) => {

                setOrderId(id)

            }).catch(err => {
                debugger
            }).finally(() => {
                
                <Link to={`/order/${orderId}`}></Link>

            })
    }


    return (
        <main className="container-fluid">
            <h5 className="text-center">¡Ultimo paso para adquirir tu compra!</h5>
            <form onSubmit={handleOnSubmit} className="row row-cols-6">
                                <div className="mb-3">
                                    <input 
                                        type="text" 
                                        className="form-control"
                                        name="nombre" 
                                        placeholder="Nombre y Apellido"
                                        onChange={handleInputChange} 
                                        value={buyer.nombre}/>
                                </div>
                                <div className="mb-3">
                                    <input 
                                        type="tel" 
                                        className="form-control" 
                                        aria-describedby="tellHelp" 
                                        name="telefono" 
                                        placeholder="Número de contacto"
                                        onChange={handleInputChange}  
                                        value={buyer.telefono}/>
                                    <div id="tellHelp" className="form-text">Si ingresa un CEL. No complete la caracteristica con 0 y número sin 15</div>                                    
                                </div>
                                <div className="mb-3">
                                    <input 
                                        type="email" 
                                        className="form-control" 
                                        name="email" 
                                        placeholder="Ingrese Mail"
                                        onChange={handleInputChange}  
                                        value={buyer.email}/>
                                </div>
                                <button type="submit" className="btn btn-success">Confirmar Compra</button>
                            </form>            
        </main>
    )
}

export default OrderFormContainer
