import React from "react";
import Link from "next/link";
import { ChevronDown } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ExoticsTable from "@/components/OverViewPageComponents/ExoticsTable";
import KaneTipCard from "@/components/OverViewPageComponents/KaneTipCard ";
import MostTippedHorseCard from "@/components/OverViewPageComponents/MostTippedHorseCard";
import FormOverviewRaceCard from "@/components/OverViewPageComponents/form-overview-raceCard";

const kaneTips = [
  {
    number: 4,
    name: "Lucas the Younger",
    race: "T.C.Maher",
    jockey: "J.Stockdale",
    tips: 15,
    price: "$5.55",
    image: "/img/shirt.png",
  },
  {
    number: 4,
    name: "Lucas the Younger",
    race: "T.C.Maher",
    jockey: "J.Stockdale",
    tips: 15,
    price: "$5.55",
    image: "/img/shirt.png",
  },
  {
    number: 4,
    name: "Lucas the Younger",
    race: "T.C.Maher",
    jockey: "J.Stockdale",
    tips: 15,
    price: "$5.55",
    image: "/img/shirt.png",
  },
  {
    number: 4,
    name: "Lucas the Younger",
    race: "T.C.Maher",
    jockey: "J.Stockdale",
    tips: 15,
    price: "$5.55",
    image: "/img/shirt.png",
  },
];

const mostTippedHorses = [
  {
    number: 4,
    name: "Lucas the Younger",
    race: "R5 Pakenham",
    jockey: "tipped by 2 punters",
    tips: [
      {
        image: "/img/Ellipse 27.png",
      },
      {
        image: "/img/Ellipse 26.png",
      },
    ],
    price: "$5.55",
    timeAgo: "about an hour ago",
    image: "/img/Jersey1 1.png",
  },
  {
    number: 4,
    name: "Lucas the Younger",
    race: "R5 Pakenham",
    jockey: "tipped by 2 punters",
    tips: [
      {
        image: "/img/Ellipse 26.png",
      },
      {
        image: "/img/Ellipse 27.png",
      },
    ],
    price: "$5.55",
    timeAgo: "about an hour ago",
    image: "/img/Jersey1 1.png",
  },
  {
    number: 4,
    name: "Lucas the Younger",
    race: "R5 Pakenham",
    jockey: "tipped by 2 punters",
    tips: [
      {
        image: "/img/Ellipse 26.png",
      },
      {
        image: "/img/Ellipse 27.png",
      },
    ],
    price: "$5.55",
    timeAgo: "about an hour ago",
    image: "/img/Jersey1 1.png",
  },
];

