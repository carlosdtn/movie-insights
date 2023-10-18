import Image from "next/image";
import { Button } from "@/components/ui/button";
import { IconTrash } from "@tabler/icons-react";
import { useAppDispatch } from "@/redux/hooks";
import { deleteFavorite } from "@/redux/features/favorites-slice";
import { FavoriteMovie } from "@/utils/types";

const FavoriteItem: React.FC<{ data: FavoriteMovie }> = ({ data }) => {
  const dispatch = useAppDispatch();

  const handleDelete = () => {
    dispatch(deleteFavorite({ favorite: data }));
  };

  return (
    <div className="flex items-center justify-between w-full h-auto pr-2 border rounded-md border-stone-400/40 bg-stone-600/40">
      <div className="flex w-[85%] gap-3 items-center">
        <div className="h-20 w-15 ">
          <Image
            src={data.image}
            alt={data.title}
            width={20}
            height={30}
            className="w-full h-full aspect-[2/3]"
          />
        </div>
        <h1 className="text-sm font-semibold line-clamp-2">{data.title}</h1>
      </div>
      <Button type="button" size="icon" variant="ghost" onClick={handleDelete}>
        <IconTrash width="18" height="18" />
      </Button>
    </div>
  );
};

export default FavoriteItem;
