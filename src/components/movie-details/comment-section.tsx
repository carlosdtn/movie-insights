import { Movie } from "@/utils/types";
import CommentCard from "./molecules/comment-card";
import FilterCard from "./molecules/filter-card";
import { useAppSelector } from "@/redux/hooks";

interface CommentSectionProps {
  movie: Movie;
}

const CommentSection: React.FC<CommentSectionProps> = ({ movie }) => {
  const comments = useAppSelector((state) => state.comments);
  console.log(comments);

  const filteredCommentsByID = (id: number) => {
    const filteredComments = comments.filter((comment) => comment.id === id);
    if (filteredComments.length === 0) return [];
    const sortedComments = [...filteredComments[0].reviews].sort(
      (a, b) => b.createdAt - a.createdAt
    );

    return sortedComments;
  };

  return (
    <section className="px-3 lg:px-0 flex flex-col justify-start w-full lg:w-[62rem] gap-2">
      <h1 className="font-semibold text-stone-300 text-md">
        {`Comments (${filteredCommentsByID(movie.id).length})`}
      </h1>
      <div className="grid grid-cols-3 gap-2 py-2 lg:grid-cols-4">
        <div className="flex flex-col col-span-3 gap-2">
          {filteredCommentsByID(movie.id).map((review, i) => (
            <CommentCard key={i} data={review} />
          ))}
        </div>
        <FilterCard />
      </div>
    </section>
  );
};

export default CommentSection;
