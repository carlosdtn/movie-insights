import { getInitials, getPastTime } from "@/utils/helpers";

interface CommentCardProps {
  data: {
    author: string;
    comment: string;
    createdAt: number;
  };
}

const CommentCard: React.FC<CommentCardProps> = ({ data }) => {
  return (
    <div className="flex w-full h-auto gap-3 px-2 py-3 border rounded-md border-stone-600/30">
      <div className="rounded-full h-[2.5rem] w-[2.5rem] aspect-square flex items-center justify-center bg-gradient-to-t from-stone-700 to-stone-500">
        <span className="text-xl font-semibold text-stone-400">
          {getInitials(data.author)}
        </span>
      </div>
      <div className="flex flex-col w-full gap-1">
        <p className="flex items-center justify-between gap-2 leading-none">
          <span className="font-bold text-stone-400">{data.author}</span>
          <span className="text-xs text-slate-300/40">
            {getPastTime(data.createdAt)}
          </span>
        </p>
        <p className="text-sm text-white">{data.comment}</p>
      </div>
    </div>
  );
};

export default CommentCard;
