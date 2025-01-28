"use client";

import Image from "next/image";
import { Card } from "@/components/ui/card";
import { BIcon } from "@/components/ui/icons/BIcon";
import { Button } from "@/components/ui/button";
import { SaveIcon } from "lucide-react";

const marketData = [
  {
    id: 1,
    horse: "4. Lucas the Younger-8",
    jockey: "J. Joe Bowditch",
    open: "$1,500",
    current: "$5.55",
  },
  {
    id: 2,
    horse: "4. Lucas the Younger-8",
    jockey: "J. Joe Bowditch",
    open: "$1,500",
    current: "$5.55",
  },
  {
    id: 3,
    horse: "4. Lucas the Younger-8",
    jockey: "J. Joe Bowditch",
    open: "$1,500",
    current: "$5.55",
  },
  {
    id: 4,
    horse: "4. Lucas the Younger-8",
    jockey: "J. Joe Bowditch",
    open: "$1,500",
    current: "$5.55",
  },
];

function BonusOffer() {
  return (
    <div>
      <h2 className="mb-4 flex-grow text-xl font-bold">Bonus Offers</h2>
      <Card className="bg-white">
        <div className="divide-y divide-gray-100">
          <div className="flex items-center justify-between p-6">
            <Image
              src="/img/sample-sponsor-2.svg"
              alt="Sportsbet"
              width={150}
              height={30}
            />
            <span className="text-xl font-bold">Up to $5.55</span>
          </div>

          <div className="p-6">
            <div className="flex items-center justify-between text-sm text-gray-600">
              <span>Doombem • R1 - R3</span>
              <span className="text-gray-400">Today</span>
            </div>
          </div>

          <div className="p-6">
            <div className="space-y-2">
              <p className="text-gray-800">Get up to $50 back in bonus bets</p>
              <p className="text-gray-800">if your horse run in the 2nd</p>
            </div>
          </div>

          <div className="p-6">
            <button className="flex w-full items-center justify-center gap-2 rounded-md bg-indigo-600 px-4 py-2 text-white transition hover:bg-indigo-700">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-user"
              >
                <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
                <circle cx="12" cy="7" r="4" />
              </svg>
              Log in to Claim
            </button>

            <p className="mt-4 text-center text-xs text-gray-400">
              Terms & Condition apply
            </p>
          </div>
        </div>
      </Card>
    </div>
  );
}

