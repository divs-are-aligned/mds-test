// React
import React from "react";
// MUI
import { Grid, Typography, useMediaQuery } from "@material-ui/core";
import { makeStyles, useTheme } from "@material-ui/styles";
// Imgs
import OverviewImg from "../../assets/imgs/TopBanner-illustration@2x.png";
//End Imports

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

/**
 * @name useStyles
 * @desc This function utilizes JSS to add Component-specific styles.
 * @todo Go through all useStyle functions to remove duplicated styles, and convert to global styles
 */
const useStyles = makeStyles({
  root: {
    background: "#FFF",
    width: "100%"
  },
  img: {
    marginTop: "1rem"
  },
  reverseCol: {
    flexDirection: "column-reverse"
  }
});

export const Overview = () => {
  // Styles
  const classes = useStyles();
  const width = useWidth();
  // Image Loading

  // Component
  return (
    <section
      id="Overview"
      className={`${classes.root} ${
        width === "xs" ? `g_pad--light` : `g_pad--heavy`
      }`}
    >
      <Grid
        spacing={4}
        className={`${width === "xs" ? classes.reverseCol : ""}`}
        container
      >
        <Grid
          style={{ alignContent: "center", display: "grid" }}
          xs={12}
          sm={7}
          item
        >
          <Typography variant="h4">Break the design barrier.</Typography>
          <Typography variant="subtitle2">
            Be a pioneer in charting a new way of designing and developing at
            the Firm.
          </Typography>
          <Typography variant="subtitle2">
            With the new McKinsey Design System you’ll finally be able to
            re-use, share and deliver more consistent experiences at the speed
            of delight.
          </Typography>
        </Grid>
        <Grid xs={12} sm={5} item>
          <img width="90%" data-src={OverviewImg} alt="Banner" />
        </Grid>
      </Grid>
    </section>
  );
};

export default Overview;
