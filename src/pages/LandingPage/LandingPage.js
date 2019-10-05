// React
import React from "react";
// MUI
import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
// App
import {
  Hero,
  Personas,
  RoadMap,
  Resources,
  Community,
  FAQ
} from "../../components";

// import { Parallax } from "../../shared";

const useStyles = makeStyles({
  root: {
    height: "100vh"
  }
});

// const _COMPONENTS_ = [
//   <Hero />,
//   <Personas />,
//   <RoadMap />,
//   <Resources />,
//   <Community />,
//   <FAQ />
// ];

export function LandingPage() {
  //Styles
  const classes = useStyles();
  //Component
  return (
    <Grid className={classes.root} container>
      {/* {_COMPONENTS_.map((Component, key) => {
        return (
          <React.Fragment key={key}>
            <Grid item xs={12}>
              <Component />
            </Grid>
          </React.Fragment>
        );
      })} */}
      Landing Main
    </Grid>
  );
}

export default LandingPage;
