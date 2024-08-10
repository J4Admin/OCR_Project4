import React from "react";
import Housing from "../components/Housing/Housing.jsx";
import { useParams } from "react-router-dom";
import listImages from "../data/CardData.json";
import Collapse from "../components/Collapse/Collapse.jsx";

function HousingPage() {
  const { id } = useParams();
  const housingData = listImages.find((item) => item.id === id);

  const images = housingData.pictures;
  const title = housingData.title;
  const location = housingData.location;
  const hostName = housingData.host.name;
  const hostPicture = housingData.host.picture;
  const tags = housingData.tags;
  const rating = housingData.rating;

  const CollapseData = [
    {
      title: "Description",
      content: housingData.description,
    },
    {
      title: "Équipments",
      content: housingData.equipments,
    },
  ];

  return (
    <>
      <Housing
        id={id}
        images={images}
        title={title}
        location={location}
        hostName={hostName}
        hostPicture={hostPicture}
        tags={tags}
        rating={rating}
      />
      <div className="Collapse__housing">
        <Collapse CollapseData={CollapseData} />
      </div>
    </>
  );
}

export default HousingPage;
