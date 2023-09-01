import React, { useState } from "react";
import Container from "../../../components/UI/Container";

import classes from "./DriversOrders.module.css";
import Button from "../../../components/UI/Button";
import defualtUserImg from "./../../../assets/default-user.png";
import Modal from "../../../components/UI/Modal";
import DeleteDriverReqModal from "../../../components/Modals/AdminModals/DeleteDriverRequestModal/DeleteDriverReqModal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ORDERS = [
  {
    id: "do1",
    fName: "Rami",
    lName: "Ali",
    address: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    phone: "0991234567",
    image: defualtUserImg,
    age: 30,
    experienceYears: 4,
    license: "lorem ebsim",
    experiences: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    isAccepted: false,
  },
  {
    id: "do2",
    fName: "Jamal",
    lName: "Ahmed",
    address: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    phone: "0991234567",
    image: defualtUserImg,
    age: 30,
    experienceYears: 4,
    license: "lorem ebsim",
    experiences: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    isAccepted: false,
  },
  {
    id: "do3",
    fName: "Sami",
    lName: "Ali",
    address: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    phone: "0991234567",
    image: defualtUserImg,
    age: 30,
    experienceYears: 4,
    license: "lorem ebsim",
    experiences: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    isAccepted: false,
  },
  {
    id: "do4",
    fName: "Omar",
    lName: "Qasim",
    address: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    phone: "0991234567",
    image: defualtUserImg,
    age: 30,
    experienceYears: 4,
    license: "lorem ebsim",
    experiences: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    isAccepted: false,
  },
  {
    id: "do5",
    fName: "Mostafa",
    lName: "Ali",
    address: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    phone: "0991234567",
    image: defualtUserImg,
    age: 30,
    experienceYears: 4,
    license: "lorem ebsim",
    experiences: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    isAccepted: false,
  },
];

function DriversOrders() {
  const [deleteModal, setDeleteModal] = useState(null);

  const [orders, setOrders] = useState(ORDERS);

  const changeOrderStatusHandler = (id, status) => {
    let updatedOrders = orders.map((el, idx, arr) => {
      if (el.id === id) arr[idx].isAccepted = status;
      return arr[idx];
    });
    console.log(updatedOrders);
    setOrders(updatedOrders);
  };

  const toggleModal = (order) => {
    if (deleteModal) {
      setDeleteModal(null);
    } else {
      setDeleteModal(order);
    }
  };

  const onDeleteRequest = (reqId) => {
    let updatedOrders = orders.filter((el) => el.id !== reqId);
    setOrders(updatedOrders);
  };

  const ordersRows = orders.map((order) => (
    <tr key={order.id}>
      <td>
        <div className={classes.imgBox}>
          <img src={order.image} alt="" />
        </div>
      </td>
      <td>{order.fName}</td>
      <td>{order.lName}</td>
      <td>{order.experienceYears}</td>
      <td>{order.age}</td>
      <td>{order.license}</td>
      <td>{order.address}</td>
      <td>{order.phone}</td>
      <td>
        <div className={classes.actions}>
          {!order.isAccepted && (
            <>
              <Button
                onClick={changeOrderStatusHandler.bind(null, order.id, true)}
              >
                Accept
              </Button>
              <Button onClick={toggleModal.bind(null, order)}>
                <FontAwesomeIcon icon="fas fa-trash" />
              </Button>
            </>
          )}
          {order.isAccepted && (
            <>
              <p>Accepted</p>
              <button
                className={classes.cancelBtn}
                onClick={changeOrderStatusHandler.bind(null, order.id, false)}
              >
                Cancel
              </button>
            </>
          )}
        </div>
      </td>
    </tr>
  ));
  return (
    <Container className={classes.driversOrders}>
      {deleteModal && (
        <Modal onClose={toggleModal}>
          <DeleteDriverReqModal
            onDelete={onDeleteRequest}
            order={deleteModal}
          />
        </Modal>
      )}
      <h1>Drivers Orders</h1>
      <table>
        <thead>
          <tr>
            <th>Driver Picture</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>age</th>
            <th>Experience Years</th>
            <th>license</th>
            <th>address</th>
            <th>Phone</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>{ordersRows}</tbody>
      </table>
    </Container>
  );
}

export default DriversOrders;
