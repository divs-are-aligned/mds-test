import React from "react";
import Footer from "./Footer";
import { shallow } from "enzyme";

describe("(Shared Component) Footer", () => {
  let _wrapper;

  it("should render without crashing", () => {
    _wrapper = shallow(<Footer />);
  });

  beforeEach(() => {
    _wrapper = shallow(<Footer />);
  });
});
