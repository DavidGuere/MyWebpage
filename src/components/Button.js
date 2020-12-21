// imr: imports react
import React from "react";
import "./Button.css";
import { Link } from "react-router-dom";

// css styles
const STYLES = ["btn--primary", "btn--outline"];
// css button sizes
const SIZES = ["btn--medium", "btn--large"];

function Button({ site, children, type, onClick, buttonStyle, buttonSize }) {
  // checking if style is available, otherwise it will take the first style in STYLES.
  const checkButtonStyle = STYLES.includes(buttonStyle)
    ? buttonStyle
    : STYLES[0];
  // checking if size is available, otherwise it will take the first size in SIZES
  const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];

  // The button will be dynamic:
  // site               - sets the URL of the the other page that we want to redirect to
  // checkButtonStyle   - set the style set by "buttonStyle" or the default one
  // checkButtonSize    - set the size set by "buttonSize" or the default one
  // onClick            - sets the event handler
  // type               - sets the type of the button
  // children           - the function of the next page
  return (
    <Link to={`${site}`} className="btn-mobile">
      <button
        className={`btn ${checkButtonStyle} ${checkButtonSize}`}
        onClick={onClick}
        type={type}
      >
        {children}
      </button>
    </Link>
  );
}

export default Button;
