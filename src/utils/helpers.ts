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

export const getPastTime = (epoch: number) => {
  const now = new Date().getTime();
  const diff = now - epoch;
  const seconds = Math.floor(diff / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);
  const months = Math.floor(days / 30);
  const years = Math.floor(months / 12);

  if (years > 0) {
    return `${years} years ago`;
  } else if (months > 0) {
    return `${months} months ago`;
  } else if (days > 0) {
    return `${days} days ago`;
  } else if (hours > 0) {
    return `${hours} hours ago`;
  } else if (minutes > 0) {
    return `${minutes} minutes ago`;
  } else {
    return `${seconds} seconds ago`;
  }
};
