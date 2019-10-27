import React, { Children } from "react";
import PropTypes from "prop-types";
import { Typography, Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const headerFontSizes = {
  h1: 60,
  h2: 40,
  h3: 30,
  h4: 20,
  h5: 15
};

const useStyles = h =>
  makeStyles(theme => ({
    root: {
      fontFamily: `-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif`,
      fontSize: headerFontSizes[h],
      fontWeight: 800
    }
  }));

const Heading = ({
  title,
  children,
  align = "center",
  variant = "h3",
  paddingTop = 10,
  ...rest
}) => {
  const st = useStyles(variant)();

  return (
    <Box marginTop={paddingTop + "px"} bgcolor="#fff" padding="10px" {...rest}>
      <Typography
        variant={variant}
        component={variant}
        gutterBottom
        className={st.root}
      >
        {title}
      </Typography>
      {children}
    </Box>
  );
};

Heading.propTypes = {};

export default Heading;
