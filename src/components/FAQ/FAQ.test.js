import React from "react";
import FAQ from "./FAQ";
import { shallow } from "enzyme";

describe("(Component) FAQ", () => {
  let _wrapper;

  it("should render without crashing", () => {
    _wrapper = shallow(<FAQ />);
  });

  beforeEach(() => {
    _wrapper = shallow(<FAQ />);
  });
});
