import { IconLink } from "@tabler/icons-react";

const Movietable = ({ children }: { children: React.ReactNode }) => {
  return (
    <table className="w-[44rem] md:min-w-full table-auto">
      <thead className="sticky top-0">
        <tr className="bg-stone-800">
          <th className="py-2 text-xs font-medium text-center text-white uppercase">
            Cover
          </th>
          <th className="relative py-2 text-xs font-medium text-center text-white uppercase">
            <IconLink
              width="16"
              height="16"
              className="absolute top-2 left-8"
            />
            Title
          </th>
          <th className="py-2 text-xs font-medium text-center text-white uppercase">
            Description
          </th>
          <th className="py-2 text-xs font-medium text-center text-white uppercase">
            Genres
          </th>
          <th className="py-2 text-xs font-medium text-center text-white uppercase">
            Rating
          </th>
          <th className="py-2 text-xs font-medium text-center text-white uppercase">
            Favorites
          </th>
        </tr>
      </thead>
      <tbody className="divide-y-2 divide-stone-400/30">{children}</tbody>
    </table>
  );
};

export default Movietable;
