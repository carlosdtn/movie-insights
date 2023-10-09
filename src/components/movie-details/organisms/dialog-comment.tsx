import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { DialogDescription, DialogTitle } from "@/components/ui/dialog";
import { IconMessage2 } from "@tabler/icons-react";
import Rating from "../atoms/rating";
import { useAppSelector } from "@/redux/hooks";
import { Label } from "@/components/ui/label";

const DialogComment = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          type="button"
          variant="ghost"
          size="sm"
          className="flex items-center gap-1 text-blue-400 hover:bg-blue-500/40 py-1 h-auto"
        >
          <IconMessage2 width="16" height="16" />
          <span className="font-semibold">Comment</span>
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <div className="flex flex-col gap-2">
          <DialogTitle className="text-lg font-semibold">
            Comment this movie
          </DialogTitle>
          <DialogDescription className="text-sm text-stone-400">
            Write your comment for this movie
          </DialogDescription>
          <div className="flex flex-col justify-center py-4 gap-3">
            <div className="flex flex-col gap-1">
              <Label htmlFor="name" className="text-sm text-stone-400">
                Name
              </Label>
              <input
                type="text"
                name="name"
                id="name"
                className="w-full bg-stone-800 border border-stone-600/30 rounded-md px-2 py-1 text-sm text-stone-400"
                placeholder="Your name"
              />
            </div>
            <div className="flex flex-col gap-1">
              <Label htmlFor="comment" className="text-sm text-stone-400">
                Comment
              </Label>
              <textarea
                name="comment"
                id="comment"
                className="w-full h-32 bg-stone-800 border border-stone-600/30 rounded-md px-2 py-1 text-sm text-stone-400"
                placeholder="Write your comment here..."
              />
            </div>
          </div>

          <Button
            type="button"
            variant="secondary"
            size="sm"
            className="w-full"
          >
            Send
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default DialogComment;
