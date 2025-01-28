"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";

interface HorseBettingProps {
  horseName: string;
  trainerName: string;
  jockeyName: string;
  weight: string;
  topTippers: number;
  totalTippers: number;
  price: string;
  odds: string;
  edge: string;
  edgePercentage: number;
  totalVC: string;
  isClosed?: boolean;
}

export function HorseBettingRow({
  horseName,
  trainerName,
  jockeyName,
  weight,
  topTippers,
  totalTippers,
  price,
  odds,
  edge,
  edgePercentage,
  totalVC,
  isClosed = false,
}: HorseBettingProps) {
  const getEdgeColor = (percentage: number) => {
    if (percentage >= 50) return "bg-green-500";
    if (percentage >= 25) return "bg-green-400";
    if (percentage >= 0) return "bg-green-300";
    if (percentage >= -15) return "bg-red-300";
    return "bg-red-500";
  };

  return (
    <div className="grid grid-cols-7 items-center gap-4 bg-white px-6 py-4 hover:bg-gray-50">
      {/* Horse/Trainer/Jockey */}
      <div className="flex items-center space-x-3">
        <Image
          src="/img/Jersey.png"
          alt={horseName}
          width={40}
          height={40}
          className="rounded-full"
        />
        <div>
          <h3 className="font-medium text-gray-900">{horseName}</h3>
          <div className="text-sm text-gray-500">
            <p>T: {trainerName}</p>
            <p>
              J: {jockeyName} ({weight})
            </p>
          </div>
        </div>
      </div>

      {/* Number of Tips */}
      <div className="text-sm">
        <p>Top Tippers {topTippers}</p>
        <p className="text-gray-500">Total Tippers {totalTippers}</p>
      </div>

      {/* Tipper's Price */}
      <div className="font-medium">${price}</div>

      {/* Best Odds */}
      <div className="flex items-center space-x-2">
        <div className="flex transform flex-col rounded-lg border border-gray-300 bg-white p-2 transition duration-200 hover:scale-105 hover:border-purple-500">
          <span className="text-lg font-semibold text-[#283036]">${odds}</span>
          <Image
            src="/img/sample-sponsor-2.svg"
            alt="Sportsbet"
            width={114.5}
            height={56}
            className="rounded"
          />
        </div>
      </div>

      {/* Edge */}
      <div className="w-full">
        <div className="mb-1 flex items-center justify-between">
          <span className="text-sm text-gray-600">{edge} Edge</span>
        </div>
        <div className="h-2 overflow-hidden rounded-full bg-gray-200">
          <div
            className={`h-full ${getEdgeColor(edgePercentage)}`}
            style={{ width: `${Math.abs(edgePercentage)}%` }}
          />
        </div>
      </div>

      {/* Total VC */}
      <div className="font-medium">${totalVC}</div>

      {/* Action */}
      <div>
        {isClosed ? (
          <Button variant="secondary" className="w-24" disabled>
            Closed
          </Button>
        ) : (
          <Button className="w-24 bg-indigo-500 hover:bg-indigo-600">
            + Add Tip
          </Button>
        )}
      </div>
    </div>
  );
}

export function TipTracker() {
  const horses = [
    {
      horseName: "Zougo Boss",
      trainerName: "Wendy Kelly",
      jockeyName: "Joe Bowditch",
      weight: "58kg",
      topTippers: 3,
      totalTippers: 10,
      price: "2.32",
      odds: "2.50",
      edge: "-25%",
      edgePercentage: -25,
      totalVC: "5,000",
      isClosed: false,
    },
    {
      horseName: "Ladbrokes Park Hillside",
      trainerName: "Wendy Kelly",
      jockeyName: "Joe Bowditch",
      weight: "58kg",
      topTippers: 3,
      totalTippers: 10,
      price: "2.32",
      odds: "2.50",
      edge: "50%",
      edgePercentage: 50,
      totalVC: "5,000",
      isClosed: true,
    },
    // Add more horses as needed
  ];

  return (
    <div className="overflow-hidden rounded-lg bg-gray-100">
      {/* Header */}
      <div className="grid grid-cols-7 gap-4 bg-gray-50 px-6 py-3 text-sm font-medium text-gray-500">
        <div>Horse / Trainer / Jockey</div>
        <div>Number of Tips</div>
        <div>Tipper&apos;s Price</div>
        <div>Best Odds</div>
        <div>Edge</div>
        <div>Total VC</div>
        <div>Action</div>
      </div>

      {/* Horse Rows */}
      <div className="divide-y divide-gray-200">
        {horses.map((horse, index) => (
          <HorseBettingRow key={index} {...horse} />
        ))}
      </div>
    </div>
  );
}
