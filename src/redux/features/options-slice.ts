import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface OptionsState {
  isGrid: boolean;
}

export const OptionsSlice = createSlice({
  name: "options",
  initialState: localStorage.getItem("viewState")
    ? (JSON.parse(localStorage.getItem("viewState") || "null") as OptionsState)
    : ({ isGrid: true } as OptionsState),

  reducers: {
    toogleView: (state, action: PayloadAction<OptionsState>) => {
      const { isGrid } = action.payload;
      state.isGrid = isGrid;
    },
  },
});

export const { toogleView } = OptionsSlice.actions;
export default OptionsSlice.reducer;
