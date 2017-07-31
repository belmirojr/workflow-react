import React from 'react'
import { NavLink } from 'react-router-dom'

const NavMenu = () => {
    return (
        <nav> 
            <NavLink to={'/'} exact activeStyle={{ fontWeight: 'bold', color: 'red' }}>Home lá</NavLink>
            <NavLink to={'/contato'} activeStyle={{ fontWeight: 'bold', color: 'red' }}>Contato</NavLink>
            <NavLink to={'/balanco'} activeStyle={{ fontWeight: 'bold', color: 'red' }}>Balanço</NavLink>
        </nav>
    )
}

export default NavMenu