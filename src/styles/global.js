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
      boxSizing: "content-box",
      cursor: "pointer"
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

    // ".g_io-helper": {
    //   position: "fixed",
    //   bottom: "25vh",
    //   top: "25vh",
    //   left: "0",
    //   width: "100%",
    //   backgroundColor: "transparent",
    //   border: "4px dashed black",
    //   zIndex: "2"
    // }
  }
});

export default { _DefaultTheme_, _GlobalStyles_ };
