import { createMuiTheme } from "@material-ui/core/styles";
import Theme from "../styles/theme.json";

// Themeing
export const _DefaultTheme_ = createMuiTheme(Theme);

export const _GlobalStyles_ = _DefaultTheme_ => ({
  "@global": {
    ".g_logo": {
      padding: ".5rem .0rem",
      height: "80%",
      maxHeight: "4rem",
      boxSizing: "content-box"
    },
    ".g_pad--light": {
      padding: "2rem 1rem"
    },
    ".g_pad--heavy": {
      padding: "4rem 4rem"
    },
    ".g_toggle-height": {
      maxHeight: "4rem"
    },
    ".g_ux--bg": {
      backgroundColor: "#f0f0f0"
    },
    ".g_dev--bg": {
      backgroundColor: "#051C2C"
    }
  }
});

export default { _DefaultTheme_, _GlobalStyles_ };
