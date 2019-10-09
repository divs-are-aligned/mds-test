// React
import React from "react";
// MUI
import { Grid, Typography, Link, useMediaQuery } from "@material-ui/core";
import { makeStyles, useTheme } from "@material-ui/styles";
// Imgs
import SlackCards from "../../assets/imgs/Slack-Cards-Img@2x.png";
// End Imports

/**
 * @function* @name makeStyles
 * @returns { Object }
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

export const Community = () => {
  // Styles
  const classes = useStyles();
  const width = useWidth();
  // Component
  return (
    <section
      id="Community"
      className={`${classes.root} ${
        width === "xs" ? `g_pad--light` : `g_pad--heavy`
      }`}
    >
      <Grid spacing={4} container>
        <Grid xs={12} sm={6} item>
          <Typography variant="h5">Join the Community</Typography>
          <Typography variant="subtitle2">
            This effort is being built in collaboration between our community of
            designers and developers.
          </Typography>
          <Typography variant="subtitle2">
            We all share the same passion to build a robust system that makes
            our work more efficient so we actively come together to plan,
            problem solve and build collectively.
          </Typography>
          <Typography variant="subtitle2">
            Come join other pioneers as we take small steps towards working
            better.
          </Typography>
          <Typography variant="subtitle2">
            Find us on Slack #ddls-community
          </Typography>
          <Typography variant="subtitle2">
            Contact us via
            <Link color="inherit" href="mailto:design_system@mckinsey.com">
              design_system@mckinsey.com
            </Link>
          </Typography>
        </Grid>
        <Grid xs={12} sm={6} item>
          <img width="100%" data-src={SlackCards} alt="Slack Cards" />
        </Grid>
      </Grid>
    </section>
  );
};

export default Community;
