import React from "react";
import Personas from "./Personas";
import { shallow } from "enzyme";

describe("(Component) Personas", () => {
  let _wrapper;

  it("should render without crashing", () => {
    _wrapper = shallow(<Personas />);
  });

  beforeEach(() => {
    _wrapper = shallow(<Personas />);
  });
});
