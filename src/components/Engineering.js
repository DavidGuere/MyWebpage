import React from "react";
import "./Engineering.css";
import { useEffect } from "react";

function Engineering() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="engi0">
      <h1 className="engi1">
        Our engineers (me) are working very hard to bring you the content of
        this page!
      </h1>
      <img
        className="engi2"
        src="https://i.pinimg.com/originals/e8/a6/9a/e8a69aee737e7702b817bd0462e0489c.gif"
        alt=""
      />
      <img
        className="engi2"
        src="https://cdn.substack.com/image/fetch/f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fbucketeer-e05bbc84-baa3-437e-9518-adb32be77984.s3.amazonaws.com%2Fpublic%2Fimages%2Fb2266452-bdcd-444c-ad32-fe9cabbbee81_498x374.gif"
        alt=""
      />
    </div>
  );
}

export default Engineering;
