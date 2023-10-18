import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useAppSelector } from "@/redux/hooks";
import { IconHeartFilled, IconListSearch } from "@tabler/icons-react";
import FavoriteItem from "../atoms/favorite-item";

const DialogFavorite = () => {
  const favorites = useAppSelector((state) => state.favorites);
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          variant="ghost"
          type="button"
          className="gap-2 px-3 py-1 hover:bg-red-500/20"
        >
          <IconHeartFilled className="text-red-500" width="18" height="18" />
          <span className="hidden md:block">Favorites</span>
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogTitle className="text-lg font-semibold">
          Your Favorites Movies
        </DialogTitle>
        <DialogDescription className="text-sm text-stone-400">
          The list of your favorite movies
        </DialogDescription>
        <div className="w-full flex flex-col h-[20rem] p-3 border border-stone-300/20 rounded-md overflow-y-auto gap-2">
          {favorites.length === 0 ? (
            <div className="flex flex-col justify-center h-full gap-2">
              <IconListSearch
                width="64"
                height="64"
                className="mx-auto text-stone-400/60"
              />
              <p className="text-center text-stone-400/60">
                You don&rsquo;t have <br />
                any favorite movies yet
              </p>
            </div>
          ) : (
            favorites.map((data) => <FavoriteItem key={data.id} data={data} />)
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default DialogFavorite;
