import React from "react";
import Header from "./Header";
import { shallow } from "enzyme";

describe("(Shared Component) Header", () => {
  let _wrapper;

  it("should render without crashing", () => {
    _wrapper = shallow(<Header />);
  });

  beforeEach(() => {
    _wrapper = shallow(<Header />);
  });
});
