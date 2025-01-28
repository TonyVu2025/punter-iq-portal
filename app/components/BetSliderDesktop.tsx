import { RankingRaceCard } from "@/components/RankingRaceCard";
import { cn } from "@/lib/utils";
import Image from "next/image";

interface BetSliderDesktopProps {
  className?: string;
}

export const BetSliderDesktop = ({ className }: BetSliderDesktopProps) => {
  return (
    <div
      className={cn(
        "hidden gap-5 lg:mb-5 lg:grid lg:grid-cols-2 2xl:grid-cols-4",
        className,
      )}
    >
      {new Array(4).fill(null).map((_, index) => (
        <div
          key={index}
          className="mb-3 rounded-[10px] bg-white p-2 lg:mb-0 lg:p-[15px]"
        >
          <Image
            src="/img/brands_logo.jpg"
            width={64}
            height={15}
            alt="brand-logo"
            className="mb-[5px]"
          />
          <div className="mb-[5px] flex items-center justify-between">
            <div className="text-base font-bold leading-4 text-mainFont">
              Tauranga
            </div>
            <div className="text-Font_SubColor_1 app-text-category">
              Today at 6:30am
            </div>
          </div>
          <RankingRaceCard
            btnClass="w-[85px] h-[36px] app-text-body-small"
            titleClass="app-text-body-medium"
            customWrapperClass="p-0 mb-0"
            twoLine
            infoClassname="leading-[0.5]"
            jockeyTextClassname="ml-0"
          />
        </div>
      ))}
    </div>
  );
};
