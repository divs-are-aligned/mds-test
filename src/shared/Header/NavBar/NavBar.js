// React
import React, { useEffect } from "react";
// MUI
import { Button, Typography, useMediaQuery } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import { makeStyles, useTheme } from "@material-ui/styles";
// Assets
import McKLogo from "../../../assets/imgs/McK_ScriptMark_RGB_McKDeepBlue.png";
// End Imports

/**
 * @name useStyles
 * @desc This function utilizes JSS to add Component-specific styles.
 * @todo Go through all useStyle functions to remove duplicated styles, and convert to global styles
 */
const useStyles = makeStyles({
  root: {
    height: "4rem",
    display: "flex",
    alignContent: "center",
    alignItems: "center",
    justifyContent: "space-between"
  },
  nav: {
    height: "100%"
  },
  activeTab: {
    borderBottom: "3px solid #00A9F4"
  },
  button: {
    height: "100%",
    "a &:hover": {
      color: "#00A9F4"
    }
  },
  tabs: {
    width: "100%",
    maxHeight: "4rem"
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

// TODO: Smooth scroll not support on chrome anymore ? Need to research
const onNavClick = ({ currentTarget }) => {
  const elem = document.getElementById(currentTarget.id.slice(0, -3));
  elem &&
    elem.scrollIntoView({
      behavior: "smooth",
      block: "center"
    });
};

/**
 * @function* @name menu
 * @return { Element }
 * @param { Array } links
 * @param { Object } resource
 * @param { Number } key
 * @desc This generate a resource squares
 * @todo Move into separate file
 */
const Menu = (link, key) => {
  // Styles
  const classes = useStyles();
  /**
   * @name _LINKS_
   * @type { Array<String> }
   * @todo Create service that handles async loading of all text-based assets
   */
  const _LINKS_ = ["Overview", "Resources", "Roadmap", "Community", "FAQ"];

  // Component
  return (
    <div key={key} className={classes.nav}>
      {_LINKS_.map((link, key) => {
        return link ? (
          <Button
            onClick={onNavClick}
            id={`${link}Tab`}
            key={key}
            disableRipple
            style={{
              minHeight: "100%"
            }}
            href={`#${link}`}
          >
            {link}
          </Button>
        ) : null;
      })}
    </div>
  );
};

export const Header = () => {
  // Styles
  const classes = useStyles();
  const width = useWidth();

  // Hooks
  useEffect(() => {
    const sections = document.querySelectorAll("section");
    const options = {
      root: null,
      threshold: 0.24,
      rootMargin: "-84px"
    };

    let observer = new IntersectionObserver(intersectionCallback, options);

    function intersectionCallback(entries) {
      entries.forEach(entry => {
        const entryEl = document.getElementById(`${entry.target.id}Tab`);
        if (entryEl && entryEl.classList.length) {
          entry.isIntersecting
            ? entryEl.classList.add(classes.activeTab)
            : entryEl.classList.remove(classes.activeTab);
        }
      });
    }
    sections.forEach(section => {
      observer.observe(section);
    });
  });

  // Component
  return (
    <nav className={classes.root}>
      {width !== "xs" ? (
        <>
          <img className="g_logo" alt="McKinsey & Company Logo" src={McKLogo} />
          <Menu />
        </>
      ) : (
        <>
          <MenuIcon />
          <Typography gutterBottom={false} variant="h6">
            mds.
          </Typography>
        </>
      )}
    </nav>
  );
};

export default Header;
