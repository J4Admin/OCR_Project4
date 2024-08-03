import React from "react";
import AboutRules from "../data/AboutRules.json";
import "../styles/Description.scss";

const arrayIcone = [
  "../assets/images/arrowtop.png",
  "../assets/images/arrowbottom.png",
];
function Description() {
  return (
    <div className="description">
      {AboutRules.map((id, index) => (
        <div key={index} className="rules">
          <div className="rules-background">
            <p className="rules-title">{id.title}</p>
            <button className="rules-button">
              <img
                className="arrow"
                src={arrayIcone[0]}
                alt="open-description"
              />
            </button>
          </div>
          <p className="rules-content hidden">{id.content}</p>
        </div>
      ))}
    </div>
  );
}

export default Description;
