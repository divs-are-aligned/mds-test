import React from "react";
import Resources from "./Resources";
import { mount } from "enzyme";

describe("(Component) Resources", () => {
  let _wrapper;

  it("should render without crashing", () => {
    _wrapper = mount(<Resources resource={} />);
  });

  beforeEach(() => {
    _wrapper = mount(<Resources />);
  });
});
