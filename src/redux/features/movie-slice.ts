import { movies } from "@/data/movies";
import { Movie } from "@/utils/types";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  movies: movies as Movie[],
  loading: false,
  error: null,
};

export const MovieSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    // setMovies: (state, action) => {
    //   state.movies = action.payload;
    //   state.loading = false;
    // },
    // setLoading: (state, action) => {
    //   state.loading = action.payload;
    // },
    // setError: (state, action) => {
    //   state.error = action.payload;
    //   state.loading = false;
    // },
  },
});

// export const { setMovies, setLoading, setError } = MovieSlice.actions;
export default MovieSlice.reducer;
