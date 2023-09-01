import { combineReducers } from "@reduxjs/toolkit";
import { userReducer } from "./slices/userSlice";
import { cartReducer } from "./slices/cartSlice";
import { travelsReducer } from "./slices/travelsSlice";
import { driversReducer } from "./slices/DriversSlice";

const rootReducer = combineReducers({
  user: userReducer,
  cart: cartReducer,
  travels: travelsReducer,
  drivers: driversReducer,
});

export default rootReducer;
