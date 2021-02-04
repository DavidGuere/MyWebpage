import React from "react";
import { Link } from "react-router-dom";
import "./PhotoBody.css";

function PhotoBody() {
  return (
    <div className="photoBody">
      <div className="description">
        <h2 className="description-text">
          The beauty of the different shapes, forms and colors of people.
        </h2>
      </div>
      <div className="photoBody-imageButton people">
        <div className="modal"></div>
        <Link className="photoBody-link" to="/degg/Gallery/People">
          People
        </Link>
      </div>
      <div className="description">
        <h2 className="description-text">
          The beauty of nature. Raw, uncut and uncensored...
        </h2>
      </div>
      <div className="photoBody-imageButton nature">
        <div className="modal"></div>
        <Link className="photoBody-link" to="/degg/Gallery/Nature">
          Nature
        </Link>
      </div>
      <div className="description">
        <h2 className="description-text">Multiple events around the world.</h2>
      </div>
      <div className="photoBody-imageButton events">
        <div className="modal"></div>
        <Link className="photoBody-link" to="/degg/Gallery/Events">
          Events
        </Link>
      </div>
      <div className="description">
        <h2 className="description-text">#MrWorldwide</h2>
      </div>
      <div className="photoBody-imageButton world">
        <div className="modal"></div>
        <Link className="photoBody-link" to="/degg/Gallery/World">
          World
        </Link>
      </div>
    </div>
  );
}

export default PhotoBody;
