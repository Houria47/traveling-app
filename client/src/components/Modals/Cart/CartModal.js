import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import classes from "./CartModal.module.css";
import cartImg from "./../../../assets/travel-cartt.jpg";
import Button from "../../UI/Button";
import { IMG_PATH } from "../../..";

const CartModal = ({ onCloseModal }) => {
  const cartItems = useSelector((state) => state.cart.items);
  const navigate = useNavigate();
  const bookHandler = (id) => {
    navigate(`/book/${id}`);
    onCloseModal();
  };
  if (cartItems.length === 0) {
    return (
      <div className={classes.empty}>
        <h1 className={classes.cartTitle}>Your Cart</h1>
        <img src={cartImg} alt="" />
        <p>Cart is empty.</p>
      </div>
    );
  }
  return (
    <>
      <h1 className={classes.cartTitle}>Your Cart</h1>
      <ul className={classes.cartList}>
        {cartItems.map((item) => (
          <li key={item.id}>
            <img src={`${IMG_PATH}${item.image}`} alt="" />
            <div className={classes.details}>
              <h2>{item.name}</h2>
              <p>${item.price}</p>
            </div>
            <Button onClick={bookHandler.bind(null, item.id)}>Book</Button>
          </li>
        ))}
      </ul>
    </>
  );
};
export default CartModal;
