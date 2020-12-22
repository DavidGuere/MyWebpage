import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <React.Fragment>
      <div className="footer">
        <h2 className="footer-item ftitle">Stay informed</h2>
        <div className="footer-line"></div>
        <p className="footer-item fp">
          Follow me on social media to stay updated or visit my GitHub for more
          interesting stuff.
        </p>
        <div className="footer-line two"></div>
        <ul className="footer-item ful">
          <li>
            <a href="https://www.facebook.com/david.gallardoguere/">
              <i class="fab fa-facebook"></i>
            </a>
          </li>
          <li>
            <a href="https://hu.linkedin.com/in/david-g%25C3%25BCere-4535aa100">
              <i class="fab fa-linkedin"></i>
            </a>
          </li>
          <li>
            <a href="https://github.com/DavidGuere">
              <i class="fab fa-github"></i>
            </a>
          </li>
        </ul>
      </div>
      <div className="footer-item bottom">
        <i class="far fa-copyright"></i> All rights reserved. Designed By David
        Güere
      </div>
    </React.Fragment>
  );
}
export default Footer;
