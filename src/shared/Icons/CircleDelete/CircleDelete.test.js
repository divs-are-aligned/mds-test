import React from "react";
import CircleDelete from "./CircleDelete";
import { shallow } from "enzyme";

describe("(Shared Component) CircleDelete", () => {
  let _wrapper;

  it("should render without crashing", () => {
    _wrapper = shallow(<CircleDelete />);
  });

  beforeEach(() => {
    _wrapper = shallow(<CircleDelete />);
  });
});
