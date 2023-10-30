import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface Filter {
  postID: number;
  year: number[];
}

export const FilterSlice = createSlice({
  name: "filters",
  initialState: [] as Filter[],
  reducers: {
    setCommentFilter: (state, action: PayloadAction<Filter>) => {
      const { postID, year } = action.payload;
      state.push({ postID, year });
    },
    addYear: (
      state,
      action: PayloadAction<{
        postID: number;
        newYear: number;
      }>
    ) => {
      const { postID, newYear } = action.payload;
      const index = state.findIndex((filter) => filter.postID === postID);
      state[index].year.push(newYear);
    },
    deleteYear: (
      state,
      action: PayloadAction<{ postID: number; year: number }>
    ) => {
      const { postID, year } = action.payload;
      const index = state.findIndex((filter) => filter.postID === postID);
      const yearIndex = state[index].year.findIndex((y) => y === year);
      state[index].year.splice(yearIndex, 1);
    },
  },
});

export const { setCommentFilter, addYear, deleteYear } = FilterSlice.actions;
export default FilterSlice.reducer;
