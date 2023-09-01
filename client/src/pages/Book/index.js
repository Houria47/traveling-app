import React from "react";

import { Route, Routes } from "react-router-dom";
// import BookTrips from "./BookTrips/BookTrips";
import BookTrip from "./BookTrip/BookTrip";
import Header from "./BookHome/Header";

const Book = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Header />}></Route>
        <Route path="/:tripId" element={<BookTrip />}></Route>
      </Routes>
    </>
  );
};

export default Book;
