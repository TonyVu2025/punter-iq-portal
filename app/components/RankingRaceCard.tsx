import { cn } from "@/lib/utils";
import Image from "next/image";

export const RankingRaceCard = ({
  children,
  showJockey,
  jockeyTextClassname,
  onlyRanking,
  customWrapperClass,
  twoLine,
  titleClass,
  btnClass,
  infoClassname,
}: any) => {
  return (
    <div
      className={cn(
        "mb-3 flex items-center justify-between rounded-[10px] bg-white py-[15px] pr-[21px] last:mb-0 lg:mb-[5px]",
        customWrapperClass,
      )}
    >
      <div className="flex w-full items-center lg:w-auto">
        {children}
        <div className="mr-2.5">
          <Image src="/img/shirt.png" width={28} height={30} alt="shirt" />
        </div>
        <div className={infoClassname}>
          <span
            className={cn(
              "flex flex-shrink-0 flex-grow items-center justify-between leading-tight text-mainFont lg:text-sm 2xl:app-text-body-medium",
              titleClass,
            )}
          >
            4. Lucas the Younger
            {onlyRanking && (
              <span className="whitespace-nowrap ml-[5px] inline-block text-xs text-Font_SubColor_1 2xl:inline">
                (5) 3yo (G)
              </span>
            )}
          </span>
          {!twoLine && (
            <span className="mt-1 text-xs font-normal text-Font_SubColor_1">
              T: Wendy Kelly
            </span>
          )}

          {(!onlyRanking || showJockey) && (
            <span
              className={cn(
                "ml-1 text-xs font-normal text-Font_SubColor_1",
                jockeyTextClassname,
              )}
            >
              J: Joe Bowditch (58kg)
            </span>
          )}
        </div>
      </div>

      {!onlyRanking && (
        <button
          className={cn(
            "flex-none rounded-lg bg-Font_SubColor_1 px-4 py-2 text-white",
            btnClass,
          )}
        >
          $ 5.55
        </button>
      )}
    </div>
  );
};
