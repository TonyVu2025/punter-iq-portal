"use client";

import { Button } from "@/components/ui/button"; // Assuming you have a Button component

import Image from "next/image";
import { GetRacesWithBlackBookResponse } from "../hooks/useBlackbookQuery.type";
import { parseBlackbookData } from "../hooks/useBlackbookQuery";
import { getPunterDayJS } from "@/utils/dateUtils";
import { DISPLAY_DATE_FORMAT, DISPLAY_DATETIME_FORMAT } from "@/config/date";
import React from "react";
import { useCountdown } from "@/hooks/useCountdown";
import { BIcon } from "@/components/ui/icons/BIcon";
import Link from "next/link";
import PastHistoryDropdown from "./PastHistoryDropdown";

interface BlackbookRaceCardProps {
  upcomingRace: GetRacesWithBlackBookResponse[number];
}

export const RaceCard = ({ upcomingRace }: BlackbookRaceCardProps) => {
  const { competitor, horse, track, race, jockey, trainer } =
    parseBlackbookData(upcomingRace);

  const countdown = useCountdown(race.start_time);
  //TODO ADD THIS IN
  // const priceArray = odds
  //   ?.filter((o) => o.competitor_number == competitor.competitor_number)
  //   .map((o) => o.win_fixed);
  // const startingPrice = priceArray || "N/A";
  return (
    <div className="rounded-lg bg-white">
      <div className="px-4 pt-6 lg:px-12">
        <div className="flex flex-wrap justify-between">
          <small className="app-text-small-caption">
            {getPunterDayJS(race.start_time).format(DISPLAY_DATETIME_FORMAT)}
            <span className="ml-1 text-Font_SubColor_1">
              {race.distance}m {track?.state}
            </span>
          </small>

          <small className="app-text-small-caption">
            <span className="text-Font_SubColor_1"> LSF Updated</span>{" "}
            {getPunterDayJS().format(DISPLAY_DATE_FORMAT)}
          </small>
        </div>
        {/* Race information */}
        <div className="mt-5 flex flex-wrap items-start justify-between gap-3">
          <div className="flex flex-wrap items-center gap-4">
            <Image
              alt=""
              src="/img/tipster-avatar.png"
              height={40}
              width={40}
            />

            <div className="lg:pl-3">
              <h3 className="app-text-h4">
                {competitor.competitor_number}. {horse.name} -{" "}
                {competitor.barrier}
              </h3>
              <p className="-mt-1 text-Font_SubColor_1 app-text-caption">
                {horse.age}yoG (b) {horse.sire} x {horse.dam}
              </p>
            </div>
          </div>

          {/* Additional race details */}

          <div className="lg:ml-4">
            <div className="text-Font_SubColor_1 app-text-caption">
              <span className="text-black">Trainer:</span> {trainer.full_name}
            </div>
            <div className="text-Font_SubColor_1 app-text-caption">
              <span className="text-black">Jockey:</span> {jockey?.full_name}
            </div>
            <div className="text-Font_SubColor_1 app-text-caption">
              <span className="text-black">Weight:</span>{" "}
              {competitor.weight_total}kg
            </div>
          </div>

          <div className="flex flex-wrap items-stretch gap-1">
            <div className="rounded border px-2 py-2 font-medium text-Font_SubColor_1 app-text-caption lg:px-3 lg:py-4">
              <div className="flex h-full flex-col justify-center">
                Ideal Distance <span className="text-black">1,200 m</span>
              </div>
            </div>
            <div className="rounded border px-2 py-2 font-medium text-Font_SubColor_1 app-text-caption lg:px-3 lg:py-4">
              <div className="flex h-full flex-col justify-center">
                Class <span className="text-black">Down</span>
              </div>
            </div>
            <div className="rounded border px-2 py-2 font-medium text-Font_SubColor_1 app-text-caption lg:px-3 lg:py-4">
              <div className="flex h-full flex-col justify-center">
                Weight <span className="text-black">Down</span>
              </div>
            </div>
            <div className="rounded border px-2 py-2 font-medium text-Font_SubColor_1 app-text-caption lg:px-3 lg:py-4">
              <div className="flex h-full flex-col justify-center">
                <img alt="" src="/img/icons/sport-bet.svg" />
                <span className="text-black">${1222}</span>
              </div>
            </div>
          </div>

          <div className="flex w-full flex-col items-center lg:w-auto lg:items-end">
            <Link href="/form-overview" className="block w-full">
              <Button
                className="mb-2 w-full justify-between font-light"
                variant="muted"
              >
                <span>
                  R{race.race_number}. {track?.name}
                </span>
                <span>
                  {countdown}
                  <svg
                    className="mb-0.5 ml-2 inline"
                    width="10"
                    height="10"
                    viewBox="0 0 10 10"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M9.92657 0.597306C9.88042 0.485759 9.81251 0.381092 9.72284 0.289791C9.71867 0.285541 9.71446 0.281329 9.71021 0.277156C9.53561 0.105729 9.29628 0 9.03226 0H9.03209H0.967742C0.433273 0 0 0.433273 0 0.967742C0 1.50221 0.433273 1.93548 0.967742 1.93548H6.69592L0.283445 8.34796C-0.0944817 8.72589 -0.0944817 9.33863 0.283445 9.71655C0.661372 10.0945 1.27411 10.0945 1.65204 9.71655L8.06452 3.30408V9.03226C8.06452 9.56673 8.49779 10 9.03226 10C9.56673 10 10 9.56673 10 9.03226V0.968706C10 0.965406 9.99999 0.962107 9.99996 0.958808C9.99883 0.835731 9.97437 0.712829 9.92657 0.597306Z" />
                  </svg>
                </span>
              </Button>
            </Link>

            <Button
              className="mb-2 w-full items-center font-light"
              variant="dark"
              onClick={() => {}}
            >
              <BIcon width="20" />
              <span className="relative bottom-[1px] ml-1">
                Remove from Blackbook
              </span>
            </Button>
          </div>
        </div>
      </div>
      <PastHistoryDropdown horseId={BigInt(horse.id).toString()} />
    </div>
  );
};
