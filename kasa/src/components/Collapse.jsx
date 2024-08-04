import React, { useState } from "react";
import AboutRules from "../data/AboutRules.json";
import "../styles/Collapse.scss";

function Collapse() {
  const IconeSrc = [
    "../assets/images/arrowtop.png",
    "../assets/images/arrowbottom.png",
  ];
  const [openCollapse, setOpenCollapse] = useState([]);

  const toggleContent = (index) => {
    if (openCollapse.includes(index)) {
      setOpenCollapse(openCollapse.filter((i) => i !== index));
    } else {
      setOpenCollapse([...openCollapse, index]);
    }
  };
  return (
    <div className="Collapse">
      {AboutRules.map((id, index) => (
        <div key={index} className="rules">
          <div className="rules-background">
            <p className="rules-title">{id.title}</p>
            <button
              className="rules-button"
              onClick={() => toggleContent(index)}
            >
              <img
                className="arrow"
                src={openCollapse.includes(index) ? IconeSrc[0] : IconeSrc[1]}
                alt="toggle-description"
              />
            </button>
          </div>
          {openCollapse.includes(index) && (
            <p className="rules-content">{id.content}</p>
          )}
        </div>
      ))}
    </div>
  );
}

export default Collapse;
