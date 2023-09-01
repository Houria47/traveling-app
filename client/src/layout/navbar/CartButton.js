import React, { useState } from "react";

import Modal from "../../components/UI/Modal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import CartModal from "../../components/Modals/Cart/CartModal";
import AccountFormModal from "../../components/Modals/AccountForm/AccountFormModal";
import { useSelector } from "react-redux";

const CartButton = (props) => {
  const user = useSelector((state) => state.user.user);
  const [showCart, setShowCart] = useState(false);

  const cartHandler = () => {
    setShowCart((prevState) => !prevState);
  };

  return (
    <>
      {showCart && (
        <Modal onClose={cartHandler}>
          {user && <CartModal onCloseModal={cartHandler} />}
          {!user && <AccountFormModal onCloseModal={cartHandler} />}
        </Modal>
      )}
      <button className={props.className} onClick={cartHandler}>
        <FontAwesomeIcon icon="fas fa-cart-shopping" />
      </button>
    </>
  );
};

export default CartButton;
