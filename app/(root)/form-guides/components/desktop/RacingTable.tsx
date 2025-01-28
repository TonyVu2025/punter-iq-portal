"use client";

import React, { useEffect, useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  THoverCard,
  THoverCardContent,
  THoverCardTrigger,
} from "@/components/ui/table-hover-card";
import { Shield } from "lucide-react";
import Link from "next/link";
import { RacingTableData } from "./RacingTable.types";
import { getPunterDayJS } from "@/utils/dateUtils";
import { twMerge } from "tailwind-merge";

const RacingTable = ({ rows }: RacingTableData) => {
  const [currentTime, setCurrentTime] = useState(new Date());
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTimeWithCountdown = (date) => {
    const startTime = getPunterDayJS(date);
    const timeDiff = +startTime - +currentTime;

    if (timeDiff <= 0) {
      const hours = startTime.get("hours");
      const minutes = startTime.get("minutes");

      return `${String(hours).padStart(2, "0")}:${String(minutes).padStart(2, "0")}`;
    } else if (timeDiff <= 3600000) {
      const minutes = Math.floor(timeDiff / 60000);
      const seconds = Math.floor((timeDiff % 60000) / 1000);

      return (
        <p className="text-red-500">
          {String(minutes).padStart(2, "0")}:{String(seconds).padStart(2, "0")}
        </p>
      );
    } else {
      const hours = startTime.get("hours");
      const minutes = startTime.get("minutes");

      return `${String(hours).padStart(2, "0")}:${String(minutes).padStart(2, "0")}`;
    }
  };

  return (
    <>
      <Table className="p-0">
        <TableHeader className="bg-Subtle_dark_2">
          <TableRow className="h-14">
            <TableHead className="w-[200px]">Track</TableHead>
            {[...Array(10)].map((_, i) => (
              <TableHead key={i} className="text-center">
                R{i + 1}
              </TableHead>
            ))}
          </TableRow>
        </TableHeader>
        <TableBody>
          {rows &&
            rows.map(({ track, races }, rowIndex) => (
              <TableRow key={rowIndex}>
                <TableCell className="cursor-pointer font-medium">
                  <div
                    className={twMerge(
                      "text-sm",
                      races[0]?.status === "ABANDONED" && "text-red-600",
                    )}
                  >
                    {track?.name} {races[0]?.status === "ABANDONED" && "(ABD)"}
                  </div>
                  <div className="text-sm font-light text-muted-foreground/70">
                    {track?.region || "Australia"}
                  </div>
                </TableCell>
                {races.slice(0, 10).map((race, raceIndex) => (
                  // const refIndex = raceId * 10 + raceIndex;

                  <TableCell
                    key={raceIndex}
                    className="p-0 text-center align-middle"
                  >
                    <THoverCard openDelay={10} closeDelay={10}>
                      <THoverCardTrigger asChild>
                        <Link href={`/overview?id=${race.id}`} passHref>
                          <div
                            className={`mx-auto flex h-12 w-max cursor-pointer items-center justify-center rounded-lg px-2 hover:bg-action1/10 hover:text-action1 ${race.status}`}
                          >
                            {race.status === "FINAL" ? (
                              <span className="text-nowrap">
                                {race.results?.positions?.length
                                  ? [
                                      race.results?.positions[0]?.tabNo ||
                                        "N/A",
                                      race.results?.positions[1]?.tabNo ||
                                        "N/A",
                                      race.results?.positions[2]?.tabNo ||
                                        "N/A",
                                    ].join(", ")
                                  : "-"}
                              </span>
                            ) : race.status === "ABANDONED" ? (
                              "-"
                            ) : (
                              formatTimeWithCountdown(race?.start_time)
                            )}
                          </div>
                        </Link>
                      </THoverCardTrigger>
                      <THoverCardContent className="p-0">
                        <h3 className="p-4 text-base">
                          <span className="text-base font-semibold">
                            R{raceIndex + 1}
                          </span>{" "}
                          {race.name || "Race details"}
                        </h3>
                        {race?.results?.positions?.length ? (
                          <Table className="p-1">
                            <TableHeader className="border-y border-SubDark_Color_3">
                              <TableRow className="p-0 py-2">
                                <TableHead>Results</TableHead>
                                <TableHead>Top Tote</TableHead>
                                <TableHead>SP</TableHead>
                                <TableHead>Margin</TableHead>
                              </TableRow>
                            </TableHeader>
                            <TableBody>
                              {race.results?.positions.map(
                                (position, index) => (
                                  <TableRow key={index}>
                                    <TableCell className="flex items-center justify-start p-0 px-4 py-2">
                                      <span className="relative">
                                        <Shield size={28} />
                                        <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform text-sm text-Sub_Dark_color">
                                          {position.position}
                                        </span>
                                      </span>
                                      <span className="pl-4 text-Sub_Dark_color">
                                        {position.tabNo}
                                      </span>
                                      <span className="px-2 text-action1">
                                        {position?.competitor?.name}
                                      </span>
                                    </TableCell>
                                    <TableCell className="p-0 py-2">
                                      {Math.abs(
                                        position?.competitor?.prices.top_tote,
                                      ) == Infinity
                                        ? "N/A"
                                        : "$" +
                                          position.competitor.prices.top_tote}
                                    </TableCell>
                                    <TableCell className="p-0 py-2">
                                      {Math.abs(
                                        position?.competitor?.prices.sp,
                                      ) == Infinity
                                        ? "N/A"
                                        : "$" + position.competitor.prices.sp}
                                    </TableCell>
                                    <TableCell className="p-0 py-2">
                                      {position.position == 1
                                        ? "0"
                                        : position?.competitor?.margin}{" "}
                                      L
                                    </TableCell>
                                  </TableRow>
                                ),
                              )}
                            </TableBody>
                          </Table>
                        ) : (
                          <div className="p-3">
                            No additional information available
                          </div>
                        )}
                      </THoverCardContent>
                    </THoverCard>
                  </TableCell>
                ))}
              </TableRow>
            ))}
        </TableBody>
      </Table>
    </>
  );
};

export default RacingTable;
