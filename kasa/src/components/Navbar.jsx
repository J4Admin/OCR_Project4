import React from "react";

import { Link } from "react-router-dom";
import "../styles/Navbar.scss";

function Navbar() {
  return (
    <header>
      <nav>
        <div className="navbar-logo">
          <img src="src/assets/images/LOGO.png" alt="logo" />
        </div>
      </nav>
      <nav className="navbar">
        <img className="navbar-logo" src={navbarSrc} alt="logo" />
        <ul>
          <li>
            <Link to="/home">Accueil</Link>
          </li>
          <li>
            <Link to="/about">A Propos</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
