// React
import React, { useEffect } from "react";
// MUI
import { AppBar } from "@material-ui/core";
// App
import NavBar from "./NavBar";
// End Imports

export const Header = () => {
  // Hooks
  /* istanbul ignore next */
  useEffect(() => {
    const headerEl = document.getElementById("Header");
    const target = document.getElementById("Overview");
    const options = {
      rootMargin: "-64px",
      threshold: 0.2
    };

    const toggleHeader = target => {
      const io = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
          if (entry.intersectionRatio > 0.2) {
            headerEl.classList.add("g_toggle-height");
          } else {
            headerEl.classList.remove("g_toggle-height");
          }
        });
      }, options);

      io.observe(target);
    };

    toggleHeader(target);
  }, []);

  // Component
  return (
    <AppBar id="Header">
      <NavBar />
    </AppBar>
  );
};

export default Header;
