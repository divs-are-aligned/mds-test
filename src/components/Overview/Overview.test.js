import React from "react";
import Overview from "./Overview";
import { mount } from "enzyme";

describe("(Component) Overview", () => {
  let _wrapper;

  it("should render without crashing", () => {
    _wrapper = mount(<Overview />);
  });

  beforeEach(() => {
    _wrapper = mount(<Overview />);
  });
});
