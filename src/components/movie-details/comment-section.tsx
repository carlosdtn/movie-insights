import { Movie } from "@/utils/types";
import CommentCard from "./molecules/comment-card";
import FilterCard from "./molecules/filter-card";

interface CommentSectionProps {
  movie: Movie;
}

const CommentSection: React.FC<CommentSectionProps> = ({ movie }) => {
  return (
    <section className="flex flex-col justify-start w-[62rem] gap-2">
      <h1 className="text-stone-300 text-md font-semibold">
        {`Comments (${movie.reviews?.length})`}
      </h1>
      <div className="grid grid-cols-4 gap-2">
        <div className="flex flex-col gap-2 col-span-3">
          {movie.reviews?.map((review, i) => (
            <CommentCard key={i} data={review} />
          ))}
        </div>
        <FilterCard />
      </div>
    </section>
  );
};

export default CommentSection;
