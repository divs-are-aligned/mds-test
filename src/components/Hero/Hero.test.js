import React from "react";
import Hero from "./Hero";
import { shallow } from "enzyme";

describe("(Component) Hero", () => {
  let _wrapper;

    it("should render without crashing", () => {
      _wrapper = shallow(<Hero />);
    });

  beforeEach(() => {
    _wrapper = shallow(<Hero />);
  });
});
