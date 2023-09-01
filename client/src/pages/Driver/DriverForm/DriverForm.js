import React, { useState } from "react";

import { Form, Formik } from "formik";
import useDriverRequestLogic from "./hooks/driverRequestLogic";
import useDriverRequestValidationSchema from "./hooks/validation";

import Button from "../../../components/UI/Button";

import classes from "./DriverForm.module.css";
import userImg from "./../../../assets/default-user.png";
import Message from "../../../components/UI/Message/Message";

const DriverForm = () => {
  const [resultMessage, setResultMessage] = useState(null);
  const [uplaodedImg, setUplaodedImg] = useState(null);

  const { initialValues, handleSubmit } = useDriverRequestLogic();
  const validationSchema = useDriverRequestValidationSchema();

  const handleSubmitStates = (data, { resetForm }) => {
    console.log(data);
    setUplaodedImg(null);
    if (handleSubmit(data)) {
      setResultMessage(
        <Message type="success">Request Sent Succesfuly</Message>
      );
    } else {
      setResultMessage(<Message type="error">Faild To Send Request</Message>);
    }
    resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmitStates}
      validationSchema={validationSchema}
    >
      {({ values, touched, errors, handleChange, setFieldValue }) => (
        <>
          {resultMessage}
          <Form className={classes.driverForm}>
            <div className={classes.inputs}>
              <div className={classes.input}>
                <label>First Name</label>
                <input
                  type="text"
                  name="firstName"
                  value={values.firstName}
                  onChange={handleChange}
                  placeholder="Your First Name"
                />
                {touched.firstName && errors.firstName && (
                  <small>{errors.firstName}</small>
                )}
              </div>
              <div className={classes.input}>
                <label>Last Name</label>
                <input
                  type="text"
                  name="lastName"
                  value={values.lastName}
                  onChange={handleChange}
                  placeholder="Your Last Name"
                />
                {touched.lastName && errors.lastName && (
                  <small>{errors.lastName}</small>
                )}
              </div>
              <div className={classes.input}>
                <label>Address</label>
                <input
                  type="text"
                  name="address"
                  value={values.address}
                  onChange={handleChange}
                  placeholder="Your Address"
                />
                {touched.address && errors.address && (
                  <small>{errors.address}</small>
                )}
              </div>
              <div className={classes.input}>
                <label>Phone Number</label>
                <input
                  type="text"
                  name="phone"
                  value={values.phone}
                  onChange={handleChange}
                  placeholder="Your Phone Number"
                />
                {touched.phone && errors.phone && <small>{errors.phone}</small>}
              </div>
              <div className={classes.input}>
                <label>Years of Experience</label>
                <input
                  type="number"
                  name="experienceYears"
                  value={values.experienceYears}
                  onChange={handleChange}
                  placeholder="Your Years of Experience"
                />
                {touched.experienceYears && errors.experienceYears && (
                  <small>{errors.experienceYears}</small>
                )}
              </div>
              <div className={classes.input}>
                <label>Type of driver's license</label>
                <input
                  type="text"
                  name="license"
                  value={values.license}
                  onChange={handleChange}
                  placeholder="Your driver's license Type"
                />
                {touched.license && errors.license && (
                  <small>{errors.license}</small>
                )}
              </div>
              <div className={classes.input}>
                <label>Age</label>
                <input
                  type="number"
                  name="age"
                  value={values.age}
                  onChange={handleChange}
                  placeholder="Your age"
                />
                {touched.age && errors.age && <small>{errors.age}</small>}
              </div>
              <div className={classes.input}>
                <label>Experiences</label>
                <textarea
                  type="text"
                  name="experiences"
                  value={values.experiences}
                  onChange={handleChange}
                  placeholder="Your Experiences"
                />
                {touched.experiences && errors.experiences && (
                  <small>{errors.experiences}</small>
                )}
              </div>
              <Button type="submit">Send Request</Button>
            </div>
            <div className={classes.imgPreview}>
              <div className={classes.imgBox}>
                <img src={uplaodedImg || userImg} alt="" />
              </div>
              <label className="primary-btn" htmlFor="driverImage">
                Upload You Picture
              </label>
              {touched.driverImage && errors.driverImage && (
                <small>{errors.driverImage}</small>
              )}
              <input
                hidden
                id="driverImage"
                type="file"
                name="driverImage"
                onChange={(e) => {
                  if (e.target.files[0]) {
                    const fileReader = new FileReader();
                    fileReader.onload = () => {
                      if (fileReader.readyState === 2) {
                        setFieldValue("driverImage", fileReader.result);
                        setUplaodedImg(fileReader.result);
                      }
                    };
                    fileReader.readAsDataURL(e.target.files[0]);
                  }
                }}
              />
            </div>
          </Form>
        </>
      )}
    </Formik>
  );
};

export default DriverForm;
