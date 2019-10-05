import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import AppRouter from "./routing";
import { useRoutes } from "hookrouter";

it("renders without crashing", () => {
  const div = document.createElement("div");
  const routeResult = AppRouter;
  ReactDOM.render(<>{routeResult}</>, div);
  ReactDOM.unmountComponentAtNode(div);
});
