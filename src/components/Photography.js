import React, { useEffect } from "react";
import "./Photography.css";
import PhotoHead from "./PhotoHead";
import PhotoBody from "./PhotoBody";

function Photography() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <React.Fragment>
      <div id="Photography">
        <PhotoHead />
        <PhotoBody />
      </div>
    </React.Fragment>
  );
}

export default Photography;
