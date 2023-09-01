import * as Yup from "yup";

const useBookRequestValidationSchema = () => {
  const validationSchema = Yup.object().shape({
    location: Yup.string().required("Location field is required"),
    numOfPassengers: Yup.string().required(
      "Passengers Number field is required"
    ),
    departureDate: Yup.date().required("Date field is required"),
    numOfBags: Yup.number()
      .min(0, "Number of bags must be > 0")
      .required("Number of bags field is required"),
    id: Yup.string()
      .required("this field is required")
      .matches(/[0-9]{11}/, "Invalid Id")
      .max(11, "invalid id"),
    name: Yup.string().required("Name field is required"),
    phone: Yup.string()
      .matches(/09[3|5|6|8|9|][0-9]{7}/, "Invalid Number")
      .required("Number is required")
      .max(10, "Invalid Number"),
    walletNumber: Yup.string().required("this field is required"),
    destination: Yup.string().required("this field is required"),
    travelType: Yup.string().required("travel Type is required"),
    seats: Yup.array()
      .required()
      .min(1, "Choose seat"),
  });

  return validationSchema;
};

export default useBookRequestValidationSchema;
