import React from "react";
import "./Housing.scss";
import Slideshow from "../Slideshow/Slideshow";

function Housing({ images }) {
  return (
    <div className="housing">
      <Slideshow images={images} />
      <div className="housing__information">
        <div className="housing__first__block">
          <h1 className="housing__title">
            Crazy loft on the Canal Saint-martin
          </h1>
          <h2 className="housing__location ">Paris, ile de france</h2>
          <div className="housing__tag__list">
            <span className="housing__tag ">cozy</span>
            <span className="housing__tag ">canal</span>
            <span className="housing__tag ">Paris 10</span>
          </div>
        </div>
        <div className="housing__host">
          <div className="housing__host__information">
            <h2 className="housing__host__name"> Alexandre Dumas</h2>
            <img
              className="housing__host__picture"
              src="https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/profile-picture-12.jpg"
              alt="host picture"
            />
          </div>
          <div className="housing__host__rating">
            <span>
              <i className="fa-solid fa-star"></i>
            </span>
            <span>
              <i className="fa-solid fa-star"></i>
            </span>
            <span>
              <i className="fa-solid fa-star"></i>
            </span>
            <span>
              <i className="fa-regular fa-star"></i>
            </span>
            <span>
              <i className="fa-regular fa-star"></i>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Housing;
