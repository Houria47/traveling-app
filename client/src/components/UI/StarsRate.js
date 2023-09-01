import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classes from "./StarsRate.module.css";

const StarRate = ({ rate }) => {
  const stars = [];
  for (let i = 1; i <= 5; i++) {
    let starType = i > rate ? "far" : "fas";
    stars.push(<FontAwesomeIcon key={i} icon={[starType, "fa-star"]} />);
  }
  return <div className={classes.rate}>{stars}</div>;
};

export default StarRate;
