import * as Yup from "yup";

const useSignupValidationSchema = () => {
  const validationSchema = Yup.object().shape({
    fName: Yup.string().required("this field is required"),
    lName: Yup.string().required("this field is required"),
    email: Yup.string()
      .email("invalid email")
      .required("this field is required"),
    password: Yup.string()
      .min(6, "Must be 6 characters or more")
      .required("this field is required"),
    id: Yup.string()
      .required("this field is required")
      .matches(/[0-9]{11}/, "Invalid Id")
      .max(11, "Invaild Id"),
    walletNumber: Yup.string().required("this field is required"),
  });

  return validationSchema;
};

export default useSignupValidationSchema;
