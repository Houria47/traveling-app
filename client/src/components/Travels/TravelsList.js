import React, { useState } from "react";

import TravelItem from "./TravelItem";
import List from "../UI/List/List";
import TravelModal from "../Modals/TravelModal/TravelModal";
import Modal from "../UI/Modal";

const Travels = ({ items }) => {
  const [showTravelModal, setShowModal] = useState(false);
  const [detailsItem, setDetailsItem] = useState(null);
  const showModalHandler = (id) => {
    // ...get data for this id...
    // ...
    const itemIndex = items.findIndex((item) => {
      return item.id === id;
    });
    const item = items[itemIndex];

    setDetailsItem(item);
    toggleModalHandler();
  };
  const toggleModalHandler = () => {
    setShowModal((prevState) => !prevState);
  };
  return (
    <>
      {showTravelModal && (
        <Modal onClose={toggleModalHandler}>
          <TravelModal details={detailsItem} />
        </Modal>
      )}
      <List>
        {items.map((item) => (
          <TravelItem
            key={item.id}
            item={item}
            onShowDetails={showModalHandler.bind(null, item.id)}
          />
        ))}
      </List>
    </>
  );
};

export default Travels;
