import React from "react";
import Main from "../components/Main.jsx";
import Banner from "../components/Banner.jsx";
import Gallery from "../components/Gallery.jsx";

function Home() {
  return (
    <div>
      <Main>
        <Banner
          imageSrc="/src/assets/images/banner-background-home.png"
          bannerText="Chez vous, partout et ailleurs"
          isHidden={false}
        />
        <Gallery />
      </Main>
    </div>
  );
}

export default Home;
