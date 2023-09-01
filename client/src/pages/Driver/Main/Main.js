import React from "react";

import { useSelector } from "react-redux";

import DriverReqBtn from "../../../components/DriverReqBtn/DriverReqBtn";
import List from "./../../../components/UI/List/List";
import ListItem from "./../../../components/UI/List/ListItem";
import Title from "../../../components/UI/Title";

import classes from "./Main.module.css";
import mainImg from "./../../../assets/drivers-media/main-img.png";
import Container from "../../../components/UI/Container";

const Main = () => {
  const drivers = useSelector((state) => state.drivers.items);

  return (
    <>
      <Title title="Our Drivers" />
      <List className={classes.driversList}>
        {drivers.map((item) => (
          <ListItem key={item.id}>
            <img src={item.image} alt="" />
            <h2>{`${item.firstName} ${item.lastName}`} </h2>
          </ListItem>
        ))}
      </List>
      <Title title="Join as Driver" />
      <Container>
        <div className={classes.main}>
          <div className={classes.info}>
            <h1>Join our Team</h1>
            <span>Online service</span>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elitLorem
              ipsum, dolor sit amet consectetur adipisicing elit
            </p>
            <DriverReqBtn />
          </div>
          <img src={mainImg} alt=""></img>
        </div>
      </Container>
    </>
  );
};

export default Main;
