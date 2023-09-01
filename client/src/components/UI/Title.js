import React from "react";

import classes from "./Title.module.css";

const Title = ({ title }) => {
  const designedLetters = title.split("").map(function(char, index) {
    if (char === " ") {
      return <span key={index} className={classes.break} />;
    }
    return <span key={index}>{char}</span>;
  });

  return <h1 className={classes.title}>{designedLetters}</h1>;
};

export default Title;
