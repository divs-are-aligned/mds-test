// React
import React from "react";
// MUI
import {
  Grid,
  Typography,
  useMediaQuery,
  Link as MuiLink
} from "@material-ui/core";
import { makeStyles, useTheme } from "@material-ui/styles";
// App
import { Link } from "../../shared";
// End Imports

/**
 * @name useStyles
 * @desc This function utilizes JSS to add Component-specific styles.
 * @todo Go through all useStyle functions to remove duplicated styles, and convert to global styles
 */
const useStyles = makeStyles({
  root: {
    padding: "1.25rem",
    margin: ".5rem"
  },
  blockRoot: {
    padding: "1.25rem",
    margin: ".5rem"
  },
  ux: {
    backgroundColor: "#f0f0f0"
  },
  dev: {
    backgroundColor: "#051C2C"
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

/**
 * @name _DEVRESOURCES_
 * @type { Object }
 * @todo Create service that handles async loading of all text-based assets
 */
const _DEVRESOURCES_ = Array(4).fill({
  type: "dev",
  title: "Lorem ipsum dolor",
  meta: "Lorem ipsum dolor sit amet",
  desc:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex",
  link: "Lorem ipsum dolor"
});

/**
 * @name _UXRESOURCES_
 * @type { Object }
 * @todo Create service that handles async loading of all text-based assets
 */
const _UXRESOURCES_ = Array(4).fill({
  type: "ux",
  title: "Lorem ipsum dolor",
  meta: "Lorem ipsum dolor sit amet",
  desc:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex",
  link: "Lorem ipsum dolor"
});

/**
 * @function* @name generateResourceBlock
 * @return { Element }
 * @param { Object } classes
 * @param { Object } resource
 * @param { Number } key
 * @desc This generate a resource squares
 * @todo Move into separate file
 */
const generateResourceBlock = (classes, resource, key) => {
  return (
    <Grid
      className={`${classes.blockRoot} ${
        resource.type === "dev" ? classes.dev : classes.ux
      }`}
      key={key}
      xs={12}
      item
    >
      <Typography
        variant="h6"
        color={resource.type === "ux" ? "initial" : "primary"}
        gutterBottom={false}
      >
        {resource.title}
      </Typography>
      <Typography
        variant="caption"
        color={resource.type === "ux" ? "initial" : "primary"}
      >
        {resource.meta}
      </Typography>
      <Typography color={resource.type === "ux" ? "initial" : "primary"}>
        {resource.desc}
      </Typography>
      <Typography
        component="div"
        color={resource.type === "ux" ? "initial" : "primary"}
      >
        <Link
          text={resource.link || "coming soon"}
          color={resource.type === "ux" ? "inherit" : "primary"}
          href="/"
          disabled={!resource.link}
        />
      </Typography>
    </Grid>
  );
};

export const Resources = () => {
  // Styles
  const classes = useStyles();
  const width = useWidth();
  // Component
  return (
    <section id="quickFixActiveNav" className={classes.root}>
      {width !== "xs" ? (
        <>
          <Typography variant="h5" align="center">
            Design System Resources
          </Typography>
          <Typography
            variant="subtitle1"
            align="center"
            color="secondary"
            className={
              width === "md" || width === "lg" ? classes.extraPadding : ""
            }
          >
            Our Design System is in its earliest stages of development.
            Available below are resources we're actively evolving in
            collaboration with the design and development community. Want to
            collaborate with us or have ideas or comments?
            <MuiLink color="inherit" href="mailto:design_system@mckinsey.com">
              Contact us
            </MuiLink>
          </Typography>
        </>
      ) : null}
      <Grid container justify="center" classes={classes.resourceCont}>
        <Grid item xs={width !== "xs" ? 8 : 12}>
          <Grid container>
            <Grid item xs={12} sm={6}>
              {_UXRESOURCES_.map((resource, key) => {
                return resource
                  ? generateResourceBlock(classes, resource, key)
                  : null;
              })}
            </Grid>
            <Grid item xs={12} sm={6}>
              {_DEVRESOURCES_.map((resource, key) => {
                return resource
                  ? generateResourceBlock(classes, resource, key)
                  : null;
              })}
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </section>
  );
};

export default Resources;
