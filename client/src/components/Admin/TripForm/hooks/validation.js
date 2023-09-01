import * as Yup from "yup";

const useAddTripFormSchema = () => {
  const validationSchema = Yup.object().shape({
    destination: Yup.string().required("Destination is required"),
    description: Yup.string().required("description is required"),
    price: Yup.number()
      .required("price is required")
      .min(0, "Invalid Price (> 0)."),
    discount: Yup.number().min(0, "Invalid Discount (> 0)."),
    image: Yup.mixed().required("Picture is Required"),
    fromList: Yup.array()
      .required("Must select one departure station at least")
      .min(1, "Must select one departure station at least"),
    travelTimes: Yup.array()
      .of(Yup.string().required("Must specify departure time,"))
      .required("Must add one departure Time at least")
      .min(1, "Must add one departure Time at least"),
  });

  return validationSchema;
};

export default useAddTripFormSchema;
