import React from "react";
import PropTypes from "prop-types";
import { Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import { COLORS } from "../util/theme";

const useStyles = makeStyles(theme => ({
  fab: {
    margin: theme.spacing(1)
  },
  extendedIcon: {
    marginRight: theme.spacing(1)
  },
  root: {
    height: "100vh",
    width: "100%",
    background: `url('https://www.netpremacy.com/wp-content/uploads/2018/09/google-next-landing-page-background-01.png') no-repeat center center`,
    verticalAlign: "center",
    backgroundSize: "cover",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    position: "relative"
  },
  header: {
    maxWidth: "60%",

    [theme.breakpoints.up("md")]: {
      // maxWidth: "80%"
    }
  }
}));

const Intro = props => {
  const styles = useStyles();
  return (
    <div className={styles.root}>
      <div className={styles.header}>
        <Typography
          variant="h3"
          component="h3"
          style={{
            fontSize: 14,
            color: COLORS.indigo,
            fontWeight: 800,
            letterSpacing: 3,
            paddingLeft: 3
          }}
        >
          HELLO
        </Typography>
        <Typography variant="h1" component="h1" gutterBottom>
          I am{" "}
          <span style={{ color: COLORS.blue }}>
            AJay Kumar <span style={{ color: COLORS.cyan }}>Pathuri</span>
          </span>
        </Typography>
        <Typography variant="h2" component="h2" gutterBottom>
          Nice to meet you!
        </Typography>
      </div>
    </div>
  );
};

Intro.propTypes = {};

export default Intro;
