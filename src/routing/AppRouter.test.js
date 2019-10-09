import React from "react";
import AppRouter from "./AppRouter";
import { createMount } from "@material-ui/core/test-utils";

describe("(Component) PersonaCard", () => {
  let mount;

  beforeAll(() => {
    mount = createMount();
  });

  it("should work", () => {
    mount(<AppRouter />);
  });
});
