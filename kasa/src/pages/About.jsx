import React from "react";
import Navbar from "./components/Navbar.jsx";
import Main from "./components/Main.jsx";
import Banner from "./components/Banner.jsx";
import Gallery from "./components/Gallery.jsx";
import Footer from "./components/Footer.jsx";

function About() {
  return (
    <div>
      <Navbar />
      <Main>
        <Banner />
        <Description />
      </Main>
      <Footer />
    </div>
  );
}

export default About;
