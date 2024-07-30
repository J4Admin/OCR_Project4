import React from "react";
import Navbar from "../components/Navbar.jsx";
import Main from "../components/Main.jsx";
import Footer from "../components/Footer.jsx";
import Description from "../components/Description.jsx";
const arrayHousing = requiere("../data.json");

function HousingPage() {
  const arrayHousing = requiere("../data.json");
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

export default HousingPage;
