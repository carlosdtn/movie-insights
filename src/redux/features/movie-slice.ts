import { movies } from "@/data/movies";
import { Movie } from "@/utils/types";
import { createSlice } from "@reduxjs/toolkit";

export const MovieSlice = createSlice({
  name: "movies",
  initialState: localStorage.getItem("moviesData")
    ? (JSON.parse(localStorage.getItem("moviesData") || "null") as Movie[])
    : (movies as Movie[]),
  reducers: {
    setMovie: () => {},
  },
});

export const { setMovie } = MovieSlice.actions;
export default MovieSlice.reducer;
