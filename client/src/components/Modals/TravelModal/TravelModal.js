import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { cartActions } from "../../../store/slices/cartSlice";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import StarRate from "./../../UI/StarsRate";
import SeatsList from "../../TravelSeats/SeatsList";
import Button from "../../UI/Button";
import cartImg from "./../../../assets/travel-cartt.jpg";
import classes from "./TravelModal.module.css";
import { IMG_PATH } from "../../..";
import { getTravelServices } from "../../../apis/travelsHandlers/getTravelServices";

const TravelModal = ({ details }) => {
  const user = useSelector((state) => state.user.user);
  const [services, setServices] = useState([]);

  const [isAdded, setIsAdded] = useState(false);

  let price = details.discount;
  let discount = details.price;
  if (!details.discount) {
    price = details.price;
    discount = details.discount;
  }
  const dispatch = useDispatch();

  const addToCartHandler = () => {
    dispatch(cartActions.add({ item: details }));
    setIsAdded(true);
  };

  useEffect(() => {
    const getServices = async () => {
      let response = await getTravelServices(details.id);
      if (response.status === 200) {
        setServices(response.data);
      }
    };
    getServices();
  }, []);

  if (isAdded) {
    return (
      <div className={classes.addedToCart}>
        <img src={cartImg} alt="" />
        <p>Added to cart.</p>
      </div>
    );
  }
  return (
    <>
      <div className={classes.head}>
        <div className={classes.imgBox}>
          <img src={`${IMG_PATH}${details.image}`} alt="" />
        </div>
        <div className={classes.details}>
          <h1>
            <FontAwesomeIcon
              className={classes.icon}
              icon="fas fa-map-marker-alt"
            />
            {details.destination}
          </h1>
          <p>{details.desc}</p>
          <StarRate rate={details.rate} />
          <div className={classes.price}>
            ${price}
            <span>${discount}</span>
          </div>
        </div>
      </div>
      <div className={classes.info}>
        <div>
          <h2>Services:</h2>
          <ul className={classes.services}>
            {services && services.length === 0 && <p>No Services</p>}
            {services &&
              services.map((service) => (
                <li key={service.id}>
                  <img src={`${IMG_PATH}${service.image}`} alt="" />
                  <h3>{service.name}</h3>
                  <p>${service.price}</p>
                </li>
              ))}
          </ul>
        </div>
        <div>
          <h2>Available Seats:</h2>
          <SeatsList seats={details.seats} />
        </div>
      </div>
      {user && (
        <Button className={classes.addCartBtn} onClick={addToCartHandler}>
          Add to cart
        </Button>
      )}
      {!user && (
        <p className={classes.needsToSign}>Sign up to add travel to cart</p>
      )}
    </>
  );
};

export default TravelModal;
