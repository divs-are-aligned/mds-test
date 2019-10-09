import React from "react";
import FAQ from "./FAQ";
import { createShallow } from "@material-ui/core/test-utils";

describe("(Component) FAQ", () => {
  let shallow;

  beforeAll(() => {
    shallow = createShallow();
  });

  it("should work", () => {
    const wrapper = shallow(<FAQ />);
  });
});
