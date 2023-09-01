import React, { useState } from "react";

import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import BookForm from "../BookForm/BookForm";

import Container from "../../../components/UI/Container";

import classes from "./BookTrip.module.css";
import { IMG_PATH } from "../../..";

const BookTrip = () => {
  const { tripId } = useParams();

  let travels = useSelector((state) => state.travels.items);

  let trip = null;
  if (+tripId === -1) {
    trip = travels[0];
  } else {
    const tripIndex = travels.findIndex((item) => item.id === +tripId);
    trip = travels[tripIndex];
  }
  const [selectedTrip, setSelectedTrip] = useState(trip);

  const onChangeSelectedTrip = (selectedTrip) => {
    setSelectedTrip(selectedTrip);
  };

  return (
    <Container className={classes.bookTrip}>
      <div className={classes.info}>
        <h1>Trip To {selectedTrip.destination}</h1>
        <img src={`${IMG_PATH}${selectedTrip.image}`} alt="" />
      </div>
      <BookForm tripId={+tripId} onSelectTrip={onChangeSelectedTrip} />
    </Container>
  );
};

export default BookTrip;
