import React from 'react'

//LINK ROUTER DOM
import { Link } from 'react-router-dom';

//Styles
import './CartFooter.css'

//Provider
import { useCartContext } from '../../providers/Cart/CartContext'

const CartFooter = ({ show }) => {

    const { clear } = useCartContext()

    const handleClearCart = () => {
        clear()
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
                    <Link to="/order">                    
                        <button type="button" className="col-12  btn btn-outline-success">
                            Comprar
                        </button>
                    </Link>                    
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
        </div>
    )
}

export default CartFooter
