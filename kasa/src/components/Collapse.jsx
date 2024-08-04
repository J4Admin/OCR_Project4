import React, { useState } from "react";
import AboutRules from "../data/AboutRules.json";
import "../styles/Collapse.scss";

function Collapse() {
  const IconeSrc = [
    "src/assets/images/arrowtop.png",
    "src/assets/images/arrowbottom.png",
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
                src={openCollapse.includes(index) ? IconeSrc[1] : IconeSrc[0]}
                alt="open-collapse"
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
