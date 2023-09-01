import React from "react";

import { Form, Formik } from "formik";
import useLoginLogic from "./hooks/useLoginLogic";
import useLoginValidationSchema from "./hooks/validation";

function LoginForm({ onSwitchForm, onCloseModal }) {
  const { initialValues, handleSubmit } = useLoginLogic();
  const validationSchema = useLoginValidationSchema();

  const handleSubmitStates = (data) => {
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
          <h3>Login</h3>
          <input
            type="email"
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
          <input type="submit" value="login now" className="submit-btn" />
          <p>
            dont have acount? <button onClick={onSwitchForm}>Sign up</button>
          </p>
        </Form>
      )}
    </Formik>
  );
}

export default LoginForm;
