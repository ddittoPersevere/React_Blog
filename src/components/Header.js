import React from 'react'
import {NavLink} from 'react-router-dom'

const Header = (props) => (
    <nav className="navbar navbar-light bg-dark py-0">
        <NavLink className="navbar-brand lead text-light name logo m-0" to="/">Da Blogzzzz</NavLink>
            <ul className="navbar-nav mr-0 d-flex flex-row">
                <li className="nav-item mx-3">
                    <NavLink to="/">Home</NavLink>
                </li>
                <li className="nav-item mx-3">
                    <NavLink to="/add">Create</NavLink>
                </li>
            </ul>
    </nav>
)

export default Header
