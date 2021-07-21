import React from 'react'

const OrderBuy = ({myOrder}) => {
    return (
        <div className="container-fluid text-center mt-5">
            <p className="fs-1 fw-bolder">Muchas gracias por confiar en nosotros</p>
            <p className="fs-4 fw-bolder">Sus productos fueron correctamente adquiridos</p>
            <div className="mt-5">
                <p className="fs-5 fw-normal">El numero de compra procesado corresponde:</p>
                <p className="fs-5 fst-italic font-monospace text-warning">{myOrder}</p>
            </div>
            <div className="mt-5">
                <p className="fw-light">Guarde este código para el siguimiento de entrega y/o reclamos</p>
            </div>
        </div>
    )
}

export default OrderBuy
