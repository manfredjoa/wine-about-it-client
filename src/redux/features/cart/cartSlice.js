import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "counter",
  initialState: {
    userID: "",
    items: [{}],
    cartQuantity: 0,
    cartTotal: 0,
  },
  reducers: {
    increment: (state) => {
      state.cartQuantity += 1;
    },
    decrement: (state) => {
      state.cartQuantity -= 1;
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
  },
});

export const { increment, decrement, incrementByAmount } = cartSlice.actions;
export default cartSlice.reducer;
