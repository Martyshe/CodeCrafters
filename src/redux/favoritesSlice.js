import { createSlice } from "@reduxjs/toolkit";

const loadFavorites = () => {
  try {
    return JSON.parse(localStorage.getItem("favorites")) || [];
  } catch (error) {
    return [];
  }
};

const favoritesSlice = createSlice({
  name: "favorites",
  initialState: {
    items: loadFavorites(),
  },
  reducers: {
    addToFavorites: (state, action) => {
      if (!state.items.some((item) => item.id === action.payload.id)) {
        state.items.push(action.payload);
        localStorage.setItem("favorites", JSON.stringify(state.items));
      }
    },
    removeFromFavorites: (state, action) => {
      state.items = state.items.filter((item) => item.id !== Number(action.payload));
      localStorage.setItem("favorites", JSON.stringify(state.items));
    },
  },
});

export const { addToFavorites, removeFromFavorites } = favoritesSlice.actions;
export default favoritesSlice.reducer;
