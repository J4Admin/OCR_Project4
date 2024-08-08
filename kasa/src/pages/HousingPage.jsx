import React from "react";
import Housing from "../components/Housing/Housing.jsx";
import { useParams } from "react-router-dom";
import listImages from "../data/CardData.json";

function HousingPage() {
  const { id } = useParams();
  const housingData = listImages.find(item => item.id === id);
  const images = housingData ? housingData.pictures : [];

  return (
    <>
      <Housing id={id} images={images} />
    </>
  );
}

export default HousingPage;
