import { Button } from "@/components/ui/button";
import { deleteFavorite, setFavorite } from "@/redux/features/favorites-slice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { getAverageRating, validateFavorite } from "@/utils/helpers";
import { Movie } from "@/utils/types";
import {
  IconHeart,
  IconHeartFilled,
  IconStarFilled,
} from "@tabler/icons-react";
import Image from "next/image";
import Link from "next/link";

const MovieCard: React.FC<{ data: Movie }> = ({ data }) => {
  const rating = useAppSelector((state) => state.ratings);
  const dispatch = useAppDispatch();
  const favorites = useAppSelector((state) => state.favorites);

  const handleFavorite = () => {
    if (favorites.filter((favorite) => favorite.id === data.id).length > 0) {
      dispatch(deleteFavorite({ favorite: data }));
    } else {
      dispatch(setFavorite({ favorite: data }));
    }
  };

  return (
    <div className="w-auto h-auto shadow bg-stone-800 shadow-stone-900">
      <div className="relative border-b border-stone-500/50">
        <Button
          type="button"
          className="absolute w-8 h-8 border rounded-sm bg-stone-700/60 top-1 left-1 backdrop-blur-sm border-stone-500/30 hover:bg-stone-800/60"
          size="icon"
          onClick={handleFavorite}
        >
          {validateFavorite(favorites, data.id) ? (
            <IconHeartFilled
              className="text-red-400 hover:text-white"
              width="18"
              height="18"
            />
          ) : (
            <IconHeart
              className="text-white hover:text-red-400"
              width="18"
              height="18"
            />
          )}
        </Button>
        <Image
          src={data.image}
          alt={data.title}
          width={200}
          height={300}
          className="w-full aspect-[2/3]"
        />
      </div>
      <div className="flex flex-col gap-2 px-2 py-3">
        <div className="flex items-center gap-1">
          <IconStarFilled className="text-amber-300" width="16" height="16" />
          <span className="text-sm">
            {getAverageRating(data.id, rating).roundedAverage}
          </span>
        </div>
        <div>
          <h3 className="text-lg font-semibold cursor-pointer line-clamp-1 hover:underline">
            <Link href={`movies/${data.id}`}>{data.title}</Link>
          </h3>
          <p className="text-xs text-stone-400">{data.genre[0]}</p>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
