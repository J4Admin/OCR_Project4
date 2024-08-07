import React from "react";
import Banner from "../components/Banner/Banner.jsx";
import Description from "../components/Description/Description.jsx";
import { useParams } from "react-router-dom";

function HousingPage() {
  const { id } = useParams();

  return (
    <>
      <Banner />
      <Description id={id} />
    </>
  );
}

export default HousingPage;
