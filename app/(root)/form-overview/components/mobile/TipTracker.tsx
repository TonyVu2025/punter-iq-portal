"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { useState } from "react";

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

  const [isExpanded, setIsExpanded] = useState(false);
  const toggleExpandCollapse = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="items-center gap-4 bg-white px-6 py-4 hover:bg-gray-50">
      {/* Horse/Trainer/Jockey */}

      <div className="flex flex-row items-center justify-between py-4">
        <div className="flex flex-row items-center gap-2">
          <div className="flex flex-col items-center gap-1.5">
            <Image
              src="/img/Jersey.png"
              alt={horseName}
              width={40}
              height={40}
              className="rounded-full"
            />
            <svg
              width="13"
              height="7"
              onClick={toggleExpandCollapse}
              viewBox="0 0 13 7"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d={
                  isExpanded
                    ? "M1.20575 0.243101C1.53118 -0.0823358 2.05882 -0.0823358 2.38426 0.243101L6.795 4.65385L11.2057 0.243101C11.5312 -0.0823358 12.0588 -0.0823358 12.3843 0.243101C12.7097 0.568538 12.7097 1.09618 12.3843 1.42161L7.38426 6.42161C7.05882 6.74705 6.53119 6.74705 6.20575 6.42161L1.20575 1.42161C0.880311 1.09618 0.880311 0.568538 1.20575 0.243101Z"
                    : "M1.20575 6.42145C1.53118 6.74689 2.05882 6.74689 2.38426 6.42145L6.795 2.01071L11.2057 6.42145C11.5312 6.74689 12.0588 6.74689 12.3843 6.42145C12.7097 6.09601 12.7097 5.56838 12.3843 5.24294L7.38426 0.242939C7.05882 -0.0824976 6.53119 -0.0824976 6.20575 0.242939L1.20575 5.24294C0.880311 5.56838 0.880311 6.09601 1.20575 6.42145Z"
                }
                fill="#AAB6BF"
              />
            </svg>
          </div>
          <div className="flex flex-col">
            <div className="text-sm font-bold text-[#283036]">
              3. Bourbon Road <span className="font-[400]">(5)</span>
            </div>
            <div className="flex flex-row gap-4">
              <div className="flex flex-col text-[10px] font-[400] text-[#657786]">
                <div>60kg</div>
                <div>10x7x</div>
              </div>
              <div className="flex flex-col text-[10px] font-[400] text-[#657786]">
                <div>
                  <span className="font-bold text-[#283036]">T:</span>
                  {trainerName}
                </div>
                <div>
                  <span className="font-bold text-[#283036]">J:</span>
                  {jockeyName}
                  (a3) ({weight})
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col pr-4">
          <Image
            src="/img/sample-sponsor-2.svg"
            alt="Sportsbet"
            width={54}
            height={13}
            className="rounded"
          />
          <div className="text-sm font-[400] text-[#283036]">${odds}</div>
          <div className="rounded-sm bg-[#FFC20E] px-5 py-1 text-[10px] font-[600] text-[#283036]">
            Best
          </div>
        </div>
      </div>

      {/* Action */}
      {isExpanded ? (
        <div className="bg-[#F3F6F8] p-2.5">
          <div className="flex flex-row border-y border-[#D9D9D9] py-2.5">
            <div className="flex w-1/4 flex-col gap-1.5 border-r border-r-[#D9D9D9] pl-1.5">
              <div className="text-[10px] font-[400] text-[#657786]">
                Top Tippers
              </div>
              <div className="text-[13px] font-bold text-[#283036]">
                {topTippers}
              </div>
            </div>
            <div className="flex w-1/4 flex-col gap-1.5 border-r border-r-[#D9D9D9] pl-1.5">
              <div className="text-[10px] font-[400] text-[#657786]">
                Total Tippers
              </div>
              <div className="text-[13px] font-bold text-[#283036]">
                {totalTippers}
              </div>
            </div>
            <div className="flex w-1/4 flex-col gap-1.5 border-r border-r-[#D9D9D9] pl-1.5">
              <div className="text-[10px] font-[400] text-[#657786]">
                Tipper’s Price
              </div>
              <div className="text-[13px] font-bold text-[#283036]">
                ${price}
              </div>
            </div>
            <div className="flex w-1/4 flex-col gap-1.5 pl-1.5">
              <div className="text-[10px] font-[400] text-[#657786]">
                Total VC
              </div>
              <div className="text-[13px] font-bold text-[#283036]">
                ${totalVC}
              </div>
            </div>
          </div>
          <div className="w-full">
            <div className="pb-3 pt-2.5 text-center text-sm text-[#283036]">
              {edge} Edge
            </div>
            <div className="h-2 overflow-hidden rounded-full bg-gray-200">
              <div
                className={`h-full ${getEdgeColor(edgePercentage)}`}
                style={{ width: `${Math.abs(edgePercentage)}%` }}
              />
            </div>
          </div>
          <div className="pt-2.5">
            {isClosed ? (
              <Button
                variant="secondary"
                className="w-full bg-[#E1E8ED]"
                disabled
              >
                Closed
              </Button>
            ) : (
              <Button className="w-full bg-[#7B68EE] hover:bg-indigo-600">
                + Add Tip
              </Button>
            )}
          </div>
        </div>
      ) : (
        ""
      )}
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

      {/* Horse Rows */}
      <div className="divide-y divide-gray-200">
        {horses.map((horse, index) => (
          <HorseBettingRow key={index} {...horse} />
        ))}
      </div>
    </div>
  );
}
