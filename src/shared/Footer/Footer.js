// React
import React from "react";
import { animateScroll as scroll } from "react-scroll";
// MUI
import { Grid, makeStyles } from "@material-ui/core";
// Assets
import McKLogo from "../../assets/imgs/McK_ScriptMark_RGB_McKDeepBlue.png";
// End Imports

/**
 * @name useStyles
 * @desc This function utilizes JSS to add Component-specific styles.
 * @todo Go through all useStyle functions to remove duplicated styles, and convert to global styles
 */
const useStyles = makeStyles({
  root: {
    background: "#fff",
    padding: "2rem"
  }
});

export const Footer = () => {
  // Styles
  const classes = useStyles();
  // Component
  return (
    <footer>
      <Grid className={classes.root}>
        <img
          className="g_logo"
          alt="McKinsey & Company Logo"
          data-src={McKLogo}
          onClick={scroll.scrollToTop}
        />
      </Grid>
    </footer>
  );
};

export default Footer;
