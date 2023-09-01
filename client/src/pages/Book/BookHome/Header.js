import React from "react";

import bookingImg from "./../../../assets/booking.png";
import Container from "../../../components/UI/Container";

import classes from "./Header.module.css";
import BookBtn from "../../../components/BookBtn/BookBtn";

const Header = () => {
  return (
    <div className={classes.bg}>
      <Container className={classes.head}>
        <div className={classes.info}>
          <h1>Book your trip</h1>
          <span>Online service</span>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elitLorem ipsum,
            dolor sit amet consectetur adipisicing elit
          </p>
          <BookBtn tripId={-1} className="primary-btn">
            Book a trip
          </BookBtn>
        </div>
        <img src={bookingImg} alt=""></img>
      </Container>
    </div>
  );
};

export default Header;
