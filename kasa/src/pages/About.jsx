import React from "react";

import Main from "../components/Main.jsx";
import Banner from "../components/Banner.jsx";
import Collapse from "../components/Collapse.jsx";

function About() {
  return (
    <div>
      <Main>
        <Banner
          imageSrc="/src/assets/images/banner-background-about.png"
          isHidden={true}
        />
        <Collapse />
      </Main>
    </div>
  );
}

export default About;
