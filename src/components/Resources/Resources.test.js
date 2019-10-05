import React from "react";
import Resources from "./Resources";
import { shallow } from "enzyme";

describe("(Component) Resources", () => {
  let _wrapper;

  it("should render without crashing", () => {
    _wrapper = shallow(<Resources />);
  });

  beforeEach(() => {
    _wrapper = shallow(<Resources />);
  });
});
