import React from "react";
import CircleDelete from "./CircleDelete";
import { createMount } from "@material-ui/core/test-utils";

describe("(Component) CircleDelete", () => {
  let mount;

  beforeAll(() => {
    mount = createMount();
  });

  it("should work", () => {
    const wrapper = mount(<CircleDelete />);
  });
});
