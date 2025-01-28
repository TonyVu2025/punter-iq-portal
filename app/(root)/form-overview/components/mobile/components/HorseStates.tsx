"use client";

import Image from "next/image";
import { X } from "lucide-react";

interface Horse {
  horseName: string;
  jockey: string;
  barrier: number;
  weight: number;
  last5: number;
  trackStats: string;
  distanceStats: string;
  trackConditionStats: string;
  speedMap: string;
  lastStartDistance: string;
  lastStartTime: string;
  lastStart600m: string;
  lastStartOdds: string;
  blockedForRun: string;
  comeFromback: string;
  wentBackFromBarrier: string;
  win: number;
  place: number;
}

interface HorseStatsProps {
  horses: Horse[];
}

export function HorseStats({ horses }: HorseStatsProps) {
  const infos = [
    { key: "jockey", label: "Jockey", rule: "" },
    { key: "barrier", label: "Barrier", rule: "max" },
    { key: "weight", label: "Weight", rule: "min" },
    { key: "last5", label: "Last 5", rule: "max" },
    { key: "trackStats", label: "Track Stats", rule: "" },
    { key: "distanceStats", label: "Distance Stats", rule: "" },
    { key: "trackConditionStats", label: "Track Condition Stats", rule: "" },
    { key: "speedMap", label: "Speed Map", rule: "" },
    { key: "lastStartDistance", label: "Last Start Distance", rule: "" },
    { key: "lastStartTime", label: "Last Start Time", rule: "" },
    { key: "lastStart600m", label: "Last Start 600m", rule: "" },
    { key: "lastStartOdds", label: "Last Start Odds", rule: "" },
  ];

  const getValueForLabel = (horse: Horse, label: string) => {
    const mapping: { [key: string]: any } = {
      Jockey: horse.jockey,
      Barrier: horse.barrier,
      Weight: horse.weight,
      "Last 5": horse.last5,
      "Track Stats": horse.trackStats,
      "Distance Stats": horse.distanceStats,
      "Track Condition Stats": horse.trackConditionStats,
      "Speed Map": horse.speedMap,
      "Last Start Distance": horse.lastStartDistance,
      "Last Start Time": horse.lastStartTime,
      "Last Start 600m": horse.lastStart600m,
      "Last Start Odds": horse.lastStartOdds,
    };
    return mapping[label];
  };

  const getBgColor = (
    horse: Horse,
    info: { key: string; label: string; rule: string },
  ) => {
    if (info.rule === "max" && info.key === "barrier") {
      return Math.max(...horses.map((h) => h[info.key])) === horse[info.key];
    } else if (info.rule === "min" && info.key === "weight") {
      return Math.min(...horses.map((h) => h[info.key])) === horse[info.key];
    } else if (info.rule === "max" && info.key === "last5") {
      return Math.max(...horses.map((h) => h[info.key])) === horse[info.key];
    }
    return false;
  };

  return (
    <div>
      <div className="grid grid-cols-1 lg:grid-cols-3">
        <div className="col-span-3 border-t-2 pt-6">
          {horses.map((horse, index) => (
            <div key={index} className="px-4 py-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <Image
                    src="/img/Jersey.png"
                    alt="Horse"
                    width={28}
                    height={29}
                    className="rounded-full"
                  />
                  <span className="text-[12px] font-bold text-gray-900">
                    {horse.horseName}
                  </span>
                </div>
                <button className="rounded bg-[#AAB6BF] p-1 hover:bg-gray-400">
                  <X className="h-4 w-4 text-white" />
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="col-span-3 grid grid-cols-1 lg:grid-cols-3">
          {infos.map((info, infoIndex) => (
            <div key={infoIndex} className="contents">
              <div className="col-span-3 border-b-2 border-t-2 bg-gray-50 py-2 pl-2.5 text-sm text-gray-700">
                {info.label}
              </div>
              <div className="col-span-3">
                {horses.map((horse, horseIndex) => (
                  <div
                    key={`${infoIndex}-${horseIndex}`}
                    className="flex justify-between gap-10 px-4 py-2 text-sm"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <Image
                          src="/img/Jersey.png"
                          alt="Horse"
                          width={28}
                          height={29}
                          className="rounded-full"
                        />
                        <span className="text-[12px] font-[700] text-gray-900">
                          {horse.horseName}
                        </span>
                      </div>
                    </div>
                    <div className="flex min-w-24 items-center text-[10px]">
                      {getValueForLabel(horse, info.label)}
                    </div>
                    <div className="flex items-center">
                      {getBgColor(horse, info) ? (
                        <div className="flex h-5 w-5 items-center justify-center rounded-full bg-[#C9E6CD]">
                          <svg
                            width="7.5"
                            height="5"
                            viewBox="0 0 10 8"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M1.5 3.86133L4 6.36133L9 1.36133"
                              stroke="#279B37"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </div>
                      ) : (
                        <div className="flex h-5 w-5 items-center justify-center rounded-full bg-[#FFD9D9]">
                          <svg
                            width="5.5"
                            height="5.5"
                            viewBox="0 0 8 8"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M6.82824 1.03271L1.17139 6.68956"
                              stroke="#EB5757"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path
                              d="M1.17163 1.03271L6.82848 6.68956"
                              stroke="#EB5757"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="flex flex-col">
          <div className="mt-2.5 flex flex-col border-t-2">
            {horses.map((horse, horseIndex) => (
              <div
                key={horseIndex}
                className="flex items-center justify-between gap-10 border-b px-4 py-2 text-sm"
              >
                <div className="flex items-center space-x-2">
                  <Image
                    src="/img/Jersey.png"
                    alt="Horse"
                    width={28}
                    height={29}
                    className="rounded-full"
                  />
                  <span className="text-[12px] font-bold text-gray-900">
                    {horse.horseName}
                  </span>
                </div>

                <div className="flex min-w-24 items-center gap-10 text-xs">
                  <div className="h-[52px] w-[63px] border-r-2 text-center">
                    <div>{horse.blockedForRun}</div>
                    <div className="text-[10px] text-gray-500">
                      Blocked for run
                    </div>
                  </div>
                  <div className="h-[52px] w-[63px] border-r-2 text-center">
                    <div>{horse.comeFromback}</div>
                    <div className="text-[10px] text-gray-500">
                      Come from back
                    </div>
                  </div>
                  <div className="h-[52px] w-[63px] text-center">
                    <div>{horse.wentBackFromBarrier}</div>
                    <div className="text-[10px] text-gray-500">
                      Went back from barrier
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="flex flex-col border-t-2">
            {horses.map((horse, horseIndex) => (
              <div
                key={horseIndex}
                className="flex items-center justify-between gap-10 border-b px-4 py-2 text-sm"
              >
                <div className="flex items-center space-x-2">
                  <Image
                    src="/img/Jersey.png"
                    alt="Horse"
                    width={28}
                    height={29}
                    className="rounded-full"
                  />
                  <span className="text-[12px] font-bold text-gray-900">
                    {horse.horseName}
                  </span>
                </div>

                <div className="flex gap-10 text-center">
                  <div className="flex w-[56px] flex-col rounded-lg bg-[#F3F6F8]">
                    <div className="flex items-center justify-center gap-1 text-[14px]">
                      <div>
                        <svg
                          width="10"
                          height="11"
                          viewBox="0 0 10 11"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M5 10.8613C2.2385 10.8613 0 8.62283 0 5.86133C0 3.09983 2.2385 0.861328 5 0.861328C7.7615 0.861328 10 3.09983 10 5.86133C10 8.62283 7.7615 10.8613 5 10.8613ZM3.75 4.36133L2.5 5.61133L5 8.11133L7.5 5.61133L6.25 4.36133H3.75Z"
                            fill="#279B37"
                          />
                        </svg>
                      </div>
                      <div>{horse.win.toFixed(2)}</div>
                    </div>
                    <div className="h-[18px] rounded-b-lg bg-orange-500 text-[10px] text-white">
                      Favourite
                    </div>
                  </div>
                  <div className="flex w-[56px] flex-col justify-center rounded-lg bg-[#F3F6F8]">
                    <div className="text-[14px]">${horse.place.toFixed(2)}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
