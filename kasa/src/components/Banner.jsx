import React from "react";
import "../styles/Banner.scss";
import { useLocation } from "react-router-dom";

function Banner() {
  const location = useLocation();
  const bannerContentText = ["Chez vous, partout et ailleurs", ""];

  const { imageSrc, bannerText, isHidden } = React.useMemo(() => {
    switch (location.pathname) {
      case "/home":
        return {
          imageSrc: "/src/assets/images/banner-background-home.png",
          bannerText: bannerContentText[0],
          isHidden: false,
        };
      case "/about":
        return {
          imageSrc: "/src/assets/images/banner-background-about.png",
          bannerText: bannerContentText[1],
          isHidden: true,
        };

      default:
        return {
          imageSrc: "/src/assets/images/banner-background-home.png",
          bannerText: bannerContentText[0],
          isHidden: false,
        };
    }
  }, [location.pathname]);

  const bannerTextClass = isHidden ? "hidden" : "banner-text";

  return (
    <div className="banner">
      <img className="banner-img" src={imageSrc} alt="Banner" />
      <p className={bannerTextClass}>{bannerText}</p>
    </div>
  );
}

export default Banner;
