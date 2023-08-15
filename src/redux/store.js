import storage from "redux-persist/lib/storage";

import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./features/cart/cartSlice.js";
import { persistReducer, persistStore } from "redux-persist";
import thunk from "redux-thunk";
import { combineReducers } from "@reduxjs/toolkit";

const persistConfig = {
  key: "root",
  storage,
};

const rootReducer = combineReducers({
  cart: cartReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

// Define the store first
export const store = configureStore({
  reducer: persistedReducer,
  middleware: [thunk],
});

// Then define the persistor
export const persistor = persistStore(store);
