import { cn } from "@/lib/utils";
import Image from "next/image";
import { GoTrophy } from "react-icons/go";

interface RankingCardMobileProps {
  rankLevel: number;
}

export const RankingCardMobile = ({ rankLevel }: RankingCardMobileProps) => {
  const getOrdinalSuffix = (number: number) => {
    const suffixes = ["th", "st", "nd", "rd"];
    const value = number % 100;
    return (
      number + (suffixes[(value - 20) % 10] || suffixes[value] || suffixes[0])
    );
  };

  return (
    <div className="mb-4 rounded-[10px] bg-white py-4 last:mb-0">
      <div className="flex items-center justify-between gap-x-3">
        <div className="flex items-center space-x-2">
          <div
            className={cn(
              "flex h-[38px] w-[75px] items-center rounded-r-[30px] bg-SubDark_Color_3 pl-2 font-bold text-Font_SubColor_1",
              rankLevel === 1 && "bg-action2 text-white",
              rankLevel === 2 && "bg-Sub_Dark_color text-white",
              rankLevel === 3 && "bg-action3 text-white",
            )}
          >
            <GoTrophy size={24} className="mr-1" />
            <span className="app-text-body-medium">
              {getOrdinalSuffix(rankLevel)}
            </span>
          </div>

          <div className="flex items-center space-x-2">
            <Image
              className="h-10 w-10 flex-initial rounded-full"
              width={56}
              height={56}
              src="/img/tipster-avatar.png"
              alt="Profile Image"
            />
            <div className="flex-none font-bold leading-tight">
              <p className="app-text-h6">David Strehlau</p>
              <p className="border-t pt-0.5 text-xs font-light text-Font_SubColor_1">
                Tips: 5 BB: 15
              </p>
            </div>
          </div>
        </div>

        <div className="pr-4 text-xs leading-relaxed text-Font_SubColor_1">
          <div>
            <span className="font-light">POT</span>
            <span className="ml-2 text-mainFont">53.36%</span>
          </div>

          <div>
            <span className="font-light">Profit</span>
            <span className="ml-2 text-mainFont">$5,060.00</span>
          </div>
        </div>
      </div>

      <div className="mt-3 px-4">
        <div className="flex justify-between">
          <div className="text-Font_SubColor_1 app-text-small-caption">
            Race: results
          </div>
          <div className="font-bold leading-[20px]">18: 3-2-1</div>
        </div>

        <div className="mt-1 flex flex-1 items-center justify-center">
          <div className="h-[8px] w-full rounded-[20px] bg-SubDark_Color_3">
            <div
              style={{ width: "50%" }}
              className="h-full rounded-[20px] bg-Blue_Main_Official_2"
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
};
