import React from "react";
import "./homePage.css";
import ImageButton from "./ImageButton";

function HomePage() {
  return (
    <React.Fragment>
      <div className="intro">
        <div className="intro-presentation">
          <div className="name">
            <h1>David Güere</h1>
          </div>
          <div className="line"></div>
          <ul className="positions">
            <li>Nuclear engineer</li>
            <li>Software developer</li>
            <li>Photographer</li>
          </ul>
        </div>
      </div>
      <div className="about-content">
        <div className="about-container">
          <div className="about-container-item text">
            <p>
              Creating and exploring, these two things describe me the best. I
              started with Lego models, then moved to nuclear components, and
              now here I am, with software programs. And why is software now?
              After obtaining 3 degrees in nuclear engineering, I still felt
              that I could push my problem-solving skills a bit further. So,
              where could create and explore new things at the same time? Yeah,
              you guessed it, with software. {<br />}
              {<br />}Besides, learning and exploring new technologies in front
              of the computer, I also like to explore new places, new cultures,
              new people, new experiences, whatever it takes to take me out of
              my comfort zone. And yes, my camera is always with me in my new
              adventures 😎.
            </p>
          </div>
          <img
            className="about-container-item picture"
            src="https://github.com/DavidGuere/degg/blob/gh-pages/images/me.jpg?raw=true"
            alt=""
          />
        </div>
      </div>
      <div className="content">
        <ImageButton
          idVidContainer="c1"
          idVid="v1"
          src="https://raw.githubusercontent.com/DavidGuere/degg/gh-pages/videos/engineering.mp4"
          text="Engineering"
          videoContainer="videoContainer1"
          video="video1"
          link="/degg/Engineering"
        />
        <ImageButton
          idVidContainer="c2"
          idVid="v2"
          src="https://raw.githubusercontent.com/DavidGuere/degg/gh-pages/videos/photo.mp4"
          text="Photography"
          videoContainer="videoContainer2"
          video="video2"
          link="/degg/Photography"
        />
        <ImageButton
          idVidContainer="c3"
          idVid="v3"
          src="https://raw.githubusercontent.com/DavidGuere/degg/gh-pages/videos/pc.mp4"
          text="Software"
          videoContainer="videoContainer3"
          video="video3"
          link="/degg/Software"
        />
      </div>
    </React.Fragment>
  );
}

export default HomePage;
