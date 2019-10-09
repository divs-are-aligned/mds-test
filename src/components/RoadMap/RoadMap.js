// React
import React from "react";
// MUI
import { Typography, useMediaQuery } from "@material-ui/core";
import { makeStyles, useTheme } from "@material-ui/styles";
// App
import RoadMapV from "../../assets/imgs/Roadmap-mobile@2x.png";
import RoadMapH from "../../assets/imgs/Roadmap-Desktop@2x.png";
// End Imports

/**
 * @name useStyles
 * @desc This function utilizes JSS to add Component-specific styles.
 * @todo Go through all useStyle functions to remove duplicated styles, and convert to global styles
 */
const useStyles = makeStyles({
  root: {
    background:
      "linear-gradient(160deg, #051C2C 0%, #112D84 90%, #1F40E6 120%)",
    padding: "3.5rem 2rem",
    width: "100%"
  },
  img: {
    marginTop: "1rem"
  },
  extraPadding: {
    padding: "0 4rem"
  }
});

/**
 * @function* @name useWidth
 * @returns { String }
 * @desc This function utlizes the `breakpoints`, and `media queries` as defined in `theme.json` to determine the current
 * `viewport size` of the user
 * @todo Remove from component level: Figure out way to handle this global using the same approach.
 */
function useWidth() {
  const theme = useTheme();
  const keys = [...theme.breakpoints.keys].reverse();
  return (
    keys.reduce((output, key) => {
      // eslint-disable-next-line react-hooks/rules-of-hooks
      const matches = useMediaQuery(theme.breakpoints.up(key));
      return !output && matches ? key : output;
    }, null) || "xs"
  );
}

export const RoadMap = () => {
  // Styles
  const classes = useStyles();
  const width = useWidth();
  // Component
  return (
    <section id="Roadmap" className={classes.root}>
      <Typography variant="h5" align="center" color="textSecondary">
        Roadmap
      </Typography>
      <Typography
        variant="subtitle2"
        align="center"
        color="primary"
        className={width === "md" || width === "lg" ? classes.extraPadding : ""}
      >
        Our team is actively working on creating an entirely new set of
        guidelines to replace our previous UIG. Our new design system will
        provide both an exhaustive set of components for designers to create and
        a robust set of technologies for developers to build
      </Typography>
      {width === "xs" ? (
        <img
          width="200"
          styles={{ maxWidth: "300px" }}
          alt="McKinsey Roadmap"
          data-src={RoadMapV}
        />
      ) : (
        <img width="100%" alt="McKinsey Roadmap" data-src={RoadMapH} />
      )}
    </section>
  );
};

export default RoadMap;
