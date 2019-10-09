import React from "react";
import Header from "./Header";
import { shallow } from "enzyme";
import { createMount } from "@material-ui/core/test-utils";

describe("(Component) Header", () => {
  it("should work", () => {
    const wrapper = shallow(<Header />);
  });
});
