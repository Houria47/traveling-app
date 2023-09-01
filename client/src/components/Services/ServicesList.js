import React from "react";

import Title from "../UI/Title";

import ServiceItem from "./ServiceItem";
import List from "../UI/List/List";

const ServicesList = ({ name, items }) => {
  return (
    <>
      <Title title={name} />
      <List>
        {items.map((item) => (
          <ServiceItem key={item.id} item={item} />
        ))}
      </List>
    </>
  );
};

export default ServicesList;
