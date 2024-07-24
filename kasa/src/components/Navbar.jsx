import React from "react";

function Navbar() {
  return (
    <header>
      <nav className="navbar">
        <div>
          <img src="src/assets/images/LOGO.png" alt="logo" />
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
