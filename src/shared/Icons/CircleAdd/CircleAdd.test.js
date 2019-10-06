import React from "react";
import CircleAdd from "./CircleAdd";
import { shallow } from "enzyme";

describe("(Shared Component) CircleAdd", () => {
  let _wrapper;

  it("should render without crashing", () => {
    _wrapper = shallow(<CircleAdd />);
  });

  beforeEach(() => {
    _wrapper = shallow(<CircleAdd />);
  });
});
