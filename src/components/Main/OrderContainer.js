import React from 'react'

import { useParams } from 'react-router'

const OrderContainer = () => {

    const { id } = useParams() 
    return (
        <main className="container-fluid">
            <h1>{id}</h1>
        </main>
    )
}

export default OrderContainer
