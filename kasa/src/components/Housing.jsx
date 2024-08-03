import React from "react";
import HousingCards from "../data/HousingData.json";

import "../styles/Housing.scss";

function Housing() {
  return (
    <>
      {HousingCards.map((id, index) => (
        <div key={index} className="housing">
          <img className="housing-image" src={id.cover} alt={id.title} />
          <p className="housing-text">{id.title}</p>
        </div>
      ))}
    </>
  );
}

export default Housing;
