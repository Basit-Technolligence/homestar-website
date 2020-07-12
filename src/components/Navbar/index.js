import React from 'react'
import './style.css'
import { NavLink } from 'react-router-dom'

const Navbar=()=>{
    return(
        
        <nav className="navbar navbar-expand-lg navbar-light">
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav mx-auto">
            <NavLink exact className="nav-item nav-link" to="/">Home</NavLink>
            <NavLink exact className="nav-item nav-link" to="/products">Products</NavLink>
            <NavLink exact className="nav-item nav-link" to="/about">About</NavLink>
            <NavLink exact className="nav-item nav-link" to="/contact">Contact</NavLink>
          </div>
        </div>
      </nav>

    )
}

export default Navbar