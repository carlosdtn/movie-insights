import MovieCard from "@/components/movies/molecules/movie-card";
import { movies } from "@/data/movies";

const MoviesPage = () => {
  return (
    <main className="flex justify-center w-full">
      <section className="grid grid-cols-4 auto-rows-max w-[62rem] bg-stone-700 gap-4">
        {movies.map((data, i) => (
          <MovieCard key={i} data={data} />
        ))}
      </section>
    </main>
  );
};

export default MoviesPage;
