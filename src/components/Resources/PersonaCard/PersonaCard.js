// React
import React from "react";
import PropTypes from "prop-types";
// MUI
import { Card, CardContent, Grid, Typography } from "@material-ui/core";
// App
import { Link } from "../../../shared";
// End Imports

export const PersonaCard = ({ resource }) => {
  // Constants
  const { type, title, meta, desc, link } = resource;
  const color = type === "ux" ? "secondary" : "primary";
  // Component
  return (
    <Grid xs={12} item>
      <Card className={type === "ux" ? "g_ux--bg" : "g_dev--bg"}>
        <CardContent>
          <Typography variant="h6" color={color} gutterBottom={false}>
            {title}
          </Typography>
          <Typography variant="caption" color={color}>
            {meta}
          </Typography>
          <Typography color={color}>{desc}</Typography>
          <Typography component="div" color={color}>
            <Link
              text={link || "coming soon"}
              color={color}
              href="/"
              disabled={!link}
            />
          </Typography>
        </CardContent>
      </Card>
    </Grid>
  );
};

export default PersonaCard;

PersonaCard.propTypes = {
  resource: PropTypes.object.isRequired
};
