import React, { useState } from "react";

import classes from "./AdminOptions.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import Modal from "../UI/Modal";
import DeleteTripModal from "../Modals/AdminModals/DeleteTripModal/DeleteTripModal";

const AdminOptions = ({ tripId }) => {
  const [showModal, setShowModal] = useState(false);

  const toggleDeleteModalHandler = () => {
    setShowModal((prevState) => !prevState);
  };

  return (
    <>
      {showModal && (
        <Modal onClose={toggleDeleteModalHandler}>
          <DeleteTripModal tripId={tripId} />
        </Modal>
      )}
      <FontAwesomeIcon className={classes.icon} icon="fas fa-ellipsis-v" />
      <div className={classes.adminOptions}>
        <Link to={`/admin?type=trip&editId=${tripId}`}>Edit</Link>
        <button onClick={toggleDeleteModalHandler}>Delete</button>
      </div>
    </>
  );
};
export default AdminOptions;
