import { comments } from "@/data/comments";
import { rating } from "@/data/rating";
import { FavoriteMovie, Rating } from "./types";

export const getAverageRating = (id: number, ratingsData: Rating[]) => {
  if (!ratingsData) return { roundedAverage: 0, totalRating: 0 };

  const filterRating = ratingsData.filter((rating) => rating.id === id)[0];
  const totalRating = filterRating.ratings.length;
  const average =
    filterRating.ratings.reduce((acc, curr) => {
      return acc + curr;
    }, 0) / totalRating;
  const roundedAverage = Math.round(average * 10) / 10;
  return { roundedAverage, totalRating };
};

export const getInitials = (name: string) => {
  const [firstName, lastName] = name.split(" ");
  if (!lastName) return firstName[0].toLocaleUpperCase();
  const doubleInitials = `${firstName[0].toLocaleUpperCase()}${lastName[0].toLocaleUpperCase()}`;
  return `${doubleInitials}`;
};

export const loadDataFromLocalStorage = () => {
  try {
    const ratingsData = JSON.parse(
      localStorage.getItem("ratingsData") || "null"
    );
    const commentsData = JSON.parse(
      localStorage.getItem("commentsData") || "null"
    );
    const favoritesData = JSON.parse(
      localStorage.getItem("favoritesData") || "null"
    );
    if (!ratingsData) {
      localStorage.setItem("ratingsData", JSON.stringify(rating));
    }
    if (!commentsData) {
      localStorage.setItem("commentsData", JSON.stringify(comments));
    }
    if (!favoritesData) {
      localStorage.setItem("favoritesData", JSON.stringify([]));
    }
  } catch (error) {
    return;
  }
};

export const validateFavorite = (favorites: FavoriteMovie[], id: number) => {
  return favorites.some((favorite) => favorite.id === id);
};
