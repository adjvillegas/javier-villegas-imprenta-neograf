import React, { useState } from 'react'


const OnLogon = ({fnHandleSubmit, read, fnChangeView}) => {

    const initContainer = {
        user: " ",
        pass: undefined,
        checkPass: undefined,
    }

    const [containerUser, setContainerUser] = useState(initContainer)   

    const handleOnChangeInput = (evnt) => {

        let {name, value} = evnt.target

        setContainerUser({ ...containerUser, [name]: value } )

    }

    const ChangeView = () => {
        setContainerUser(initContainer)
        fnChangeView()
    }

    const HandleSubmit = (evnt) => {
        evnt.preventDefault()

        if (read) {
            fnHandleSubmit(containerUser)   
        } else {

            if (containerUser.pass === containerUser.checkPass)
            fnHandleSubmit(containerUser) 

        }

    }

    return (
        <div className="container">
        <div className="row justify-content-center">
            <form className="row justify-content-center" onSubmit={HandleSubmit}>
                <div className="col-7 mb-3 mt-3 d-flex justify-content-center">
                    { (read) ? <h4>INICIE SESIÓN</h4> : <h4>Registración</h4>}
    
                </div>
                <div className="col-7 mb-3 justify-content-center">
                    <input type="email" value={containerUser.user} className="form-control text-center" placeholder="Usuario@dominio.com" name="user" onChange={handleOnChangeInput}/>
                </div>
                <div className="col-7 mb-3 justify-content-center">
                    <input type="password" value={containerUser.pass} className="form-control text-center" placeholder="Contraseña" name="pass"  onChange={handleOnChangeInput}/>
                </div>
                { (!read) && 
                <div className="col-7 mb-3 justify-content-center">
                    <input type="password" value={containerUser.checkPass} className="form-control text-center" placeholder="Repita Contraseña" name="checkPass" onChange={handleOnChangeInput}/>
                </div>
                }
                <div className="col-7 d-flex justify-content-center">
                    <button type="submit" className="btn btn-primary mb-4 mt-4">
                        { (read) ? 'Iniciar' : 'Crear Usuario'}
                    </button>
                </div>
                    { (read) &&
                <div className="col-12 d-flex justify-content-center mt-4 mb-4">
                    <button type="button" className="btn btn-link" onClick={ChangeView}>Crear Usuario
                    </button>  
                </div>
                    }                
            </form>
        </div>
    </div> 
    )
}

export default OnLogon
