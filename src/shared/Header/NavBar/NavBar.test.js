import React from "react";
import NavBar from "./NavBar";
import Menu from "./NavBar";
import { createShallow, createMount } from "@material-ui/core/test-utils";

describe("(Component) NavBar", () => {
  let shallow;

  beforeAll(() => {
    shallow = createShallow();
  });

  it("should work", () => {
    const wrapper = shallow(<NavBar />);
  });
});

describe("(Component) Menu", () => {
  let mount;

  beforeAll(() => {
    mount = createMount();
  });

  it("should work", () => {
    const wrapper = mount(<NavBar />);
  });
});
