import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.scss";

function Navbar() {
  const logoSrc = "src/assets/images/logo-navbar.png";
  return (
    <header>
      <nav className="navbar">
        <img className="navbar__logo" src={logoSrc} alt="logo" />
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
