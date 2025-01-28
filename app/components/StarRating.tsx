import { cn } from "@/lib/utils";
import { Star } from "lucide-react";

interface StarRatingProps {
  stars?: number;
  activeClassname?: string;
  inactiveClassname?: string;
}

export const StarRating = ({
  stars = 5,
  activeClassname,
  inactiveClassname,
}: StarRatingProps) => {
  return (
    <span>
      {new Array(5).fill(null).map((_, index) => (
        <Star
          key={index}
          size={16}
          className={cn(
            "inline stroke-action1",
            index + 1 <= stars && "fill-action1",
            inactiveClassname,
            index + 1 <= stars && activeClassname,
          )}
        />
      ))}
    </span>
  );
};
