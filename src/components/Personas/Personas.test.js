import React from "react";
import Personas from "./Personas";
import { mount } from "enzyme";

describe("(Component) Personas", () => {
  let _wrapper;

  it("should render without crashing", () => {
    _wrapper = mount(<Personas />);
  });

  beforeEach(() => {
    _wrapper = mount(<Personas />);
  });
});
