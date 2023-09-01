import React from "react";

import { Form, Formik } from "formik";
import useSignupLogic from "./hooks/useSignupLogic";
import useSignupValidationSchema from "./hooks/validation";

function LoginForm({ onSwitchForm, onCloseModal }) {
  const { initialValues, handleSubmit } = useSignupLogic();
  const validationSchema = useSignupValidationSchema();

  const handleSubmitStates = (data) => {
    console.log(data);
    handleSubmit(data);
    onCloseModal();
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmitStates}
      validationSchema={validationSchema}
    >
      {({ values, touched, errors, handleChange }) => (
        <Form>
          <h3>Sign Up</h3>
          <input
            type="text"
            name="fName"
            value={values.fName}
            onChange={handleChange}
            className={`input ${
              errors.fName && touched.fName ? "invalid" : ""
            }`}
            placeholder="enter your first name"
          />
          {errors.fName && touched.fName ? <small>{errors.fName}</small> : null}
          <input
            type="text"
            name="lName"
            value={values.lName}
            onChange={handleChange}
            className={`input ${
              errors.lName && touched.lName ? "invalid" : ""
            }`}
            placeholder="enter your last name"
          />
          {errors.lName && touched.lName ? <small>{errors.lName}</small> : null}

          <input
            type="text"
            name="email"
            value={values.email}
            onChange={handleChange}
            className={`input ${
              errors.email && touched.email ? "invalid" : ""
            }`}
            placeholder="enter your email"
          />

          {errors.email && touched.email ? <small>{errors.email}</small> : null}
          <input
            type="password"
            name="password"
            value={values.password}
            onChange={handleChange}
            className={`input ${
              errors.password && touched.password ? "invalid" : ""
            }`}
            placeholder="enter your password"
          />
          {errors.password && touched.password ? (
            <small>{errors.password}</small>
          ) : null}
          <input
            type="text"
            name="id"
            value={values.id}
            onChange={handleChange}
            className={`input ${errors.id && touched.id ? "invalid" : ""}`}
            placeholder="enter your National ID number"
          />
          {errors.id && touched.id ? <small>{errors.id}</small> : null}
          <input
            type="text"
            name="walletNumber"
            value={values.walletNumber}
            onChange={handleChange}
            className={`input ${
              errors.walletNumber && touched.walletNumber ? "invalid" : ""
            }`}
            placeholder="enter your wallet number"
          />
          {errors.walletNumber && touched.walletNumber ? (
            <small>{errors.walletNumber}</small>
          ) : null}
          <input type="submit" value="Sign up" className="submit-btn" />
          <p>
            dont have acount? <button onClick={onSwitchForm}>Login</button>
          </p>
        </Form>
      )}
    </Formik>
  );
}

export default LoginForm;
