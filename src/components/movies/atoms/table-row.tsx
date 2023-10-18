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

const TableRow: React.FC<{ data: Movie }> = ({ data }) => {
  const rating = useAppSelector((state) => state.ratings);
  const favorites = useAppSelector((state) => state.favorites);

  const dispatch = useAppDispatch();

  const handleFavorite = () => {
    if (favorites.filter((favorite) => favorite.id === data.id).length > 0) {
      dispatch(deleteFavorite({ favorite: data }));
    } else {
      dispatch(setFavorite({ favorite: data }));
    }
  };

  return (
    <tr>
      <td className="text-sm font-medium">
        <Image
          src={data.image}
          alt={data.title}
          width={20}
          height={30}
          className="w-full aspect-[2/3]"
        />
      </td>
      <td className="px-3 py-4 text-sm font-medium text-white w-[20%]">
        <Link href={`movies/${data.id}`}>
          <h3 className="line-clamp-2 hover:underline">{data.title}</h3>
        </Link>
      </td>
      <td className="px-3 py-4 text-sm text-white w-[40%]">
        <p className="line-clamp-2">{data.description}</p>
      </td>
      <td className="px-2 py-4 text-sm text-white">
        <p>{data.genre[0]}</p>
      </td>
      <td className="px-2 py-4 text-sm text-white">
        <div className="flex items-center gap-1">
          <IconStarFilled className="text-amber-300" width="16" height="16" />
          <span className="text-sm">
            {getAverageRating(data.id, rating).roundedAverage}
          </span>
        </div>
      </td>
      <td className="px-2 py-4 text-sm text-center text-white w-[10%]">
        <Button type="button" variant="ghost" onClick={handleFavorite}>
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
      </td>
    </tr>
  );
};

export default TableRow;
