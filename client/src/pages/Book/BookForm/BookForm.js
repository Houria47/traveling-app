import React, { useEffect, useState } from "react";

import { Formik, Form, Field } from "formik";

import Button from "../../../components/UI/Button";

import classes from "./BookForm.module.css";
import useBookRequestLogic from "./hooks/BookRequestLogic";
import useBookRequestValidationSchema from "./hooks/validation";
import Message from "../../../components/UI/Message/Message";
import { useSelector } from "react-redux";
import { getTravelServices } from "../../../apis/travelsHandlers/getTravelServices";
import { IMG_PATH } from "../../..";

const BookForm = ({ tripId, onSelectTrip }) => {
  const [resultMessage, setResultMessage] = useState(null);
  const [services, setServices] = useState([]);

  const travels = useSelector((state) => state.travels.items);

  let trip = travels.find((item) => item.id === tripId);
  // console.log(trip);
  if (!trip) {
    trip = travels[0] || null;
  }

  // get services...

  useEffect(() => {
    const getServices = async () => {
      let response = await getTravelServices(trip.id);
      if (response.status === 200) {
        setServices(response.data);
      }
    };
    getServices();
  }, []);

  const { initialValues, handleSubmit } = useBookRequestLogic(trip.seats);
  const validationSchema = useBookRequestValidationSchema();

  const handleSubmitStates = (data, { resetForm }) => {
    console.log(data);
    if (handleSubmit(data)) {
      setResultMessage(
        <Message type="success">Trip Booked Succesfuly</Message>
      );
    } else {
      setResultMessage(<Message type="error">Trip Not Booked!</Message>);
    }
    resetForm();
  };

  initialValues.destination = tripId === -1 ? 0 : tripId;

  let seatsOptions = [];
  for (let i = 0; i < trip.seats; i++) {
    seatsOptions.push(
      <label key={i}>
        <Field type="checkbox" name="seats" value={`${i}`} />
        Seat #{i + 1}
      </label>
    );
  }
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmitStates}
      validationSchema={validationSchema}
    >
      {({ values, touched, errors, handleChange, setFieldValue }) => (
        <Form
          noValidate
          className={classes.BookForm}
          encType="application/json"
        >
          {resultMessage /* Output Result after submition */}
          <h2 className={classes.title}>Book Information</h2>
          <div className={classes.inputs}>
            <div className={classes.input}>
              <label>Name</label>
              <input
                name="name"
                type="text"
                value={values.name}
                onChange={handleChange}
                placeholder="Your name"
              />
              {touched.name && errors.name && <small>{errors.name}</small>}
            </div>
            <div className={classes.input}>
              <label>Phone</label>
              <input
                name="phone"
                type="text"
                value={values.phone}
                onChange={handleChange}
                placeholder="your Phone number"
              />
              {touched.phone && errors.phone && <small>{errors.phone}</small>}
            </div>
            <div className={classes.input}>
              <label>National ID Number</label>
              <input
                name="id"
                type="number"
                value={values.id}
                onChange={handleChange}
                placeholder="Your National ID Number"
              />
              {touched.id && errors.id && <small>{errors.id}</small>}
            </div>
            <div className={classes.input}>
              <label>wallet Number</label>
              <input
                name="walletNumber"
                type="number"
                value={values.walletNumber}
                onChange={handleChange}
                placeholder="your wallet Number"
              />
              {touched.walletNumber && errors.walletNumber && (
                <small>{errors.walletNumber}</small>
              )}
            </div>
            <div className={classes.input}>
              <label>From</label>
              <input
                name="location"
                type="text"
                value={values.location}
                onChange={handleChange}
                placeholder="Your current location"
              />
              {touched.location && errors.location && (
                <small>{errors.location}</small>
              )}
            </div>
            <div className={classes.input}>
              <label>To</label>
              <select
                name="destination"
                value={values.destination}
                placeholder="Destination"
                onChange={async (e) => {
                  let trip = travels.find(
                    (item) => item.id === +e.target.value
                  );
                  let response = await getTravelServices(trip.id);
                  if (response.status === 200) {
                    setServices(response.data);
                  }
                  onSelectTrip(trip);
                  setFieldValue("destination", e.target.value);
                }}
              >
                {travels.map((item) => (
                  <option key={item.id} value={item.id}>
                    {item.destination}
                  </option>
                ))}
              </select>
              {touched.destination && errors.destination && (
                <small>{errors.destination}</small>
              )}
            </div>
            <div className={classes.input}>
              <label>Departure Date</label>
              <input
                name="departureDate"
                type="datetime-local"
                value={values.departureDate}
                onChange={handleChange}
                required
              />
              {touched.departureDate && errors.departureDate && (
                <small>{errors.departureDate}</small>
              )}
            </div>
            <div className={classes.input}>
              <label>Number Of Passenger</label>
              <input
                name="numOfPassengers"
                type="number"
                value={values.numOfPassengers}
                onChange={handleChange}
                placeholder="Number of passengers"
              />
              {touched.numOfPassengers && errors.numOfPassengers && (
                <small>{errors.numOfPassengers}</small>
              )}
            </div>
            <div className={classes.input}>
              <label>Bags</label>
              <input
                name="numOfBags"
                type="number"
                value={values.numOfBags}
                onChange={handleChange}
                placeholder="Number of bags"
              />
              {touched.numOfBags && errors.numOfBags && (
                <small>{errors.numOfBags}</small>
              )}
            </div>
            <div className={classes.radioInput}>
              <label>Travel Type</label>
              <div className={classes.radio}>
                <label>
                  <Field type="radio" name="travelType" value="1" />
                  VIP
                </label>
                <label>
                  <Field type="radio" name="travelType" value="0" />
                  Normal
                </label>
              </div>
              {touched.travelType && errors.travelType && (
                <small>{errors.travelType}</small>
              )}
            </div>
          </div>
          <h2 className={classes.title}>Available Seats</h2>
          <div className={classes.seatsInput}>
            <label>Choose Seats:</label>
            <div className={classes.seatsOptions}>{seatsOptions}</div>
            {touched.seats && errors.seats && <small>{errors.seats}</small>}
          </div>
          <h2 className={classes.title}>Services</h2>
          <ul className={classes.services}>
            {services && services.length === 0 && <p>No services.</p>}
            {services &&
              services.map((service) => (
                <li key={service.id}>
                  <img src={`${IMG_PATH}${service.image}`} alt="" />
                  <h3>{service.name}</h3>
                  <p>${service.price}</p>
                </li>
              ))}
          </ul>
          <Button type="submit">Book</Button>
        </Form>
      )}
    </Formik>
  );
};

export default BookForm;
