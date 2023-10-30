import { FavoriteMovie } from "@/utils/types";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

let initialState: FavoriteMovie[] = [];

if (typeof window !== "undefined") {
  const persistedFavoritesData = localStorage.getItem("favoritesData");
  if (persistedFavoritesData) {
    initialState = JSON.parse(persistedFavoritesData) as FavoriteMovie[];
  }
}

export const FavoritesSlice = createSlice({
  name: "favorites",
  initialState: initialState,
  reducers: {
    setFavorite: (
      state,
      action: PayloadAction<{ favorite: FavoriteMovie }>
    ) => {
      const { id, image, title } = action.payload.favorite;
      state.push({ id, image, title });
      localStorage.setItem("favoritesData", JSON.stringify(state));
    },
    deleteFavorite: (
      state,
      action: PayloadAction<{ favorite: FavoriteMovie }>
    ) => {
      const { id } = action.payload.favorite;
      const index = state.findIndex((movie) => movie.id === id);
      state.splice(index, 1);
      localStorage.setItem("favoritesData", JSON.stringify(state));
    },
  },
});

export const { setFavorite, deleteFavorite } = FavoritesSlice.actions;
export default FavoritesSlice.reducer;
