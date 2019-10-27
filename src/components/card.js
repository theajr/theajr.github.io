import React, { useState } from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Section from "./section";
import { IconButton } from "@material-ui/core";
import ArrowDownwardIcon from "@material-ui/icons/DoubleArrow";
import AddIcon from "@material-ui/icons/Add";

import Fab from "@material-ui/core/Fab";

const useStyles = makeStyles(theme => ({
  root: {
    padding: 0,
    borderRadius: 0,
    display: "grid",
    gridTemplateColumns: "15% auto 5%",
    boxShadow: "none",
    alignItems: "center",
    [theme.breakpoints.down("md")]: {
      gridTemplateColumns: "100%"
    }
  },
  h: {
    marginTop: ".1em",
    marginBottom: ".1em"
  },
  point: {
    fontSize: 14
  }
}));

const ExpCard = ({ logo, company, position, start, end, points = [] }) => {
  const classes = useStyles();
  const [showMore, toggleShowMore] = useState(true);

  return (
    <Section
      className="exp-card"
      style={{
        position: "relative"
      }}
    >
      <Paper className={classes.root}>
        <img
          height="auto"
          style={{
            marginRight: 10,
            boxSizing: "border-box",
            border: "2px solid #fff",
            borderRadius: 5,
            justifySelf: "center",
            maxWidth: 112
          }}
          src={logo}
        ></img>
        <div>
          <h2 className={classes.h}>{company}</h2>
          <h3 className={classes.h}>{position} </h3>
          <Typography component="h1" variant="caption">
            {end ? `${start} to ${end}` : `Since ${start}`}
          </Typography>

          {showMore &&
            points.map(p => (
              <Typography
                component="p"
                variant="subtitle1"
                key={p}
                className={classes.point}
              >
                {p}
              </Typography>
            ))}
        </div>

        {/*    <Fab
          size="medium"
          color="secondary"
          aria-label="add"
          className={classes.margin}
          onClick={() => toggleShowMore(!showMore)}
        >
          <ArrowDownwardIcon />
        </Fab> */}
      </Paper>
    </Section>
  );
};

ExpCard.propTypes = {};

export default ExpCard;
