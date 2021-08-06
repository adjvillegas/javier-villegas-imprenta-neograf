import React from 'react'

const OrderList = ({ User, orderList }) => {

    return (
        <div>
            <ul className="navbar-bar" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasWithBothOptions" aria-controls="offcanvasWithBothOptions">{User.email}</ul>
            <div className="offcanvas offcanvas-start" data-bs-scroll="true" tabIndex="-1" id="offcanvasWithBothOptions" aria-labelledby="offcanvasWithBothOptionsLabel">
                <div className="offcanvas-header">
                    <h5 className="offcanvas-title" id="offcanvasWithBothOptionsLabel">Mis Ordenes</h5>
                    <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>

                {orderList.map(order => {
                    return (
                        <div key={order.id} className="offcanvas-body">
                            <div>
                                <p><strong>Codigo de Orden:</strong> <em className="text-primary">{order.id}</em></p>
                            </div>
                            <div>
                                <table className="table">
                                    <thead>
                                        <tr>
                                            <th scope="col"></th>
                                            <th scope="col">Producto</th>
                                            <th scope="col">Cantidad</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {order.items.map(item => {
                                            return (
                                                <tr key={item.id}>
                                                    <th scope="row">#</th>
                                                    <td>{item.descripcion}</td>
                                                    <td>{item.quantity}</td>
                                                </tr>
                                            )
                                        })
                                        }

                                    </tbody>
                                </table>
                            </div>
                            <div>
                                <p className="text-end"><strong>Precio Total:</strong> <strong className="text-danger">{order.total} $</strong> </p>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default OrderList
