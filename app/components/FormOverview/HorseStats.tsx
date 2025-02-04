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
      if (Math.max(...horses.map((h) => h[info.key])) === horse[info.key]) {
        return "bg-green-100";
      } else {
        return "bg-red-100";
      }
    } else if (info.rule === "min" && info.key === "weight") {
      if (Math.min(...horses.map((h) => h[info.key])) === horse[info.key]) {
        return "bg-green-100";
      } else {
        return "bg-red-100";
      }
    } else if (info.rule === "max" && info.key === "last5") {
      if (Math.max(...horses.map((h) => h[info.key])) === horse[info.key]) {
        return "bg-green-100";
      } else {
        return "bg-red-100";
      }
    } else {
      return "bg-red-100";
    }
  };

  return (
    <div className="overflow-hidden bg-white pb-2 rounded-xl">
      <div className="grid grid-cols-1 divide-x divide-gray-200 lg:grid-cols-3">
        {/* Headers */}
        <div className="col-span-3 grid grid-cols-1 divide-x divide-white pt-6 lg:grid-cols-3">
          {horses.map((horse, index) => (
            <div key={index} className="px-4 py-3 bg-gray-200">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <Image
                    src="/img/Jersey.png"
                    alt="Horse"
                    width={43.69}
                    height={40}
                    className="rounded-full"
                  />
                  <span className="font-medium text-gray-900">
                    {horse.horseName}
                  </span>
                </div>
                <button className="rounded bg-gray-300 p-1 hover:bg-gray-400">
                  <X className="h-4 w-4 text-gray-600" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Grid */}
        <div className="col-span-3 grid grid-cols-1 divide-x divide-gray-200 lg:grid-cols-3">
          {infos.map((info, infoIndex) => (
            <div key={infoIndex} className="contents">
              <div className="col-span-3 bg-gray-50 py-2 text-center text-sm font-medium text-gray-700">
                {info.label}
              </div>
              <div className="col-span-3 grid grid-cols-3 divide-x divide-white">
                {horses.map((horse, horseIndex) => (
                  <div
                    key={`${infoIndex}-${horseIndex}`}
                    className={`py-2 text-center text-sm font-medium ${getBgColor(horse, info)}`}
                  >
                    {getValueForLabel(horse, info.label)}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Footers */}
        {horses.map((horse, index) => (
          <div key={`footer-${index}`}>
            <div className="mb-5 mt-5 grid grid-cols-3 py-2 text-center">
              <div className="border-r-2">
                <div className="text-sm">{horse.blockedForRun}</div>
                <div className="text-xs text-gray-500">Run pos</div>
              </div>
              <div className="border-r-2">
                <div className="text-sm">{horse.comeFromback}</div>
                <div className="text-xs text-gray-500">Turn pos</div>
              </div>
              <div>
                <div className="text-sm">{horse.wentBackFromBarrier}</div>
                <div className="text-xs text-gray-500">Finish pos</div>
              </div>
            </div>
            <div className="flex flex-row justify-center gap-10 border-t-2 pt-5 text-center">
              <div className="flex w-[56px] flex-col rounded-lg border-2 border-[#F3F6F8]">
                <div className="text-[14px] text-[#AAB6BF]">Win</div>
                <div className="text-[14px]">${horse.win.toFixed(2)}</div>
                <div className="h-[18px] rounded-b-lg bg-orange-500 text-[10px] text-white">
                  Favorite
                </div>
              </div>
              <div className="flex w-[56px] flex-col rounded-lg border-2 border-[#F3F6F8]">
                <div className="text-[14px] text-[#AAB6BF]">Place</div>
                <div className="text-[14px]">${horse.place.toFixed(2)}</div>
                <div className="h-[18px] rounded-b-lg bg-orange-500 text-[10px] text-white">
                  Favorite
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
