import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <React.Fragment>
      <footer>
        <div className="footer">
          <h2 className="footer-item ftitle">Stay informed</h2>
          <div className="footer-line"></div>
          <p className="footer-item fp">
            Follow me on social media to stay updated or visit my GitHub for
            more interesting stuff.
          </p>
          <div className="footer-line two"></div>
          <ul className="footer-item ful">
            <li>
              <a
                href="https://www.facebook.com/david.gallardoguere/"
                target="_blank"
              >
                <i class="fab fa-facebook footer-icon"></i>
              </a>
            </li>
            <li>
              <a
                href="https://hu.linkedin.com/in/david-g%25C3%25BCere-4535aa100"
                target="_blank"
              >
                <i class="fab fa-linkedin footer-icon"></i>
              </a>
            </li>
            <li>
              <a href="https://github.com/DavidGuere" target="_blank">
                <i class="fab fa-github footer-icon"></i>
              </a>
            </li>
          </ul>
          <div className="footer-item bottom">
            <i class="far fa-copyright"></i> All rights reserved. Designed By
            David Güere
          </div>
        </div>
      </footer>
    </React.Fragment>
  );
}
export default Footer;
