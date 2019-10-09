// React
import React from "react";
import ReactSVG from "react-svg";
import PropTypes from "prop-types";
// MUI
import { Link as MuiLink } from "@material-ui/core";
// Imgs
import RightArrowB from "../../assets/imgs/RightArrow-ElectricBlue.svg";
// End Imports

const Link = ({ text, color, href, disabled }) => {
  // Component
  return (
    <MuiLink component="div" disabled={disabled} href={href} color={color}>
      {text}
      <ReactSVG
        style={{ display: "inline-block" }}
        alt="Right Arrow"
        beforeInjection={
          // istanbul ignore next
          svg => {
            svg.classList.add("svg-class-name");
            svg.setAttribute(
              `style`,
              `display: flex;
             align-self: center`
            );
          }
        }
        src={RightArrowB}
      />
    </MuiLink>
  );
};

export default Link;

Link.propTypes = {
  link: PropTypes.object.isRequired
};
