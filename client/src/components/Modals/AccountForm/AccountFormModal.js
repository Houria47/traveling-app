import React, { useState } from "react";
import LoginForm from "../../auth/login/LoginForm";
import SignupForm from "../../auth/signup/SignupForm";
import "./AccountForm.css";

const AccountFormModal = ({ onCloseModal }) => {
  const [isLoginForm, setIsLoginForm] = useState(true);

  const switchFormHandler = () => {
    setIsLoginForm((prevState) => !prevState);
  };
  if (isLoginForm) {
    return (
      <div className="accountForm">
        <LoginForm
          onCloseModal={onCloseModal}
          onSwitchForm={switchFormHandler}
        />
      </div>
    );
  }

  return (
    <div className="accountForm">
      {" "}
      <SignupForm
        onCloseModal={onCloseModal}
        onSwitchForm={switchFormHandler}
      />
    </div>
  );
};

export default AccountFormModal;
