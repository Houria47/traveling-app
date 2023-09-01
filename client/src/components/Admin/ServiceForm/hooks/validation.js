import * as Yup from "yup";

const useAddServiceSchema = () => {
  const validationSchema = Yup.object().shape({
    name: Yup.string().required("Name is required"),
    description: Yup.string().required("Description is required"),
    price: Yup.number()
      .required("Price is required")
      .min(0, "Invalid Price (> 0)."),
    discount: Yup.number().min(0, "Invalid Discount (> 0)."),
    image: Yup.mixed().required("Picture is Required"),
    tripId: Yup.string().required("a Trip must be selected"),
  });

  return validationSchema;
};

export default useAddServiceSchema;