const FirstTab = ({ raceData, racesIds, currentId }) => {
  const formatTime = (isoString) => {
    const date = new Date(isoString);
    const hours = String(date.getUTCHours()).padStart(2, "0");
    const minutes = String(date.getUTCMinutes()).padStart(2, "0");
    const seconds = String(date.getUTCSeconds()).padStart(2, "0");

    return `${hours}:${minutes}:${seconds}`;
  };
  // console.log(raceData?.results[0]?.positions);
  const getPositionSuffix = (position) => {
    if (position === 1) return "1st";
    if (position === 2) return "2nd";
    if (position === 3) return "3rd";
    return `${position}th`;
  };
  return (
    <Tabs defaultValue={currentId} className="w-full">
      <TabsList className="flex w-full justify-start border-b bg-transparent px-20 py-0 max-md:px-4">
        {/* <TabsTrigger
          value="all"
          className="h-full border-r p-0 pr-4 text-lg font-medium text-Font_SubColor_1 data-[state=active]:font-semibold data-[state=active]:text-mainFont max-md:pr-2"
        >
          <Link href={`/overview?id=all`} passHref>
            All
          </Link>
        </TabsTrigger> */}
        {racesIds.map((raceId, index) => (
          <Link key={index} href={`/overview?id=${raceId?.id}`} passHref>
            <TabsTrigger
              value={raceId?.id}
              className="h-full border-r p-0 px-4 text-lg font-medium text-Font_SubColor_1 data-[state=active]:font-semibold data-[state=active]:text-mainFont max-md:px-2"
            >
              {index + 1}

            </TabsTrigger>
          </Link>
        ))}
      </TabsList>

      {/* <TabsContent value="all">All races content here.</TabsContent> */}

      {racesIds.map((raceId, index) => (
        <TabsContent key={index} value={raceId?.id} className="mt-0">
          <div className="min-md:px-20 flex flex-col items-center justify-between border-b px-4 py-3 text-sm lg:flex-row">
            <div className="flex items-center text-xs text-Sub_Dark_color max-md:mb-10">
              {raceData?.race?.class ??
                "Set Weights. , Maiden. Track name:Outer..."}
              <ChevronDown size={15} />
            </div>
            <div className="flex justify-between gap-10 max-md:gap-5">
              <span className="flex">
                <span className="text-xs text-Font_SubColor_1">Race Time:</span>
                <span className="flex gap-1 text-xs text-Sub_Dark_color">
                  {formatTime(raceData?.race?.startTime)}{" "}
                  <ChevronDown size={15} />
                </span>
              </span>
              <span className="flex">
                <span className="text-xs text-Font_SubColor_1">
                  Track Record:
                </span>
                <span className="flex gap-1 text-xs text-Sub_Dark_color">
                  {formatTime(raceData?.race?.startTime)}{" "}
                  <ChevronDown size={15} />
                </span>
              </span>
              <span className="flex">
                <span className="text-xs text-Font_SubColor_1">
                  Prize Money:
                </span>
                <span className="flex gap-1 text-xs text-Sub_Dark_color">
                  ${raceData?.race?.prizeMoney} <ChevronDown size={15} />
                </span>
              </span>
            </div>
          </div>
          <div className="px-20 max-lg:px-16 max-md:px-5">
            <div
              className="min-md:my-8 h-32 w-full rounded-lg p-4 lg:my-10"
              style={{
                backgroundImage: "url('/img/Group 541 (1).png')",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
                backgroundSize: "100%",
              }}
            ></div>

            <div>
              {raceData?.results[0]?.positions.map((position, index) => (
                <FormOverviewRaceCard
                  key={index}
                  position={getPositionSuffix(position.position)}
                  color={position?.position % 2 === 0 ? 'Font_SubColor_1' : 'action1'}
                  horseName={`${position?.tabNo}. ${position?.competitor?.name} - ${position?.competitor?.barrier}`}
                  horseDetails={`${position?.competitor?.age ?? "5"}yoG (b) ${position?.competitor?.sire ?? "Shamus Award"} x ${position?.competitor?.dam ?? "Harvest Queen"}`}
                  trainer={position?.competitor?.trainer}
                  jockey={position?.competitor?.jockey}
                  weight={`${position?.competitor?.weightTotal}kg`}
                  margin={`${position?.competitor?.margin}L`}
                  sp={position?.competitor?.prices[0]?.price}
                  stab={position?.competitor?.prices}
                  nswtab="-"
                  ubet="-"
                  imageUrl="/img/Jersey.png"
                />
              ))}
            </div>
          </div>
          <ExoticsTable dividends={raceData?.results[0]?.dividends} />
          <div className="flex flex-col gap-6 px-4 py-6 sm:px-6 md:px-8 lg:flex-row lg:px-10">
            <div className="flex w-full flex-col lg:h-auto lg:w-1/3">
              <h1 className="mb-4 h-10 text-xl font-bold">Kanes Tips</h1>
              <div className="flex-grow space-y-4 overflow-y-auto">
                {kaneTips.map((tip, index) => (
                  <KaneTipCard key={index} {...tip} />
                ))}
              </div>
            </div>

            <div className="flex w-full flex-col lg:h-auto lg:w-1/3">
              <h1 className="mb-4 h-10 text-xl font-bold">
                Most Tipped Horses
              </h1>
              <div className="flex-grow space-y-4 overflow-y-auto">
                {mostTippedHorses.map((tip, index) => (
                  <MostTippedHorseCard key={index} {...tip} />
                ))}
              </div>
            </div>

            <div className="relative flex w-full flex-col lg:h-auto lg:w-1/3">
              <h1 className="mb-4 h-10 text-xl font-bold">&nbsp;</h1>
              <div
                className="h-[26rem] rounded-lg bg-contain bg-center bg-no-repeat lg:h-[26rem] lg:flex-grow"
                style={{
                  backgroundImage: "url('/img/Group 162.png')",
                }}
              ></div>
            </div>
          </div>
        </TabsContent>
      ))}
    </Tabs>
  );
};

export default FirstTab;
