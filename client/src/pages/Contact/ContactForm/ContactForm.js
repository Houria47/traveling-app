import React from "react";

import { Form, Formik } from "formik";
import useContactValidationSchema from "./hooks/validation";
import useContactLogic from "./hooks/useContactLogic";
import Button from "../../../components/UI/Button";

import classes from "./ContactForm.module.css";

const ContactForm = () => {
  const { initialValues, contactHandler } = useContactLogic();
  const validationSchema = useContactValidationSchema();
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={contactHandler}
      validationSchema={validationSchema}
    >
      {({ values, errors, touched, handleChange }) => (
        <Form className={classes.contactForm}>
          <div className={classes.inputRow}>
            <div>
              <input
                name="name"
                value={values.name}
                onChange={handleChange}
                type="text"
                placeholder="name"
              />
              {errors.name && touched.name && <small>{errors.name}</small>}
            </div>
            <div>
              <input
                name="email"
                value={values.email}
                onChange={handleChange}
                type="text"
                placeholder="email"
              />
              {errors.email && touched.email && <small>{errors.email}</small>}
            </div>
          </div>

          <div className={classes.inputRow}>
            <div>
              <input
                name="phone"
                type="text"
                value={values.phone}
                onChange={handleChange}
                placeholder="Your phone Number"
              />
              {errors.phone && touched.phone && <small>{errors.phone}</small>}
            </div>
            <div>
              <input
                name="subject"
                value={values.subject}
                onChange={handleChange}
                type="text"
                placeholder="subject"
              />
            </div>
          </div>
          <textarea
            name="message"
            value={values.message}
            onChange={handleChange}
            cols="30"
            rows="10"
            placeholder="message"
          ></textarea>
          {errors.message && touched.message && <small>{errors.message}</small>}

          <Button type="submit">Send message</Button>
        </Form>
      )}
    </Formik>
  );
};

export default ContactForm;
