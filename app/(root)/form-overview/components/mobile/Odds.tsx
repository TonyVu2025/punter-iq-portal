"use client";

import { useState } from "react";
import Image from "next/image";

const RaceCard = ({ horse }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [activeCard, setActiveCard] = useState(null);
  const toggleExpandCollapse = () => {
    setIsExpanded(!isExpanded);
  };
  const handleCardClick = (index) => {
    setActiveCard(index);
  };

  return (
    <div className="items-center gap-4 bg-white px-2 py-4 hover:bg-gray-50">
      <div className="flex flex-row items-center justify-between">
        <div className="flex flex-row items-center gap-2">
          <div className="flex flex-col items-center gap-1.5">
            <Image
              src="/img/Jersey.png"
              alt="horseName"
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
                fillRule="evenodd"
                clipRule="evenodd"
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
              {horse.name} <span className="font-[400]">(5)</span>
            </div>
            <div className="flex flex-row gap-4">
              <div className="flex flex-col text-[10px] font-[400] text-[#657786]">
                <div>{horse.weight}kg</div>
                <div>10x7x</div>
              </div>
              <div className="flex flex-col text-[10px] font-[400] text-[#657786]">
                <div>
                  <span className="font-bold text-[#283036]">T:</span>
                  {horse.trainerName}
                </div>
                <div>
                  <span className="font-bold text-[#283036]">J:</span>
                  {horse.jockeyName}
                  (a3)
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
          <div className="text-sm font-[400] text-[#283036]">
            ${horse.odds[0].price}
          </div>
          <div className="rounded-sm bg-[#FFC20E] px-5 py-1 text-[10px] font-[600] text-[#283036]">
            Best
          </div>
        </div>
      </div>
      {isExpanded ? (
        <div className="mt-2 grid grid-cols-4 gap-4 bg-[#EDF1F4]">
          {horse.odds.map((odd, index) => (
            <div
              key={index}
              className="group flex flex-col items-center"
              onClick={() => handleCardClick(index)}
            >
              <div className="flex transform flex-col items-center rounded-lg p-2 transition duration-200 hover:scale-105 hover:border-purple-500">
                <img
                  src={odd.bookmakerLogo}
                  alt={odd.bookmaker}
                  width={69}
                  height={10}
                />
                <span className="text-[14px] text-lg font-[400] text-[#283036]">
                  ${odd.price}
                </span>
              </div>
              {activeCard === index && (
                <div className="rounded-sm bg-[#FFC20E] px-5 py-1 text-[10px] font-[600] text-[#283036]">
                  Best
                </div>
              )}
            </div>
          ))}
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export function OddsCard() {
  const horses = [
    {
      name: "Barney's Blaze - 3",
      details: "5yoG (b) Rubick x Harvest Queen",
      odds: [
        {
          price: "2.50",
          bookmaker: "sportsbet.com.au",
          bookmakerLogo: "/img/sample-sponsor-2.svg",
        },
        {
          price: "5.50",
          bookmaker: "sportsbet.com.au",
          bookmakerLogo: "/img/sample-sponsor-2.svg",
        },
        {
          price: "7.50",
          bookmaker: "sportsbet.com.au",
          bookmakerLogo: "/img/sample-sponsor-2.svg",
        },
        {
          price: "2.50",
          bookmaker: "sportsbet.com.au",
          bookmakerLogo: "/img/sample-sponsor-2.svg",
        },
        {
          price: "5.50",
          bookmaker: "sportsbet.com.au",
          bookmakerLogo: "/img/sample-sponsor-2.svg",
        },
        {
          price: "7.50",
          bookmaker: "sportsbet.com.au",
          bookmakerLogo: "/img/sample-sponsor-2.svg",
        },
        {
          price: "5.50",
          bookmaker: "sportsbet.com.au",
          bookmakerLogo: "/img/sample-sponsor-2.svg",
        },
        {
          price: "7.50",
          bookmaker: "sportsbet.com.au",
          bookmakerLogo: "/img/sample-sponsor-2.svg",
        },
      ],
      trainerName: "Frankie Stockdale",
      jockeyName: "Emily Pozman (a4)",
      last5: "80 - 5444",
      career: "6",
      weight: 60,
      imageUrl: "/img/icons/t-shirt-orange.svg",
    },
    {
      name: "Barney's Blaze - 3",
      details: "5yoG (b) Rubick x Harvest Queen",
      odds: [
        {
          price: "2.50",
          bookmaker: "sportsbet.com.au",
          bookmakerLogo: "/img/sample-sponsor-2.svg",
        },
        {
          price: "5.50",
          bookmaker: "sportsbet.com.au",
          bookmakerLogo: "/img/sample-sponsor-2.svg",
        },
        {
          price: "7.50",
          bookmaker: "sportsbet.com.au",
          bookmakerLogo: "/img/sample-sponsor-2.svg",
        },
        {
          price: "2.50",
          bookmaker: "sportsbet.com.au",
          bookmakerLogo: "/img/sample-sponsor-2.svg",
        },
        {
          price: "5.50",
          bookmaker: "sportsbet.com.au",
          bookmakerLogo: "/img/sample-sponsor-2.svg",
        },
        {
          price: "7.50",
          bookmaker: "sportsbet.com.au",
          bookmakerLogo: "/img/sample-sponsor-2.svg",
        },
        {
          price: "5.50",
          bookmaker: "sportsbet.com.au",
          bookmakerLogo: "/img/sample-sponsor-2.svg",
        },
        {
          price: "7.50",
          bookmaker: "sportsbet.com.au",
          bookmakerLogo: "/img/sample-sponsor-2.svg",
        },
      ],
      trainerName: "Frankie Stockdale",
      jockeyName: "Emily Pozman (a4)",
      last5: "80 - 5444",
      career: "6",
      weight: 60,
      imageUrl: "/img/icons/t-shirt-orange.svg",
    },
  ];

  return (
    <div className="overflow-hidden rounded-lg bg-gray-100">
      <div className="divide-y divide-gray-200">
        {horses.map((horse, index) => (
          <RaceCard key={index} horse={horse} />
        ))}
      </div>
    </div>
  );
}
