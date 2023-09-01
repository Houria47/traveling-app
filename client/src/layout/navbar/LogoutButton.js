import React from "react";

import { useDispatch } from "react-redux";
import { userActions } from "../../store/slices/userSlice";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router-dom";

const LogoutButton = (props) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const logoutHandler = () => {
    dispatch(userActions.setUser(null));
    navigate("/");
  };

  return (
    <>
      <button className={props.className} onClick={logoutHandler}>
        <FontAwesomeIcon icon="fas fa-sign-out" />
      </button>
    </>
  );
};

export default LogoutButton;
