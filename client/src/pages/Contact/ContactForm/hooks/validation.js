import * as Yup from "yup";

const useContactValidationSchema = () => {
  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .email("Invalid email")
      .required("Email is required"),
    name: Yup.string().required("Name field is required"),
    phone: Yup.string()
      .matches(/09[3|5|6|8|9|][0-9]{7}/, "Invalid Number")
      .required("Number is required")
      .max(10, "Invalid Number"),
    message: Yup.string().required("Message is required"),
  });

  return validationSchema;
};

export default useContactValidationSchema;
