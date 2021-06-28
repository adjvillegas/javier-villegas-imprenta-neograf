import React from 'react'

import "./About.css"

const About = () => {
    return (
        <div>
            <section className="row mt-5 justify-content-around">
                <aside className="col-5">
                    <h2 className="text-center mb-4">Sobre Nosotros</h2>
                    <p className="text-start">
                        La imprenta NeoGraf nacio en San Nicolas de los Arroyos y de los sueños de su creador hace mas de 10 años
                        <br></br>
                        Somos una imprenta desarrollada para brindar servicios en cualquier punto del país
                        <br></br>
                        El conocimiento de las necesidades del mercado, nos permiten tener un servicio de calidad total con nuestros 
                        asociados, destacando, que en cada proyecto somos socios estratégicos de cada uno de nuestros clientes, logrando una satisfacción total
                    </p>                    
                </aside>
                <aside className="col-5">
                    <iframe title="videoNeograf"
                            className="iframe-neograf-responsive-video" 
                            src="https://www.youtube.com/embed/444-i9nwdWw"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen>
                    </iframe>
                </aside>
            </section>   
        </div>
    )
}

export default About
