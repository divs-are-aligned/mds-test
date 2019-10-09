import React from "react";
import Footer from "./Footer";
import { shallow } from "enzyme";
import { createShallow } from "@material-ui/core/test-utils";

describe("(Component) Footer", () => {
  let shallow;

  beforeAll(() => {
    shallow = createShallow();
  });

  it("should work", () => {
    const wrapper = shallow(<Footer />);
  });
});
