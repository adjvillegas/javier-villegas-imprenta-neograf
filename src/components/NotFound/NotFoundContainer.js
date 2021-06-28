import React from 'react'

import './NotFoundContainer.css'

// // get our fontawesome imports
import { faPrint } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const NotFoundContainer = () => {
    return (
        <div className="d-flex align-items-center text-danger not-found-container" id="errorContainer">
        <div className="container-fluid">
             <div className="row-12 d-flex justify-content-center align-items-center">
               <h2>Error 404</h2>
                <h4 className="ms-2 me-2">-</h4>
                <h4>Pagina no encontrada</h4>
            </div>
            <div className="row mt-5 align-items-center c">
                <div className="col-8">
                    <p className="text-center">¡Lo sentimos!</p>
                    <p className="text-center">Parece que nuestra impresora se quedo sin papel y no puede imprimir esta sección</p>
                    <p className="text-center">Por favor, te pedimos que explores otros link mientras arreglamos este detalle</p>
                </div>
                <div className="col-3 d-flex justify-content-center"> 
                    <FontAwesomeIcon icon={faPrint} size="10x"/>
                </div>
            </div>                        
        </div>
        </div>
    )
}

export default NotFoundContainer
