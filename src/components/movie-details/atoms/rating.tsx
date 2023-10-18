import { cn } from "@/lib/utils";
import { IconStar, IconStarFilled } from "@tabler/icons-react";

interface RatingProps {
  value: number;
  onChange: (newRating: number) => void;
}

const Rating: React.FC<RatingProps> = ({ value, onChange }) => {
  const MAX_RATING = 10;

  const starsClassName = (filled: boolean) => {
    return {
      "text-yellow-500": filled,
      "text-gray-400": !filled,
    };
  };

  const renderStars = () => {
    const stars = [];
    for (let i = 1; i <= MAX_RATING; i++) {
      const filled = i <= value;
      stars.push(
        <span
          key={i}
          className={cn("text-3xl cursor-pointer", starsClassName(filled))}
          onClick={() => onChange(i)}
        >
          {filled ? (
            <IconStarFilled width="24" height="24" />
          ) : (
            <IconStar width="24" height="24" />
          )}
        </span>
      );
    }
    return stars;
  };

  return <div className="flex gap-2">{renderStars()}</div>;
};

export default Rating;
