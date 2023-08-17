import { createSlice } from "@reduxjs/toolkit";
export const favoritesSlice = createSlice({
  name: "favorites",
  initialState: {
    inFavorites: true,
    allInFavorites: [],
  },
  reducers: {
    addFavorites: (state, action) => {
      state.allInFavorites.push(action.payload); // Pushing the ID into the array
    },
    removeFavorites: (state, action) => {
      state.allInFavorites = state.allInFavorites.filter(
        (id) => id !== action.payload
      ); // Removing the ID from the array
    },
  },
});
export const { addFavorites, removeFavorites } = favoritesSlice.actions;
export default favoritesSlice.reducer;

// import { createSlice } from "@reduxjs/toolkit";

// export const favoritesSlice = createSlice({
//   name: "favorites",
//   initialState: {
//     inFavorites: false,
//   },
//   reducers: {
//     addFavorites: (state) => {
//       state.inFavorites = true;
//     },
//     removeFavorites: (state) => {
//       state.inFavorites = false;
//     },
//   },
// });

// export const { addFavorites, removeFavorites } = favoritesSlice.actions;
// export default favoritesSlice.reducer;
