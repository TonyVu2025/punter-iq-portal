"use client";
import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { cn } from "@/lib/utils";
import {
  OAccordion,
  OAccordionItem,
  OAccordionTrigger,
  OAccordionContent,
} from "@/components/ui/Overview_accordion";
import {
  CircleChevronDown,
  RefreshCw,
  SquareChevronDown,
  SquarePlus,
} from "lucide-react";

import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";

import Image from "next/image";
import { TbLink } from "react-icons/tb";
import HelpGuides from "./HelpGuides";

const SecondTab = ({ raceData }) => {
  function formatDate(dateString) {
    const date = new Date(dateString);

    const options = { day: "numeric", month: "long", year: "numeric" };
    return date.toLocaleDateString("en-GB", options);
  }
  const getPositionSuffix = (position) => {
    if (position === 1) return "1st";
    if (position === 2) return "2nd";
    if (position === 3) return "3rd";
    if (position === 4 || position > 4) return position + "th";
    return "NA";
  };
  const countPositions = (last10Starts) => {
    if (typeof last10Starts !== "string" || last10Starts.trim() === "") {
      return "NA";
    }

    let count1 = 0;
    let count2 = 0;
    let count3 = 0;

    for (let char of last10Starts) {
      if (char === "1") count1++;
      if (char === "2") count2++;
      if (char === "3") count3++;
    }
    return `${count1}-${count2}-${count3}`;
  };

  const competitors = raceData?.compatitors || [];

  const competitorsSorted = competitors
    .filter(
      (competitor) =>
        competitor.finalPosition > 0 && competitor.finalPosition <= 4,
    )
    .sort((a, b) => a.finalPosition - b.finalPosition);

  const competitorsWithoutTopPosition = competitors
    .filter((competitor) => competitor.finalPosition > 4)
    .sort((a, b) => a.finalPosition - b.finalPosition);

  const competitorsWithZeroPosition = competitors.filter(
    (competitor) => competitor.finalPosition === 0,
  );

  const finalCompetitors = [
    ...competitorsSorted,
    ...competitorsWithoutTopPosition,
    ...competitorsWithZeroPosition,
  ];

  const getLastFiveResults = (formHistory) => {
    if (!formHistory || formHistory.length === 0) {
      return "NA";
    }

    const lastFive = formHistory.slice(0, 5);

    const result = lastFive
      .map((history) => {
        const position = history?.finishingPosition;

        if (position == null || position === 0) {
          return "x";
        }

        if (position > 9) {
          return `.${position}.`;
        }

        return position.toString();
      })
      .join("");

    return result
      .replace(/(\.\d+\.)+/g, (match) => match.replace(/\.+/g, "."))
      .replace(/^\./, "")
      .replace(/\.$/, "");
  };

  if (finalCompetitors.length === 0) {
    return (
      <div className="flex h-screen items-center justify-center">
        <div className="h-16 w-16 animate-spin rounded-full border-b-2 border-t-2 border-blue-500"></div>
      </div>
    );
  }
  const processKey = (key) => {
    if (typeof key === "string") {
      return key.replace(/\d+$/, "");
    }
    return "";
  };
  return (
    <Tabs defaultValue="overview" className="mb-10 min-w-full">
      <TabsList className="flex w-full justify-start border-y bg-transparent px-20 py-0 max-md:px-4">
        {[
          { key: "overview", label: "Overview" },
          { key: "full_form", label: "Full Form" },
          { key: "odds", label: "Odds" },
          { key: "speed_map", label: "Speed Map" },
          { key: "quick_form", label: "Quick Form" },
          { key: "runner_compare", label: "Runner Compare" },
        ].map((tab, index) => (
          <TabsTrigger
            value={tab.key}
            key={index}
            className={cn(
              "h-full p-0 text-lg font-medium text-Font_SubColor_1 data-[state=active]:font-semibold data-[state=active]:text-mainFont",
              index === 0 ? "pr-4 max-md:pr-2" : "px-4 max-md:px-2",
            )}
          >
            {tab.label}
          </TabsTrigger>
        ))}
      </TabsList>

      <TabsContent value="overview" className="px-20 py-10">
        <div className="rounded-2xl bg-white pt-10">
          <div className="flex h-16 items-center justify-between bg-Subtle_dark_2 px-4 text-sm text-Font_SubColor_1">
            <div className="flex w-1/4 gap-5">
              <span className="">No.</span>
              <span className="">Horse / Barrier / Trainer / Jockey</span>
            </div>
            <div className="flex w-1/4 justify-evenly gap-4">
              <span className="w-1/3 text-center">Last 5</span>
              <span className="w-1/3 text-center">Career</span>
              <span className="w-1/3 text-center">Gear Chg</span>
            </div>
            <div className="flex h-full w-1/4 flex-col items-center justify-around bg-SubDark_Color_3">
              <div className="w-full border-b border-gray-300 px-10 text-center">
                Last Start
              </div>
              <div className="flex w-full justify-evenly gap-4">
                <span className="w-1/4 text-center">Place</span>
                <span className="w-1/4 text-center">800m/400m</span>
                <span className="w-1/4 text-center">L600</span>
                <span className="w-1/4 text-center">Dist/Track</span>
              </div>
            </div>
            <div className="flex w-1/4 justify-around">
              <span className="">Action</span>
              <span className="">Odds</span>
            </div>
          </div>

          <OAccordion type="single" collapsible className="w-full">
            {finalCompetitors.map((competitor, index) => (
              <OAccordionItem
                value={`item-${index}`}
                key={index}
                className="group border-Subtle_dark_2"
              >
                <OAccordionTrigger
                  className="flex w-full justify-start border-Subtle_dark_2 px-4 py-0 hover:no-underline group-data-[state=open]:border-b"
                  iconClassName="right-5 top-1/2"
                >
                  <div className="flex w-1/4 items-center gap-5">
                    <span className="flex w-10 flex-col items-center rounded-b-2xl px-1 py-1 font-bold transition-colors duration-75 group-data-[state=open]:rounded-b-2xl group-data-[state=open]:rounded-t-sm group-data-[state=open]:bg-black group-data-[state=open]:text-white">
                      <span className="px-1.5 text-center">
                        {competitor.tabNo}
                      </span>
                      <CircleChevronDown
                        size={20}
                        className="hidden group-data-[state=open]:block"
                      />
                    </span>

                    {competitor.finalPosition > 0 &&
                    competitor.finalPosition <= 4 ? (
                      <span
                        className={`flex h-8 w-8 items-center justify-center rounded-full px-1 py-1 text-xs font-bold text-white shadow-lg ${
                          competitor.finalPosition % 2 === 0
                            ? "bg-Font_SubColor_1"
                            : "bg-action1"
                        }`}
                      >
                        <span className="px-1.5 text-center">
                          {getPositionSuffix(competitor.finalPosition)}
                        </span>
                      </span>
                    ) : (
                      <Image
                        src="/img/shirt.png"
                        width={30}
                        height={30}
                        alt="Competitor shirt"
                      />
                    )}

                    <div className="flex w-11/12 items-start justify-start gap-2">
                      <div className="flex w-full flex-col text-sm">
                        <span className="w-full text-start text-base text-mainFont">
                          {competitor.name} ({competitor.barrier}){" "}
                          {competitor.age}yo ({competitor.sex})
                        </span>
                        <div className="text-mainFon flex w-full text-xs">
                          <span>T: {competitor.trainer} </span>
                          <span>
                            J: {competitor.jockey} ({competitor.weightTotal}kg)
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex w-1/4 justify-evenly gap-4">
                    <span className="w-1/3 text-center">
                      {getLastFiveResults(competitor.formHistory)}
                    </span>
                    <span className="w-1/3 text-center">
                      {competitor?.runnerStatistics?.career?.all?.numberOfRuns >
                      0
                        ? competitor.runnerStatistics.career.all.numberOfRuns
                        : "NA"}
                      :{" "}
                      {competitor?.runnerStatistics?.career?.all?.firsts ?? "0"}
                      -
                      {competitor?.runnerStatistics?.career?.all?.seconds ??
                        "0"}
                      -
                      {competitor?.runnerStatistics?.career?.all?.thirds ?? "0"}
                    </span>
                    {competitors[index]?.gearChangesDescription ? (
                      <HoverCard openDelay={10} closeDelay={5}>
                        <HoverCardTrigger className="flex w-1/3 cursor-pointer justify-center text-center">
                          <RefreshCw />
                        </HoverCardTrigger>
                        <HoverCardContent>
                          {competitors[index]?.gearChangesDescription &&
                          competitors[index]?.gearChangesDescription.trim() !==
                            ""
                            ? competitors[index]?.gearChangesDescription
                            : "Gear changes description not available"}
                        </HoverCardContent>
                      </HoverCard>
                    ) : (
                      <RefreshCw className="flex w-1/3 cursor-pointer justify-center text-center" />
                    )}
                  </div>
                  <div className="flex h-full w-1/4 items-center justify-around gap-0 bg-SubDark_Color_3 py-10 text-sm">
                    <span className="w-1/4 text-center">
                      {competitor?.formHistory[0]?.finishingPosition != null &&
                      competitor?.formHistory[0]?.starters != null
                        ? `${competitor.formHistory[0].finishingPosition}/${competitor.formHistory[0].starters}`
                        : "NA"}
                    </span>

                    <span className="w-1/4 text-center">4th/2nd</span>
                    <span className="w-1/4 text-center">
                      {competitor?.formHistory[0]?.raceSectionals &&
                      competitor.formHistory[0].raceSectionals.length > 0
                        ? (competitor.formHistory[0].raceSectionals[0]
                            ?.seconds ?? "NA")
                        : "NA"}
                    </span>
                    <span className="w-1/4 truncate text-center">
                      {competitor.formHistory[0]?.distance
                        ? `${competitor.formHistory[0].distance}m`
                        : "NA"}
                      /{competitor.formHistory[0]?.track ?? "NA"}
                    </span>
                  </div>
                  <div className="flex w-1/4 justify-around">
                    <span className="flex w-1/2 items-center justify-center gap-2">
                      <span className="flex cursor-pointer items-center justify-center rounded-md bg-black p-2 text-white outline-none">
                        <SquareChevronDown size={20} />
                      </span>
                      <span className="flex cursor-pointer items-center justify-center rounded-md bg-black p-2 text-white outline-none">
                        <TbLink size={20} />
                      </span>
                      <span className="flex cursor-pointer items-center justify-center rounded-md bg-black p-2 text-white outline-none">
                        <SquarePlus size={20} />
                      </span>
                    </span>
                    <span className="mr-4 flex w-1/2 items-center justify-center gap-2">
                      <span className="flex cursor-pointer flex-col items-center justify-center rounded-md border px-4">
                        <span className="text-Font_SubColor_1">Win</span>
                        <span>
                          {competitor?.runnerStatistics?.all?.winPercentage ??
                            "NA"}
                        </span>
                      </span>
                      <span className="flex cursor-pointer flex-col items-center justify-center rounded-md border px-4">
                        <span className="text-Font_SubColor_1">Place</span>
                        {competitor?.runnerStatistics?.all?.placePercentage ??
                          "NA"}
                      </span>
                    </span>
                  </div>
                </OAccordionTrigger>
                <OAccordionContent className="">
                  <div className="flex flex-col">
                    <div className="grid grid-cols-9 gap-2 border-b border-Font_SubColor_1/10 py-5">
                      <span className="flex flex-col items-center">
                        <span>
                          <span className="bold">
                            {
                              competitor?.runnerStatistics?.career?.all
                                ?.numberOfRuns
                            }{" "}
                          </span>
                          <span className="text-Font_SubColor_1">
                            {competitor?.runnerStatistics?.career?.all?.firsts}-
                            {competitor?.runnerStatistics?.career?.all?.seconds}
                            -{competitor?.runnerStatistics?.career?.all?.thirds}
                          </span>
                        </span>
                        <span className="text-Font_SubColor_1">Career</span>
                      </span>
                      <span className="flex flex-col items-center">
                        <span>
                          <span className="bold">10 </span>
                          <span className="text-Font_SubColor_1">
                            {countPositions(
                              competitor?.runnerStatistics?.last10Starts,
                            )}
                          </span>
                        </span>
                        <span className="text-Font_SubColor_1">Last 10</span>
                      </span>
                      <span className="flex flex-col items-center">
                        <span>
                          <span className="bold">
                            {
                              competitor?.runnerStatistics?.thisSeason
                                ?.numberOfRuns
                            }{" "}
                          </span>
                          <span className="text-Font_SubColor_1">
                            {competitor?.runnerStatistics?.thisSeason?.firsts}-
                            {competitor?.runnerStatistics?.thisSeason?.seconds}-
                            {competitor?.runnerStatistics?.thisSeason?.thirds}{" "}
                          </span>
                        </span>
                        <span className="text-Font_SubColor_1">12 Months</span>
                      </span>
                      <span className="flex flex-col items-center">
                        <span>
                          <span className="bold">
                            {competitor?.jockeyStatistics?.all?.numberOfRuns}{" "}
                          </span>
                          <span className="text-Font_SubColor_1">
                            {competitor?.jockeyStatistics?.all.firsts}-
                            {competitor?.jockeyStatistics?.all.seconds}-
                            {competitor?.jockeyStatistics?.all.thirds}
                          </span>
                        </span>
                        <span className="text-Font_SubColor_1">Jockey</span>
                      </span>
                      <span className="flex flex-col items-center">
                        <span>
                          <span className="bold">
                            {
                              competitor?.runnerStatistics?.surfacePlaces?.[0]
                                ?.numberOfRuns
                            }{" "}
                          </span>
                          <span className="text-Font_SubColor_1">
                            {competitor?.runnerStatistics?.surfacePlaces?.[0]
                              ?.firsts || 0}
                            -
                            {competitor?.runnerStatistics?.surfacePlaces?.[0]
                              ?.seconds || 0}
                            -
                            {competitor?.runnerStatistics?.surfacePlaces?.[0]
                              ?.thirds || 0}{" "}
                          </span>
                        </span>
                        <span className="text-Font_SubColor_1">
                          {
                            competitor?.runnerStatistics?.surfacePlaces?.[0]
                              ?.key
                          }
                        </span>
                      </span>
                      <span className="flex flex-col items-center">
                        <span>
                          <span className="bold">
                            {
                              competitor?.runnerStatistics?.surfacePlaces?.[1]
                                ?.numberOfRuns
                            }{" "}
                          </span>
                          <span className="text-Font_SubColor_1">
                            {competitor?.runnerStatistics?.surfacePlaces?.[1]
                              ?.firsts || 0}
                            -
                            {competitor?.runnerStatistics?.surfacePlaces?.[1]
                              ?.seconds || 0}
                            -
                            {competitor?.runnerStatistics?.surfacePlaces?.[1]
                              ?.thirds || 0}{" "}
                          </span>
                        </span>
                        <span className="text-Font_SubColor_1">
                          {
                            competitor?.runnerStatistics?.surfacePlaces?.[1]
                              ?.key
                          }
                        </span>
                      </span>

                      {/* <span className="flex flex-col items-center">
                        <span>
                          <span className="bold">10 </span>
                          <span className="text-Font_SubColor_1">2-4-4</span>
                        </span>
                        <span className="text-Font_SubColor_1">Synth</span>
                      </span> */}
                      <span className="flex flex-col items-center">
                        <span>
                          <span className="bold">
                            {competitor?.runnerStatistics?.all?.winPercentage}%
                          </span>
                        </span>
                        <span className="text-Font_SubColor_1">Wins</span>
                      </span>
                      <span className="flex flex-col items-center">
                        <span>
                          <span className="bold">
                            {competitor?.runnerStatistics?.all?.placePercentage}
                            %
                          </span>
                        </span>
                        <span className="text-Font_SubColor_1">places</span>
                      </span>
                      <span className="flex flex-col items-center">
                        <span>
                          <span className="bold text-red-600">
                            1009m - 1100m{" "}
                          </span>
                        </span>
                        <span className="text-Font_SubColor_1">Win range</span>
                      </span>
                    </div>
                    <div className="grid grid-cols-9 gap-2 border-b border-Font_SubColor_1/10 py-5">
                      <span className="flex flex-col items-center">
                        <span>
                          <span className="bold">
                            {competitor?.runnerStatistics?.firstUp
                              ?.numberOfRuns ?? "NA"}{" "}
                          </span>
                          <span className="text-Font_SubColor_1">
                            {competitor?.runnerStatistics?.firstUp?.firsts ??
                              "NA"}
                            -
                            {competitor?.runnerStatistics?.firstUp?.seconds ??
                              "NA"}
                            -
                            {competitor?.runnerStatistics?.firstUp?.thirds ??
                              "NA"}
                          </span>
                        </span>
                        <span className="text-Font_SubColor_1">1st Up</span>
                      </span>
                      <span className="flex flex-col items-center">
                        <span>
                          <span className="bold">
                            {competitor?.runnerStatistics?.secondUp
                              ?.numberOfRuns ?? "NA"}{" "}
                          </span>
                          <span className="text-Font_SubColor_1">
                            {competitor?.runnerStatistics?.secondUp?.firsts ??
                              "NA"}
                            -
                            {competitor?.runnerStatistics?.secondUp?.seconds ??
                              "NA"}
                            -
                            {competitor?.runnerStatistics?.secondUp?.thirds ??
                              "NA"}
                          </span>
                        </span>
                        <span className="text-Font_SubColor_1">2nd Up</span>
                      </span>
                      <span className="flex flex-col items-center">
                        <span>
                          <span className="bold">
                            {competitor?.runnerStatistics?.distancePlaces[0]
                              ?.numberOfRuns ?? "NA"}{" "}
                          </span>
                          <span className="text-Font_SubColor_1">
                            {competitor?.runnerStatistics?.distancePlaces[0]
                              ?.firsts ?? "NA"}
                            -
                            {competitor?.runnerStatistics?.distancePlaces[0]
                              ?.seconds ?? "NA"}
                            -
                            {competitor?.runnerStatistics?.distancePlaces[0]
                              ?.thirds ??
                              "NA" ??
                              "NA"}
                          </span>
                        </span>
                        <span className="text-Font_SubColor_1">Dist</span>
                      </span>
                      <span className="flex flex-col items-center">
                        <span>
                          <span className="bold">
                            {competitor?.runnerStatistics?.trackPlaces[0]
                              ?.numberOfRuns ?? "NA"}{" "}
                          </span>
                          <span className="text-Font_SubColor_1">
                            {competitor?.runnerStatistics?.trackPlaces[0]
                              ?.firsts ?? "NA"}
                            -
                            {competitor?.runnerStatistics?.trackPlaces[0]
                              ?.seconds ?? "NA"}
                            -
                            {competitor?.runnerStatistics?.trackPlaces[0]
                              ?.thirds ?? "NA"}
                          </span>
                        </span>
                        <span className="text-Font_SubColor_1">Track</span>
                      </span>
                      <span className="flex flex-col items-center">
                        <span>
                          <span className="bold">
                            {competitor?.runnerStatistics
                              ?.trackAndDistancePlaces[0]?.numberOfRuns ??
                              "NA"}{" "}
                          </span>
                          <span className="text-Font_SubColor_1">
                            {competitor?.runnerStatistics
                              ?.trackAndDistancePlaces[0]?.firsts ?? "NA"}
                            -
                            {competitor?.runnerStatistics
                              ?.trackAndDistancePlaces[0]?.seconds ?? "NA"}
                            -
                            {competitor?.runnerStatistics
                              ?.trackAndDistancePlaces[0]?.thirds ?? "NA"}
                          </span>
                        </span>
                        <span className="text-Font_SubColor_1">TRK/Dist</span>
                      </span>
                      <span className="flex flex-col items-center">
                        <span>
                          <span className="bold">
                            {competitor?.runnerStatistics?.conditionPlaces[0]
                              ?.numberOfRuns ?? "NA"}{" "}
                          </span>
                          <span className="text-Font_SubColor_1">
                            {competitor?.runnerStatistics?.conditionPlaces[0]
                              ?.firsts ?? "NA"}
                            -
                            {competitor?.runnerStatistics?.conditionPlaces[0]
                              ?.seconds ?? "NA"}
                            -
                            {competitor?.runnerStatistics?.conditionPlaces[0]
                              ?.thirds ?? "NA"}
                          </span>
                        </span>
                        <span className="text-Font_SubColor_1">
                          {processKey(
                            competitor?.runnerStatistics?.conditionPlaces[0]
                              ?.key,
                          )}
                        </span>
                      </span>
                      <span className="flex flex-col items-center">
                        <span>
                          <span className="bold">
                            {
                              competitor?.runnerStatistics?.conditionPlaces[1]
                                ?.numberOfRuns
                            }{" "}
                          </span>
                          <span className="text-Font_SubColor_1">
                            {competitor?.runnerStatistics?.conditionPlaces[1]
                              ?.firsts ?? "NA"}
                            -
                            {competitor?.runnerStatistics?.conditionPlaces[1]
                              ?.seconds ?? "NA"}
                            -
                            {competitor?.runnerStatistics?.conditionPlaces[1]
                              ?.thirds ?? "NA"}
                          </span>
                        </span>
                        <span className="text-Font_SubColor_1">
                          {processKey(
                            competitor?.runnerStatistics?.conditionPlaces[1]
                              ?.key,
                          )}
                        </span>
                      </span>
                      <span className="flex flex-col items-center">
                        <span>
                          <span className="bold">
                            {
                              competitor?.runnerStatistics?.conditionPlaces[2]
                                ?.numberOfRuns
                            }{" "}
                          </span>
                          <span className="text-Font_SubColor_1">
                            {competitor?.runnerStatistics?.conditionPlaces[2]
                              ?.firsts ?? "NA"}
                            -
                            {competitor?.runnerStatistics?.conditionPlaces[2]
                              ?.seconds ?? "NA"}
                            -
                            {competitor?.runnerStatistics?.conditionPlaces[2]
                              ?.thirds ?? "NA"}
                          </span>
                        </span>
                        <span className="text-Font_SubColor_1">
                          {processKey(
                            competitor?.runnerStatistics?.conditionPlaces[2]
                              ?.key,
                          )}
                        </span>
                      </span>
                      <span className="flex flex-col items-center">
                        <span>
                          <span className="bold">
                            {
                              competitor?.runnerStatistics?.conditionPlaces[3]
                                ?.numberOfRuns
                            }{" "}
                          </span>
                          <span className="text-Font_SubColor_1">
                            {competitor?.runnerStatistics?.conditionPlaces[3]
                              ?.firsts ?? "NA"}
                            -
                            {competitor?.runnerStatistics?.conditionPlaces[3]
                              ?.seconds ?? "NA"}
                            -
                            {competitor?.runnerStatistics?.conditionPlaces[3]
                              ?.thirds ?? "NA"}
                          </span>
                        </span>
                        <span className="text-Font_SubColor_1">
                          {processKey(
                            competitor?.runnerStatistics?.conditionPlaces[3]
                              ?.key,
                          )}
                        </span>
                      </span>
                    </div>
                  </div>
                  <div className="bg-Subtle_dark_2 p-4">
                    <span className="bold p-4 text-Font_SubColor_1">
                      Runner Component
                    </span>
                    <span className="p-4 text-sm text-mainFont/40">
                      First-up after 28 week spell. Resumes well and won at Sale
                      when last first-up. Down in distance. Expect to be right
                      up there.
                    </span>
                  </div>
                  {competitor?.formHistory
                    ?.slice(0, 3)
                    .map((history, historyIndex) => (
                      <div
                        className="relative ml-12 flex items-center border-b border-l"
                        key={historyIndex}
                      >
                        <span className="absolute -left-8 top-8 rounded-sm bg-Font_SubColor_1 p-3 text-sm text-white">
                          {getPositionSuffix(history?.finishingPosition)} of{" "}
                          {history?.starters}
                        </span>
                        <div className="w-3/12 py-10 pl-16">
                          <p className="">{formatDate(history?.date)}</p>
                          <p>
                            {history?.track} {history?.trackCondition}
                          </p>
                          <p>
                            {history?.jockey} {history?.weight}kg Barrier{" "}
                            {history?.barrier} {history?.distance}m{" "}
                            {history?.fullAgeYears}Y {history?.class}
                          </p>
                          <p className="text-red-600">Rail: +2m</p>
                        </div>
                        <div className="w-2/12 px-2 py-10">
                          <p>Margin: {history?.margin}L</p>
                          <p>
                            Settled:{" "}
                            {getPositionSuffix(history?.finishingPosition)}
                          </p>
                          <p className="text-red-600">800m/400m: 9th/5th</p>
                          <p>Starting Price: ${history?.startingPrice}</p>
                        </div>

                        <div className="flex w-3/12 flex-col p-2">
                          {history?.placeGetters
                            ?.filter((place) => place.finishingPosition <= 3)
                            ?.sort(
                              (a, b) =>
                                a.finishingPosition - b.finishingPosition,
                            )
                            ?.map((place, index) => (
                              <span key={index}>
                                {place.finishingPosition === 1
                                  ? "1st"
                                  : place.finishingPosition === 2
                                    ? "2nd"
                                    : "3rd"}{" "}
                                {place.name}{" "}
                                <span className="text-Font_SubColor_1">
                                  ({place.jockeyName} {place.weight}kg){" "}
                                  {place.margin}L
                                </span>
                              </span>
                            ))}
                          <p className="text-black/55">... See full results</p>
                        </div>
                        <div className="flex w-3/12 flex-col justify-between border-x">
                          <div className="p-7">
                            <p className="font-semibold">
                              Winning Time: 1:10.57
                            </p>
                            <p>
                              {history?.raceSectionals?.[0]?.distance ?? "N/A"}m
                              Sectional:{" "}
                              {history?.raceSectionals?.[0]?.seconds ?? "N/A"}
                            </p>
                          </div>
                          <div className="flex border-t">
                            <div className="flex-1 border-r p-5 text-center">
                              <p className="font-bold">30</p>
                              <p className="text-sm text-gray-500">
                                Blocked for run
                              </p>
                            </div>
                            <div className="flex-1 border-r p-5 text-center">
                              <p className="font-bold">22</p>
                              <p className="text-sm text-gray-500">
                                Come from back
                              </p>
                            </div>
                            <div className="flex-1 p-5 text-center">
                              <p className="font-bold">55</p>
                              <p className="text-sm text-gray-500">
                                Went back from barrier
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="flex w-2/12 items-center justify-center">
                          <span className="flex cursor-pointer rounded-md bg-black px-2 py-1 text-white">
                            Add Comment
                          </span>
                        </div>
                      </div>
                    ))}
                  <div className="relative ml-12 flex items-center justify-center border-b border-l py-10">
                    <button className="flex flex-col items-center justify-center rounded-lg bg-Font_SubColor_1 p-2 px-4 text-base text-SubDark_Color_3">
                      ••• Display More Data
                    </button>
                  </div>
                </OAccordionContent>
              </OAccordionItem>
            ))}
          </OAccordion>
        </div>
        <LastStartCommentsComponent
          comments={competitors.slice(0, 4)}
          meeting={raceData.meeting}
        />
        <HelpGuides />
        <div
          className="min-md:my-8 h-32 w-full rounded-lg p-4 lg:my-10"
          style={{
            backgroundImage: "url('/img/Group 541 (1).png')",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            backgroundSize: "100%",
          }}
        ></div>
      </TabsContent>
      <TabsContent value="full_form">Full Form Content</TabsContent>
      <TabsContent value="odds">Odds Content</TabsContent>
      <TabsContent value="speed_map">Speed Map Content</TabsContent>
      <TabsContent value="quick_form">Quick Form Content</TabsContent>
      <TabsContent value="runner_compare">Runner Compare Content</TabsContent>
    </Tabs>
  );
};