const RaceCard = ({ horse }) => {
  return (
    <div className="mb-4 rounded-lg border border-gray-300 bg-white p-4">
      <div className="flex items-center justify-between">
        <div className="flex flex-auto flex-wrap pr-4 pt-12 lg:pr-12 lg:pt-0">
          <div className="flex w-[35%]">
            <img src={horse.imageUrl} alt="Horse" className="mr-3 h-16 w-16" />
            <div>
              <h2 className="text-lg font-bold">{horse.name}</h2>
              <p>{horse.details}</p>
            </div>
          </div>
          <div className="mt-4 w-[25%] text-sm text-gray-600">
            <p>Trainer: {horse.trainer}</p>
            <p>Jockey: {horse.jockey}</p>
          </div>
          <div className="mt-4 w-[20%] text-sm text-gray-600">
            <p>Last 5: {horse.last5}</p>
            <p>Career: {horse.career}</p>
          </div>
        </div>
        <div className="relative flex items-center space-x-2">
          <Button size="sm" variant="dark">
            <BIcon width={25}></BIcon>
          </Button>

          <Button size="sm" variant="dark">
            <SaveIcon size={25}></SaveIcon>
          </Button>
        </div>
      </div>
      <div className="mt-2 flex items-center space-x-4">
        <h2 className="flex-none">All Odds</h2>
        {horse.odds.map((odd, index) => (
          <div key={index} className="group flex flex-col items-center">
            <div className="flex transform flex-col items-center rounded-lg border border-gray-300 bg-white p-2 transition duration-200 hover:scale-105 hover:border-purple-500">
              <span className="text-lg font-semibold text-[#283036]">
                {odd.price}
              </span>
              <img
                src={odd.bookmakerLogo}
                alt={odd.bookmaker}
                className="h-8"
              />
            </div>
            <span className="mt-1 text-sm text-purple-600 opacity-0 transition-opacity duration-200 group-hover:opacity-100">
              Best Odds
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

const SortOrder = () => {
  return (
    <div>
      <div className="flex space-x-4">
        <p>Sort Order:</p>
        {[
          "runnerNumber ↕",
          "price ↕",
          "weight ↕",
          "barrier ↕",
          "win ↕",
          "place ↕",
        ].map((key) => (
          <span
            key={key}
            className="cursor-pointer text-[16px] text-[#AAB6BF] hover:text-black"
          >
            {`${key.charAt(0).toUpperCase() + key.slice(1)}`}
          </span>
        ))}
      </div>
    </div>
  );
};

function OddsCard() {
  const horses = [
    {
      name: "Barney's Blaze - 3",
      details: "5yoG (b) Rubick x Harvest Queen",
      odds: [
        {
          price: "$2.50",
          bookmaker: "sportsbet.com.au",
          bookmakerLogo: "/img/sample-sponsor-2.svg",
        },
        {
          price: "$5.50",
          bookmaker: "sportsbet.com.au",
          bookmakerLogo: "/img/sample-sponsor-2.svg",
        },
        {
          price: "$7.50",
          bookmaker: "sportsbet.com.au",
          bookmakerLogo: "/img/sample-sponsor-2.svg",
        },
        {
          price: "$2.50",
          bookmaker: "sportsbet.com.au",
          bookmakerLogo: "/img/sample-sponsor-2.svg",
        },
        {
          price: "$5.50",
          bookmaker: "sportsbet.com.au",
          bookmakerLogo: "/img/sample-sponsor-2.svg",
        },
        {
          price: "$7.50",
          bookmaker: "sportsbet.com.au",
          bookmakerLogo: "/img/sample-sponsor-2.svg",
        },
        {
          price: "$2.50",
          bookmaker: "sportsbet.com.au",
          bookmakerLogo: "/img/sample-sponsor-2.svg",
        },
        {
          price: "$5.50",
          bookmaker: "sportsbet.com.au",
          bookmakerLogo: "/img/sample-sponsor-2.svg",
        },
        {
          price: "$7.50",
          bookmaker: "sportsbet.com.au",
          bookmakerLogo: "/img/sample-sponsor-2.svg",
        },
      ],
      trainer: "Frankie Stockdale",
      jockey: "Emily Pozman (a4)",
      last5: "80 - 5444",
      career: "6",
      imageUrl: "/img/icons/t-shirt-orange.svg",
    },
    {
      name: "Barney's Blaze - 3",
      details: "5yoG (b) Rubick x Harvest Queen",
      odds: [
        {
          price: "$2.50",
          bookmaker: "sportsbet.com.au",
          bookmakerLogo: "/img/sample-sponsor-2.svg",
        },
        {
          price: "$5.50",
          bookmaker: "sportsbet.com.au",
          bookmakerLogo: "/img/sample-sponsor-2.svg",
        },
        {
          price: "$7.50",
          bookmaker: "sportsbet.com.au",
          bookmakerLogo: "/img/sample-sponsor-2.svg",
        },
        {
          price: "$2.50",
          bookmaker: "sportsbet.com.au",
          bookmakerLogo: "/img/sample-sponsor-2.svg",
        },
        {
          price: "$5.50",
          bookmaker: "sportsbet.com.au",
          bookmakerLogo: "/img/sample-sponsor-2.svg",
        },
        {
          price: "$7.50",
          bookmaker: "sportsbet.com.au",
          bookmakerLogo: "/img/sample-sponsor-2.svg",
        },
        {
          price: "$2.50",
          bookmaker: "sportsbet.com.au",
          bookmakerLogo: "/img/sample-sponsor-2.svg",
        },
        {
          price: "$5.50",
          bookmaker: "sportsbet.com.au",
          bookmakerLogo: "/img/sample-sponsor-2.svg",
        },
        {
          price: "$7.50",
          bookmaker: "sportsbet.com.au",
          bookmakerLogo: "/img/sample-sponsor-2.svg",
        },
      ],
      trainer: "Frankie Stockdale",
      jockey: "Emily Pozman (a4)",
      last5: "80 - 5444",
      career: "6",
      imageUrl: "/img/icons/t-shirt-orange.svg",
    },
    // Add more horse objects as needed
  ];
  return (
    <div className="container mx-auto mt-[50px] p-4">
      <hr className="mb-2 border-t border-gray-300" />
      <div className="flex items-center justify-between">
        <SortOrder /> {/* Add the SortOrder component here */}
        <div className="space-x-2">
          <button className="rounded bg-indigo-600 px-4 py-2 text-white hover:bg-indigo-700">
            Win
          </button>
          <button className="rounded bg-[#AAB6BF] px-4 py-2 text-white">
            Place
          </button>
        </div>
      </div>
      <hr className="mt-2 border-t border-gray-300" />
      <div className="mt-[50px]">
        {horses.map((horse, index) => (
          <RaceCard key={index} horse={horse} />
        ))}
      </div>
    </div>
  );
}

export default function MarketMovers() {
  return (
    <div className="mx-auto max-w-[1341px]">
      <div className="grid grid-cols-1 flex-wrap gap-8 md:grid-cols-3">
        <BonusOffer />

        <div className="flex-grow md:col-span-1">
          <h2 className="mb-4 text-xl font-bold">Market Movers</h2>
          <Card className="bg-white">
            <div className="divide-y divide-gray-100">
              <div className="pt-5">
                <div className="flex bg-[#F3F6F8] px-6 py-2 text-sm text-gray-500">
                  <div className="w-[70%]">Horse</div>
                  <div className="w-[15%] text-left">Open</div>
                  <div className="w-[15%] text-left">Current</div>
                </div>
              </div>
              <div className="px-6 py-[13px]">
                {marketData.map((item) => (
                  <div key={item.id} className="flex py-[15px]">
                    <div className="w-[70%]">
                      <div className="font-medium">{item.horse}</div>
                      <div className="text-sm text-gray-500">{item.jockey}</div>
                    </div>
                    <div className="w-[15%] self-center text-right font-medium">
                      {item.open}
                    </div>
                    <div className="w-[15%] self-center text-right font-medium">
                      {item.current}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Card>
        </div>

        <BonusOffer />
      </div>
      <OddsCard />
    </div>
  );
}
