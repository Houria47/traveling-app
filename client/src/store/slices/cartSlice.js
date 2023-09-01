import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    setCart: (state, action) => {
      state.items = action.payload.items;
    },
    add: (state, action) => {
      const existingItem = state.items.find((item) => {
        return item.id === action.payload.item.id;
      });
      if (!existingItem) {
        state.items.push(action.payload.item);
      }
    },
  },
});

export const cartReducer = cartSlice.reducer;

export const cartActions = cartSlice.actions;
