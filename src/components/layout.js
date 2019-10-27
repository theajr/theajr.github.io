import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import Fab from "@material-ui/core/Fab";
import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp";
import Zoom from "@material-ui/core/Zoom";
import { Button } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import IconButton from "@material-ui/core/IconButton";
import { ThemeProvider } from "@material-ui/core/styles";
import { Helmet } from "react-helmet";

import { useStaticQuery, graphql } from "gatsby";

import Footer from "./footer";
import "./layout.css";
// import videoBg from "../../public/bg.webm"
import ExpCard from "./card";
import ScrollProgressBar from "./scroll-progress";
import theme, { COLORS } from "../util/theme";
const useStyles = makeStyles(theme => ({
  root: {
    position: "fixed",
    bottom: theme.spacing(2),
    right: theme.spacing(2)
  }
}));

function ScrollTop(props) {
  const { children, window } = props;
  const classes = useStyles();
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
    disableHysteresis: true,
    threshold: 100
  });

  const handleClick = event => {
    const anchor = (event.target.ownerDocument || document).querySelector(
      "#back-to-top-anchor"
    );

    if (anchor) {
      anchor.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  };

  return (
    <Zoom in={trigger}>
      <div onClick={handleClick} role="presentation" className={classes.root}>
        {children}
      </div>
    </Zoom>
  );
}

ScrollTop.propTypes = {
  children: PropTypes.element.isRequired,
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func
};

const linkStyles = {
  paddingTop: ".7rem",
  textDecoration: "none",
  paddingBottom: ".7rem",
  paddingLeft: "20px",
  fontFamily: "poppins",
  fontWeight: 700,
  fontSize: 16,
  color: COLORS.cyan,
  paddingRight: "20px"
};

const NavAppbar = () => {
  return (
    <AppBar style={{ boxShadow: "none" }}>
      <Toolbar>
        <IconButton edge="start" color="inherit" aria-label="menu">
          <MenuIcon />
        </IconButton>
        <Typography
          variant="h6"
          style={{
            fontFamily: "Fugaz One",
            flexGrow: 1
          }}
        >
          {/* {data.site.siteMetadata.title} */}
        </Typography>
        <div style={{ paddingRight: 30 }}>
          <a href="/" style={linkStyles}>
            Home
          </a>
          <a href="#experiance" style={linkStyles}>
            Experiance
          </a>
          <a href="#skills" style={linkStyles}>
            Skills
          </a>

          <a href="#contactMe" style={linkStyles}>
            Contact Me
          </a>
        </div>
      </Toolbar>
      <ScrollProgressBar />
    </AppBar>
  );
};
export default function BackToTop(props) {
  const data = useStaticQuery(graphql`
    query siteInfo {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  useEffect(() => {
    const cards = document.querySelectorAll(".exp-card");
    const observer = new IntersectionObserver((entry, observer) => {
      // console.log("enratry:", entry[0].intersectionRatio)
      // entry[0].target.classList.add("focus")
    });
    Array.from(cards).forEach(e => {
      observer.observe(e);
    });

    return () => console.log("Exit");
  });

  return (
    <ThemeProvider theme={theme}>
      <React.Fragment>
        <Helmet>
          {/*  <script src="https://use.fontawesome.com/14662f743d.js"></script> */}
          {/*  <link
            href="https://fonts.googleapis.com/css?family=Fugaz+One|Poppins:400,800,900&display=swap"
            rel="stylesheet"
          /> */}
        </Helmet>
        <CssBaseline />
        <NavAppbar />
        <Toolbar id="back-to-top-anchor" />
        <Container maxWidth="lg">
          <Box>
            <div
              style={{
                height: "100vh",
                maxHeight: "100%",
                display: "flex",
                flexDirection: "column"
              }}
            >
              <main style={{ flex: 1, position: "relative" }}>
                {props.children}
              </main>
              <Footer />
            </div>
          </Box>
        </Container>
        <ScrollTop {...props}>
          <Fab color="secondary" size="small" aria-label="scroll back to top">
            <KeyboardArrowUpIcon />
          </Fab>
        </ScrollTop>
      </React.Fragment>
    </ThemeProvider>
  );
}
