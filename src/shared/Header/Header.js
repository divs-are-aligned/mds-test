// React
import React from "react";
// MUI
import {
  AppBar,
  Button,
  Toolbar,
  Typography,
  useMediaQuery
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import { makeStyles, useTheme } from "@material-ui/styles";
// End Imports

/**
 * @name useStyles
 * @desc This function utilizes JSS to add Component-specific styles.
 * @todo Go through all useStyle functions to remove duplicated styles, and convert to global styles
 */
const useStyles = makeStyles({
  appBar: {
    flexWrap: "wrap",
    "& img": {
      maxHeight: "100%"
    }
  },
  button: {
    height: "100%",
    "a &:hover": {
      color: "blue"
    }
  },
  tabs: {
    width: "100%",
    maxHeight: "4rem"
  },
  toolBar: {
    display: "flex",
    justifyContent: "space-between"
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
 * @name _LINKS_
 * @type { Array<String> }
 * @todo Create service that handles async loading of all text-based assets
 */
const _LINKS_ = ["Overview", "Resources", "Roadmap", "Community", "FAQ"];

/**
 * @function* @name generateNav
 * @return { Element }
 * @param { Array } links
 * @param { Object } resource
 * @param { Number } key
 * @desc This generate a resource squares
 * @todo Move into separate file
 */
const generateNav = (link, key) => {
  // Styles
  return (
    <Button
      key={key}
      disableRipple
      style={{
        minHeight: "100%"
      }}
      href={`#${link}`}
    >
      {link}
    </Button>
  );
};

export const Header = ({ logo }) => {
  // Styles
  const classes = useStyles();
  const width = useWidth();
  // const onNavClick = event => {
  //   // setValue(newValue);
  // };
  // Component
  return (
    <AppBar className={classes.appBar} position="sticky" id="Header">
      <Toolbar variant="dense" className={classes.toolBar}>
        {width !== "xs" ? (
          <>
            <img
              className={classes.img}
              alt="McKinsey & Company Logo"
              src={logo}
            />
            <div style={{ height: "100%" }}>
              {_LINKS_.map((link, key) => {
                return link ? generateNav(link, key) : null;
              })}
            </div>
          </>
        ) : (
          <>
            <MenuIcon />
            <Typography gutterBottom={false} variant="h6">
              mds.
            </Typography>
          </>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Header;
