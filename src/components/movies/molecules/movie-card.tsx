import React from "react";

import {
  IconStarFilled,
  IconThumbUp,
  IconThumbDown,
  IconPlus,
} from "@tabler/icons-react";
import Image from "next/image";
import { Movie } from "@/utils/types";
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
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-1">
            <IconStarFilled className="text-amber-300" width="16" height="16" />
            <span className="text-sm">{data.rating}</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="group flex items-center gap-1 hover:bg-stone-600 px-[0.2rem] rounded-sm cursor-pointer">
              <IconThumbUp
                className="group-hover:text-emerald-300"
                width="16"
                height="16"
              />
              <span className="text-sm group-hover:text-emerald-300">{0}</span>
            </div>
            <div className="group flex items-center gap-1 hover:bg-stone-600 px-[0.2rem] rounded-sm cursor-pointer">
              <IconThumbDown
                className="group-hover:text-red-300"
                width="16"
                height="16"
              />
              <span className="text-sm group-hover:text-red-300">{0}</span>
            </div>
          </div>
        </div>
        <div>
          <h3 className="text-lg font-semibold line-clamp-1 hover:underline cursor-pointer">
            <Link href={`movies/${data.title}-${data.releaseDate}`}>
              {data.title}
            </Link>
          </h3>
          <p className="text-xs text-stone-400">{data.genre}</p>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
