// React
import React from "react";
import { useRoutes } from "hookrouter";
//App
import AppRouter from "./routing";
import { Header, Footer } from "./shared";
// Assets
import McKLogo from "./assets/imgs/McK_ScriptMark_RGB_McKDeepBlue.png";
// End Imports

/************
 * !TODO's Incomplete
 * **********
 * [/] //* Parallax
 * [/] //* 100% Coverage on unit tests
 * [/] //* Lazy Load Images / Handle them gracefully
 * [/] //* Server-side render
 * [/] //* Lighthouse Audit
 * [/] //* Menu
 * [/] //* Favicon
 * [/] //* Implement Global styling with JSS
 * [/] //* Break Shared styles, components
 * [/] //* FAQ
 * [/] //? Update current outdated boilerplate on git
 * [/] //? Data service w/ node ? Too much for this ask ?
 * [/] //? Deploy
 * *TODO's Complete
 * **********
 * [X] //* Solution using compare Sketch and .mov file
 * [X] //* Build out React boilerplate - Not McKinsey specific( dependencies, templating, base theme )
 * [X] //* Components
 * [X] //* Pages
 * [X] //* Routing
 * [X] //* Set-up unit testing
 *************/

const App = () => {
  const routeResult = useRoutes(AppRouter);
  return (
    <>
      <Header logo={McKLogo} />
      {routeResult}
      <Footer logo={McKLogo} />
    </>
  );
};

export default App;
