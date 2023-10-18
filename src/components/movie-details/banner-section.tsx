import { getAverageRating } from "@/utils/helpers";
import { Movie } from "@/utils/types";
import { IconClockHour3, IconStarFilled } from "@tabler/icons-react";
import Image from "next/image";
import GenreTag from "./atoms/genre-tag";
import DialogComment from "./organisms/dialog-comment";
import DialogRate from "./organisms/dialog-rate";
import { useAppSelector } from "@/redux/hooks";

interface BannerSectionProps {
  movie: Movie;
  loading: boolean;
}

const BannerSection: React.FC<BannerSectionProps> = ({ movie, loading }) => {
  const rating = useAppSelector((state) => state.ratings);

  return (
    <section className="flex w-full lg:w-[62rem] bg-stone-700">
      <div className="relative w-full h-auto">
        {loading ? (
          <div className="h-[25rem] w-full bg-gradient-to-r from-stone-700 to-stone-300 animate-pulse" />
        ) : (
          <Image
            src={movie.image}
            alt={movie.title}
            width={200}
            height={300}
            className="w-full object-cover object-top h-[25rem]"
          />
        )}
        <div className="absolute top-0 left-0 flex flex-col justify-end w-full h-full gap-4 p-4 backdrop-blur-md bg-stone-800/70">
          <div className="flex flex-col gap-1">
            <div className="flex items-center gap-3">
              <h1 className="text-3xl font-semibold leading-tight md:text-4xl">
                {movie.title}
              </h1>
              <span className="px-2 text-sm border border-white rounded-full">
                {movie.releaseDate}
              </span>
            </div>
            <div className="flex flex-row gap-1">
              {movie.genre?.map((genre, i) => (
                <GenreTag key={i} genre={genre} />
              ))}
            </div>
          </div>
          <div className="flex flex-col gap-3">
            <p className="text-sm">{movie.description}</p>
            <div className="flex justify-between gap-4">
              <div className="flex gap-4">
                <div className="flex items-center gap-1 text-sm text-stone-300">
                  <IconClockHour3 width="16" height="16" />
                  <span>{movie.duration} min</span>
                </div>
                <div className="flex items-center gap-1">
                  <IconStarFilled
                    className="text-amber-300"
                    width="16"
                    height="16"
                  />
                  <p className="text-sm">
                    {!loading &&
                      getAverageRating(movie.id, rating).roundedAverage}
                    <span className="text-stone-400">{`/10 (${
                      !loading && getAverageRating(movie.id, rating).totalRating
                    })`}</span>
                  </p>
                </div>
              </div>
              <div className="flex gap-2">
                <DialogRate movie={movie} />
                <DialogComment movie={movie} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BannerSection;
