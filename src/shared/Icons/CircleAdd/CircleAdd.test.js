import React from "react";
import CircleAdd from "./CircleAdd";
import { createMount } from "@material-ui/core/test-utils";

describe("(Component) CircleAdd", () => {
  let mount;

  beforeAll(() => {
    mount = createMount();
  });

  it("should work", () => {
    const wrapper = mount(<CircleAdd />);
  });
});
