import React from "react";
import "../styles/Navbar.scss";

function Navbar() {
  const navbarSrc = "src/assets/images/logo-orange.png";

  return (
    <header>
      <nav className="navbar">
        <div>
          <img src={navbarSrc} alt="logo" />
        </div>
        <ul>
          <li>
            <a href="">Accueil</a>
          </li>
          <li>
            <a href="">A Propos</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
