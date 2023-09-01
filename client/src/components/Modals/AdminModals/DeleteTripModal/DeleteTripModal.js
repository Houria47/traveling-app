import React, { useState } from "react";
import classes from "./DeleteTripModal.module.css";
import { useDispatch, useSelector } from "react-redux";
import Message from "../../../UI/Message/Message";
import Button from "../../../UI/Button";
import { travelsActions } from "../../../../store/slices/travelsSlice";
import api from "../../../../apis/instance";

const DeleteTripModal = ({ tripId }) => {
  const [resultMessage, setResultMessagee] = useState(null);
  const dispatch = useDispatch();
  // get trip info....
  // ...
  const trips = useSelector((state) => state.travels.items);
  const tripInfo = trips.find((item) => item.id === tripId);

  const deleteTripHandler = async () => {
    // send delete request...
    let response = await api.post("/deleteTrip", { tripId });

    let result = response.status === 200; //defult result
    console.log(response);

    if (result) {
      let updatedTrips = trips.filter((el) => el.id !== tripId);
      console.log(updatedTrips);
      dispatch(travelsActions.setTravels({ items: updatedTrips }));

      setResultMessagee(
        <Message type="success">Tripe Deleted Successfuly.</Message>
      );
    } else {
      setResultMessagee(
        <Message type="error">Failed to delete Tripe!.</Message>
      );
    }
  };

  if (!tripInfo) {
    return (
      <Message type="error" className={classes.notFound}>
        Trip not found!.
      </Message>
    );
  }

  if (resultMessage) {
    return <div className={classes.deleteTrip}>{resultMessage}</div>;
  }

  return (
    <div className={classes.deleteTrip}>
      <h1>Delete a trip</h1>
      <p>Confirm deleting trip to {tripInfo.name}</p>
      <Button onClick={deleteTripHandler}>Confirm</Button>
    </div>
  );
};

export default DeleteTripModal;
