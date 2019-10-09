// React
import React from "react";
// MUI
import { Grid, Typography } from "@material-ui/core";
// App
import { Link } from "../../shared";
//End Imports

/**
 * @name _PERSONAS_
 * @type { Object }
 * @todo Create service that handles async loading of all text-based assets
 */
const _PERSONAS_ = [
  {
    type: "Designers",
    caption:
      "Access a subset of our core design elements and illustration kit available as Sketch libraries.",
    links: [
      {
        desc: "Get started: The Design System for Designers"
      },
      {
        desc: "Understand Design Principles"
      },
      {
        desc: "Download the Sketch Library"
      }
    ],
    className: "g_ux--bg",
    textColor: "secondary"
  },
  {
    type: "Developers",
    caption:
      "Access a subset of our core design elements and illustration kit available as Sketch libraries.",
    links: [
      {
        desc: "Get started: The Design System for Developers"
      }
    ],
    className: "g_dev--bg",
    textColor: "primary"
  }
];

export const Personas = () => {
  // Component
  return (
    <>
      <Grid container>
        {_PERSONAS_.map((personaConfig, key) => {
          // Allow for more than 2 peronas
          return (
            <Grid
              key={key}
              sm={12}
              md={6}
              className={personaConfig.className}
              style={{ padding: "2rem" }}
              item
            >
              <Typography variant="h4" color={personaConfig["textColor"]}>
                {personaConfig["type"]}
              </Typography>
              <Typography
                variant="subtitle2"
                color={personaConfig["textColor"]}
              >
                {personaConfig["caption"]}
              </Typography>
              {personaConfig["links"] && personaConfig["links"].length > 0
                ? personaConfig["links"].map((link, key) => {
                    return (
                      <Link
                        color={personaConfig["textColor"]}
                        key={key}
                        href="/"
                        text={link.desc}
                      />
                    );
                  })
                : null}
            </Grid>
          );
        })}
      </Grid>
    </>
  );
};

export default Personas;
