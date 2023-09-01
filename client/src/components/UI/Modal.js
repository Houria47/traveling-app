import React from "react";
import ReactDOM from "react-dom";

import classes from "./Modal.module.css";

const Backdrop = (props) => {
  return <div onClick={props.onClose} className={classes.backdrop}></div>;
};
const ModalOverlay = (props) => {
  return <div className={classes.modal}>{props.children}</div>;
};
const Modal = (props) => {
  return (
    <>
      {ReactDOM.createPortal(
        <Backdrop onClose={props.onClose} />,
        document.getElementById("backdrop-root")
      )}
      {ReactDOM.createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        document.getElementById("overlay-root")
      )}
    </>
  );
};

export default Modal;
