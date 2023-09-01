import React from "react";

import Title from "../../components/UI/Title";

import Container from "../../components/UI/Container";
import { Route, Routes } from "react-router-dom";
import DriverForm from "./DriverForm/DriverForm";
import Main from "./Main/Main";

const Dirver = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route
          path="form"
          element={
            <Container>
              <Title title="Join as Driver" />
              <DriverForm />
            </Container>
          }
        />
      </Routes>
    </div>
  );
};

export default Dirver;
