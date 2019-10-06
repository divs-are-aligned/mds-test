// React
import React from "react";
import ReactSVG from "react-svg";
// MUI
import { makeStyles } from "@material-ui/styles";
// Imgs
import CircleAddSVG from "../../../assets/imgs/c-add.svg";
//End Imports

/**
 * @name useStyles
 * @desc This function utilizes JSS to add Component-specific styles.
 * @todo Go through all useStyle functions to remove duplicated styles, and convert to global styles
 */
const useStyles = makeStyles({
  root: {
    "& div": {
      width: "1.5rem"
    }
  }
});

const CircleAdd = () => {
  // Styles
  const classes = useStyles();
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
      className={classes.root}
      src={CircleAddSVG}
    />
  );
};

export default CircleAdd;
