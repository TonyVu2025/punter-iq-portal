import Image from "next/image";
import { GoTrophy } from "react-icons/go";

export const TopRankingCard = ({ rankLevel }) => {
  const getOrdinalSuffix = (number) => {
    const suffixes = ["th", "st", "nd", "rd"];
    const value = number % 100;
    return (
      number + (suffixes[(value - 20) % 10] || suffixes[value] || suffixes[0])
    );
  };

  return (
    <div className="top-ranking-card mb-4 justify-between gap-x-4 rounded-[10px] bg-white p-3 last:mb-0 sm:flex lg:mb-8 lg:h-[108px] lg:p-0">
      <div className="flex items-center gap-x-3">
        <div className="rank-level flex h-[35px] w-[65px] items-center justify-center rounded-[30px] lg:rounded-l-none lg:rounded-r-[30px] 2xl:h-[45px] 2xl:w-[100px]">
          <div className="flex items-center">
            <GoTrophy size={24} className="mr-1" />
            <span className="app-text-body-medium 2xl:app-text-h4">
              {getOrdinalSuffix(rankLevel)}
            </span>
          </div>
        </div>
        <Image
          className="h-10 w-10 flex-initial rounded-full 2xl:h-[56px] 2xl:w-[56px]"
          width={56}
          height={56}
          src="/img/tipster-avatar.png"
          alt="Profile Image"
        />
        <div className="flex-none">
          <p className="app-text-h6 2xl:app-text-h4">David Strehlau</p>
          <p className="text-Font_SubColor_1 lg:text-sm">Tips: 5 BB: 15</p>
        </div>
      </div>
      <div className="mt-3 flex min-w-0 lg:mt-0">
        <div className="flex-1 lg:flex-initial">
          <div className="h-1/2 items-end border-b py-1 pr-3 2xl:flex">
            <div className="mr-1.5 w-[34px] text-sm text-Font_SubColor_1">
              POT
            </div>

            <div className="text-sm text-mainFont">53.36%</div>
          </div>
          <div className="h-1/2 py-1 pr-3 2xl:flex">
            <div className="mr-1.5 w-[34px] text-sm text-Font_SubColor_1">
              Profit
            </div>
            <div className="text-sm text-mainFont">$5,060.00</div>
          </div>
        </div>
        <div className="flex flex-1 items-center justify-center border-l px-4 2xl:px-7">
          <div className="ml-4 lg:ml-0">
            <div className="text-sm font-extrabold leading-[20px] 2xl:app-text-h4">
              18: 3-2-1
            </div>
            <div className="text-Font_SubColor_1 app-text-small-caption">
              Race: results
            </div>
            <div className="mt-3.5 h-[8px] w-full rounded-[20px] bg-SubDark_Color_3">
              <div
                style={{ width: "50%" }}
                className="h-[8px] rounded-[20px] bg-Blue_Main_Official_2"
              ></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
