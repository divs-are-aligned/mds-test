import React from "react";
import ReactDOM from "react-dom";
import AppRouter from "./routing";

it("renders without crashing", () => {
  const div = document.createElement("div");
  const routeResult = AppRouter;
  ReactDOM.render(<>{routeResult}</>, div);
  ReactDOM.unmountComponentAtNode(div);
});
