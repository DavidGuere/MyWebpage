import React, { useState } from "react";
import "./PhotoSlider.css";
import Card from "./Card";

function PhotoSlider() {
  // Data must be in an array form
  const photo = require("./data/dataSlider.json");

  // selects only 1 object from the array
  function showPic(arg_id) {
    // picToShow is an array of 1 element (the element is an object): [object]
    const picToShow = photo.filter((object) => object.id === arg_id);
    return picToShow;
  }

  // selecting a random picture to show
  const randNumber = 1 + Math.floor(Math.random() * photo.length);
  const [pic, setPic] = useState(showPic(randNumber));
  console.log(randNumber);

  // function prevPic() {
  //   if (pic[0].id !== 1) {
  //     const prevPic = showPic(pic[0].id - 1);
  //     setPic(prevPic);
  //   } else {
  //     const prevPic = showPic(photo.length);
  //     setPic(prevPic);
  //   }
  // }

  function nextPic() {
    if (pic[0].id !== photo.length) {
      const nextPic = showPic(pic[0].id + 1);
      setPic(nextPic);
    } else {
      const nextPic = showPic(1);
      setPic(nextPic);
    }
  }

  // setTimeout(nextPic, 4000);
  return (
    <React.Fragment>
      <div className="photoSlider">
        {/* <div className="arrowContainer previous" onClick={prevPic}>
          <i class="fas fa-chevron-left arrow"></i>
        </div> */}
        <div className="slider">
          <Card data={pic} />
        </div>
        <div className="arrowContainer next" onClick={nextPic}>
          <i class="fas fa-chevron-right arrow"></i>
        </div>
      </div>
    </React.Fragment>
  );
}

export default PhotoSlider;
