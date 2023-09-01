import React from "react";
import classes from "./Message.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Message = ({ type, children, className }) => {
  let style = "";
  let icon = "";
  switch (type) {
    case "success":
      style = classes.success;
      icon = "fa fa-check";
      break;
    case "error":
      style = classes.error;
      icon = "fa fa-times-circle";
      break;
    default:
      style = classes.info;
      icon = "fa fa-info-circle";
      break;
  }
  return (
    <div className={`${className} ${classes.msg} ${style}`}>
      <FontAwesomeIcon className={classes.icon} icon={icon} />
      {children}
    </div>
  );
};

export default Message;
