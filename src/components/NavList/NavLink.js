import React from 'react'

//LINK ROUTER DOM
import { Link } from 'react-router-dom';

const NavLink = ({myClass, myId, descripcion}) => {
    
    return (
        <div>
        {/* <a className={myClass} id={`list-${value}-list`} data-bs-toggle="list"
        href={`#list-${value}`} role="tab" aria-controls={`list-${value}-list`}>{descripcion}</a> */}
        <Link className={myClass} to={`/categoria/${myId}`}>{descripcion}</Link>
        </div>
    )
}

export default NavLink
