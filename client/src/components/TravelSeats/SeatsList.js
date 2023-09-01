import React from "react";

import classes from "./SeatsList.module.css";

const SeatsList = ({ seats }) => {
  let availableSeats = [];
  if (seats === 0) {
    availableSeats = <p>No available seats</p>;
  } else {
    for (let i = 0; i < seats; i++) {
      availableSeats.push(<li key={i}>Seat #{i + 1}</li>);
    }
  }

  return <ul className={classes.seats}>{availableSeats}</ul>;
};
export default SeatsList;
