import React from "react";
import "./Card2.css";

// We must pass an object with "data" as key and with an array as value: {data:array}
// it also takes an "imageID" key that carries the useState hook to send back the ID
function Card(prop) {
  const { data } = prop;

  return (
    <React.Fragment>
      {data.map((object) => {
        const { id, url } = object;

        return (
          <div key={id} className="galleryContainer2">
            <img className="galleryImage2" id={id} src={url} alt={id} />
            <div className="galleryContainer-item-cover2"></div>
          </div>
        );
      })}
    </React.Fragment>
  );
}

export default Card;
