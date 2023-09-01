import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
  // {
  //   role: 2,
  // },
};

const userSlice = createSlice({
  name: "userInfo",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },
  },
});

export const userReducer = userSlice.reducer;

export const userActions = userSlice.actions;
