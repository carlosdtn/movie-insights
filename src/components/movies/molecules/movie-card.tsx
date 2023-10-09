import { Movie } from "@/utils/types";
import { IconPlus, IconStarFilled } from "@tabler/icons-react";
import Image from "next/image";
import Link from "next/link";

const MovieCard: React.FC<{ data: Movie }> = ({ data }) => {
  return (
    <div className="bg-stone-800 w-auto h-auto shadow shadow-stone-900">
      <div className="relative border-b border-stone-500/50">
        <div className="bg-stone-700/60 absolute p-1 rounded-sm top-1 left-1 backdrop-blur-sm border border-stone-500/30">
          <IconPlus className="text-white" width="18" height="18" />
        </div>
        <Image
          src={data.image}
          alt={data.title}
          width={200}
          height={300}
          className="w-full aspect-[2/3]"
        />
      </div>
      <div className="flex flex-col py-3 px-2 gap-2">
        <div className="flex items-center gap-1">
          <IconStarFilled className="text-amber-300" width="16" height="16" />
          <span className="text-sm">{data.rating}</span>
        </div>
        <div>
          <h3 className="text-lg font-semibold line-clamp-1 hover:underline cursor-pointer">
            <Link href={`movies/${data.id}`}>{data.title}</Link>
          </h3>
          <p className="text-xs text-stone-400">{data.genre[0]}</p>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
