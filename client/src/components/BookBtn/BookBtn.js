import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Button from "../UI/Button";
import Modal from "../UI/Modal";
import AccountFormModal from "../Modals/AccountForm/AccountFormModal";

const BookBtn = ({ tripId }) => {
  const [loginModal, setLoginModal] = useState(false);
  const user = useSelector((state) => state.user.user);
  const navigate = useNavigate();

  const bookhandler = (id) => {
    if (user) {
      navigate(`/book/${id}`);
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
      <Button
        onClick={bookhandler.bind(null, tripId)}
        className="primary-btn"
        to={`/book/${tripId}`}
      >
        Book
      </Button>
    </>
  );
};
export default BookBtn;
