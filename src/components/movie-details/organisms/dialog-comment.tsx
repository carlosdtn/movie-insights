import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { setComment } from "@/redux/features/comment-slice";
import { useAppDispatch } from "@/redux/hooks";
import { Movie } from "@/utils/types";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  IconMessage2,
  IconMoodEmpty,
  IconMoodHappy,
  IconMoodSad,
} from "@tabler/icons-react";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import Sentiment from "sentiment";

const sentiment = new Sentiment();

const DialogComment: React.FC<{ movie: Movie }> = ({ movie }) => {
  const [sentimentScore, setSentimentScore] = useState<{
    score: number;
    comparative: number;
  } | null>(null);
  const [actualComment, setActualComment] = useState<string>("");

  useEffect(() => {
    setSentimentScore(sentiment.analyze(actualComment));
  }, [actualComment]);

  const dispatch = useAppDispatch();

  const formSchema = z.object({
    author: z.string().min(3).max(50).nonempty(),
    comment: z.string().min(3).max(500).nonempty(),
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  });

  function onSubmit(data: z.infer<typeof formSchema>) {
    console.log(data);
    dispatch(
      setComment({
        id: movie.id,
        author: data.author,
        comment: data.comment,
        createdAt: Date.parse(new Date().toISOString()),
      })
    );
  }

  const Emoji = (score: number) => {
    if (score > 0) {
      return <IconMoodHappy className="w-8 h-8 text-emerald-400" />;
    } else if (score < 0) {
      return <IconMoodSad className="w-8 h-8 text-red-300" />;
    }
    return <IconMoodEmpty className="w-8 h-8 text-stone-400" />;
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          type="button"
          variant="ghost"
          size="sm"
          className="flex items-center h-auto gap-1 py-1 text-blue-400 hover:bg-blue-500/40 bg-blue-500/40 md:bg-transparent"
        >
          <IconMessage2 width="16" height="16" />
          <span className="hidden font-semibold md:flex">Comment</span>
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
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="flex flex-col justify-center gap-3 py-4"
            >
              <FormField
                control={form.control}
                name="author"
                defaultValue=""
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-sm text-stone-400">
                      Name
                    </FormLabel>
                    <FormControl>
                      <input
                        type="text"
                        className="w-full px-2 py-1 text-sm border rounded-md bg-stone-800 border-stone-600/30 text-stone-400"
                        placeholder="Your name"
                        {...field}
                      />
                    </FormControl>
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="comment"
                defaultValue=""
                render={({ field }) => (
                  <FormItem className="relative">
                    <FormLabel className="text-sm text-stone-400">
                      Comment
                    </FormLabel>
                    <FormControl>
                      <textarea
                        id="comment"
                        className="w-full h-32 px-2 py-1 text-sm border rounded-md bg-stone-800 border-stone-600/30 text-stone-400"
                        placeholder="Write your comment here..."
                        onChangeCapture={(
                          e: React.ChangeEvent<HTMLTextAreaElement>
                        ) => {
                          setActualComment(e.target.value);
                        }}
                        {...field}
                      />
                    </FormControl>
                    <div className="absolute right-2 top-8">
                      {Emoji(sentimentScore?.score ?? 0)}
                    </div>
                  </FormItem>
                )}
              />
              <DialogTrigger asChild>
                <Button
                  type="submit"
                  variant="secondary"
                  size="sm"
                  className="w-full"
                >
                  Send
                </Button>
              </DialogTrigger>
            </form>
          </Form>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default DialogComment;
