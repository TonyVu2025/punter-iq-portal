"use client";
import React, { useEffect, useState } from "react";
import { useSearchParams } from 'next/navigation';
import { Suspense } from 'react';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { ChevronDown, CloudHail, Wind } from "lucide-react";
import useMainStore from "@/stores/mainStore";

import FirstTab from "@/components/OverViewPageComponents/FirstTab";
import SecondTab from "@/components/OverViewPageComponents/SecondTab";

function BeforeOverView() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <OverView />
    </Suspense>
  );
}


const OverView = () => {
  const { fetchRace } = useMainStore();
  const [raceData, setRaceData] = useState(null);
  const searchParams = useSearchParams();
  const { daysRaces } = useMainStore();
  const [racesIds, setRacesIds] = useState([]);

  const id = searchParams.get("id");

  // const sortedDates = daysRaces
  //   ? Object.keys(daysRaces).sort((a, b) => new Date(a) - new Date(b))
  //   : [];

  useEffect(() => {
    // const formattedDate = new Date(raceData.race.startTime).toISOString().split('T')[0];
    // const tracks = daysRaces[formattedDate];
    // if (!tracks) return;
    // const currentTrack = Object.values(tracks).find(track =>
    //   Object.keys(track.races).includes(id)
    // );
    // if (!currentTrack) return;
    // const newRacesIds = Object.keys(currentTrack.races);
    // console.log("raceData:", raceData );
    // console.log("daysRaces:", raceData?.meeting?.races );
  }, [daysRaces, id]);
  useEffect(() => {
    if (id) {
      const fetchData = async () => {
        const data = await fetchRace(id);
        setRaceData(data);
  
        if (data?.meeting?.races) {
          setRacesIds(data?.meeting?.races);
        }
      };
      fetchData();
    }
  }, [id, fetchRace]);
  
  return (
    <div className="">
      <div className="flex flex-col">
        <div className="flex w-full flex-col">
          <div className="flex w-full flex-col">
            <div className="flex w-full items-center justify-start px-4 py-4 sm:px-6 lg:px-20">
              <Popover>
                <PopoverTrigger className="flex items-center gap-2 text-xl font-bold sm:text-2xl lg:text-3xl">
                 {raceData?.meeting?.track?.name ?? "Sportsbet-Ballarat"}  <ChevronDown className="inline" size={15} />
                </PopoverTrigger>
                <PopoverContent>
                  Place content for the popover here.
                </PopoverContent>
              </Popover>
            </div>

            <div className="flex w-full flex-col items-center justify-between gap-2 border-b px-4 py-2 sm:px-6 lg:flex-row lg:px-20">
              <div className="mb-2 w-3/12 text-start text-xs font-light text-Sub_Dark_color max-lg:w-full sm:col-span-4 sm:mb-0">
                {raceData?.race?.distance ?? "2000"}m{" "}
                {raceData?.race?.name ?? "Brandt Maiden Plate Maiden"}
              </div>

              <div className="flex flex-wrap items-center gap-0 max-lg:w-full max-md:flex-wrap">
                <div className="w-full md:w-1/2 lg:w-auto">
                  <Popover className="w-full border-b mobile-l:border-b-0 mobile-l:border-r">
                    <PopoverTrigger className="flex w-full items-center justify-center p-2 text-sm font-semibold text-mainFont sm:p-4 sm:text-base lg:text-lg">
                      <span>{raceData?.race?.distance ?? "2000"}m</span>
                      <ChevronDown size={15} />
                    </PopoverTrigger>
                    <PopoverContent>
                      Place content for the popover here.
                    </PopoverContent>
                  </Popover>
                </div>

                <div className="w-full md:w-1/2 lg:w-auto">
                  <Popover className="w-full border-b mobile-l:border-b-0 mobile-l:border-r">
                    <PopoverTrigger className="flex w-full items-center justify-center p-2 text-sm font-semibold text-mainFont sm:p-4 sm:text-base lg:text-lg">
                      <span>
                        <CloudHail size={20} className="mr-1 inline" />{" "}
                        {raceData?.race?.weather ?? "FINE"}
                      </span>{" "}
                      <ChevronDown size={15} />
                    </PopoverTrigger>
                    <PopoverContent>
                      Place content for the popover here.
                    </PopoverContent>
                  </Popover>
                </div>

                <div className="w-full md:w-1/2 lg:w-auto">
                  <Popover className="w-full border-b mobile-l:border-b-0 mobile-l:border-r">
                    <PopoverTrigger className="flex w-full items-center justify-center p-2 text-sm font-semibold text-mainFont sm:p-4 sm:text-base lg:text-lg">
                      <span>
                        <Wind size={20} className="mr-1 inline" />
                        {raceData?.race?.trackCondition ?? "GOOD"}{" "}
                      </span>
                      <ChevronDown size={15} />
                    </PopoverTrigger>
                    <PopoverContent>
                      Place content for the popover here.
                    </PopoverContent>
                  </Popover>
                </div>

                <div className="w-full md:w-1/2 lg:w-auto">
                  <Popover className="w-full">
                    <PopoverTrigger className="flex w-full items-center justify-center p-2 text-sm text-mainFont sm:p-4 sm:text-base">
                      <span className="flex flex-col">
                        <span>Track</span>
                        <span className="text-xs font-light text-Sub_Dark_color">
                          { raceData?.meeting?.railPosition || "True Postion" } 
                        </span>
                      </span>
                      <ChevronDown size={15} />
                    </PopoverTrigger>
                    <PopoverContent>
                      Place content for the popover here.
                    </PopoverContent>
                  </Popover>
                </div>

                <div className="mt-2 flex w-full items-center justify-center md:w-1/2 lg:w-auto">
                  <button className="flex flex-col items-center rounded-lg bg-Font_SubColor_1 p-2 px-4 text-xs text-SubDark_Color_3">
                    Final <span>Result</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <FirstTab raceData={raceData} racesIds={racesIds} currentId={id} />
        <SecondTab raceData={raceData}/>
      </div>
    </div>
  );
};

export default BeforeOverView;
