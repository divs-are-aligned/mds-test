// React
import React, { useEffect } from "react";
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
// End Imports
// import { Parallax } from "../../shared";

/**
 * @name useStyles
 * @desc This function utilizes JSS to add Component-specific styles.
 * @todo Go through all useStyle functions to remove duplicated styles, and convert to global styles
 */
const useStyles = makeStyles({
  scrollHeader: {
    "& img": {
      // maxHeight: "3rem"
    }
  }
});

/**
 * @name _Components_
 * @type { Array<Components> }
 * @todo Create service that handles async loading of all text-based assets
 */
const _COMPONENTS_ = [Hero, Personas, Resources, RoadMap, Community, FAQ];

export function LandingPage() {
  //Styles
  const classes = useStyles();

  useEffect(() => {
    const heroEl = document.querySelector("#Overview");
    const headerEl = document.querySelector(".MuiToolbar-root");
    const options = {
      rootMargin: "-64px",
      threshold: 0
    };
    let observer = new IntersectionObserver(intersectionCallback, options);
    observer.observe(heroEl);

    // TODO: Clean up all intersection stuff
    function intersectionCallback(entry) {
      if (entry[0].isIntersecting) {
        headerEl.classList.remove("MuiToolbar-dense");
        headerEl.classList.add("MuiToolbar-regular");
      } else {
        headerEl.classList.add("MuiToolbar-dense");
        headerEl.classList.remove("MuiToolbar-regular");
      }
    }
  });

  //Components
  return (
    <Grid className={classes.root} id="LandingPage" container>
      {_COMPONENTS_.map((Component, key) => {
        return Component ? (
          <React.Fragment key={key}>
            <Grid item xs={12}>
              <Component />
            </Grid>
          </React.Fragment>
        ) : null;
      })}
    </Grid>
  );
}

export default LandingPage;
