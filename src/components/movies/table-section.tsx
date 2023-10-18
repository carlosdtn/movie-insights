import { useAppSelector } from "@/redux/hooks";
import TableRow from "./atoms/table-row";
import Movietable from "./molecules/movie-table";

const TableSection = () => {
  const movies = useAppSelector((state) => state.movies);

  return (
    <section className="flex h-[90vh] w-[95%] md:w-[90%] lg:w-[62rem] py-6">
      <div className="w-full overflow-auto border-2 rounded-lg scrollbar-track-piece scrollbar-thumb scrollbar-track border-stone-400/40">
        <Movietable>
          {movies?.map((data, i) => (
            <TableRow key={i} data={data} />
          ))}
        </Movietable>
      </div>
    </section>
  );
};

export default TableSection;
