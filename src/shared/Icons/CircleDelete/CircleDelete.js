// React
import React from "react";
import ReactSVG from "react-svg";
// Imgs
import CircleDeleteSVG from "../../../assets/imgs/c-delete.svg";
//End Imports

const CircleDelete = () => {
  // Component
  return (
    <ReactSVG
      alt="Expand Icon"
      beforeInjection={svg => {
        svg.classList.add("svg-class-name");
        svg.setAttribute(
          `style`,
          `width: 1.5rem;
          align-self: center;
          display: flex;`
        );
      }}
      src={CircleDeleteSVG}
    />
  );
};

export default CircleDelete;
