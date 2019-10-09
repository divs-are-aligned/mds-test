import React from "react";
import Community from "./Header";
import { shallow } from "enzyme";
import { createShallow } from "@material-ui/core/test-utils";

describe("(Component) Header", () => {
  let shallow;

  beforeAll(() => {
    shallow = createShallow();
  });

  it("should work", () => {
    const wrapper = shallow(<Header />);
  });
});
