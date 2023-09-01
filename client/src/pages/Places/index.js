import React from "react";
import { useSelector } from "react-redux";

import Title from "../../components/UI/Title";
import TravelsList from "../../components/Travels/TravelsList";

const Places = () => {
  const travels = useSelector((state) => state.travels.items);
  return (
    <>
      <Title title="Places" />
      <TravelsList items={travels} />
    </>
  );
};

export default Places;
