import api from "../../../../apis/instance";

const useEditTripFormLogic = () => {
  const handleSubmit = async (data) => {
    let response = await api.post("/editTrip", data);

    let result = response.status === 200;

    console.log(response);

    return result;
  };
  return { handleSubmit };
};

export default useEditTripFormLogic;
