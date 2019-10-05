import React from "react";
import RoadMap from "./RoadMap";
import { shallow } from "enzyme";

describe("(Component) RoadMap", () => {
  let _wrapper;

  it("should render without crashing", () => {
    _wrapper = shallow(<RoadMap />);
  });

  beforeEach(() => {
    _wrapper = shallow(<RoadMap />);
  });
});
