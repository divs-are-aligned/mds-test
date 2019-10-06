// React
import React from "react";
// MUI
import { Grid, makeStyles } from "@material-ui/core";
// End Imports

/**
 * @name useStyles
 * @desc This function utilizes JSS to add Component-specific styles.
 * @todo Go through all useStyle functions to remove duplicated styles, and convert to global styles
 */
const useStyles = makeStyles({
  root: {
    background: "#fff",
    padding: "5% 45px"
  }
});

export const Footer = ({ logo }) => {
  // Styles
  const classes = useStyles();
  // Component
  return (
    <footer>
      <Grid className={classes.root}>
        <img height="60" alt="McKinsey & Company Logo" src={logo} />
      </Grid>
    </footer>
  );
};

export default Footer;
