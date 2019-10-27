import React from "react";
import PropTypes from "prop-types";
import { Typography, Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  root: {
    fontFamily: `-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif`,
    fontSize: 30,
    fontWeight: 800
  }
}));

const WhoAmI = props => {
  const st = useStyles();
  return (
    <Box marginTop="10px" bgcolor="#fff" padding="10px">
      <Typography
        variant="body1"
        component="p"
        gutterBottom
        align="justify"
        style={{ textIndent: 50 }}
      >
        A Full-Stack Web Developer with 3 years of experience, Open Source
        Contributor and having a vast array of knowledge in many different
        front-end (React, Angular, Material UI and Bootstrap) and back-end
        technologies (REST, GraphQL, DJango, Express, Node.js), responsive web
        development and best code practices.
      </Typography>
    </Box>
  );
};

WhoAmI.propTypes = {};

export default WhoAmI;
