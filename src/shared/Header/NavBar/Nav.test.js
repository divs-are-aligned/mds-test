import React from "react";
import Header from "./NavBar";
import { shallow } from "enzyme";

describe("(Shared Component) NavBar", () => {
  let _wrapper;

  it("should render without crashing", () => {
    _wrapper = shallow(<NavBar />);
  });

  beforeEach(() => {
    _wrapper = shallow(<NavBar />);
  });
});
