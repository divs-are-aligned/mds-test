import React from "react";
import Community from "./Community";
import { shallow } from "enzyme";

describe("(Component) Community", () => {
  let _wrapper;

  it("should render without crashing", () => {
    _wrapper = shallow(<Community />);
  });

  beforeEach(() => {
    _wrapper = shallow(<Community />);
  });
});
