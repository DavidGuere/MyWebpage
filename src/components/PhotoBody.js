import React from "react";
import { Link } from "react-router-dom";
import "./PhotoBody.css";

function PhotoBody() {
  return (
    <div className="photoBody">
      <div className="description">
        <h2>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsa ut
          consequuntur illo aliquid recusandae, ipsam modi accusamus fugit
          incidunt dolor quam eaque alias cumque neque odit obcaecati dolorem
          unde eveniet?
        </h2>
      </div>
      <div className="photoBody-imageButton people">
        <div className="modal"></div>
        <Link className="photoBody-link">
          <h1 className="photoBody-text">People</h1>
        </Link>
      </div>
      <div className="description">
        <h2>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsa ut
          consequuntur illo aliquid recusandae, ipsam modi accusamus fugit
          incidunt dolor quam eaque alias cumque neque odit obcaecati dolorem
          unde eveniet?
        </h2>
      </div>
      <div className="photoBody-imageButton nature">
        <div className="modal"></div>
        <Link className="photoBody-link">
          <h1 className="photoBody-text">Nature</h1>
        </Link>
      </div>
      <div className="description">
        <h2>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsa ut
          consequuntur illo aliquid recusandae, ipsam modi accusamus fugit
          incidunt dolor quam eaque alias cumque neque odit obcaecati dolorem
          unde eveniet?
        </h2>
      </div>
      <div className="photoBody-imageButton events">
        <div className="modal"></div>
        <Link className="photoBody-link">
          <h1 className="photoBody-text">Events</h1>
        </Link>
      </div>
      <div className="description">
        <h2>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsa ut
          consequuntur illo aliquid recusandae, ipsam modi accusamus fugit
          incidunt dolor quam eaque alias cumque neque odit obcaecati dolorem
          unde eveniet?
        </h2>
      </div>
      <div className="photoBody-imageButton world">
        <div className="modal"></div>
        <Link className="photoBody-link">
          <h1 className="photoBody-text">World</h1>
        </Link>
      </div>
      {/* <div className="photoBody-imageButton"></div> */}
    </div>
  );
}

export default PhotoBody;
