import { useAppSelector } from "@/redux/hooks";
import { Movie } from "@/utils/types";
import CommentCard from "./molecules/comment-card";
import FilterCard from "./molecules/filter-card";

interface CommentSectionProps {
  movie: Movie;
}

const CommentSection: React.FC<CommentSectionProps> = ({ movie }) => {
  const comments = useAppSelector((state) => state.comments);
  const filter = useAppSelector((state) => state.filter);

  const sortedComments = (id: number) => {
    const filteredComments = comments.filter((comment) => comment.id === id);
    if (filteredComments.length === 0) return [];
    const sortedComments = [...filteredComments[0].reviews].sort(
      (a, b) => b.createdAt - a.createdAt
    );

    return sortedComments;
  };

  const panelFilter = (
    actualComments: {
      author: string;
      comment: string;
      createdAt: number;
    }[]
  ) => {
    const filteredComments = actualComments.filter((comment) => {
      const year = new Date(comment.createdAt).getFullYear();
      //Buscar el postID en el filter
      const filterByPostId = filter.find((f) => f.postID === movie.id);
      //Si no existe el postID en el filter, retornar todos los comentarios
      const yearsToFilter = filterByPostId?.year || [];
      //Si existe el postID en el filter, retornar los comentarios que coincidan con el año
      return yearsToFilter.length === 0 || yearsToFilter.includes(year);
    });
    return filteredComments;
  };

  return (
    <section className="px-3 lg:px-0 flex flex-col justify-start w-full lg:w-[62rem] gap-2">
      <h1 className="font-semibold text-stone-300 text-md">
        {`Comments (${sortedComments(movie.id).length})`}
      </h1>
      <div className="grid grid-cols-3 gap-2 py-2 lg:grid-cols-4">
        <div className="flex flex-col col-span-3 gap-2">
          {panelFilter(sortedComments(movie.id)).map((review, i) => (
            <CommentCard key={i} data={review} />
          ))}
        </div>
        <FilterCard />
      </div>
    </section>
  );
};

export default CommentSection;
