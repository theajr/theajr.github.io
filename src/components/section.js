import React from "react";
import PropTypes from "prop-types";
import { Typography, Box } from "@material-ui/core";

const Section = ({ children, ...rest }) => {
  return (
    <Box marginTop="30px" {...rest}>
      {children}
    </Box>
  );
};

Section.propTypes = {
  children: PropTypes.node.isRequired
};

export default Section;
