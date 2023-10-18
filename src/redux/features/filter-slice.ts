import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface Filter {
  id: number;
  value: string;
}

export const FilterSlice = createSlice({
  name: "filters",
  initialState: [] as Filter[],
  reducers: {
    setFilter: (state, action: PayloadAction<Filter>) => {
      const { id, value } = action.payload;
      const index = state.findIndex((filter) => filter.id === id);
      state[index].value = value;
      localStorage.setItem("filtersData", JSON.stringify(state));
    },
  },
});

export const { setFilter } = FilterSlice.actions;
export default FilterSlice.reducer;
