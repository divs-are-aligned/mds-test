import React from "react";
import Link from "./Link";
import { shallow } from "enzyme";

describe("(Shared Component) Link", () => {
  let _wrapper;

  it("should render without crashing", () => {
    _wrapper = shallow(<Link />);
  });

  beforeEach(() => {
    _wrapper = shallow(<Link />);
  });
});
