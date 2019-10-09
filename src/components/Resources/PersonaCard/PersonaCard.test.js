import React from "react";
import PersonaCard from "./PersonaCard";
import { createMount } from "@material-ui/core/test-utils";

describe("(Component) PersonaCard", () => {
  let mount;

  beforeAll(() => {
    mount = createMount();
  });

  it("should work", () => {
    mount(
      <PersonaCard
        resouce={{
          type: "ux",
          title: "Lorem ipsum dolor",
          meta: "Lorem ipsum dolor sit amet",
          desc:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex",
          link: "Lorem ipsum dolor"
        }}
      />
    );

    mount(
      <PersonaCard
        resouce={{
          type: "dev",
          title: "Lorem ipsum dolor",
          meta: "Lorem ipsum dolor sit amet",
          desc:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex",
          link: "Lorem ipsum dolor"
        }}
      />
    );
  });
});
