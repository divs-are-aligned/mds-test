// React
import React, { useEffect } from "react";
import { useRoutes } from "hookrouter";
// MUI
import { ThemeProvider } from "@material-ui/styles";
import { withStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
// App
import AppRouter from "./routing";
import { Header, Footer } from "./shared";
import { _DefaultTheme_, _GlobalStyles_ } from "./styles/global";
// End Imports

/************
 * !TODO's Incomplete
 * **********
 * [/] //* Polyfills
 * [/] //* Webpack
 * [/] //* Parallax
 * [/] //* 100% Coverage on unit tests
 * [/] //* Server-side render
 * [/] //* Lighthouse Audit
 * [/] //? Update current outdated boilerplate on git
 * [/] //? Data service w/ node ? Too much for this ask ?
 * [/] //? Deploy
 * *TODO's Complete
 * **********
 * [X] //* Break Shared styles, components
 * [X] //* Intersection Observer for lazy loading / above the fold content
 * [X] //* Implement Global styling with JSS
 * [X] //* Menu
 * [X] //* Favicon
 * [X] //* Solution using compare Sketch and .mov file
 * [X] //* Build out React boilerplate - Not McKinsey specific( dependencies, templating, base theme )
 * [X] //* Components
 * [X] //* Pages
 * [X] //* Routing
 * [X] //* Set-up unit testing
 * [X] //* FAQ
 *************/

const App = () => {
  const routeResult = useRoutes(AppRouter);

  // Intersection Observer
  useEffect(() => {
    const targets = document.querySelectorAll("img");
    const options = {
      rootMargin: "120px",
      threshold: 0.1
    };

    const lazyLoad = target => {
      const io = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const img = entry.target;
            const src = img.getAttribute("data-src");

            img.setAttribute("src", src);
            observer.disconnect();
          }
        });
      }, options);

      io.observe(target);
    };

    targets.forEach(lazyLoad);
  }, []);

  return (
    <ThemeProvider theme={_DefaultTheme_}>
      <CssBaseline />
      <Header />
      {routeResult}
      <Footer />
    </ThemeProvider>
  );
};

export default withStyles(_GlobalStyles_)(App);
