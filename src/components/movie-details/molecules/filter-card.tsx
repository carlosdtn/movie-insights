import { Toggle } from "@/components/ui/toggle";
import { useAppSelector } from "@/redux/hooks";
import { IconMoodEmpty, IconMoodHappy, IconMoodSad } from "@tabler/icons-react";
import { useParams } from "next/navigation";

const FilterCard = () => {
  const comments = useAppSelector((state) => state.comments);
  const id = parseInt(useParams().id as string);

  const getUniqueYears = (id: number) => {
    const filteredComments = comments.filter((comment) => comment.id === id);
    const years = filteredComments[0]?.reviews.map((review) => {
      return new Date(review.createdAt).getFullYear();
    });
    return [...new Set(years)].sort((a, b) => b - a);
  };

  // const getCommentsByYear = (year: number[]) => {
  //   const filteredComments = comments.filter((comment) => comment.id === id);
  //   const commentsByYear = filteredComments[0].reviews.filter((review) => {
  //     return year.includes(new Date(review.createdAt).getFullYear());
  //   });
  //   return commentsByYear;
  // };

  // function onClick() {
  //   console.log(getUniqueYears(id));
  //   console.log(getCommentsByYear([2023, 1970]));
  // }

  return (
    <aside className="sticky flex-col hidden gap-4 px-2 py-3 border rounded-md lg:flex top-[4.5rem] border-stone-600/30 h-min">
      <div className="flex flex-col gap-2">
        <h1 className="font-bold text-stone-400">Filter by Year</h1>
        <ul className="flex flex-col gap-1">
          {getUniqueYears(id).map((year, i) => (
            <li key={i}>
              <Toggle variant="outline" className="w-full">
                {year}
              </Toggle>
            </li>
          ))}
        </ul>
      </div>
      <div className="flex flex-col gap-2">
        <h1 className="font-bold text-stone-400">Filter by Mood</h1>
        <ul className="grid grid-cols-3 gap-1">
          <li>
            <Toggle variant="outline" className="w-full">
              <IconMoodHappy
                className="text-emerald-400"
                width="20"
                height="20"
              />
            </Toggle>
          </li>
          <li>
            <Toggle variant="outline" className="w-full">
              <IconMoodEmpty
                className="text-stone-400"
                width="20"
                height="20"
              />
            </Toggle>
          </li>
          <li>
            <Toggle variant="outline" className="w-full">
              <IconMoodSad className="text-red-300" width="20" height="20" />
            </Toggle>
          </li>
        </ul>
      </div>
    </aside>
  );
};

export default FilterCard;
