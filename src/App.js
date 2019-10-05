// React
import React from "react";
import { useRoutes } from "hookrouter";
//App
import AppRouter from "./routing";
import { Header, Footer } from "./shared";
// Assets
import McKLogo from "./assets/imgs/McK_ScriptMark_RGB_McKDeepBlue.png";

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
