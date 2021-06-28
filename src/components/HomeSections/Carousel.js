import React from 'react'

//Styles
import "./Carousel.css"


const Carousel = () => {
    return (
        <div id="carouselExampleDark" className="carousel carousel-dark slide content-h-carousel" data-bs-ride="carousel">

            <div className="carousel-indicators">

                <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" className="active"

                    aria-current="true" aria-label="Slide 1"></button>

                <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1"

                    aria-label="Slide 2"></button>

                <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2"

                    aria-label="Slide 3"></button>

            </div>

            <div className="carousel-inner">

                <div className="carousel-item active" data-bs-interval="10000">

                    <img src={process.env.PUBLIC_URL + "/img/imagen1-header.jpg"} className="d-block w-100 content-h-carousel" alt="imagen1-header"></img>

                    <div className="carousel-caption d-none d-md-block">

                        <h5 className="text-white">Trabajo Garantizado</h5>

                        <p className="text-white">Les brindamos el mejor servicio a través de las nuevas tecnologias,

                            mejorando el

                            precio y calidad.</p>

                    </div>

                </div>

                <div className="carousel-item" data-bs-interval="2000">

                    <img src={process.env.PUBLIC_URL + "/img/imagen2-header.jpg"} className="d-block w-100 content-h-carousel" alt="imagen2-header"></img>

                    <div className="carousel-caption d-none d-md-block">

                        <h5 className="text-white">Colores reales</h5>

                        <p className="text-white">Nuestras tintas son garantia de calidad, importadas para brindarle el

                            servicio que

                            se merece.</p>

                    </div>

                </div>

                <div className="carousel-item">

                    <img src={process.env.PUBLIC_URL + "/img/imagen3-header.jpg"} className="d-block w-100 content-h-carousel" alt="Imagen3"></img>

                    <div className="carousel-caption d-none d-md-block">

                        <h5>Terminaciones detalladas</h5>

                        <p>Para nosotros los detalles son lo mas importante, demostrandolo por mas de 10 años.</p>

                    </div>

                </div>

            </div>

            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark"

                data-bs-slide="prev">

                <span className="carousel-control-prev-icon" aria-hidden="true"></span>

                <span className="visually-hidden">Previous</span>

            </button>

            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark"

                data-bs-slide="next">

                <span className="carousel-control-next-icon" aria-hidden="true"></span>

                <span className="visually-hidden">Next</span>

            </button>

        </div>
    )

}

export default Carousel;
