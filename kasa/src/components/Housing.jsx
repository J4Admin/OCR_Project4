import React from "react";
import data from "../data.json";

import "../styles/Housing.scss";

function Housing() {
  return (

    <>
      {data.map((id, index) => (
        <div key={index} className="housing">
          <img className="housing-image" src={id.cover} alt={id.title} />
          <p className="housing-text">{id.title}</p>
        </div>
      ))}
    </>
  );
}

export default Housing;
