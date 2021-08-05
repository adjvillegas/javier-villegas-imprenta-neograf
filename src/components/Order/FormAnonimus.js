import React from 'react'

const FormAnonimus = ({fnHandleOnSubmit, fnHandleInputChange, aBuyer}) => {
    return (
            <div>
            <h5 className="text-center mt-4">¡Ultimo paso para adquirir tu compra!</h5>
            <div className="row row-cols-3 mt-5 justify-content-center">
                <form onSubmit={fnHandleOnSubmit} className="row justify-content-center">
                    <div className="row mb-3">
                        <input
                            type="text"
                            className="form-control"
                            name="nombre"
                            placeholder="Nombre y Apellido"
                            onChange={fnHandleInputChange}
                            value={aBuyer.nombre} />
                    </div>                    
                    <div className="row mb-3">
                        <input
                            type="tel"
                            className="form-control"
                            aria-describedby="tellHelp"
                            name="telefono"
                            placeholder="Número de contacto"
                            onChange={fnHandleInputChange}
                            value={aBuyer.telefono} />
                        <div id="tellHelp" className="form-text">Si ingresa un CEL. No complete la caracteristica con 0 y número sin 15</div>
                    </div>
                    <div className="row mb-3">
                        <input
                            type="email"
                            className="form-control"
                            name="email"
                            placeholder="Ingrese Mail"
                            onChange={fnHandleInputChange}
                            value={aBuyer.email} />
                    </div>
                    <button type="submit" className="col-5 btn btn-success">Confirmar Compra</button>
                </form>
            </div>
        </div>
    )
}

export default FormAnonimus
