import { Toggle } from "@/components/ui/toggle";
import { IconMoodEmpty, IconMoodHappy, IconMoodSad } from "@tabler/icons-react";

const FilterCard = () => {
  return (
    <aside className="sticky top-4 flex flex-col gap-4 px-2 py-3 border border-stone-600/30 h-min rounded-md">
      <div className="flex flex-col gap-2">
        <h1 className="font-bold text-stone-400">Filter by Year</h1>
        <ul className="flex flex-col gap-1">
          <li>
            <Toggle variant="outline" className="w-full">
              2023
            </Toggle>
          </li>
          <li>
            <Toggle variant="outline" className="w-full">
              2022
            </Toggle>
          </li>
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
