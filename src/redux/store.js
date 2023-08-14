import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./features/cart/cartSlice.js";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});
