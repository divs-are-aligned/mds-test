import React from "react";
import { shallow, mount } from "enzyme";
import { unwrap } from "@material-ui/core/test-utils";
import ThemeProvider from "@material-ui/styles/ThemeProvider";
import App from "./App";

const AppNaked = unwrap(App);

describe("<Component />", () => {
  it("with shallow", () => {
    const wrapper = shallow(<AppNaked classes={{}} />);
  });

  it("with mount", () => {
    const wrapper = mount(
      <ThemeProvider
        theme={{
          success: {
            main: "#fff"
          }
        }}
      >
        <AppNaked />
      </ThemeProvider>
    );
  });
});
///
// import React from "react";
// import ReactDOM from "react-dom";
// import App from "./App";

// // it("renders without crashing", () => {
// //   const div = document.createElement("div");
// //   const routeResult = AppRouter;
// //   ReactDOM.render(<>{routeResult}</>, div);
// //   ReactDOM.unmountComponentAtNode(div);
// // });

// import { createMount } from "@material-ui/core/test-utils";
// import { MuiThemeProvider } from "@material-ui/core/styles";

// describe("<MyComponent />", () => {
//   let mount;

//   function ThemeWrapper({ children }) {
//     return (
//       <MuiThemeProvider theme={{ success: { main: "#fff" } }}>
//         <App />
//       </MuiThemeProvider>
//     );
//   }

//   before(() => {
//     mount = createMount();
//   });

//   after(() => {
//     mount.cleanUp();
//   });

//   it("should work", () => {
//     const wrapper = mount(<App />);
//   });
// });
