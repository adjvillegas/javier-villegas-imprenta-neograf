// import React, { useState } from 'react'
import React from 'react'

// get our fontawesome imports
import { faGlasses } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

//LINK ROUTER DOM
import { Link } from 'react-router-dom';

    const Item = ({ product }) => {

                        return (
                        <div key={product.id} className="card">
                            <img 
                                src={process.env.PUBLIC_URL + '/img/' + product.archive} 
                                alt={product.archive} 
                                className="card-img-top" />
                            <div className="card-body">
                                <h5>{product.descripcion}</h5>
                                <p>{product.nota}</p>
                            </div>
                            <div className="card-footer d-flex justify-content-end">
                                <Link to={`/detail/${product.id}`}>
                                    <FontAwesomeIcon icon={faGlasses} />
                                </Link>
                            </div>
                        </div>
                        )

}

export default Item



