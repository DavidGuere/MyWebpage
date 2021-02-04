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

  return (
    <React.Fragment>
      <nav>
        <div className="navbar-container">
          <Link
            className="navbar-container-item logo"
            to="/degg"
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
              <Link to="/degg" className="nav-links" onClick={closeMobilMenu}>
                Home
              </Link>
            </li>
            <li className="nav-menu-item">
              <Link
                to="/degg/Software"
                className="nav-links"
                onClick={closeMobilMenu}
              >
                Software
              </Link>
            </li>
            <li className="nav-menu-item">
              <Link
                to="/degg/Photography"
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
            <Link to="/degg" className="nav-links" onClick={closeMobilMenu}>
              Home
            </Link>
          </li>
          <li className="nav-menu-phone-item">
            <Link
              to="/degg/Software"
              className="nav-links"
              onClick={closeMobilMenu}
            >
              Software
            </Link>
          </li>
          <li className="nav-menu-phone-item">
            <Link
              to="/degg/Photography"
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
