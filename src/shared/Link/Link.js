// React
import React from "react";
import ReactSVG from "react-svg";
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
        beforeInjection={svg => {
          svg.classList.add("svg-class-name");
          svg.setAttribute(
            `style`,
            `display: flex;
             align-self: center`
          );
        }}
        src={RightArrowB}
      />
    </MuiLink>
  );
};

export default Link;