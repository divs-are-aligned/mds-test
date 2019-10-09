import React from "react";
import RoadMap from "./RoadMap";
import { createShallow } from "@material-ui/core/test-utils";

describe("(Component) RoadMap", () => {
  let shallow;

  beforeAll(() => {
    shallow = createShallow();
  });

  it("should render without crashing", () => {
    shallow(<RoadMap />);
  });
});
