import React, { useState } from 'react'

//LINK ROUTER DOM
import { Link } from 'react-router-dom';

//Styles
import './CartFooter.css'

//Provider
import { useCartContext } from '../../providers/Cart/CartContext'

const CartFooter = ({ show, addOrder }) => {

    const initialBuyerState = {
        nombre: '',
        telefono: '',
        email: ''
    }

    const { clear } = useCartContext()
    const [ buyer, setBuyer ] = useState(initialBuyerState)

    const handleClearCart = () => {
        clear()
    }

    const handleInputChange = (evnt) => {
        const { name, value } = evnt.target
        setBuyer({ ...buyer, [name]: value })
    }

    const handleOnSubmit = (evnt) => {
        evnt.preventDefault()
        addOrder(buyer)
        setBuyer({...initialBuyerState})
    }

    return (
        <div className="container mt-1">
            <div className="row justify-content-end">
                <div className={(show > 0) ? "col-2" : "col-2 d-none"} >
                    <button type="button"
                        className="col-12 btn btn-outline-danger"
                        data-bs-toggle="modal"
                        data-bs-target="#staticBackdrop">
                        Borrar
                    </button>
                </div>
                <div className={(show > 0) ? "col-2" : "col-2 d-none"} >
                    <button type="button" className="col-12  btn btn-outline-success"
                        data-bs-toggle="modal"
                        data-bs-target="#staticFormBuyer">
                        Comprar
                    </button>
                </div>
                <div className="col-2">
                    <Link to="/">
                        <button type="button" className="col-12  btn btn-outline-secondary">
                            Volver
                        </button>
                    </Link>
                </div>
            </div>

            {/* Modal for Delete all */}
            <div className="modal fade" id="staticBackdrop"
                // data-bs-backdrop="static"
                data-bs-keyboard="false"
                tabIndex="-1"
                aria-labelledby="staticBackdropLabel"
                aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="staticBackdropLabel">¡Atención Estas borrando toda tu compra!</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <p className="text-center">
                                Estas por borrar todo tu pedido. ¿Estas seguro de continuar?
                            </p>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
                            <button type="button" className="btn btn-primary" onClick={handleClearCart}>Borrar Pedido</button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Modal for to buy */}
            <div className="modal fade" id="staticFormBuyer"
                // data-bs-backdrop="static"
                data-bs-keyboard="false"
                tabIndex="-1"
                aria-labelledby="staticFormBuyerLabel"
                aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="staticFormBuyerLabel">¡Ultimo paso para adquirir tu compra!</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <form onSubmit={handleOnSubmit}>
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
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CartFooter
