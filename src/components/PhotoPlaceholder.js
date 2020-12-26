import React, { useState, useEffect } from "react";
import Card from "./Card";
import { useParams } from "react-router-dom";
import "./PhotoPlaceholder.css";
import PhotoSlider from "./PhotoSlider";

export const DataContext = React.createContext();

function PhotoPlaceholder() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [selectedID, setSelectedID] = useState(null);
  const [data, setData] = useState([]);

  //Accessing URL params
  const { typeOfPhotography } = useParams();

  // setting the conditional function that will select the files to render
  function selectingTypeOfPhotography() {
    if (typeOfPhotography === "People") {
      const typeOfPhotos = require("./data/dataPeople.json");
      return typeOfPhotos;
    } else if (typeOfPhotography === "Nature") {
      const typeOfPhotos = require("./data/dataNature.json");
      return typeOfPhotos;
    } else if (typeOfPhotography === "Events") {
      const typeOfPhotos = require("./data/dataEvents.json");
      return typeOfPhotos;
    } else if (typeOfPhotography === "World") {
      const typeOfPhotos = require("./data/dataWorld.json");
      return typeOfPhotos;
    }
  }

  useEffect(() => {
    setData(() => selectingTypeOfPhotography());
  }, []);

  return (
    <React.Fragment>
      <div className="placeholderContainer">
        <div className="titleContainer">
          <div className="titleOfGallery">{typeOfPhotography}</div>
        </div>
        <Card data={data} imageID={setSelectedID} />
        {selectedID && (
          <PhotoSlider data={data} id={selectedID} imageID={setSelectedID} />
        )}
      </div>
    </React.Fragment>
  );
}

export default PhotoPlaceholder;
