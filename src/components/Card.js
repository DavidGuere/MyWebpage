import React, { useCallback } from "react";
import "./Card.css";

// We must pass an object with "data" as key and with an array as value: {data:array}
// it also takes an "imageID" key that carries the useState hook to send back the ID
function Card(prop) {
  const { data, imageID } = prop;

  function selectWidth(arg_orientation) {
    const rand = Math.random();
    switch (arg_orientation) {
      case "l":
        if (0 < rand <= 0.25) {
          const w = "w2";
          return w;
        } else if (0.25 < rand <= 0.26) {
          const w = "w2";
          return w;
        } else if (0.26 < rand <= 0.75) {
          const w = "w4";
          return w;
        } else {
          const w = "w4";
          return w;
        }
        break;

      default:
        if (0 < rand <= 0.25) {
          const w = "w4";
          return w;
        } else if (0.25 < rand <= 0.26) {
          const w = "w4";
          return w;
        } else if (0.26 < rand <= 0.75) {
          const w = "w2";
          return w;
        } else {
          const w = "w2";
          return w;
        }
        break;
    }
  }

  function selectHeight(arg_orientation) {
    const rand2 = Math.random();

    switch (arg_orientation) {
      case "l":
        if (0 < rand2 <= 0.1) {
          const h = "h3";
          return h;
        } else if (0.1 < rand2 <= 0.2) {
          const h = "h4";
          return h;
        } else if (0.2 < rand2 <= 0.6) {
          const h = "h2";
          return h;
        } else {
          const h = "h2";
          return h;
        }
        break;

      default:
        if (0 < rand2 <= 0.05) {
          const h = "h2";
          return h;
        } else if (0.05 < rand2 <= 0.1) {
          const h = "h2";
          return h;
        } else if (0.1 < rand2 <= 0.4) {
          const h = "h3";
          return h;
        } else {
          const h = "h4";
          return h;
        }
        break;
    }
  }

  return (
    <React.Fragment>
      <div className="grid">
        {useCallback(
          data.map((object) => {
            const { id, url, orientation } = object;

            const height = selectHeight(orientation);
            const width = selectWidth(orientation);

            return (
              <div key={id} className={`galleryContainer ${height} ${width}`}>
                <div className="galleryContainer-item">
                  <div
                    className="galleryContainer-item-image"
                    onClick={() => imageID(id)}
                  >
                    <img className="galleryImage" id={id} src={url} alt={id} />
                  </div>
                  <div className="galleryContainer-item-cover"></div>
                </div>
              </div>
            );
          }),
          [data]
        )}
      </div>
    </React.Fragment>
  );
}

export default Card;
