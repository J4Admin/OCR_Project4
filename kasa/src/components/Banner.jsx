import React from "react";
import "../styles/Banner.scss";
import { useLocation } from "react-router-dom";

function Banner({ imageSrc, bannerText, isHidden }) {
  const bannerTextClass = isHidden ? "hidden" : "banner-text";

  return (
    <div className="banner">
      <img className="banner-img" src={imageSrc} alt="Banner" />
      <p className={bannerTextClass}>{bannerText}</p>
    </div>
  );
}

export default Banner;
