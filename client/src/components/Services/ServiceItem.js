import React from "react";

import classes from "./ServiceItem.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ListItem from "../UI/List/ListItem";

const ServiceItem = ({ item }) => {
  return (
    <ListItem>
      <div className={classes.imgBox}>
        <img src={item.image} alt="" />
      </div>
      <div className={classes.content}>
        <h3>
          {item.name} <span>${item.price}</span>
        </h3>
        <p>{item.description}</p>
        <p>
          <FontAwesomeIcon className={classes.icon} icon="fas fa-clock" />
          {item.time}
        </p>
      </div>
    </ListItem>
  );
};
export default ServiceItem;
