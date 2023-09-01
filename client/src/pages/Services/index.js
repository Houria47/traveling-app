import React from "react";
import Title from "../../components/UI/Title";

import { drinks, cakes, offers } from "../../assets/services-media";
import ServicesList from "../../components/Services/ServicesList";

const SERVICES = [
  {
    id: 1,
    name: "Cakes",
    items: [
      {
        id: 1,
        name: "Sweet",
        description: "Fresh Desserts Are Delicious Of All Kinds",
        price: 20,
        time: " 5-8 Mins",
        image: cakes[0],
      },
      {
        id: 2,
        name: "Sweet",
        description: "Fresh Desserts Are Delicious Of All Kinds",
        price: 20,
        time: " 5-8 Mins",
        image: cakes[1],
      },
      {
        id: 3,
        name: "Sweet",
        description: "Fresh Desserts Are Delicious Of All Kinds",
        price: 20,
        time: " 5-8 Mins",
        image: cakes[2],
      },
      {
        id: 4,
        name: "Sweet",
        description: "Fresh Desserts Are Delicious Of All Kinds",
        price: 20,
        time: " 5-8 Mins",
        image: cakes[3],
      },
    ],
  },
  {
    id: 2,
    name: "Drinks",
    items: [
      {
        id: 1,
        name: "Cola ",
        description: "Cold Drinks Refresh Our Hearts",
        price: 25,
        time: "4-10 Mins",
        image: drinks[0],
      },
      {
        id: 2,
        name: "Juice ",
        description: "Cold Drinks Refresh Our Hearts",
        price: 23,
        time: "4-10 Mins",
        image: drinks[1],
      },
      {
        id: 3,
        name: "Ice Coffee  ",
        description: "Cold Drinks Refresh Our Hearts",
        price: 30,
        time: "4-10 Mins",
        image: drinks[2],
      },
      {
        id: 4,
        name: "Coffee ",
        description: "Cold Drinks Refresh Our Hearts",
        price: 32,
        time: "4-10 Mins",
        image: drinks[3],
      },
    ],
  },
  {
    id: 3,
    name: "Offers",
    items: [
      {
        id: 1,
        name: "Cake",
        description: "Lama Hassan Ksay",
        price: 30,
        time: "15-30 Mins",
        image: offers[0],
      },
      {
        id: 2,
        name: "Cake",
        description: "Lama Hassan Ksay",
        price: 30,
        time: "15-30 Mins",
        image: offers[1],
      },
      {
        id: 3,
        name: "Cake",
        description: "Lama Hassan Ksay",
        price: 30,
        time: "15-30 Mins",
        image: offers[2],
      },
      {
        id: 4,
        name: "Cake",
        description: "Lama Hassan Ksay",
        price: 30,
        time: "15-30 Mins",
        image: offers[3],
      },
    ],
  },
];

const Services = () => {
  return (
    <>
      <Title title="Services" />
      {SERVICES.map((services) => (
        <ServicesList
          key={services.id}
          name={services.name}
          items={services.items}
        />
      ))}
    </>
  );
};

export default Services;
