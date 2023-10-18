import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { DialogDescription, DialogTitle } from "@/components/ui/dialog";
import { IconStar } from "@tabler/icons-react";
import Rating from "../atoms/rating";
import { useAppDispatch } from "@/redux/hooks";
import React, { useState } from "react";
import { setRating } from "@/redux/features/rating-slice";
import { Movie } from "@/utils/types";

const DialogRate: React.FC<{ movie: Movie }> = ({ movie }) => {
  const [localRating, setLocalRating] = useState<number>(0);
  const dispatch = useAppDispatch();

  const handleRatingChange = (newRating: number) => {
    setLocalRating(newRating);
  };

  const handleSaveRating = () => {
    dispatch(setRating({ id: movie.id, value: localRating }));
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          type="button"
          variant="ghost"
          size="sm"
          className="flex items-center h-auto gap-1 py-1 text-amber-400 hover:bg-amber-500/40 bg-amber-500/40 md:bg-transparent"
        >
          <IconStar width="16" height="16" />
          <span className="hidden font-semibold md:flex">Rate</span>
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <div className="flex flex-col gap-2">
          <DialogTitle className="text-lg font-semibold">
            Rate {movie.title}
          </DialogTitle>
          <DialogDescription className="text-sm text-stone-400">
            Select your rating for this movie
          </DialogDescription>
          <div className="flex justify-center py-4">
            <Rating value={localRating} onChange={handleRatingChange} />
          </div>
          <div className="flex items-center gap-4">
            <p className="flex justify-center w-12 text-sm select-none">
              {localRating}
              <span className="text-stone-400">/10</span>
            </p>
            <DialogTrigger asChild>
              <Button
                type="button"
                variant="secondary"
                size="sm"
                className="w-full"
                onClick={handleSaveRating}
              >
                Rate
              </Button>
            </DialogTrigger>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default DialogRate;
