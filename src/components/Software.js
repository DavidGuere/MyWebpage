import React from "react";
import "./Software.css";

export default function Software() {
  return (
    <>
      <div className="techTitle-projects">
        <h1>Projects</h1>
      </div>
      <div className="techContent">
        <div className="techContent-item">
          <div className="description">
            <h2 className="description-title">El-Bistro</h2>
            <p className="description-description">
              Collaboration in "El-Bistro" project. Built the log in interface
              of the website using Firebase implementing functionalities to
              change the email and password of the user and CRUD
              functionalities. This project is still under development.
            </p>
            <p className="description-techs">
              Technologies: JavaScript, React, Bootstrap, Firebase
            </p>
            {/* <div className="buttons-container"> */}
            <div className="button-project-disabled">
              <h4 className="button-title-disabled">Coming soon!</h4>
            </div>
            <div className="button-project-disabled">
              <h4 className="button-title-disabled">{"</>"}Private</h4>
            </div>
            {/* </div> */}
          </div>
          <div className="description">
            <h2 className="description-title">Tournament tracker</h2>
            <p className="description-description">
              Developed a CRUD application to track multiple tournaments , which
              saves the data to a SQL database or a TXT file. Loosely coupled
              application to ensure the future scalability of the project and
              the implementation of multiple UI-s.
            </p>
            <p className="description-techs">
              Technologies: C#, WPF.NET, SQL Server, Dapper.
            </p>
            {/* <div className="buttons-container"> */}
            <a
              className="button-project"
              href="https://github.com/DavidGuere/TournamentTracker"
              target="_blank"
            >
              <h4 className="button-title">{"</>"}Code</h4>
            </a>
            {/* </div> */}
          </div>
          <div className="description">
            <h2 className="description-title">Portfolio V1</h2>
            <p className="description-description">
              Designed and developed a portfolio responsive webpage integrating
              a semi intelligent, randomly generated grid for the photos that
              takes into account the orientation of the pictures.
            </p>
            <p className="description-techs">
              Technologies: UX/UI, JavaScript, React, HTML, CSS, Adobe
              Photoshop, Adobe Premiere
            </p>
            {/* <div className="buttons-container"> */}
            <a
              className="button-project"
              href="https://davidguere.github.io/degg/"
            >
              <h4 className="button-title">View page</h4>
            </a>
            <a
              className="button-project"
              href="https://github.com/DavidGuere/degg"
              target="_blank"
            >
              <h4 className="button-title">{"</>"}Code</h4>
            </a>
            {/* </div> */}
          </div>
          <div className="description">
            <h2 className="description-title">Orders manager</h2>
            <p className="description-description">
              An application to track the orders of multiple users. The data is
              stored in multiple relational SQL databases. The application also
              supports CRUD operations
            </p>
            <p className="description-techs">
              Technologies: C#, WPF.NET, SQL Server
            </p>
            {/* <div className="buttons-container"> */}
            <a
              className="button-project"
              href="https://github.com/DavidGuere/Orders-manager"
              target="_blank"
            >
              <h4 className="button-title">{"</>"}Code</h4>
            </a>
            {/* </div> */}
          </div>
        </div>
      </div>
      <div className="techTitle">
        <h1>Technologies</h1>
      </div>
      <div className="techContent">
        <div className="techContent-item">
          <img
            className="techLogo"
            src="https://github.com/DavidGuere/degg/blob/gh-pages/images/js.png?raw=true"
            alt="JavaScript Logo"
          />
        </div>
        <div className="techContent-item">
          <img
            className="techLogo"
            src="https://github.com/DavidGuere/degg/blob/gh-pages/images/c.png?raw=true"
            alt="c# Logo"
          />
        </div>
        <div className="techContent-item">
          <img
            className="techLogo"
            src="https://github.com/DavidGuere/degg/blob/gh-pages/images/net.jpeg?raw=true"
            alt=".NET Logo"
          />
        </div>
        <div className="techContent-item">
          <img
            className="techLogo"
            src="https://github.com/DavidGuere/degg/blob/gh-pages/images/react.png?raw=true"
            alt="React Logo"
          />
        </div>
        <div className="techContent-item">
          <img
            className="techLogo"
            src="https://github.com/DavidGuere/degg/blob/gh-pages/images/python.png?raw=true"
            alt="Python Logo"
          />
        </div>
        <div className="techContent-item">
          <img
            className="techLogo"
            src="https://github.com/DavidGuere/degg/blob/gh-pages/images/firebase.png?raw=true"
            alt="Firebase Logo"
          />
        </div>
        <div className="techContent-item">
          <img
            className="techLogo"
            src="https://github.com/DavidGuere/degg/blob/gh-pages/images/tensorflow.png?raw=true"
            alt="TensorFlow Logo"
          />
        </div>
      </div>
    </>
  );
}
