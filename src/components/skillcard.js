import React from "react";
import PropTypes from "prop-types";

const SkillCard = ({ title, src }) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center"
      }}
    >
      <img src={src} style={{ flexGrow: 1, maxWidth: 100, height: "auto" }} />
      <div style={{}}>
        <strong>{title}</strong>
      </div>
    </div>
  );
};

SkillCard.propTypes = {};

export default SkillCard;
