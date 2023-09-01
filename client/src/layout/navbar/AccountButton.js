import React, { useState } from "react";
import Modal from "../../components/UI/Modal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import AccountFormModal from "../../components/Modals/AccountForm/AccountFormModal";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const AccountButton = (props) => {
  const user = useSelector((state) => state.user.user);
  const navigate = useNavigate();

  const [showAccountModal, setShowAccountModal] = useState(props.closeModal);

  const cartHandler = () => {
    if (user) {
      if (user.role === 2) {
        navigate("/admin?type=trip");
        return;
      }
      navigate("/profile");
      return;
    }
    setShowAccountModal((prevState) => !prevState);
  };

  return (
    <>
      {showAccountModal && (
        <Modal onClose={cartHandler}>
          <AccountFormModal onCloseModal={cartHandler} />
        </Modal>
      )}
      <button className={props.className} onClick={cartHandler}>
        <FontAwesomeIcon icon="fas fa-user" />
      </button>
    </>
  );
};

export default AccountButton;
