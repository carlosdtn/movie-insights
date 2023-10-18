"use client";
import withLocalStorage from "@/components/hocs/withLocalStorage";
import GridSection from "@/components/movies/grid-section";
import TableSection from "@/components/movies/table-section";
import { useAppSelector } from "@/redux/hooks";
import { loadDataFromLocalStorage } from "@/utils/helpers";

// interface MoviesPageProps {
//   loadDataFromLocalStorage: () => void;
// }

const MoviesPage = () => {
  const isGrid = useAppSelector((state) => state.options.isGrid);
  loadDataFromLocalStorage();
  return (
    <main className="flex justify-center w-full">
      {isGrid ? <GridSection /> : <TableSection />}
    </main>
  );
};

export default MoviesPage;
