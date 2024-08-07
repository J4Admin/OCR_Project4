import React from "react";
import Banner from "../components/Banner/Banner.jsx";
import Collapse from "../components/Collapse/Collapse.jsx";

function About() {
  return (
    <>
      <Banner
        imageSrc="/src/assets/images/banner-background-about.png"
        isHidden={true}
      />
      <Collapse />
    </>
  );
}

export default About;
