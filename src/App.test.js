import React from "react";
import App from "./App";
import { createMount } from "@material-ui/core/test-utils";

describe("(Component) App", () => {
  let mount;

  beforeAll(() => {
    mount = createMount();
  });

  it("should work", () => {
    mount(<App />);
  });
});
