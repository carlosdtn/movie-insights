interface GenreTagProps {
  genre: string;
}

const GenreTag: React.FC<GenreTagProps> = ({ genre }) => {
  return (
    <span className="text-xs border border-white/20 text-stone-950 font-semibold bg-gradient-to-t from-amber-600 to-amber-500 px-2 rounded-full">
      {genre}
    </span>
  );
};

export default GenreTag;
