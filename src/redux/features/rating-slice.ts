import { Rating } from "@/utils/types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { rating } from "@/data/rating";

let initialState: Rating[] = [];

if (typeof window !== "undefined") {
  const persistedFavoritesData = localStorage.getItem("ratingsData");
  if (persistedFavoritesData) {
    initialState = JSON.parse(persistedFavoritesData) as Rating[];
  } else {
    initialState = rating;
  }
}
interface RatingState {
  id: number;
  value: number;
}

export const RatingSlice = createSlice({
  name: "ratings",
  initialState: initialState,
  reducers: {
    setRating: (state, action: PayloadAction<RatingState>) => {
      const { id, value } = action.payload;
      const index = state.findIndex((rating) => rating.id === id);
      state[index].ratings.push(value);
      localStorage.setItem("ratingsData", JSON.stringify(state));
    },
  },
});

export const { setRating } = RatingSlice.actions;
export default RatingSlice.reducer;
