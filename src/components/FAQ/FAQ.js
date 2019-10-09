// React
import React from "react";
// MUI
import {
  ExpansionPanel,
  ExpansionPanelDetails,
  ExpansionPanelSummary,
  Typography,
  useMediaQuery
} from "@material-ui/core";
import { makeStyles, useTheme } from "@material-ui/styles";
// Assets
import {
  CircleAdd as CircleAddIcon
  // CircleDelete as C_DeleteIcon
} from "../../shared/Icons";
// End Imports

/**
 * @name useStyles
 * @desc This function utilizes JSS to add Component-specific styles.
 * @todo Go through all useStyle functions to remove duplicated styles, and convert to global styles
 */
const useStyles = makeStyles({
  root: {
    backgroundColor: "f0f0f0"
  },
  question: {
    marginLeft: ".75rem"
  }
});

/**
 * @function* @name useWidth
 * @returns { String }
 * @desc This function utlizes the `breakpoints`, and `media queries` as defined in `theme.json` to determine the current
 * `viewport size` of the user
 * @todo Remove from component level: Figure out way to handle this global using the same approach.
 */
/* istanbul ignore next */
function useWidth() {
  const theme = useTheme();
  const keys = [...theme.breakpoints.keys].reverse();
  return (
    keys.reduce((output, key) => {
      // eslint-disable-next-line react-hooks/rules-of-hooks
      const matches = useMediaQuery(theme.breakpoints.up(key));
      return !output && matches ? key : output;
    }, null) || "xs"
  );
}

/**
 * @name _FAQS_
 * @type { Array<Objects> }
 * @todo Create service that handles async loading of all text-based assets
 */
const _FAQS_ = [
  {
    question: "Where do I get help applying the new Visual Identity styles?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget."
  },
  {
    question: "How should I apply the Partnership Mark?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget."
  }
];

const FAQ = () => {
  // Styles
  const classes = useStyles();
  const width = useWidth();
  // Component

  return (
    <section
      id="FAQ"
      className={`${classes.root} ${
        width === "xs" ? `g_pad--light` : `g_pad--heavy`
      }`}
    >
      <Typography color="textPrimary" variant="h5">
        Frequently asked questions
      </Typography>
      {_FAQS_.map((FAQ, key) => {
        return FAQ ? (
          <ExpansionPanel key={key} id="faq">
            <ExpansionPanelSummary
              expandIcon={<CircleAddIcon />}
              aria-controls="faq-content"
              id="faq-header"
            >
              <Typography
                className={classes.question}
                variant="h6"
                gutterBottom={false}
              >
                {FAQ.question}
              </Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
              <Typography>{FAQ.answer}</Typography>
            </ExpansionPanelDetails>
          </ExpansionPanel>
        ) : null;
      })}
    </section>
  );
};

export default FAQ;
