import React from 'react'

//LINK ROUTER DOM
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <main>
            <div className="container d-flex justify-content-center">
                <div className="row-7 mt-5">
                    <div className="col-md-12 d-flex justify-content-center">
                        <h4>INICIE SESIÓN</h4>
                    </div>
                    <div className="row-7 mt-3">
                        <div className="col-sm">
                            <input type="text" className="form-control form-control-lg" placeholder="Usuario" name="usuario"/>
                        </div>
                    </div>
                    <div className="row-7 mt-2">
                        <div className="col-sm">
                            <input type="password" className="form-control form-control-lg" placeholder="Contraseña" name="password"/>
                        </div>
                    </div>
                    <div className="col-12 d-flex justify-content-center mt-4 mb-4">
                        <button type="submit" className="btn btn-primary">Iniciar</button>
                    </div>
                    <div className="col-12 d-flex justify-content-center mt-4 mb-4">
                        <Link to="/newLogin">Crear Usuario</Link>
                    </div>
                </div>
            </div>
        </main>
    )
}
export default Login