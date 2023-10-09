import { IconUser } from "@tabler/icons-react";

interface CommentCardProps {
  data: {
    author: string;
    comment: string;
    createdAt: number;
  };
}

const CommentCard: React.FC<CommentCardProps> = ({ data }) => {
  const getPastTime = (epoch: number) => {
    const now = new Date().getTime();
    const diff = now - epoch;
    const seconds = diff / 1000;
    const minutes = seconds / 60;
    const hours = minutes / 60;
    const days = Math.floor(hours / 24);
    const months = Math.floor(days / 30);
    const years = Math.floor(months / 12);

    if (years > 0) {
      return `${years} years ago`;
    } else if (months > 0) {
      return `${months} months ago`;
    } else if (days > 0) {
      return `${days} days ago`;
    } else if (hours > 0) {
      return `${hours} hours ago`;
    } else if (minutes > 0) {
      return `${minutes} minutes ago`;
    } else {
      return `${seconds} seconds ago`;
    }
  };

  return (
    <div className="flex px-2 py-3 gap-3 h-auto border border-stone-600/30 rounded-md w-full">
      <div className="rounded-full h-[2.5rem] w-[2.5rem] aspect-square flex items-center justify-center bg-gradient-to-t from-stone-700 to-stone-500">
        <IconUser className="text-stone-400" width="30" height="30" />
      </div>
      <div className="w-full flex flex-col gap-1">
        <p className="flex gap-2 items-center justify-between leading-none">
          <span className="font-bold text-stone-400">{data.author}</span>
          <span className="text-xs text-slate-300/40">
            {getPastTime(data.createdAt)}
          </span>
        </p>
        <p className="text-white text-sm">{data.comment}</p>
      </div>
    </div>
  );
};

export default CommentCard;
