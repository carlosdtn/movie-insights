"use client";
import Loader from "@/components/movie-details/atoms/loader";
import GridSection from "@/components/movies/grid-section";
import TableSection from "@/components/movies/table-section";
import { useAppSelector } from "@/redux/hooks";
import { loadDataFromLocalStorage } from "@/utils/helpers";
import { useEffect, useState } from "react";

const MoviesPage = () => {
  const [asyncData, setAsyncData] = useState<{
    view: boolean;
  }>();

  loadDataFromLocalStorage();
  const isGrid = useAppSelector((state) => state.options.isGrid);

  useEffect(() => {
    setAsyncData({
      view: isGrid,
    });
  }, [isGrid]);

  if (asyncData === undefined) return <Loader />;

  return (
    <main className="flex justify-center w-full">
      {isGrid ? <GridSection /> : <TableSection />}
    </main>
  );
};

export default MoviesPage;
