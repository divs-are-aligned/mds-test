import React from "react";
import RoadMap from "./RoadMap";
import { mount } from "enzyme";
import { createMount } from "@material-ui/core/test-utils";
import { MuiThemeProvider } from "@material-ui/core/styles";
import { createRender } from "@material-ui/core/test-utils";

describe("(Component) RoadMap", () => {
  let _wrapper;

  it("should render without crashing", () => {
    _wrapper = createRender(<RoadMap />);
  });

  beforeEach(() => {
    _wrapper = createRender(<RoadMap />);
  });
});
