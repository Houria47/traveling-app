import React, { useState } from "react";

import useInfoValidationSchema from "./hooks/validation";
import useEditInfoLogic from "./hooks/useEditInfoLogic";

import classes from "./InfoTab.module.css";
import ImageInput from "./ImageInput/ImageInput";
import { Field, Form, Formik } from "formik";
import Button from "../../../components/UI/Button";
import Message from "../../../components/UI/Message/Message";

const InfoTab = () => {
  const { initialValues, submitHandler } = useEditInfoLogic();
  const validationSchema = useInfoValidationSchema();

  const [resultMessage, setResultMessage] = useState(null);

  const firstSubmitHandler = (data) => {
    let res = submitHandler(data);
    console.log(res);
    if (res) {
      setResultMessage(
        <Message type="success">Information Saved Succesfuly</Message>
      );
    } else {
      setResultMessage(<Message type="error">Faild To Save!</Message>);
    }
  };

  return (
    <div className={classes.infoTab}>
      <Formik
        initialValues={initialValues}
        onSubmit={firstSubmitHandler}
        validationSchema={validationSchema}
      >
        {({ values, errors, touched, handleChange, setFieldValue }) => (
          <Form className={classes.infoForm}>
            <ImageInput controlers={{ setFieldValue }} />
            {resultMessage /* Output Result after submition */}
            <div className={classes.inputs}>
              <div className={classes.input}>
                <label>First Name</label>
                <input
                  name="fName"
                  value={values.fName}
                  onChange={handleChange}
                />
                {errors.fName && touched.fName && <small>{errors.fName}</small>}
              </div>
              <div className={classes.input}>
                <label>Last Name</label>
                <input
                  name="lName"
                  value={values.lName}
                  onChange={handleChange}
                />
                {errors.lName && touched.lName && <small>{errors.lName}</small>}
              </div>
              <div className={classes.input}>
                <label>email</label>
                <input
                  name="email"
                  value={values.email}
                  onChange={handleChange}
                />
                {errors.email && touched.email && <small>{errors.email}</small>}
              </div>
              <div className={classes.input}>
                <label>Phone Number</label>
                <input
                  name="phone"
                  value={values.phone}
                  onChange={handleChange}
                />
                {errors.phone && touched.phone && <small>{errors.phone}</small>}
              </div>
              <div className={classes.radioInput}>
                <label>Gender</label>
                <div className={classes.radioInputs}>
                  <label>
                    <Field type="radio" name="gender" value="1" />
                    Male
                  </label>
                  <label>
                    <Field type="radio" name="gender" value="0" />
                    female
                  </label>
                </div>
                {errors.gender && touched.gender && (
                  <small>{errors.gender}</small>
                )}
              </div>
              <div className={classes.input}>
                <label>Your National ID Number</label>
                <input name="id" value={values.id} onChange={handleChange} />
                {errors.id && touched.id && <small>{errors.id}</small>}
              </div>
              <div className={classes.input}>
                <label>Wallet Number</label>
                <input
                  name="walletNumber"
                  value={values.walletNumber}
                  onChange={handleChange}
                />
                {errors.walletNumber && touched.walletNumber && (
                  <small>{errors.walletNumber}</small>
                )}
              </div>
              <div className={classes.input}>
                <label>address</label>
                <input
                  name="address"
                  value={values.address}
                  onChange={handleChange}
                />
                {errors.address && touched.address && (
                  <small>{errors.address}</small>
                )}
              </div>
            </div>
            <Button type="submit">Save Changes</Button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default InfoTab;
