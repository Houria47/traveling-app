import * as Yup from "yup";

const useDriverRequestValidationSchema = () => {
  const validationSchema = Yup.object().shape({
    firstName: Yup.string().required("this field is required"),
    lastName: Yup.string().required("this field is required"),
    address: Yup.string().required("this field is required"),
    phone: Yup.string()
      .required("this field is required")
      .matches(/09[3|5|6|8|9|][0-9]{7}/, "Invalid Number")
      .max(10, "Invalid Number"),
    experiences: Yup.string().required("this field is required"),
    age: Yup.number()
      .required("this field is required")
      .max(55, "Age Must be Less than 55 years")
      .min(18, "Age Must be greater than 18 years"),
    license: Yup.string().required("this field is required"),
    experienceYears: Yup.number()
      .required("this field is required")
      .min(0, "invalid Years (>0)"),
    driverImage: Yup.mixed().required("this field is Required"),
  });

  return validationSchema;
};

export default useDriverRequestValidationSchema;
