import { twMerge } from "tailwind-merge";

export const RaceTrackConditionTag = ({ condition }: { condition: string }) => {
  const isGood = condition.includes("GOOD");
  const isHeavy = condition.includes("HEAVY");
  const isSoft = !isGood && !isHeavy;

  return (
    <span
      className={twMerge(
        "rounded bg-Blue_Main_Official_2 px-3 py-1 text-white",
        isGood && "bg-good_Green",
        isHeavy && "bg-destructive",
      )}
    >
      {isGood && "Good"}
      {isHeavy && "Heavy"}
      {isSoft && "Soft"}
    </span>
  );
};
