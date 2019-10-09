import React from "react";
import NavBar from "./NavBar";
import { shallow } from "enzyme";
import { createShallow } from "@material-ui/core/test-utils";

describe("(Component) NavBar", () => {
  let shallow;

  beforeAll(() => {
    shallow = createShallow();
  });

  it("should work", () => {
    const wrapper = shallow(<NavBar />);
  });
});
