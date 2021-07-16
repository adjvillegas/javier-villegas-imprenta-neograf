import React from 'react'

//LINK ROUTER DOM
import { Link } from 'react-router-dom';

const BackButtom = () => {
    return (
        <div className="col-2">
        <Link to="/">
        <button type="button" className="col-12  btn btn-outline-secondary">
            Volver
        </button>
        </Link>                    
    </div>
    )
}

export default BackButtom
