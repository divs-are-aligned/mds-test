import React from "react";
import Link from "./Link";
import { createMount } from "@material-ui/core/test-utils";

describe("(Component) Link", () => {
  let mount;

  beforeAll(() => {
    mount = createMount();
  });

  it("should work", () => {
    const wrapper = mount(<Link />);
  });
});
