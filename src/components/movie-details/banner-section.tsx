import { Movie } from "@/utils/types";
import {
  IconClockHour3,
  IconMessage2,
  IconStarFilled,
  IconStar,
} from "@tabler/icons-react";
import Image from "next/image";
import { Button } from "../ui/button";

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
                <span
                  className="text-xs border border-white/20 text-stone-950 font-semibold bg-gradient-to-t from-amber-600 to-amber-500 px-2 rounded-full"
                  key={i}
                >
                  {genre}
                </span>
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
                <Button
                  type="button"
                  variant="ghost"
                  size="sm"
                  className="flex items-center gap-1 text-amber-400 hover:bg-amber-500/40 py-1 h-auto"
                >
                  <IconStar width="16" height="16" />
                  <span className="font-semibold">Rate</span>
                </Button>
                <Button
                  type="button"
                  variant="ghost"
                  size="sm"
                  className="flex items-center gap-1 text-blue-400 hover:bg-blue-500/40 py-1 h-auto"
                >
                  <IconMessage2 width="16" height="16" />
                  <span className="font-semibold">Comment</span>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BannerSection;
