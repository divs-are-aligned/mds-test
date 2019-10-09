// React
import React from "react";
import { render } from "react-dom";
//Other
import WebFont from "webfontloader";
import * as ServiceWorker from "./serviceWorker";
// App
import App from "./App";

WebFont.load({
  google: {
    families: ["Merriweather", "Source Sans Pro"]
  }
});

render(<App />, document.getElementById("root"));

ServiceWorker.register();
