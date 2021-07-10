import React from 'react'

const Cartthead = () => {
    return (
        <thead className="table-dark">
            <tr>
                <th scope="col">Producto</th>
                <th scope="col">Cantidad</th>
                <th scope="col">Precio x Uni.</th>
                <th scope="col">Cod. Alicuota</th>
                <th scope="col">Eliminar    </th>
            </tr>
        </thead>
    )
}

export default Cartthead
