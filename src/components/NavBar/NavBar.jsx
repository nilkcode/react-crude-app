import React from 'react'
import {Link} from 'react-router-dom'


const Navbar = () => {
    return (
        <>
            <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
                <ul className="navbar-nav">
                    <li className="nav-item active">
                        <Link className="nav-link" to="/">Home Page</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/contacts/add">Add Contact </Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="#">Contacts</Link>
                    </li>
                  
                </ul>
            </nav>
        </>
    )
}

export default Navbar;