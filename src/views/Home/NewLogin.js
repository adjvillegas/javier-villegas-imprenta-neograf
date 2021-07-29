import React, { useState } from 'react'

const NewLogin = () => {

    const initContainer = {
        user: " ",
        pass: " ",
        checkPass: " ",
    }

    const [containerUser, setContainerUser] = useState(initContainer)

    const  handleOnChangeInput = (evnt) => {

        let {name, value} = evnt.target

        setContainerUser( [name] = {value}  )

    }


    return (
        <main className="container-fluid">
            <div className="container">
                <div className="row justify-content-center">
                    <form className="row justify-content-center">
                        <div className="col-7 mb-3 mt-3 d-flex justify-content-center">
                            <h3>Registración</h3>
                        </div>
                        <div className="col-7 mb-3 justify-content-center">
                            <input type="text" value={containerUser.user} className="form-control text-center" placeholder="Usuario" name="user" onChange={handleOnChangeInput}/>
                        </div>
                        <div className="col-7 mb-3 justify-content-center">
                            <input type="password" value={containerUser.pass} className="form-control text-center" placeholder="Contraseña" name="pass"  onChange={handleOnChangeInput}/>
                        </div>
                        <div className="col-7 mb-3 justify-content-center">
                            <input type="password" value={containerUser.checkPass} className="form-control text-center" placeholder="Repita Contraseña" name="checkPass" onChange={handleOnChangeInput}/>
                        </div>
                        <div className="col-7 d-flex justify-content-center">
                            <button type="submit" className="btn btn-primary mb-4 mt-4">Crear Usuario</button>
                        </div>
                    </form>
                </div>
            </div>           
        </main>
    )
}
export default NewLogin
