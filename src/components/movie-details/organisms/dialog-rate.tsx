import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { DialogDescription, DialogTitle } from "@/components/ui/dialog";
import { IconStar } from "@tabler/icons-react";
import Rating from "../atoms/rating";
import { useAppSelector } from "@/redux/hooks";

const DialogRate = () => {
  const rating = useAppSelector((state) => state.ratingReducer.value);

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          type="button"
          variant="ghost"
          size="sm"
          className="flex items-center gap-1 text-amber-400 hover:bg-amber-500/40 py-1 h-auto"
        >
          <IconStar width="16" height="16" />
          <span className="font-semibold">Rate</span>
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <div className="flex flex-col gap-2">
          <DialogTitle className="text-lg font-semibold">
            Rate this movie
          </DialogTitle>
          <DialogDescription className="text-sm text-stone-400">
            Select your rating for this movie
          </DialogDescription>
          <div className="flex justify-center py-4">
            <Rating />
          </div>
          <div className="flex items-center gap-4">
            <p className="text-sm flex justify-center w-12">
              {rating}
              <span className="text-stone-400">/10</span>
            </p>
            <Button
              type="button"
              variant="secondary"
              size="sm"
              className="w-full"
            >
              Rate
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default DialogRate;
