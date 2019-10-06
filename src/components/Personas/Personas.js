// React
import React from "react";
// MUI
import { Grid, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
// App
import { Link } from "../../shared";
//End Imports

/**
 * @name useStyles
 * @desc This function utilizes JSS to add Component-specific styles.
 * @todo Go through all useStyle functions to remove duplicated styles, and convert to global styles
 */
const useStyles = makeStyles({
  designerClasses: {
    backgroundColor: "#f0f0f0"
  },
  developerClasses: {
    backgroundColor: "#051C2C"
  }
});

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
    className: "designerClasses",
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
    className: "developerClasses",
    textColor: "primary"
  }
];

export const Personas = () => {
  // Styles
  const classes = useStyles();
  // Component
  return (
    <div>
      <Grid container className={classes.root}>
        {_PERSONAS_.map((personaConfig, key) => {
          // Allow for more than 2 peronas
          return (
            <Grid
              key={key}
              sm={12}
              md={6}
              className={classes[personaConfig.className]}
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
    </div>
  );
};

export default Personas;
