import { createSlice } from "@reduxjs/toolkit";

import driversImgs from "./../../assets/drivers-media/index";

const initialState = {
  items: [
    {
      id: "d1",
      firstName: "Ali",
      lastName: "Ahmed",
      address: "Address, state, street",
      ohone: "0991234567",
      image: driversImgs[0],
    },
    {
      id: "d2",
      firstName: "Jamal",
      lastName: "Ali",
      address: "Address, state, street",
      ohone: "0991234567",
      image: driversImgs[1],
    },
    {
      id: "d3",
      firstName: "Mohamed",
      lastName: "Kamal",
      address: "Address, state, street",
      ohone: "0991234567",
      image: driversImgs[2],
    },
    {
      id: "d4",
      firstName: "Zaid",
      lastName: "Deep",
      address: "Address, state, street",
      ohone: "0991234567",
      image: driversImgs[3],
    },
    {
      id: "d5",
      firstName: "Sami",
      lastName: "Deep",
      address: "Address, state, street",
      ohone: "0991234567",
      image: driversImgs[4],
    },
  ],
};

const driversSlice = createSlice({
  name: "drivers",
  initialState,
  reducers: {
    setDrivers: (state, action) => {
      state.items = action.payload.items;
    },
  },
});

export const driversReducer = driversSlice.reducer;

export const driversActions = driversSlice.actions;
