const useDriverRequestLogic = () => {
  const initialValues = {
    firstName: "",
    lastName: "",
    phone: "",
    address: "",
    driverImage: "",
    license: "",
    age: "",
    experienceYears: "",
    experiences: "",
  };
  const handleSubmit = (data) => {
    // login(data);
    let response = true;
    console.log("we will send this json data to backend", data);
    return response;
  };
  return { initialValues, handleSubmit };
};

export default useDriverRequestLogic;
