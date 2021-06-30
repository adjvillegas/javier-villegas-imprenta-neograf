import React from 'react'


const NavLink = ({myClass, value, descripcion}) => {

    return (
        <div>
        <a className={myClass} id={`list-${value}-list`} data-bs-toggle="list"
        href={`#list-${value}`} role="tab" aria-controls={`list-${value}-list`}>{descripcion}</a>
        </div>
    )
}

export default NavLink
