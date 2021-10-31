import React from 'react'
import logo from '../assets/logo.png'
import '../styles/navbar.css'

export const Navbar = () => {
    return (
        <div>
            <nav className="main-nav">
                <div className="logo">
                    <img src={logo} alt="logo" className="image-logo" />
                </div>
                <div className="nav-links">
                    <div className="nav-home">
                        <a href="/">Home</a>
                    </div>
                    <div className="nav-home">
                        <a href="/">About</a>
                    </div>
                    <div className="nav-home">
                        <a href="/">Contact</a>
                    </div>
                    <div className="nav-home">
                        <a href="/">Opportunity</a>
                    </div>
                    <div className="nav-home">
                        <a href="/">Team</a>
                    </div>
                    <div className="nav-home">
                        <a href="/">Events</a>
                    </div>
                </div>

            </nav>
        </div>
    )
}

export default Navbar
