import { createSlice } from "@reduxjs/toolkit";

import {
  lattakia,
  aleppo,
  homs,
  damascus,
  tartus,
} from "./../../assets/places-media";
import { cakes, offers } from "../../assets/services-media";

const initialState = {
  items: [],
  itemms: [
    {
      id: 1,
      destination: "Aleppo",
      desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
      rate: 4,
      price: 120000,
      discount: 90000,
      image: aleppo,
      seats: 2,
      services: [
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
    {
      id: 2,
      destination: "damascus",
      desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
      rate: 5,
      price: 120000,
      discount: 90000,
      image: damascus,
      seats: 3,
      services: [
        {
          id: 1,
          name: "Cake",
          description: "Lama Hassan Ksay",
          price: 30,
          time: "15-30 Mins",
          image: offers[0],
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
    {
      id: 3,
      destination: "lattakia",
      desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
      rate: 3,
      price: 120000,
      discount: 90000,
      image: lattakia,
      seats: 4,
      services: [
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
    {
      id: 4,
      destination: "tartus",
      desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
      rate: 3,
      price: 120000,
      discount: 90000,
      image: tartus,
      seats: 4,
      services: [
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
    {
      id: 5,
      destination: "homs",
      desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
      rate: 3,
      price: 120000,
      discount: 90000,
      image: homs,
      seats: 3,
      services: [
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
  ],
};

const travelsSlice = createSlice({
  name: "travels",
  initialState,
  reducers: {
    setTravels: (state, action) => {
      state.items = action.payload.items;
    },
  },
});

export const travelsReducer = travelsSlice.reducer;

export const travelsActions = travelsSlice.actions;
