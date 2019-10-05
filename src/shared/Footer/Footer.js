// React
import React from "react";
// MUI
import { Grid, makeStyles } from "@material-ui/core";
// App

const useStyles = makeStyles({
  root: {
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
