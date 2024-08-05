import React from "react";
import { Link } from "react-router-dom";
import "../styles/Navbar.scss";

function Navbar() {
  const navbarSrc = "src/assets/images/logo-navbar.png";
  return (
    <header>
      <nav className="navbar">
        <img className="navbar-logo" src={navbarSrc} alt="logo" />
        <ul>
          <li>
            <Link to="/">Accueil</Link>
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
