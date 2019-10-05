// React
import React from "react";
import { render } from "react-dom";
// MUI
import { ThemeProvider } from "@material-ui/styles";
import { createMuiTheme } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
//Other
import WebFont from "webfontloader";
// App
import Theme from "./styles/theme.json";
import App from "./App";

WebFont.load({
  google: {
    families: ["Merriweather", "Source Sans Pro"]
  }
});

const _DefaultTheme_ = createMuiTheme(Theme);

render(
  <ThemeProvider theme={_DefaultTheme_}>
    <CssBaseline />
    <App />
  </ThemeProvider>,
  document.getElementById("root")
);
