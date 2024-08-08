import React, { useState } from "react";
import AboutRules from "../../data/AboutRules.json";
import "./Collapse.scss";

function Collapse() {
  const iconeSrc = "src/assets/icones/arrow.png";

  const [openCollapse, setOpenCollapse] = useState([]);

  const toggleContent = (index) => {
    setOpenCollapse((prevState) =>
      prevState.includes(index)
        ? prevState.filter((i) => i !== index)
        : [...prevState, index]
    );
  };
  return (
    <>
      {AboutRules.map((id, index) => (
        <div key={index} className="Collapse">
          <div className="Collapse__background">
            <p className="Collapse__title">{id.title}</p>
            <button
              className="Collapse__button"
              onClick={() => toggleContent(index)}
            >
              <img
                className={`Collapse__arrow ${
                  openCollapse.includes(index) ? "Collapse__arrow--rotate" : ""
                }`}
                src={iconeSrc}
                alt="open-collapse"
              />
            </button>
          </div>
          {openCollapse.includes(index) && (
            <p className="Collapse__content">{id.content}</p>
          )}
        </div>
      ))}
    </>
  );
}

export default Collapse;
