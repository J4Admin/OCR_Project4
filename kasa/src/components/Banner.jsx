import React from "react";
import { useLocation } from "react-router-dom";
import "../styles/Banner.scss";

function Banner() {
  const location = useLocation();
  const bannerText = ["Chez vous, partout et ailleurs", ""];

  const imageSrc = React.useMemo(() => {
    switch (location.pathname) {
      case "/home":
        return "/src/assets/images/banner-background-home.png";
      case "/about":
        return "/src/assets/images/banner-background-about.png";

      default:
        return "/src/assets/images/banner-background-home.png";
    }
  }, [location.pathname]);

  return (
    <div className="banner">
      <img src={imageSrc} alt="Banner" />
    </div>
  );
}

export default Banner;
