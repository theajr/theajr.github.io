import React from "react";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import { Link } from "gatsby-theme-material-ui";
import ProTip from "../components/ProTip";
import Layout from "../components/layout";
import { makeStyles } from "@material-ui/core/styles";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import NavigationIcon from "@material-ui/icons/Navigation";

import Intro from "../components/intro";
import Heading from "../components/heading";
import ExpCard from "../components/card";
import WhoAmI from "../components/whoami";

import { experiances, skills } from "../util/data";
import SkillCard from "../components/skillcard";

const useStyles = makeStyles(theme => ({
  fab: {
    margin: theme.spacing(1)
  },
  extendedIcon: {
    marginRight: theme.spacing(1)
  }
}));

function FloatingActionButtons() {
  const classes = useStyles();

  return (
    <div>
      <Fab color="primary" aria-label="add" className={classes.fab}>
        <AddIcon />
      </Fab>
      <Fab color="secondary" aria-label="edit" className={classes.fab}>
        <EditIcon />
      </Fab>
      <Fab variant="extended" aria-label="delete" className={classes.fab}>
        <NavigationIcon className={classes.extendedIcon} />
        Extended
      </Fab>
      <Fab disabled aria-label="delete" className={classes.fab}>
        <DeleteIcon />
      </Fab>
    </div>
  );
}

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

function importAll(r) {
  return r.keys().map(r);
}

const images = importAll(
  require.context("../images/skills", false, /\.(png|jpe?g|svg)$/)
);
console.log(images);
export default function Index() {
  return (
    <Layout>
      <Intro />
      <Heading title="&#129300; Who am I?">
        <WhoAmI />
      </Heading>
      <Heading title="&#x1F4BC;  Work Experiance">
        {experiances.map(e => (
          <ExpCard {...e} key={e.logo} />
        ))}
      </Heading>

      <Heading title="Skills" id="skills">
        <div
          style={{
            display: "grid",
            justifyContent: "space-between",
            alignItems: "center",
            gridTemplateColumns: "repeat(auto-fit, minmax(120px, 1fr))",

            rowGap: 20,
            columnGap: 30
          }}
        >
          {skills.map(i => (
            <SkillCard
              key={i.svg}
              src={require(`../images/skills/${i.svg}`)}
              title={i.title}
            />
          ))}
        </div>
      </Heading>
    </Layout>
  );
}
