import React from "react";
import "./PhotoHead.css";

function PhotoHead() {
  return (
    <div className="photoHead">
      <div className="photoHead-wrap">
        <video
          className="slideShow"
          src="/videos/photoslide.mp4"
          autoPlay
          loop
          muted
        ></video>
      </div>

      <h1 className="photoHead-text">Photography</h1>
    </div>
  );
}

export default PhotoHead;
