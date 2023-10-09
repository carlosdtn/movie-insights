import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface RatingState {
  value: number;
}

const initialState: RatingState = {
  value: 0,
};

export const ratingSlice = createSlice({
  name: "rating",
  initialState,
  reducers: {
    setRating: (state, action: PayloadAction<number>) => {
      state.value = action.payload;
    },
  },
});

export const { setRating } = ratingSlice.actions;
export default ratingSlice.reducer;
