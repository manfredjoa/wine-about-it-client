import { createSlice } from "@reduxjs/toolkit";

export const favoritesSlice = createSlice({
  name: "favorites",
  initialState: {
    inFavorites: false,
  },
  reducers: {
    addFavorites: (state) => {
      state.inFavorites = true;
    },
    removeFavorites: (state) => {
      state.inFavorites = false;
    },
  },
});

export const { addFavorites, removeFavorites } = favoritesSlice.actions;
export default favoritesSlice.reducer;
