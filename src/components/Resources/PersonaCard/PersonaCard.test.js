import React from "react";
import PersonaCard from "./PersonaCard";
import { shallow } from "enzyme";
import { createShallow } from "@material-ui/core/test-utils";

describe("(Component) PersonaCard", () => {
  let shallow;

  before(() => {
    shallow = createShallow();
  });

  it("should work", () => {
    shallow(
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

    shallow(
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
