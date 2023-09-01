import * as Yup from "yup";

const useInfoValidationSchema = () => {
  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .email("Invalid email")
      .required("Email is required"),
    fName: Yup.string().required("First Name field is required"),
    lName: Yup.string().required("Last Name field is required"),
    phone: Yup.string()
      .matches(/09[3|5|6|8|9|][0-9]{7}/, "Invalid Number")
      .max(10, "Invalid Number")
      .required("Number is required"),
    gender: Yup.string().required("Gender must be selected"),
    id: Yup.string()
      .required("ID field is required")
      .matches(/[0-9]{11}/, "Invalid Id")
      .max(11, "invalid id"),
    walletNumber: Yup.string().required("Wallet Number is required"),
    address: Yup.string().required("Address Field is required"),
  });

  return validationSchema;
};

export default useInfoValidationSchema;
