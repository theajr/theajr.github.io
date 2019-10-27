import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import LinearProgress from "@material-ui/core/LinearProgress";

const ScrollProgressBar = props => {
  const [scrollY, setScrollY] = useState(0);
  useEffect(() => {
    window.addEventListener("scroll", function(e) {
      const winScroll =
        document.body.scrollTop || document.documentElement.scrollTop;
      const height =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
      const scrolled = (winScroll / height) * 100;
      setScrollY(scrolled);
      //   console.log(e)
    });
    return () => {};
  });
  return (
    <LinearProgress
      variant="determinate"
      value={scrollY}
      color="secondary"
      style={{
        position: "absolute",
        width: "100%",
        zIndex: 1,
        top: 0,
        left: 0
      }}
    />
  );
};

ScrollProgressBar.propTypes = {};

export default ScrollProgressBar;
