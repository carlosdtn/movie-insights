import { PayloadAction, createSlice } from "@reduxjs/toolkit";

let initialState: OptionsState = { isGrid: true };

if (typeof window !== "undefined") {
  const persistedFavoritesData = localStorage.getItem("viewState");
  if (persistedFavoritesData) {
    initialState = JSON.parse(persistedFavoritesData) as OptionsState;
  }
}
interface OptionsState {
  isGrid: boolean;
}

export const OptionsSlice = createSlice({
  name: "options",
  initialState,
  reducers: {
    toogleView: (state, action: PayloadAction<OptionsState>) => {
      const { isGrid } = action.payload;
      state.isGrid = isGrid;
    },
  },
});

export const { toogleView } = OptionsSlice.actions;
export default OptionsSlice.reducer;
