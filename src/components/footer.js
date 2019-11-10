import React from "react";
import PropTypes from "prop-types";
import fbImg from "../images/facebook.png";
import linkedInimg from "../images/linkedin.png";
import githubImg from "../images/Github.png";
import skypeImg from "../images/skype.png";
import { COLORS } from "../util/theme";
import { Button } from "@material-ui/core";
import Heading from "./heading";
import ContactMe from "./contact";

const footerLinks = {
  color: COLORS.indigo,
  textDecoration: "none",
  marginLeft: 10,
  marginRight: 10
};
const Footer = (props) => {
  return (
    <footer
      style={{
        padding: "20px 0px",
        marginTop: 10,

        backgroundColor: "#fff",
        display: "grid",
        gridTemplateColumns: "1fr"
      }}
    >
      <div style={{ textAlign: "center" }}>
        {/* <Heading title="Stay in touch" align="left" variant="h6" paddingTop={0}> */}
        <a style={footerLinks} href='https://www.linkedin.com/in/theajr/'>
          LinkedIn
        </a>
        <a style={footerLinks} href='https://github.com/theajr'>
          GitHub
        </a>
        <a style={footerLinks} href='skype:ajayreddy.pathuri?userinfo'>
          Skype
        </a>
        <a style={footerLinks} href='https://www.facebook.com/ajr.jar'>
          Facebook
        </a>
      </div>
      <div>{/* <Heading title='Contact Me'><ContactMe /></Heading> */}</div>
    </footer>
  );
};

Footer.propTypes = {};

export default Footer;
