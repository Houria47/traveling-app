const useContactLogic = () => {
  const initialValues = {
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  };

  const contactHandler = (data) => {
    console.log(data);
  };
  return { initialValues, contactHandler };
};

export default useContactLogic;
