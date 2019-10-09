import React from "react";
import PersonaCard from "./PersonaCard";
import { shallow } from "enzyme";

describe("(Component) Resources", () => {
  let _wrapper;

  it("should render without crashing", () => {
    _wrapper = shallow(<PersonaCard />);
  });

  beforeEach(() => {
    _wrapper = shallow(<PersonaCard />);
  });
});
