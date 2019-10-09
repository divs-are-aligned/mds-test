import React from "react";
import Personas from "./Personas";
import { createShallow } from "@material-ui/core/test-utils";

describe("(Component) Personas", () => {
  let shallow;

  beforeAll(() => {
    shallow = createShallow();
  });

  it("should render without crashing", () => {
    shallow(<Personas />);
  });
});
