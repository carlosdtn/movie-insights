"use client";
import DialogFavorite from "@/components/movies/organism/dialog-favorite";
import { Button } from "@/components/ui/button";
import { toogleView } from "@/redux/features/options-slice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { IconLayoutGrid, IconMovie, IconTable } from "@tabler/icons-react";
import Link from "next/link";

const Header = () => {
  const dispatch = useAppDispatch();
  const isGrid = useAppSelector((state) => state.options.isGrid);

  function handleToggleView() {
    dispatch(toogleView({ isGrid: !isGrid }));
    localStorage.setItem("viewState", JSON.stringify({ isGrid: !isGrid }));
  }

  return (
    <header className="sticky top-0 z-10 flex justify-between w-full h-16 px-4 py-2 border-b-2 bg-stone-700/50 backdrop-blur-xl border-stone-500/30">
      <Link href="/movies" className="flex items-center gap-2">
        <IconMovie className="text-amber-500" width="32" height="32" />
        <span className="hidden text-lg font-bold md:block">
          Movie Insights
        </span>
      </Link>
      <div className="flex items-center gap-2">
        <DialogFavorite />
        <Button
          variant="ghost"
          type="button"
          className="gap-2 px-3 py-1 hover:bg-blue-400/20"
          onClick={handleToggleView}
        >
          {isGrid ? (
            <>
              <IconTable className="text-blue-400" width="18" height="18" />
              <span className="hidden md:block">Table View</span>
            </>
          ) : (
            <>
              <IconLayoutGrid
                className="text-blue-400"
                width="18"
                height="18"
              />
              <span className="hidden md:block">Grid View</span>
            </>
          )}
        </Button>
      </div>
    </header>
  );
};

export default Header;
