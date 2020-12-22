import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import "./ImageButton.css";

function ImageButton(prop) {
  const { idVidContainer, idVid, src, text, link } = prop;

  // playing and pausing the video when the mouse is over the button
  useEffect(
    (window.onload = function () {
      const videoCont = document.getElementById(idVidContainer);
      const video = document.getElementById(idVid);

      videoCont.addEventListener("mouseenter", () => video.play());
      videoCont.addEventListener("mouseleave", () => video.pause());
    })
  );

  const history = useHistory();

  return (
    <div className="content-item" onClick={() => history.push(link)}>
      <div id={idVidContainer} className="content-item-vc">
        <video id={idVid} src={src} loop muted></video>
        <h2 className="content-item-text">{`${text}`}</h2>
      </div>
    </div>
  );
}

export default ImageButton;
