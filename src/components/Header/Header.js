import React from 'react'
import { NavLink } from 'react-router-dom'
import './Header.scss'

const Header = () => (
    <div className='header'>
        <NavLink to="/home" activeClassName="header-link_active" className="header-link">Form</NavLink>
        <NavLink to="/chart" activeClassName="header-link_active" className="header-link">Chart</NavLink>
    </div>
)

export default Header;