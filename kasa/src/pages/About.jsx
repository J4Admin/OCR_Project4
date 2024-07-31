import React from "react";

import Navbar from "../components/Navbar.jsx";
import Banner from "../components/Banner.jsx";
import Main from "../components/Main.jsx";
import Footer from "../components/Footer.jsx";
import Description from "../components/Description.jsx";

function About() {
  return (
    <>
      <Navbar />
      <Main>
        <Banner />
        <Description />
      </Main>
      <Footer />
    </>
  );
}

export default About;
