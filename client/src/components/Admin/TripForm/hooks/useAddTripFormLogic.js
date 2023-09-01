import api from "../../../../apis/instance";

const useAddTripFormLogic = () => {
  const initialValues = {
    destination: "",
    description: "",
    price: "",
    discount: "",
    rate: 4,
    image: "",
    fromList: [],
    travelTimes: [""],
  };
  const handleSubmit = async (data) => {
    let response = await api.post("/trip", data);

    let result = response.status === 200; //defult result
    console.log(response);
    return result;
  };
  return { initialValues, handleSubmit };
};

export default useAddTripFormLogic;
