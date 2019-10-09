import React from "react";
import Resources from "./Resources";
import { createMount } from "@material-ui/core/test-utils";

describe("(Component) Resources", () => {
  let mount;

  beforeAll(() => {
    mount = createMount();
  });

  it("should work", () => {
    mount(<Resources />);
  });
});
