import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Button from "../UI/Button";
import Modal from "../UI/Modal";
import AccountFormModal from "../Modals/AccountForm/AccountFormModal";

const DriverReqBtn = () => {
  const [loginModal, setLoginModal] = useState(false);
  const user = useSelector((state) => state.user.user);
  const navigate = useNavigate();

  const bookhandler = () => {
    if (user) {
      navigate(`/driver/form`);
    } else {
      setLoginModal(true);
    }
  };

  const toggleModal = () => {
    setLoginModal((prevState) => !prevState);
  };

  return (
    <>
      {loginModal && (
        <Modal onClose={toggleModal}>
          <AccountFormModal onCloseModal={toggleModal} />
        </Modal>
      )}
      <Button onClick={bookhandler} className="primary-btn">
        Join as Driver
      </Button>
    </>
  );
};
export default DriverReqBtn;
