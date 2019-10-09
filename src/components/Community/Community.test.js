import React from "react";
import Community from "./Community";
import { createShallow } from "@material-ui/core/test-utils";

describe("(Component) Community", () => {
  let shallow;

  beforeAll(() => {
    shallow = createShallow();
  });

  it("should render without crashing", () => {
    shallow(<Community />);
  });
});
