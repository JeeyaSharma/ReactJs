import React from 'react'
import './Navbar.css'

const Navbar= () => {
    return (
        <div>
            <nav className="navbar">
                <ul id='nav-items'>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
            </nav>
        </div>
    )
}

export default Navbar