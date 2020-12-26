import React, { useState, useEffect } from "react";
import "./PhotoSlider.css";
import Card2 from "./Card2";

function PhotoSlider(prop) {
  const { id, data, imageID } = prop;

  const [pic, setPic] = useState([]);

  // selects only 1 object from the array
  function showPic(arg_id) {
    // picToShow is an array of 1 element (the element is an object): [object]
    const picToShow = data.filter((object) => object.id === arg_id);
    return picToShow;
  }

  useEffect(() => {
    setPic(() => showPic(id));
  }, [id]);

  console.log(`pic ${pic}`);

  function prevPic() {
    if (data[0].id !== 1) {
      const prevPic = showPic(data[0].id - 1);
      setPic(prevPic);
    } else {
      const prevPic = showPic(data.length);
      setPic(prevPic);
    }
  }

  function nextPic() {
    if (pic[0].id !== data.length) {
      const nextPic = showPic(pic[0].id + 1);
      setPic(nextPic);
    } else {
      const nextPic = showPic(1);
      setPic(nextPic);
    }
  }

  function handleClose() {
    imageID(null);
  }

  window.onkeydown = function (event) {
    if (event.keyCode === 27) {
      imageID(null);
    }
  };

  return (
    <React.Fragment>
      <div className="photoSlider">
        <div className="arrowContainer previous" onClick={prevPic}>
          <i class="fas fa-chevron-left arrow"></i>
        </div>
        <div className="xContainer" onClick={handleClose}>
          <i class="fas fa-times xSign"></i>
        </div>
        <Card2 data={pic} />
        <div className="arrowContainer next" onClick={nextPic}>
          <i class="fas fa-chevron-right arrow"></i>
        </div>
      </div>
    </React.Fragment>
  );
}

export default PhotoSlider;
