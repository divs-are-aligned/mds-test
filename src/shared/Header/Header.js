// React
import React from "react";
import PropTypes from "prop-types";
// MUI
import { AppBar, Toolbar, useScrollTrigger } from "@material-ui/core";
// App-specific

function ElevationScroll(props) {
  const { children } = props;
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0
  });
}

ElevationScroll.propTypes = {
  children: PropTypes.element.isRequired
};

export const Header = ({ logo, ...rest }) => {
  return (
    <ElevationScroll {...rest}>
      <AppBar position="sticky">
        <Toolbar>
          <img height="44" alt="McKinsey & Company Logo" src={logo} />
        </Toolbar>
      </AppBar>
    </ElevationScroll>
  );
};

export default Header;
