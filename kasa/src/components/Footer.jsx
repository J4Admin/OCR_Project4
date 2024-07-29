import React from "react";
import "../styles/Footer.scss";

function Footer() {
  const footerSrc = "src/assets/images/logo-white.png";
  return (
    <footer className="footer">
      <img className="footer-image" alt="LOGO" src={footerSrc} />
      <p className="footer-text">© 2020 Kasa. All rights reserved</p>
    </footer>
  );
}

export default Footer;
