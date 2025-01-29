import { PropsWithChildren } from "react";
import { cn } from "@/lib/utils";

type RacePaginationProps = {
  active?: boolean;
  className?: string;
  raceNumber?: string | number;
  timeUntilRace?: string;
  results?: number[];
  isWithinHour?: boolean;
};

export const RacePagination = ({
  className,
  active = false,
  raceNumber,
  timeUntilRace,
  results,
  ...props
}: PropsWithChildren<RacePaginationProps>) => {
  const hasResults = results && results.length > 0;

  return (
    <div
      {...props}
      className={cn(
        "flex h-[61px] min-w-[90px] cursor-pointer items-center justify-center border-r text-center",
        active && "bg-[#FFE3EF]",
        hasResults && "bg-[#ACB6BE]",
        className,
      )}
    >
      <div>
        <div
          className={cn(
            "text-[20px] font-[700]",
            hasResults
              ? "text-white"
              : active
                ? "text-[#FD71AF]"
                : "text-[#AAB6BF]",
          )}
        >
          {raceNumber || props.children}
        </div>
        {hasResults ? (
          <div className="text-[14px] font-[700] text-white">
            {results.map((position, index) => (
              <span key={index}>
                {position}
                {index < results.length - 1 ? ", " : ""}
              </span>
            ))}
          </div>
        ) : (
          <div
            className={`text-[14px] font-[700] ${active ? "text-[#FD71AF]" : "text-[#AAB6BF]"}`}
          >
            {timeUntilRace}
          </div>
        )}
      </div>
    </div>
  );
};
