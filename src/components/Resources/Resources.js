// React
import React from "react";
// MUI
import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
// App

const useStyles = makeStyles({
  root: {}
});

export function Resources() {
  // Styles
  const classes = useStyles();
  // Component
  return <Grid container className={classes.root}></Grid>;
}

export default Resources;
