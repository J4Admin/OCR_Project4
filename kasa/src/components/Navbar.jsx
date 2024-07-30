import React from "react";
<<<<<<< Updated upstream
=======
import { Link } from "react-router-dom";
import "../styles/Navbar.scss";
>>>>>>> Stashed changes

function Navbar() {
  return (
<<<<<<< Updated upstream
    <nav>
      <div className="navbar-logo">
        <img src="src/assets/images/LOGO.png" alt="logo" />
      </div>
    </nav>
=======
    <header>
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
>>>>>>> Stashed changes
  );
}

export default Navbar;
