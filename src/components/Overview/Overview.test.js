import React from "react";
import Overview from "./Overview";
import { createShallow } from "@material-ui/core/test-utils";

describe("(Component) Overview", () => {
  let shallow;

  beforeAll(() => {
    shallow = createShallow();
  });

  it("should render without crashing", () => {
    shallow(<Overview />);
  });
});
