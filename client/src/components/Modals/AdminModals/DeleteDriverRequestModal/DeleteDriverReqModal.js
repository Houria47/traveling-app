import React, { useState } from "react";
import classes from "./../DeleteTripModal/DeleteTripModal.module.css";
import Message from "./../../../UI/Message/Message";
import Button from "./../../../UI/Button";

const DeleteDriverReqModal = ({ order, onDelete }) => {
  const [resultMessage, setResultMessagee] = useState(null);

  const deleteHandler = () => {
    // send delete request...
    onDelete(order.id);
    let response = true; //default response

    if (response) {
      // let updatedTrips = trips.filter((el) => el.id !== tripId);
      // console.log(updatedTrips);
      // dispatch(travelsActions.setTravels(updatedTrips));

      setResultMessagee(
        <Message type="success">Request Deleted Successfuly.</Message>
      );
    } else {
      setResultMessagee(
        <Message type="error">Failed to delete Request!.</Message>
      );
    }
  };

  if (!order) {
    return (
      <Message type="error" className={classes.notFound}>
        Request not found!.
      </Message>
    );
  }

  if (resultMessage) {
    return <div className={classes.deleteTrip}>{resultMessage}</div>;
  }

  console.log(order);
  return (
    <div className={classes.deleteTrip}>
      <h1>Delete Request</h1>
      <p>
        Confirm deleting Driver Request from {`${order.fName} ${order.lName}`}
      </p>
      <Button onClick={deleteHandler}>Confirm</Button>
    </div>
  );
};

export default DeleteDriverReqModal;
