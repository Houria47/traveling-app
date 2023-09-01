import { useDispatch } from "react-redux";
import { signup } from "../../../../apis/authHandlers";
import { userActions } from "../../../../store/slices/userSlice";
import { useNavigate } from "react-router-dom";

const useLoginLogic = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const initialValues = {
    fName: "",
    lName: "",
    email: "",
    password: "",
    id: "",
    walletNumber: "",
  };
  const handleSubmit = (data) => {
    // signup(data);
    console.log("we will send this json data to backend", data);

    // check response
    let response = {
      //default response
      status: true,
      data: {
        id: 1,
        name: "Name",
        role: data.email === "admin@gmail.com" ? 2 : 1,
        token: "token",
      },
    };

    if (response.status) {
      dispatch(userActions.setUser(response.data));
      navigate("/profile");
    } else {
      // show failed message...
    }
  };
  return { initialValues, handleSubmit };
};

export default useLoginLogic;
