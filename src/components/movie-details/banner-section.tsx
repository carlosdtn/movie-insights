import { Movie } from "@/utils/types";
import {
  IconClockHour3,
  IconMessage2,
  IconStarFilled,
} from "@tabler/icons-react";
import Image from "next/image";
import { Button } from "../ui/button";
import GenreTag from "./atoms/genre-tag";
import DialogRate from "./organisms/dialog-rate";
import DialogComment from "./organisms/dialog-comment";

interface BannerSectionProps {
  movie: Movie;
  loading: boolean;
}

const BannerSection: React.FC<BannerSectionProps> = ({ movie, loading }) => {
  return (
    <section className="flex w-[62rem] bg-stone-700">
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
        <div className="flex justify-end flex-col p-4 gap-4 absolute top-0 left-0 w-full backdrop-blur-md h-full bg-stone-800/70">
          <div className="flex flex-col gap-1">
            <div className="flex gap-3 items-center">
              <h1 className="text-4xl font-semibold leading-tight">
                {movie.title}
              </h1>
              <span className="border border-white rounded-full px-2 text-sm">
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
            <div className="flex gap-4 justify-between">
              <div className="flex gap-4">
                <div className="text-sm flex items-center gap-1 text-stone-300">
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
                    {movie.rating}
                    <span className="text-stone-400">/10</span>
                  </p>
                </div>
              </div>
              <div className="flex gap-2">
                <DialogRate />
                <DialogComment />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BannerSection;
