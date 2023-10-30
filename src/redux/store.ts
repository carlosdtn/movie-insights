import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/dist/query";
import ratingReducer from "./features/rating-slice";
import moviesReducer from "./features/movie-slice";
import commentReducer from "./features/comment-slice";
import optionsReducer from "./features/options-slice";
import favoritesReducer from "./features/favorites-slice";
import filterReducer from "./features/filter-slice";

export const store = configureStore({
  reducer: {
    movies: moviesReducer,
    ratings: ratingReducer,
    comments: commentReducer,
    options: optionsReducer,
    favorites: favoritesReducer,
    filter: filterReducer,
  },
  devTools: process.env.NODE_ENV !== "production",
});

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
