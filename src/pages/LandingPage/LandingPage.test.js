import React from "react";
import LandingPage from "./LandingPage";
import { shallow } from "enzyme";

describe("(Page) LandingPage", () => {
  let _wrapper;

  it("should render without crashing", () => {
    _wrapper = shallow(<LandingPage />);
  });

  beforeEach(() => {
    _wrapper = shallow(<LandingPage />);
  });
});
