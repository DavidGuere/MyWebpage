// Starts with rfce
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
// import Button from "./Button";
import "./NavBar.css";

function NavBar() {
  const [click, setClick] = useState(false);
  // const [button, setButton] = useState(true);

  function handleClick() {
    // toggles click true/false
    setClick(!click);
  }
  function closeMobilMenu() {
    setClick(false);
  }
  function showButton() {
    if (window.innerWidth <= 960) {
      // setButton(false);
    } else {
      // setButton(true);
    }
  }

  // According to the size of the page, it will show the buttons.
  window.addEventListener("resize", showButton);

  // Preventing constant rendering.
  useEffect(() => showButton(), []);

  return (
    <React.Fragment>
      <nav>
        <div className="navbar-container">
          <Link
            className="navbar-container-item logo"
            to="/"
            onClick={closeMobilMenu}
          >
            <img
              id="main_logo"
              src="https://github.com/DavidGuere/degg/blob/gh-pages/images/logoblanco.png?raw=true"
              alt="Main logo"
            />
          </Link>
          <div
            className="navbar-container-item menu-icon"
            onClick={handleClick}
          >
            <i class={click ? "fas fa-times" : "fas fa-bars"}></i>
          </div>
          <ul className="navbar-container-item nav-menu">
            <li className="nav-menu-item">
              <Link to="/" className="nav-links" onClick={closeMobilMenu}>
                Home
              </Link>
            </li>
            <li className="nav-menu-item">
              <Link
                to="/Engineering"
                className="nav-links"
                onClick={closeMobilMenu}
              >
                About me
              </Link>
            </li>
            <li className="nav-menu-item">
              <Link
                to="/Photography"
                className="nav-links"
                onClick={closeMobilMenu}
              >
                Photography
              </Link>
            </li>
          </ul>
        </div>
        <ul className={click ? "nav-menu-phone active" : "nav-menu-phone"}>
          <li className="nav-menu-phone-item">
            <Link to="/" className="nav-links" onClick={closeMobilMenu}>
              Home
            </Link>
          </li>
          <li className="nav-menu-phone-item">
            <Link to="/about" className="nav-links" onClick={closeMobilMenu}>
              About me
            </Link>
          </li>
          <li className="nav-menu-phone-item">
            <Link
              to="/Photography"
              className="nav-links"
              onClick={closeMobilMenu}
            >
              Photography
            </Link>
          </li>
        </ul>
      </nav>
    </React.Fragment>
  );
}

export default NavBar;
