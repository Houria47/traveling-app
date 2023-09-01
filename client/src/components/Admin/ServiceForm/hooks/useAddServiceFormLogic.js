import api from "../../../../apis/instance";

const useAddServiceFormLogic = () => {
  const initialValues = {
    name: "",
    description: "",
    price: "",
    discount: "",
    image: "",
    tripId: "",
  };
  const handleSubmit = async (data) => {
    console.log("we will send this json data to backend", data);
    // check respons status and return result
    let response = await api.post("addService", data);

    console.log(data);
    let result = response.status === 200; //defult result
    console.log(response);
    return result;
  };
  return { initialValues, handleSubmit };
};

export default useAddServiceFormLogic;
