import React, { useEffect, useState } from 'react'

//Provider
import { useCartContext } from '../../providers/Cart/CartContext'

const NewLogin = () => {

    const { User, createNewUser } = useCartContext()

    const initContainer = {
        user: " ",
        pass: undefined,
        checkPass: undefined,
    }

    const [containerUser, setContainerUser] = useState(initContainer)
    const [userCreate, setUserCreate] = useState([])

    const  handleOnChangeInput = (evnt) => {
     
        let {name, value} = evnt.target

        setContainerUser({ ...containerUser, [name]: value } )

    }

    const handleOnSubmitLoging = async (evnt) => {

        evnt.preventDefault()

        if (containerUser.pass === containerUser.checkPass) {
            await createNewUser(containerUser)
            
        }   

    }

    const onLogin = () => {
        return (
            <div className="container">
                <div className="row justify-content-center">
                    <form className="row justify-content-center" onSubmit={handleOnSubmitLoging}>
                        <div className="col-7 mb-3 mt-3 d-flex justify-content-center">
                            <h3>Registración</h3>
                        </div>
                        <div className="col-7 mb-3 justify-content-center">
                            <input type="email" value={containerUser.user} className="form-control text-center" placeholder="Usuario@dominio.com" name="user" onChange={handleOnChangeInput}/>
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
        )
    }

    const onConnect = () => {
        return (
            <div>
                <h1 className="d-flex justify-content-center">Bienvenido a Imprenta Neograf!!</h1>
                <h4 className="d-flex justify-content-center">Con la registración de tu cuenta tienes enormes beneficios!!</h4>
            </div>
        )
    }


    useEffect(() => {
        setUserCreate(User)
    },[User])
    
    return (
       
        <main className="container-fluid">
            { (userCreate.length === 0) ? onLogin() : onConnect()}      
        </main>
    )
}
export default NewLogin
