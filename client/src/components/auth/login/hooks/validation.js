import * as Yup from "yup";

const useLoginValidationSchema = () => {
  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .email("invalid email")
      .required("this field is required"),
    password: Yup.string().required("this field is required"),
  });

  return validationSchema;
};

export default useLoginValidationSchema;
