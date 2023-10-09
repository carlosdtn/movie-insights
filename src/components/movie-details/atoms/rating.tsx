import { cn } from "@/lib/utils";
import { setRating } from "@/redux/features/rating/rating-slice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { IconStar, IconStarFilled } from "@tabler/icons-react";

const Rating = () => {
  const rating = useAppSelector((state) => state.ratingReducer.value);
  const dispatch = useAppDispatch();

  const MAX_RATING = 10;

  const starsClassName = (filled: boolean) => {
    return {
      "text-yellow-500": filled,
      "text-gray-400": !filled,
    };
  };

  const handleRatingChange = (newRating: number) => {
    dispatch(setRating(newRating));
  };

  const renderStars = () => {
    const stars = [];
    for (let i = 1; i <= MAX_RATING; i++) {
      const filled = i <= rating;
      stars.push(
        <span
          key={i}
          className={cn("text-3xl cursor-pointer", starsClassName(filled))}
          onClick={() => handleRatingChange(i)}
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
