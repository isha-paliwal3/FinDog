import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import '../styles/Navbar.css'
function Navbar() {
  return (
    <div>
     
        <nav className="navbar">
        <a className="navbar-brand" href="#">findog</a>  
        <button className="navbar-toggler" type="button">
          <FontAwesomeIcon icon="fa-solid fa-bars" />
        </button>
        <div className="navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link" href="#features">Features</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#purchase">Purchasing</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#footer">Contact</a>
            </li>
          </ul>
        </div>
        </nav>

    </div>
  )
}

export default Navbar
