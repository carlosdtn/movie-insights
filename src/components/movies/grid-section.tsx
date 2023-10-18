import { useAppSelector } from "@/redux/hooks";
import MovieCard from "./molecules/movie-card";

const GridSection = () => {
  const movies = useAppSelector((state) => state.movies);

  return (
    <section className="grid py-6 grid-cols-2 md:grid-cols-3 lg:grid-cols-4 auto-rows-max w-[95%] md:w-[90%] lg:w-[62rem] gap-4">
      {movies?.map((data, i) => (
        <MovieCard key={i} data={data} />
      ))}
    </section>
  );
};

export default GridSection;
