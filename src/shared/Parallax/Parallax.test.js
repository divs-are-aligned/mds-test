import React from "react";
import Parallax from "./Parallax";
import { shallow } from "enzyme";

describe("(Shared Component) Parallax", () => {
  let _wrapper;

  it("should render without crashing", () => {
    _wrapper = shallow(<Parallax />);
  });

  beforeEach(() => {
    _wrapper = shallow(<Parallax />);
  });
});
