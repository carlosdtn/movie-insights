"use client";
import BannerSection from "@/components/movie-details/banner-section";
import CommentSection from "@/components/movie-details/comment-section";
import { movies } from "@/data/movies";
import { Movie } from "@/utils/types";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

const MovieDetailPage = () => {
  const [movie, setMovie] = useState<Movie>({} as Movie);
  const [loading, setLoading] = useState<boolean>(true);
  const id = parseInt(useParams().id as string);

  const getMovieDetails = () => {
    movies.map((movie: Movie) => {
      if (movie.id === id) {
        setMovie(movie);
        setLoading(false);
      }
    });
  };

  useEffect(() => {
    getMovieDetails();
  }, []);

  return (
    <main className="flex flex-col items-center justify-center w-full gap-5">
      <BannerSection movie={movie} loading={loading} />
      <CommentSection movie={movie} />
    </main>
  );
};

export default MovieDetailPage;
