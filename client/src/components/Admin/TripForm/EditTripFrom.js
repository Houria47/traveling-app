import React, { useState } from "react";
import { Formik, Form, Field, FieldArray } from "formik";
import useAddTripFormSchema from "./hooks/validation";
import tripImg from "./../../../assets/default-trip-img.jpg";
import Message from "../../UI/Message/Message";

import classes from "./TripForm.module.css";
import Button from "../../UI/Button";
import useEditTripFormLogic from "./hooks/useEditTripFormLogic";
import { IMG_PATH } from "../../..";

const States = [
  { id: "s1", name: "Damascus" },
  { id: "s2", name: "Aleppo" },
  { id: "s3", name: "Lattakia" },
  { id: "s4", name: "Homs" },
  { id: "s5", name: "hama" },
  { id: "s6", name: "Tartus" },
];

const EditTripForm = ({ oldTripInfo }) => {
  let initValues = {
    destination: oldTripInfo.destination,
    description: oldTripInfo.desc,
    price: oldTripInfo.price,
    discount: oldTripInfo.discount,
    rate: oldTripInfo.rate,
    image: oldTripInfo.image,
    fromList: ["s1", "s2", "s4"],
    travelTimes: ["2023-08-28T07:48", "2023-08-28T07:48"],
    tripId: oldTripInfo.id,
  };

  const [uplaodedImg, setUplaodedImg] = useState(
    `${IMG_PATH}${oldTripInfo.image}`
  );
  const [resultMessage, setResultMessage] = useState(null);

  const { handleSubmit } = useEditTripFormLogic();
  const validationSchema = useAddTripFormSchema();

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

  const handleSubmitStates = (data /*{ resetForm }*/) => {
    // setUplaodedImg(null);
    if (handleSubmit(data)) {
      setResultMessage(
        <Message type="success">Trip Edited Succesfuly</Message>
      );
    } else {
      setResultMessage(<Message type="error">Faild To Edit Trip</Message>);
    }
    initValues = {
      destination: "",
      description: "",
      price: "",
      discount: "",
      rate: "",
      image: "",
      fromList: [],
      travelTimes: [""],
      tripId: oldTripInfo.id,
    };
    // resetForm();
  };

  return (
    <Formik
      initialValues={initValues}
      onSubmit={handleSubmitStates}
      validationSchema={validationSchema}
    >
      {({ values, touched, errors, handleChange, setFieldValue }) => (
        <Form className={classes.tripForm}>
          <input hidden value={values.tripId} />
          <h1>Edit a trip</h1>
          {resultMessage /* Output Result after submition */}
          <div className={classes.inputs}>
            <div className={classes.input}>
              <input
                type="text"
                name="destination"
                value={values.destination}
                onChange={handleChange}
                placeholder="Destination"
              />
              {touched.description && errors.destination && (
                <small>{errors.description}</small>
              )}
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
            <div className={classes.imgPreview}>
              <div className={classes.imgBox}>
                <img src={uplaodedImg || tripImg} alt="" />
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
            <div className={classes.fromList}>
              <h2>From :</h2>
              {States.map((state) => (
                <label key={state.id}>
                  <Field
                    key={state.id}
                    type="checkbox"
                    checked={initValues.fromList.includes(state.id)}
                    name="fromList"
                    value={state.id}
                  />
                  {state.name}
                </label>
              ))}

              {touched.fromList && errors.fromList && (
                <small>{errors.fromList}</small>
              )}
            </div>
            <div>
              <h2>Travel Times</h2>
              <FieldArray name="travelTimes">
                {({ insert, remove, push }) => (
                  <div className={classes.travelTimes}>
                    {values.travelTimes.length > 0 &&
                      values.travelTimes.map((friend, index) => (
                        <div key={index} className={classes.col}>
                          <label htmlFor={`travelTimes.${index}`}>
                            Time #{index + 1}:
                          </label>
                          <Field
                            key={index * 2}
                            name={`travelTimes.${index}`}
                            type="datetime-local"
                          />
                          <button
                            type="button"
                            className={classes.cancel}
                            onClick={() => remove(index)}
                          >
                            X
                          </button>
                        </div>
                      ))}
                    <Button type="button" onClick={() => push("")}>
                      Add time
                    </Button>
                  </div>
                )}
              </FieldArray>
              {touched.travelTimes && errors.travelTimes && (
                <small>{errors.travelTimes}</small>
              )}
            </div>
          </div>
          <Button type="submit">Submit</Button>
        </Form>
      )}
    </Formik>
  );
};

export default EditTripForm;