function LastStartCommentsComponent({ comments, meeting }) {
  return (
    <div className="my-20 rounded-2xl bg-white pt-10 max-md:my-10">
      <div className="flex h-16 items-center justify-between bg-Subtle_dark_2 px-4 text-sm text-Font_SubColor_1">
        <div className="flex w-[35%] gap-5">
          <span>Last Start Comments</span>
        </div>
        <div className="flex h-full w-[30%] flex-col items-center justify-around border-x">
          <div className="w-full border-b px-10 text-center">Last Start</div>
          <div className="flex w-full justify-evenly gap-4">
            <span>Place</span>
            <span>800m/400m</span>
            <span>L600</span>
            <span>Dist/Track</span>
          </div>
        </div>
        <div className="mx-5 flex w-[35%] justify-start">
          <span>Comments</span>
        </div>
      </div>
      {comments.map((comment, index) => (
        <div
          key={index}
          className="flex items-center justify-between px-4 py-2 text-sm"
        >
          <div className="flex w-[35%] items-center justify-between">
            <div className="flex w-1/2 items-start gap-2">
              <Image
                src={"/img/shirt.png"}
                width={30}
                height={30}
                alt="shirt"
              />
              <div className="flex flex-col justify-center">
                <span>
                  {comment.tabNo}. {comment.name} ({comment.barrier})
                </span>
                <span className="text-xs text-Font_SubColor_1">
                  {meeting?.track?.name}
                </span>
              </div>
            </div>
            <div className="flex justify-evenly gap-4 px-5">
              {/* {comment.byCondition.map((cond, i) => ( */}
              <div
                // key={i}
                className="flex flex-col items-start justify-start"
              >
                <span className="text-xs">22</span>
                <span className="text-start text-sm text-Font_SubColor_1">
                  Blocked for run
                </span>
              </div>
              {/* ))} */}
            </div>
            <div className="flex justify-evenly gap-4 px-5">
              {/* {comment.byCondition.map((cond, i) => ( */}
              <div
                // key={i}
                className="flex flex-col items-start justify-start"
              >
                <span className="text-xs">22</span>
                <span className="text-start text-sm text-Font_SubColor_1">
                  Come from Back
                </span>
              </div>
              {/* ))} */}
            </div>
            <div className="flex justify-evenly gap-4 px-5">
              {/* {comment.byCondition.map((cond, i) => ( */}
              <div
                // key={i}
                className="flex flex-col items-start justify-start"
              >
                <span className="text-xs">22</span>
                <span className="text-start text-sm text-Font_SubColor_1">
                  Went back from barrier
                </span>
              </div>
              {/* ))} */}
            </div>
          </div>
          <div className="flex w-[30%] items-center justify-around">
            <span className="w-1/4 text-center">
              {comment?.formHistory[0]?.finishingPosition != null &&
              comment?.formHistory[0]?.starters != null
                ? `${comment.formHistory[0].finishingPosition}/${comment.formHistory[0].starters}`
                : "NA"}
            </span>

            <span className="w-1/4 text-center text-red-600">4th/2nd</span>
            <span className="w-1/4 text-center">
              {comment?.formHistory[0]?.raceSectionals &&
              comment.formHistory[0].raceSectionals.length > 0
                ? (comment.formHistory[0].raceSectionals[0]?.seconds ?? "NA")
                : "NA"}
            </span>
            <span className="w-1/4 truncate text-center">
              {comment.formHistory[0]?.distance
                ? `${comment.formHistory[0].distance}m`
                : "NA"}
              /{comment.formHistory[0]?.track ?? "NA"}
            </span>
          </div>
          <div className="mx-5 flex w-[35%] flex-col justify-start text-Font_SubColor_1">
            {comment.comment ?? "Na"}
          </div>
        </div>
      ))}
    </div>
  );
}
export default SecondTab;
