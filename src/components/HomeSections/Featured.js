import React from 'react'

//LINK ROUTER DOM
import { Link } from 'react-router-dom';

// get our fontawesome imports
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Featured = () => {
    return (
        <div>
            <section className="container mt-5">
                <div className="row row-cols-1 justify-content-center">
                    <h2 className="col text-center">Nuestros Productos</h2>
                    <h5 className="col text-center mt-3">Nuestros Productos son totalmente personalizados</h5>
                    <p className="col mt-2 text-center">
                        Contamos con una gran cantidad de productos, que pueden ser adquiridos con una personalización especial en el pedido
                        <br></br>
                        Te ofrecemos que puedas realizarlos a través de nuestra web de forma cómoda y fácil
                    </p>
                </div>
                <div className="d-flex justify-content-center mt-1">
                    <Link to="/">
                        <button type="button" className="btn btn-success btn-sm"><FontAwesomeIcon icon={faShoppingCart}/> Ingresar a la Tienda</button>
                    </Link>
                </div>
            </section>   
        </div>
    )
}

export default Featured
