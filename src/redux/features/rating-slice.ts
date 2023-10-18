import { Rating } from "@/utils/types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { rating } from "@/data/rating";

interface RatingState {
  id: number;
  value: number;
}

export const RatingSlice = createSlice({
  name: "ratings",
  initialState: localStorage.getItem("ratingsData")
    ? (JSON.parse(localStorage.getItem("ratingsData") || "null") as Rating[])
    : rating,
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
