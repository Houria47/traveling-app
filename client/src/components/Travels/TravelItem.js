import React from "react";

import StarRate from "../UI/StarsRate";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import classes from "./TravelItem.module.css";
import ListItem from "../UI/List/ListItem";
import Button from "../UI/Button";
import AdminOptions from "./AdminOptions";
import { useSelector } from "react-redux";
import BookBtn from "../BookBtn/BookBtn";
import { IMG_PATH } from "../..";

const TravelItem = ({ item, onShowDetails }) => {
  const user = useSelector((state) => state.user.user);
  let price = item.discount;
  let discount = item.price;
  if (!item.discount) {
    price = item.price;
    discount = item.discount;
  }
  return (
    <ListItem className={classes.travel}>
      {user && user.role === 2 && <AdminOptions tripId={item.id} />}
      <div className={classes.imgBox}>
        <img src={`${IMG_PATH}${item.image}`} alt="" />
      </div>
      <div className={classes.content}>
        <h3>
          <FontAwesomeIcon
            className={classes.icon}
            icon="fas fa-map-marker-alt"
          />
          {item.destination}
        </h3>
        <p>{item.desc}</p>
        <StarRate rate={item.rate} />
        <div className={classes.price}>
          ${price}
          <span>${discount}</span>
        </div>
        <div className={classes.actions}>
          <Button onClick={onShowDetails}>chek now</Button>
          <BookBtn tripId={item.id} />
        </div>
      </div>
    </ListItem>
  );
};

export default TravelItem;
