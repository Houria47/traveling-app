import { useDispatch } from "react-redux";
import { login } from "../../../../apis/authHandlers";
import { useNavigate } from "react-router-dom";
import { userActions } from "../../../../store/slices/userSlice";

const useLoginLogic = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const initialValues = {
    email: "",
    password: "",
  };
  const handleSubmit = (data) => {
    // login(data);
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
      if (response.data.role === 2) {
        navigate("/admin?type=trip");
      } else {
        navigate("/profile");
      }
    } else {
      // show failed message...
    }
  };
  return { initialValues, handleSubmit };
};

export default useLoginLogic;
