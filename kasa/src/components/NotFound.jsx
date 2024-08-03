import React from "react";
import "../styles/NotFound.scss";

function NotFound() {
  return (
    <>
      <div className="notfound">
        <h1 className="notfound-title">404</h1>
        <p className="notfound-text">
          Oups! La page que vous demandez n'existe pas.
        </p>
        <link to="/home" className="notfound-link">
          Retourner sur la page d'accueil
        </link>
      </div>
    </>
  );
}

export default NotFound;
