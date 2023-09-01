import api from "../../../../apis/instance";

const useBookRequestLogic = (seats) => {
  const initialValues = {
    location: "",
    departureDate: "",
    numOfPassengers: "",
    numOfBags: "",
    phone: "",
    name: "",
    id: "",
    walletNumber: "",
    destination: "",
    travelType: "",
    seats: [],
    numOfASeats: seats,
  };

  const handleSubmit = (data) => {
    // login(data);
    console.log("we will send this json data to backend", data);

    // let response = await api.post("book");
    return true;

    // if (response.status === 300) {
    //   return false;
    // }
    // console.log(response);
    // if (response.status === 200) {
    //   return true;
    // }
  };
  return { initialValues, handleSubmit };
};

export default useBookRequestLogic;
