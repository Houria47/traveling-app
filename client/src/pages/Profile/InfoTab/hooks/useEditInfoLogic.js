const useEditInfoLogic = () => {
  const initialValues = {
    image: "",
    fName: "",
    lName: "",
    email: "",
    phone: "",
    gender: "",
    id: "",
    walletNumber: "",
    address: "",
  };

  const submitHandler = (data) => {
    console.log(data);
    let response = {
      status: true,
      data: "",
    };

    return response.status;
  };
  return { initialValues, submitHandler };
};

export default useEditInfoLogic;
