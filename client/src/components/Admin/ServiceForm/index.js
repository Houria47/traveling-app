import React, { useState } from "react";
import { Formik, Form } from "formik";
import useAddServiceFormLogic from "./hooks/useAddServiceFormLogic";

import Message from "../../UI/Message/Message";
import Button from "../../UI/Button";

import classes from "./ServiceForm.module.css";
import serviceImg from "./../../../assets/default-service-img.jpg";
import { useSelector } from "react-redux";
import useAddServiceSchema from "./hooks/validation";

const ServiceForm = () => {
  const [uplaodedImg, setUplaodedImg] = useState(null);
  const [resultMessage, setResultMessage] = useState(null);

  const { initialValues, handleSubmit } = useAddServiceFormLogic();
  const validationSchema = useAddServiceSchema();

  const trips = useSelector((state) => state.travels.items);
  const tripsOptions = trips.map((item) => (
    <option key={item.id} value={item.id}>
      {item.destination}
    </option>
  ));

  const onTripImgChangeHandler = (setFieldValue, e) => {
    if (e.target.files[0]) {
      const fileReader = new FileReader();
      fileReader.onload = () => {
        if (fileReader.readyState === 2) {
          setFieldValue("image", e.target.files[0].name);
          setUplaodedImg(fileReader.result);
        }
      };
      fileReader.readAsDataURL(e.target.files[0]);
    }
  };

  const handleSubmitStates = (data, { resetForm }) => {
    let res = handleSubmit(data);

    if (res) {
      setUplaodedImg(null);
      setResultMessage(
        <Message type="success">Service Added Succesfuly</Message>
      );
      resetForm();
    } else {
      setResultMessage(<Message type="error">Faild To Service Trip</Message>);
    }
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmitStates}
      validationSchema={validationSchema}
    >
      {({ values, touched, errors, handleChange, setFieldValue }) => (
        <Form className={classes.serviceForm} encType="application/json">
          <h1>Add a service</h1>
          {resultMessage /* Output Result after submition */}
          <div className={classes.inputs}>
            <div className={classes.input}>
              <input
                type="text"
                name="name"
                value={values.name}
                onChange={handleChange}
                placeholder="Name of service"
              />
              {touched.name && errors.name && <small>{errors.name}</small>}
            </div>
            <div className={classes.input}>
              <input
                type="text"
                name="description"
                value={values.description}
                onChange={handleChange}
                placeholder="Description"
              />
              {touched.description && errors.description && (
                <small>{errors.description}</small>
              )}
            </div>
            <div className={classes.input}>
              <input
                type="number"
                name="price"
                value={values.price}
                onChange={handleChange}
                placeholder="Price"
              />
              {touched.price && errors.price && <small>{errors.price}</small>}
            </div>
            <div className={classes.input}>
              <input
                type="number"
                name="discount"
                value={values.discount}
                onChange={handleChange}
                placeholder="Discount"
              />
              {touched.discount && errors.discount && (
                <small>{errors.discount}</small>
              )}
            </div>
            <div className={classes.input}>
              <select
                name="tripId"
                value={values.tripId}
                onChange={handleChange}
                placeholder="Trip"
              >
                {tripsOptions}
              </select>

              {touched.tripId && errors.tripId && (
                <small>{errors.tripId}</small>
              )}
            </div>
            <div className={classes.imgPreview}>
              <div className={classes.imgBox}>
                <img src={uplaodedImg || serviceImg} alt="" />
              </div>
              <label className="primary-btn" htmlFor="image">
                Choose Picture
              </label>
              <input
                hidden
                id="image"
                type="file"
                name="image"
                onChange={onTripImgChangeHandler.bind(null, setFieldValue)}
              />
              {touched.image && errors.image && <small>{errors.image}</small>}
            </div>
          </div>
          <Button type="submit">Submit</Button>
        </Form>
      )}
    </Formik>
  );
};

export default ServiceForm;
