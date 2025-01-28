"use client";

import Image from "next/image";
import { X } from "lucide-react";

interface HorseCardProps {
  horseName: string;
  jockey: string;
  barrier: number;
  weight: string;
  last5: string;
  trackStats: string;
  distanceStats: string;
  trackConditionStats: string;
  speedMap: string;
  lastStartDistance: string;
  lastStartTime: string;
  lastStart600m: string;
  lastStartOdds: string;
  runPosition: string;
  turnPosition: string;
  finishPosition: string;
  win: number;
  place: number;
}

export function HorseCard({
  horseName,
  jockey,
  barrier,
  weight,
  last5,
  trackStats,
  distanceStats,
  trackConditionStats,
  speedMap,
  lastStartDistance,
  lastStartTime,
  lastStart600m,
  lastStartOdds,
  runPosition,
  turnPosition,
  finishPosition,
  win,
  place,
}: HorseCardProps) {
  return (
    <div className="bg-white">
      {/* Header */}
      <div className="flex items-center justify-between bg-gray-100 px-4 py-3">
        <div className="flex items-center space-x-2">
          <Image
            src="img/icons/t-shirt-orange.svg"
            alt="Horse"
            width={24}
            height={24}
            className="rounded-full"
          />
          <span className="font-medium text-gray-900">{horseName}</span>
        </div>
        <button className="rounded bg-gray-300 p-1 hover:bg-gray-400">
          <X className="h-4 w-4 text-gray-600" />
        </button>
      </div>

      {/* Stats Grid */}
      <div>
        <LabelRow label="Jockey" />
        <StatRow value={jockey} />
        <LabelRow label="Barrier" />
        <StatRow value={barrier} bgColor="bg-green-100" />
        <LabelRow label="Weight" />
        <StatRow value={weight} bgColor="bg-red-100" />
        <LabelRow label="Last 5" />
        <StatRow value={last5} />
        <LabelRow label="Track Stats" />
        <StatRow value={trackStats} bgColor="bg-green-100" />
        <LabelRow label="Distance Stats" />
        <StatRow value={distanceStats} bgColor="bg-red-100" />
        <LabelRow label="Track Condition Stats" />
        <StatRow value={trackConditionStats} />
        <LabelRow label="Speed Map" />
        <StatRow value={speedMap} />
        <LabelRow label="Last Start Distance" />
        <StatRow value={lastStartDistance} bgColor="bg-green-100" />
        <LabelRow label="Last Start Time" />
        <StatRow value={lastStartTime} />
        <LabelRow label="Last Start 600m" />
        <StatRow value={lastStart600m} bgColor="bg-green-100" />
        <LabelRow label="Last Start Odds" />
        <StatRow value={lastStartOdds} />
      </div>

      {/* Footer */}
      <div className="mt-2">
        <div className="grid grid-cols-3 py-2 text-center">
          <div>
            <div className="text-sm">{runPosition}</div>
            <div className="text-xs text-gray-500">Run pos</div>
          </div>
          <div>
            <div className="text-sm">{turnPosition}</div>
            <div className="text-xs text-gray-500">Turn pos</div>
          </div>
          <div>
            <div className="text-sm">{finishPosition}</div>
            <div className="text-xs text-gray-500">Finish pos</div>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-2 p-2">
          <button className="rounded bg-orange-500 px-3 py-1 text-sm text-white hover:bg-orange-600">
            Win ${win.toFixed(2)}
          </button>
          <button className="rounded bg-orange-500 px-3 py-1 text-sm text-white hover:bg-orange-600">
            Place ${place.toFixed(2)}
          </button>
        </div>
      </div>
    </div>
  );
}

function LabelRow({ label }: { label: string }) {
  return (
    <div className="border-b border-gray-100 py-1 text-center text-sm text-gray-700">
      {label}
    </div>
  );
}

function StatRow({
  value,
  bgColor = "bg-red-100",
}: {
  value: string | number;
  bgColor?: string;
}) {
  return (
    <div className={`py-2 text-center text-sm font-medium ${bgColor}`}>
      {value}
    </div>
  );
}
