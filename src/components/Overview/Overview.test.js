import React from "react";
import Overview from "./Overview";
import { shallow } from "enzyme";

describe("(Component) Overview", () => {
  let _wrapper;

  it("should render without crashing", () => {
    _wrapper = shallow(<Overview />);
  });

  beforeEach(() => {
    _wrapper = shallow(<Overview />);
  });
});
