import React from "react";
import { ThumbsUp, Copy, ThumbsDown } from "lucide-react";
import Image from "next/image";

interface BettingCardProps {
  isPremium?: boolean;
  userImage: string;
  userName: string;
  vcBalance: string;
  location: string;
  raceNumber: string;
  time: string;
  distance: string;
  soft: number;
  horseName: string;
  jockeyName: string;
  bettingOdds: string;
  virtualCurrency: string;
  winPrize: string;
  timeLeft: string;
}

const BettingCard: React.FC<BettingCardProps> = ({
  isPremium = false,
  userImage,
  userName,
  vcBalance,
  time,
  distance,
  soft,
  horseName,
  jockeyName,
  bettingOdds,
  virtualCurrency,
  winPrize,
  timeLeft,
}) => {
  const text =
    "Only just missed last start, finishing a neck back from the winner at Trentham and comes back to race at a country level. Rates as one of the key chancesOnly just missed last start, finishing a neck back from the winner at Trentham and comes back to race at a country level. Rates as one of the key chances";

  // Truncate text function
  const truncateText = (str, length) => {
    return str.length > length ? str.substring(0, length) + "..." : str;
  };
  return (
    <div
      className={`relative h-[550px] overflow-hidden rounded-lg border border-gray-200 shadow-md`}
    >
      {/* User Header */}
      <div
        className={`flex items-center justify-between p-4 ${isPremium ? "bg-[#7B68EE] text-white" : ""}`}
      >
        <div className="flex items-center gap-3">
          <div className="relative">
            <img
              src={userImage}
              alt={userName}
              className="h-[48px] w-[48px] rounded-full"
            />
          </div>
          <div className="flex flex-col items-start">
            {isPremium && (
              <div className="flex items-center rounded-sm bg-gray-800 py-1 pr-2 text-white">
                <Image
                  src="/img/icons/premium-badge.svg" // Change this to the correct path of your SVG file
                  alt="Premium Icon"
                  width={12} // You can set width and height as needed
                  height={13}
                  className="mx-2"
                />
                <div className="text-[10px] font-[700]">PREMIUM</div>
              </div>
            )}
            <p className={`font-[400] ${!isPremium && "text-[#283036]"}`}>
              {userName}
            </p>
            <div
              className={`flex flex-row items-center gap-1 text-[12px] font-[400] ${isPremium ? "text-[#F3F6F8]" : "text-[#AAB6BF]"}`}
            >
              {isPremium ? (
                <Image
                  src="/img/icons/balance-white.svg" // Path to your SVG file
                  alt="Premium Icon"
                  width={12} // Set the width
                  height={13} // Set the height
                />
              ) : (
                <Image
                  src="/img/icons/balance-black.svg" // Change this to the correct path of your SVG file
                  alt="Premium Icon"
                  width={12} // You can set width and height as needed
                  height={13}
                />
              )}
              VC Balance: {vcBalance}
            </div>
          </div>
        </div>
        <button
          className={`flex items-center gap-1 rounded-sm ${isPremium ? "border border-[#8D7CF4] bg-gradient-to-r from-[#5986E7] to-[#821ED9]" : "bg-[#7B68EE]"} py-2 pl-[18px] pr-[16px] font-semibold text-white shadow-lg transition duration-300 hover:shadow-xl`}
        >
          <Image
            src="/img/icons/plus.svg" // Change this to the correct path of your SVG file
            alt="Premium Icon"
            width={12} // You can set width and height as needed
            height={12}
          />
          <div className="text-[14px] font-[400] leading-none">Follow</div>
        </button>
      </div>

      {/* Race Info */}
      <div className={`px-4 pb-4 pt-2.5`}>
        <div className="rounded-lg border-2 border-[#DFE9F1] px-3 py-4">
          <div>
            <div className="flex items-center justify-between gap-3">
              <div className="flex flex-row items-center gap-2">
                <Image
                  src="/img/icons/flag.svg" // Change this to the correct path of your SVG file
                  alt="Premium Icon"
                  width={32} // You can set width and height as needed
                  height={32}
                />
                <div className="flex flex-col justify-between text-[14px] font-[400]">
                  <div>Bendigo</div>
                  <div>Race 02</div>
                </div>
              </div>
              <div className="flex flex-col items-end text-[14px] font-[400] text-gray-600">
                <div>
                  <span>{time}</span>
                  <span>/{distance}/</span>
                </div>
                <div className="text-blue-400">Soft {soft}</div>
              </div>
            </div>
          </div>
          <hr className="my-2.5 text-[#DFE9F1]"></hr>
          <div>
            <div className="mb-3 flex flex-row items-center justify-between">
              <div>
                <p className="text-[14px] font-medium">{horseName}</p>
                <p className="text-[10px] text-[#283036]">{jockeyName}</p>
              </div>
              <div className="flex justify-end p-2">
                <div className="flex items-center gap-1 rounded bg-red-500 px-3 py-1 text-sm text-white">
                  <Image
                    src="/img/icons/clock.svg" // Change this to the correct path of your SVG file
                    alt="Premium Icon"
                    width={14} // You can set width and height as needed
                    height={14}
                  />
                  <div className="text-sm font-bold">{timeLeft}</div>
                </div>
              </div>
            </div>
            <hr className="mb-2 text-[#DFE9F1]"></hr>
            <div className="grid grid-cols-3 gap-2 text-center">
              <div className="rounded bg-[#C9E6CD] p-2">
                <p className="text-xs text-[#283036]">Betting</p>
                <p className="text-xs text-[#283036]">Odds</p>
                <p className="text-[12px] font-semibold text-[#279B37]">
                  {bettingOdds}
                </p>
              </div>
              <div className="rounded bg-[#C9E6CD] p-2">
                <p className="text-xs text-[#283036]">Virtual</p>
                <p className="text-xs text-[#283036]">Currency</p>
                <p className="flex flex-row items-center justify-center gap-1 text-[12px] font-semibold text-[#279B37]">
                  <Image
                    src="/img/icons/currency.svg" // Change this to the correct path of your SVG file
                    alt="Premium Icon"
                    width={16} // You can set width and height as needed
                    height={16}
                  />
                  {virtualCurrency}
                </p>
              </div>
              <div className="rounded bg-[#C9E6CD] p-2">
                <p className="text-xs text-[#283036]">Win</p>
                <p className="text-xs text-[#283036]">Prize</p>
                <p className="flex flex-row items-center justify-center gap-1 text-[12px] font-semibold leading-none text-[#279B37]">
                  <Image
                    src="/img/icons/currency.svg" // Change this to the correct path of your SVG file
                    alt="Premium Icon"
                    width={16} // You can set width and height as needed
                    height={16}
                  />
                  {winPrize}
                </p>
              </div>
            </div>
            <div className="mt-2 text-sm font-[300]">
              {truncateText(text, 200)}
            </div>
          </div>
        </div>
      </div>

      {/* Actions */}
      <div className="absolute bottom-4 left-0 w-full px-4">
        <div className={`flex items-center justify-between gap-2`}>
          <div className="flex w-1/3 flex-row items-center justify-center gap-2 rounded-sm bg-[#219653] px-2.5 py-4">
            <div className="text-[12px] font-[700] text-white">Hot Tip</div>
            <ThumbsUp size={15} color="white" />
            <div className="text-[12px] font-[300] text-white">155</div>
          </div>
          <div className="flex w-1/3 flex-row items-center justify-center gap-2 rounded-sm bg-[#7B68EE] px-2.5 py-4">
            <div className="text-[12px] font-[700] text-white">Copy Tip</div>
            <Copy size={15} color="white" />
          </div>
          <div className="flex w-1/3 flex-row items-center justify-center gap-2 rounded-sm bg-[#EB5757] px-2.5 py-4">
            <div className="text-[12px] font-[700] text-white">Bad Tip</div>
            <ThumbsDown size={15} color="white" />
            <div className="text-[12px] font-[300] text-white">155</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BettingCard;
