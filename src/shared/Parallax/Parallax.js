// React
import React from "react";
// MUI
import { makeStyles } from "@material-ui/styles";
// End Imports

/**
 * @name useStyles
 * @desc This function utilizes JSS to add Component-specific styles.
 * @todo Go through all useStyle functions to remove duplicated styles, and convert to global styles
 */
const useStyles = makeStyles({
  root: {
    position: "relative",
    width: "100vh",
    height: "100vw",
    overflowX: "hidden",
    overflowY: "scroll",
    perspective: ".5rem",
    perspectiveOrigin: "0%",
    display: "flex"
  },
  background: {
    backgroundColor: "#FFF",
    position: "absolute",
    top: "0",
    left: "0",
    width: "00vh",
    height: "10vw",
    transform: "translateZ(0)"
  },
  foreground: {
    height: "100%",
    transformOrigin: "",
    transform: "translateZ(3px) scale(0.625)"
  }
});

const Parallax = ({ routeResult }) => {
  // Styles
  const classes = useStyles();
  // Component
  return (
    <div className={classes.root}>
      <div className={classes.background}>
        {/* <img src="https://source.unsplash.com/random" /> */}
      </div>
      <div className={classes.foreground}>{routeResult}</div>
    </div>
  );
};

export default Parallax;
