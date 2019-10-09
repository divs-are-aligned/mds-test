// React
import React from "react";
// MUI
import { Grid } from "@material-ui/core";
// App
import { Overview, RoadMap, Resources, Community, FAQ } from "../../components";
// End Imports
// import { Parallax } from "../../shared";

/**
 * @name _Components_
 * @type { Array<Components> }
 * @todo Create service that handles async loading of all text-based assets
 */
const _COMPONENTS_ = [Overview, Resources, RoadMap, Community, FAQ];

export function LandingPage() {
  //Components
  return (
    <Grid id="LandingPage" container>
      {_COMPONENTS_.map((Component, key) => {
        return Component ? (
          <React.Fragment key={key}>
            <Grid item xs={12}>
              <Component />
            </Grid>
          </React.Fragment>
        ) : null;
      })}
    </Grid>
  );
}

export default LandingPage;
