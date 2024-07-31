import React from "react";
import { useState } from "react";
import "../styles/Banner.scss";

function Banner() {
  const bannerText = ["Chez vous, partout et ailleurs", ""];
  const bannerBackground = ["./src/assets/images/border-background.png", ""];

  return (
    <div className="banner">
      <div className="banner-text">{bannerText[0]}</div>
      <img className="banner-background" src={bannerBackground[0]} />
    </div>
  );
}

export default Banner;
