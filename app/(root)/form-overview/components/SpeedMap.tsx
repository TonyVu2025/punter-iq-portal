import React, { useState } from "react";
import Image from "next/image";
import { Info, Printer, RotateCcw } from "lucide-react";

interface HorseData {
  position: number;
  name: string;
  speed: number;
  settle: number;
  odds: number;
  mapTime: string;
  jumpTime: string;
  racePosition: string;
}

interface RaceStats {
  name: string;
  last600m: string;
  raceTimeRating: string;
}

interface SpeedSection {
  title: string;
  description: string;
}

function RaceDataCard({ index }) {
  return (
    <div
      className={`w-[260px] overflow-hidden bg-white px-5 pt-4 ${index !== 0 && "border-l-2 border-l-[#F3F6F8]"}`}
    >
      {/* Header */}
      <div className="rounded-md bg-[#E3F3F9] p-3">
        <div className="relative flex items-center justify-between">
          <Image
            src="/img/Jersey.png"
            alt="Horse"
            width={34}
            height={31}
            className="absolute"
          />
          <div className="w-[61px] pl-4">
            <div className="w-full rounded-full bg-[#283036] py-1 pr-2 text-end text-[13px] font-[800] text-white">
              15
            </div>
          </div>
          <div className="flex items-center gap-1">
            <span className="flex-grow text-[13px] font-[800] text-[#283036]">
              10.Hawkeyedhost
            </span>
            <button
              className="text-[#AADAEE] hover:text-white"
              aria-label="Remove"
            >
              <svg
                width="10"
                height="10"
                viewBox="0 0 10 10"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M2.13388 0.366117C1.64573 -0.122039 0.854272 -0.122039 0.366117 0.366117C-0.122039 0.854272 -0.122039 1.64573 0.366117 2.13388L3.23223 5L0.366117 7.86612C-0.122039 8.35427 -0.122039 9.14573 0.366117 9.63388C0.854272 10.122 1.64573 10.122 2.13388 9.63388L5 6.76777L7.86612 9.63388C8.35427 10.122 9.14573 10.122 9.63388 9.63388C10.122 9.14573 10.122 8.35427 9.63388 7.86612L6.76777 5L9.63388 2.13388C10.122 1.64573 10.122 0.854272 9.63388 0.366117C9.14573 -0.122039 8.35427 -0.122039 7.86612 0.366117L5 3.23223L2.13388 0.366117Z"
                  fill="#AADAEE"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-4">
        <div className="flex items-start gap-2 text-gray-400">
          <svg
            width={48}
            viewBox="0 0 24 36"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M2.104 35V26.42H7.432V27.308H3.124V30.152H7.144V31.04H3.124V34.112H7.516V35H2.104ZM14.5958 26.42V35H13.6718V34.04C13.2998 34.604 12.5678 35.156 11.4758 35.156C9.75981 35.156 8.52381 33.944 8.52381 31.844C8.52381 29.9 9.73581 28.532 11.4038 28.532C12.5798 28.532 13.2518 29.084 13.6118 29.672C13.5998 29.24 13.5998 28.7 13.5998 28.28V26.42H14.5958ZM11.6198 34.352C12.9278 34.352 13.6238 33.38 13.6238 31.844C13.6238 30.38 12.9158 29.348 11.6198 29.348C10.3238 29.348 9.60381 30.38 9.60381 31.844C9.60381 33.38 10.3238 34.352 11.6198 34.352ZM17.4395 27.632H16.4195V26.42H17.4395V27.632ZM16.4435 28.7H17.4155V35H16.4435V28.7ZM19.5198 29.444H18.5478V28.7H19.5198V26.996H20.5038V28.7H21.7038V29.444H20.5038V33.464C20.5038 34.1 20.8038 34.364 21.3918 34.364C21.4518 34.364 21.4878 34.364 21.5838 34.352V35.096C21.4758 35.108 21.3558 35.12 21.2478 35.12C20.2038 35.12 19.5198 34.748 19.5198 33.548V29.444Z"
              fill="#AAB6BF"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M0.544918 0.544917C0.893824 0.196011 1.36704 0 1.86047 0H21.5698C22.0632 0 22.5364 0.19601 22.8853 0.544917C23.2342 0.893824 23.4302 1.36704 23.4302 1.86047V15.3488C23.4302 15.8423 23.2342 16.3155 22.8853 16.6644C22.5364 17.0133 22.0632 17.2093 21.5698 17.2093H19.3798L15.907 19.814C15.5762 20.062 15.1214 20.062 14.7907 19.814L11.3178 17.2093H1.86047C1.36704 17.2093 0.893824 17.0133 0.544918 16.6644C0.196013 16.3155 0 15.8423 0 15.3488V1.86047C0 1.36704 0.196013 0.893822 0.544918 0.544917ZM21.5698 1.86047L1.86047 1.86046L1.86047 15.3488H11.6279C11.8292 15.3488 12.025 15.4141 12.186 15.5349L15.3488 17.907L18.5116 15.5349C18.6726 15.4141 18.8685 15.3488 19.0698 15.3488H21.5698V1.86047Z"
              fill="#AAB6BF"
            />
            <path
              d="M11.6275 9.99999C12.1413 9.99999 12.5577 9.58351 12.5577 9.06976C12.5577 8.55601 12.1413 8.13953 11.6275 8.13953C11.1137 8.13953 10.6973 8.55601 10.6973 9.06976C10.6973 9.58351 11.1137 9.99999 11.6275 9.99999Z"
              fill="#AAB6BF"
            />
            <path
              d="M6.97711 9.99999C7.49086 9.99999 7.90734 9.58351 7.90734 9.06976C7.90734 8.55601 7.49086 8.13953 6.97711 8.13953C6.46335 8.13953 6.04688 8.55601 6.04688 9.06976C6.04688 9.58351 6.46335 9.99999 6.97711 9.99999Z"
              fill="#AAB6BF"
            />
            <path
              d="M16.2789 9.99999C16.7926 9.99999 17.2091 9.58351 17.2091 9.06976C17.2091 8.55601 16.7926 8.13953 16.2789 8.13953C15.7651 8.13953 15.3486 8.55601 15.3486 9.06976C15.3486 9.58351 15.7651 9.99999 16.2789 9.99999Z"
              fill="#AAB6BF"
            />
          </svg>

          <span className="text-[13px] font-[400] leading-none text-[#AAB6BF]">
            Horse&apos;s strength at the end of the race using data gained
          </span>
        </div>
      </div>
    </div>
  );
}

function SpeedMap() {
  const [activeTab, setActiveTab] = useState("Settling Position");
  const horses: HorseData[] = [
    {
      position: 7,
      name: "6.Zeusmas",
      speed: 9,
      settle: 12,
      odds: 155,
      mapTime: "0.96",
      jumpTime: "1.96",
      racePosition: "Off Pace",
    },
    {
      position: 11,
      name: "9.Eliza Redlegs",
      speed: 9,
      settle: 12,
      odds: 155,
      mapTime: "0.96",
      jumpTime: "1.96",
      racePosition: "Off Pace",
    },
    {
      position: 7,
      name: "6.Zeusmas",
      speed: 9,
      settle: 12,
      odds: 155,
      mapTime: "0.96",
      jumpTime: "1.96",
      racePosition: "Off Pace",
    },
    {
      position: 15,
      name: "10.Hawkeyedhost",
      speed: 9,
      settle: 12,
      odds: 155,
      mapTime: "0.96",
      jumpTime: "1.96",
      racePosition: "Off Pace",
    },
    {
      position: 11,
      name: "9.Eliza Redlegs",
      speed: 9,
      settle: 12,
      odds: 155,
      mapTime: "0.96",
      jumpTime: "1.96",
      racePosition: "Pace",
    },
    {
      position: 7,
      name: "6.Zeusmas",
      speed: 9,
      settle: 12,
      odds: 155,
      mapTime: "0.96",
      jumpTime: "1.96",
      racePosition: "Pace",
    },
    {
      position: 15,
      name: "10.Hawkeyedhost",
      speed: 9,
      settle: 12,
      odds: 155,
      mapTime: "0.96",
      jumpTime: "1.96",
      racePosition: "Pace",
    },
    {
      position: 7,
      name: "6.Zeusmas",
      speed: 9,
      settle: 12,
      odds: 155,
      mapTime: "0.96",
      jumpTime: "1.96",
      racePosition: "Midfield",
    },
    {
      position: 15,
      name: "10.Hawkeyedhost",
      speed: 9,
      settle: 12,
      odds: 155,
      mapTime: "0.96",
      jumpTime: "1.96",
      racePosition: "Midfield",
    },
    {
      position: 15,
      name: "10.Hawkeyedhost",
      speed: 9,
      settle: 12,
      odds: 155,
      mapTime: "0.96",
      jumpTime: "1.96",
      racePosition: "Off Midfield",
    },
    {
      position: 15,
      name: "10.Hawkeyedhost",
      speed: 9,
      settle: 12,
      odds: 155,
      mapTime: "0.96",
      jumpTime: "1.96",
      racePosition: "Leader",
    },
  ];

  const positions = [
    "Back marker",
    "Off Midfield",
    "Midfield",
    "Off Pace",
    "Pace",
    "Leader",
  ];

  const stats: RaceStats[] = [
    { name: "6. ZeusMas", last600m: "21.21", raceTimeRating: "R -11.21" },
    { name: "10.Hawkeyedhost", last600m: "-", raceTimeRating: "-" },
    {
      name: "9. Eliza Redlegs",
      last600m: "115.55",
      raceTimeRating: "R -11.21",
    },
    { name: "5. Eliza Redlegs", last600m: "26.55", raceTimeRating: "R -11.21" },
    { name: "3. Eliza Redlegs", last600m: "22.54", raceTimeRating: "R -11.21" },
  ];

  const speedSections: SpeedSection[] = [
    {
      title: "Barrier Speed",
      description:
        "Barrier speed is an indicator of speed shown from the barriers in a horse's previous runs which can be used as a guide to its settling position in a race.",
    },
    {
      title: "Settling Position",
      description:
        "The settling position speedmap uses barrier speed figures, combined with known patterns, extracted from past races, of jockeys and trainers to provide an indication of where a horse will settle, and travel, for much of the race.",
    },
    {
      title: "Closing Speed",
      description:
        "Barrier speed is an indicator of speed shown from the barriers in a horse's previous runs which can be used as a guide to its settling position in a race.",
    },
  ];

  return (
    <div className="max-w-auto mx-auto">
      {/* Header */}
      <div className="mb-8 rounded-lg bg-gray-50 px-[55px] py-[15px] shadow-lg">
        <div className="mb-4 flex items-center justify-between">
          <div className="flex items-center">
            <div className="flex h-10 w-10 items-center justify-center rounded-full">
              <svg
                width="14"
                height="22"
                viewBox="0 0 14 22"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M3 17C3 16.4477 3.44772 16 4 16H10C10.5523 16 11 16.4477 11 17C11 17.5523 10.5523 18 10 18H4C3.44772 18 3 17.5523 3 17Z"
                  fill="#FFC20E"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M4 21C4 20.4477 4.44772 20 5 20H9C9.55228 20 10 20.4477 10 21C10 21.5523 9.55228 22 9 22H5C4.44772 22 4 21.5523 4 21Z"
                  fill="#FFC20E"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M2.05025 2.05025C3.36301 0.737498 5.14348 0 7 0C8.85652 0 10.637 0.737498 11.9497 2.05025C13.2605 3.36103 13.9978 5.13813 14 6.99162C14.0123 7.78605 13.8568 8.57416 13.5438 9.3045C13.2326 10.0306 12.7727 10.6833 12.1937 11.2206C11.5443 11.8733 11.2066 12.456 11.0735 13.1807C10.9738 13.7238 10.4525 14.0833 9.90935 13.9835C9.36615 13.8838 9.00668 13.3625 9.10645 12.8193C9.33244 11.589 9.93105 10.6547 10.7929 9.79289C10.8026 9.78315 10.8126 9.7736 10.8227 9.76427C11.2017 9.41536 11.5026 8.99017 11.7055 8.51666C11.9085 8.04315 12.0089 7.53205 12.0001 7.01696L12 7C12 5.67392 11.4732 4.40215 10.5355 3.46447C9.59785 2.52678 8.32608 2 7 2C5.67392 2 4.40215 2.52678 3.46447 3.46447C2.52678 4.40215 2 5.67392 2 7C2 7.79486 2.16385 8.74236 3.19272 9.77846C4.06407 10.5822 4.65861 11.6414 4.89067 12.8043C4.99874 13.3459 4.6473 13.8726 4.10569 13.9807C3.56409 14.0887 3.03741 13.7373 2.92933 13.1957C2.77899 12.4423 2.39218 11.7564 1.82519 11.238C1.8142 11.2279 1.80343 11.2176 1.79289 11.2071C0.294625 9.70884 0 8.20145 0 7C0 5.14348 0.737498 3.36301 2.05025 2.05025Z"
                  fill="#FFC20E"
                />
              </svg>
            </div>
            <h2 className="text-xl font-bold">What is new in Speed Maps?</h2>
          </div>
          <p className="w-[539px] text-gray-700">
            Successful punters have long known about the importance of Speed
            Maps – indicators of where each horse is likely to settle in the run
            which is an indicator to the expected tempo of the race.
          </p>
          <div className="flex gap-2">
            <button className="height-[21px] flex w-[121px] items-center justify-center gap-2 rounded-md bg-[#AAB6BF] px-4 py-2 text-[16px] text-white">
              More <span className="text-xs">↗</span>
            </button>
            <button className="h-[41px] w-[42px] rounded-md bg-[#AAB6BF] p-2 text-white">
              ✕
            </button>
          </div>
        </div>
      </div>

      {/* Controls */}
      <div className="rounded-xl bg-white">
        <div className="relative flex h-full items-center gap-4 px-[47px]">
          <div
            onClick={() => setActiveTab("Barrier Speed")}
            className={`flex h-[116px] cursor-pointer items-center text-center text-[15px] font-[400] ${
              activeTab === "Barrier Speed"
                ? "border-b-2 border-black"
                : "text-[#AAB6BF]"
            }`}
          >
            Barrier Speed
          </div>
          <div className="mt-1 h-4 w-0 border-r-2 text-[#AAB6BF]" />
          <div
            onClick={() => setActiveTab("Settling Position")}
            className={`flex h-[116px] cursor-pointer items-center text-center text-[15px] font-[400] ${
              activeTab === "Settling Position"
                ? "border-b-2 border-black"
                : "text-[#AAB6BF]"
            }`}
          >
            Settling Position
          </div>
          <div className="mt-1 h-4 w-0 border-r-2 text-[#AAB6BF]" />
          <div
            onClick={() => setActiveTab("Closing Speed")}
            className={`flex h-[116px] cursor-pointer items-center text-center text-[15px] font-[400] ${
              activeTab === "Closing Speed"
                ? "border-b-2 border-black"
                : "text-[#AAB6BF]"
            }`}
          >
            Closing Speed
          </div>
          <div className="w-[505px] py-[19px] pl-[46px] pr-[46px] text-[13px] text-[#657786]">
            Successful punters have long known about the importance of Speedmaps
            – indicators of where each horse is likely to settle in the run
            which is an indicator to the expected tempo of the race.
          </div>
          <div className="flex gap-4">
            <select className="rounded-md bg-white px-4 py-2 text-[15px] text-[#283036]">
              <option>Benchmark</option>
            </select>
            <select className="rounded-md bg-white px-4 py-2 text-[15px] text-[#283036]">
              <option>RaceTime</option>
            </select>
          </div>
        </div>

        {/* Speed Map Grid */}
        <div className="grid grid-cols-6 gap-px border-b border-t border-[#AADAEE] bg-[#E5E7EB]">
          {positions.map((position, index) => (
            <div
              key={position}
              className={`flex flex-col items-center justify-end bg-[#E3F3F9] ${index !== 0 && "border-l"} border-l-[#AADAEE]`}
            >
              <div className="w-[153px] pt-4">
                {horses
                  .filter((horse) => horse.racePosition === position)
                  .map((horse, index) => (
                    <div
                      key={`${horse.name}-${index}`}
                      className="mb-2 w-auto rounded bg-white px-2 py-3 shadow-sm last:mb-0"
                    >
                      <div className="mb-2 flex items-center justify-between gap-0.5">
                        <div className="w-[61px] pl-4">
                          <div className="align-center flex justify-end rounded-full bg-[#283036] py-1 pr-3 text-end text-[13px] font-[800] text-white">
                            {horse.position}
                          </div>
                        </div>
                        <div className="flex w-[74px] items-center gap-1 rounded-2xl bg-[#283036] px-2 py-1 text-sm text-white">
                          <Image
                            src="/img/888.png"
                            alt="888"
                            width={20}
                            height={16}
                          />
                          <div className="text-[13px] font-[800]">
                            ${horse.odds}
                          </div>
                        </div>
                        <Image
                          src="/img/Jersey.png"
                          alt="Horse"
                          width={34}
                          height={31}
                          className="absolute"
                        />
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="text-[13px] font-[800]">
                          {horse.name}
                        </div>
                        <svg
                          width="16"
                          height="13"
                          viewBox="0 0 16 13"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M0.354197 0.354196C0.580985 0.127407 0.888576 0 1.2093 0H14.0203C14.3411 0 14.6487 0.127407 14.8755 0.354196C15.1022 0.580985 15.2297 0.888577 15.2297 1.2093V9.97674C15.2297 10.2975 15.1022 10.6051 14.8755 10.8319C14.6487 11.0586 14.3411 11.186 14.0203 11.186H12.5969L10.3395 12.8791C10.1245 13.0403 9.82894 13.0403 9.61395 12.8791L7.35659 11.186H1.2093C0.888576 11.186 0.580985 11.0586 0.354197 10.8319C0.127408 10.6051 0 10.2975 0 9.97674V1.2093C0 0.888576 0.127408 0.580984 0.354197 0.354196ZM14.0203 1.2093L1.2093 1.2093L1.2093 9.97674H7.55814C7.68897 9.97674 7.81627 10.0192 7.92093 10.0977L9.97674 11.6395L12.0326 10.0977C12.1372 10.0192 12.2645 9.97674 12.3953 9.97674H14.0203V1.2093Z"
                            fill="#AAB6BF"
                          />
                          <path
                            d="M7.55582 6.49995C7.88976 6.49995 8.16047 6.22924 8.16047 5.8953C8.16047 5.56136 7.88976 5.29065 7.55582 5.29065C7.22188 5.29065 6.95117 5.56136 6.95117 5.8953C6.95117 6.22924 7.22188 6.49995 7.55582 6.49995Z"
                            fill="#AAB6BF"
                          />
                          <path
                            d="M4.53239 6.49995C4.86633 6.49995 5.13704 6.22924 5.13704 5.8953C5.13704 5.56136 4.86633 5.29065 4.53239 5.29065C4.19845 5.29065 3.92773 5.56136 3.92773 5.8953C3.92773 6.22924 4.19845 6.49995 4.53239 6.49995Z"
                            fill="#AAB6BF"
                          />
                          <path
                            d="M10.5812 6.49996C10.9152 6.49996 11.1859 6.22925 11.1859 5.89531C11.1859 5.56137 10.9152 5.29066 10.5812 5.29066C10.2473 5.29066 9.97656 5.56137 9.97656 5.89531C9.97656 6.22925 10.2473 6.49996 10.5812 6.49996Z"
                            fill="#AAB6BF"
                          />
                        </svg>
                      </div>
                      <div className="mt-2 flex justify-between gap-1">
                        <div className="flex w-1/2 justify-between rounded-sm border-2 px-2 py-0.5 text-[10px]">
                          <span className="text-gray-500">Speed</span>
                          <span>{horse.speed}</span>
                        </div>
                        <div className="flex w-1/2 justify-between rounded-sm border-2 px-2 py-0.5 text-[10px]">
                          <span className="text-gray-500">Settle</span>
                          <span>{horse.settle}</span>
                        </div>
                      </div>
                      <div className="mt-2 flex justify-between gap-1 text-white">
                        <div className="flex h-[20px] w-1/2 justify-between rounded-sm bg-[#279B37] px-1.5 py-0.5 text-[10px]">
                          <span>Map</span>
                          <div className="flex items-center gap-0.5">
                            <span>{horse.mapTime}</span>
                            <div>
                              <svg
                                width="9"
                                height="9"
                                viewBox="0 0 9 9"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  fill-rule="evenodd"
                                  clip-rule="evenodd"
                                  d="M8.06694 0.933058C8.31102 1.17714 8.31102 1.57286 8.06694 1.81694L1.81694 8.06694C1.57286 8.31102 1.17714 8.31102 0.933058 8.06694C0.688981 7.82286 0.688981 7.42714 0.933058 7.18306L7.18306 0.933058C7.42714 0.688981 7.82286 0.688981 8.06694 0.933058Z"
                                  fill="white"
                                />
                                <path
                                  fill-rule="evenodd"
                                  clip-rule="evenodd"
                                  d="M0.75 1.375C0.75 1.02982 1.02982 0.75 1.375 0.75H7.625C7.97018 0.75 8.25 1.02982 8.25 1.375V7.625C8.25 7.97018 7.97018 8.25 7.625 8.25C7.27982 8.25 7 7.97018 7 7.625V2H1.375C1.02982 2 0.75 1.72018 0.75 1.375Z"
                                  fill="white"
                                />
                              </svg>
                            </div>
                          </div>
                        </div>
                        <div className="flex h-[20px] w-1/2 justify-between rounded-sm bg-[#EB5757] px-1.5 py-0.5 text-[10px]">
                          <span>J</span>
                          <div className="flex items-center gap-0.5">
                            <span>{horse.jumpTime}</span>
                            <div>
                              <svg
                                width="9"
                                height="9"
                                viewBox="0 0 9 9"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  fill-rule="evenodd"
                                  clip-rule="evenodd"
                                  d="M8.06694 8.06694C8.31102 7.82286 8.31102 7.42714 8.06694 7.18306L1.81694 0.933059C1.57286 0.688981 1.17714 0.688981 0.933058 0.933059C0.688981 1.17714 0.688981 1.57286 0.933058 1.81694L7.18306 8.06694C7.42714 8.31102 7.82286 8.31102 8.06694 8.06694Z"
                                  fill="white"
                                />
                                <path
                                  fill-rule="evenodd"
                                  clip-rule="evenodd"
                                  d="M0.75 7.625C0.75 7.97018 1.02982 8.25 1.375 8.25H7.625C7.97018 8.25 8.25 7.97018 8.25 7.625V1.375C8.25 1.02982 7.97018 0.75 7.625 0.75C7.27982 0.75 7 1.02982 7 1.375V7H1.375C1.02982 7 0.75 7.27982 0.75 7.625Z"
                                  fill="white"
                                />
                              </svg>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
              </div>
              <div className="border-t border-[#E5E7EB] p-2 text-center text-sm font-medium">
                {position}
              </div>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between border-b-2 px-4 pb-[42px] pt-[40px]">
          <div className="text-sm">800m</div>
          <div className="flex gap-4">
            <span className="flex items-center gap-1">
              <div className="h-2 w-2 rounded-full bg-[#FFC20E]"></div>
              First Starter/*Limited data
            </span>
            <span className="flex items-center gap-1">
              <div className="h-2 w-2 rounded-full bg-[#FFC20E]"></div>
              Backmarker
            </span>
            <span className="flex items-center gap-1">
              <div className="h-2 w-2 rounded-full bg-[#FFC20E]"></div>
              Midfield
            </span>
            <span className="flex items-center gap-1">
              <div className="h-2 w-2 rounded-full bg-[#FFC20E]"></div>
              On Pace
            </span>
          </div>
          <div className="flex items-center gap-4">
            <button className="flex items-center gap-2 text-gray-600">
              <Printer className="h-4 w-4" /> Print
            </button>
            <button className="flex items-center gap-2 text-gray-600">
              <RotateCcw className="h-4 w-4" /> Reset
            </button>
            <div className="text-sm">Barrier</div>
          </div>
        </div>
        <div className="flex flex-row">
          <RaceDataCard index={0} />
          <RaceDataCard index={1} />
        </div>
      </div>
      <div className="mx-auto mt-[33px] grid grid-cols-2 gap-[30px]">
        {/* Last 600m Table */}
        <div className="overflow-hidden rounded-lg bg-white">
          <div className="mt-[25px] flex items-center justify-between border-b bg-gray-200 p-4">
            <div className="flex items-center gap-2 pl-[20px] text-[14px] font-[400]">
              <span>Average last 600 m</span>
              <Info className="h-4 w-4 text-[#657786]" />
            </div>
            <div className="pr-[72px] text-[14px] font-[400]">
              <select className="border bg-transparent px-3 text-sm">
                <option>Benchmark</option>
              </select>
            </div>
          </div>
          <div className="divide-y">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="flex justify-between p-4 text-[16px] font-[400]"
              >
                <span className="pl-[20px] font-medium">{stat.name}</span>
                <span className="pr-[72px] text-right">{stat.last600m}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Race Time Rating Table */}
        <div className="overflow-hidden rounded-lg bg-white">
          <div className="mt-6 flex items-center justify-between border-b bg-gray-200 p-4">
            <div className="flex items-center gap-2 pl-[20px] text-[16px] font-[400]">
              <span>Average race time rating</span>
              <Info className="h-4 w-4 text-[#657786]" />
            </div>
          </div>
          <div className="divide-y">
            {stats.map((stat, index) => (
              <div key={index} className="flex justify-between p-4">
                <span className="pl-[20px] font-medium">{stat.name}</span>
                <span className="pr-[72px] text-right">
                  {stat.raceTimeRating}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="mx-auto mt-[30px] rounded-xl bg-white">
        <div className="grid grid-cols-1 md:grid-cols-2">
          {/* Left Column - How it works */}
          <div className="space-y-6 border-r-2">
            <h2 className="border-b-2 p-8 text-[20px] font-[800]">
              How it works
            </h2>
            <div className="space-y-4 px-8 font-[16px] text-gray-700">
              <p>
                Successful punters have long known about the importance of
                Speedmaps – indicators of where each horse is likely to settle
                in the run which is an indicator to the expected tempo of the
                race.
              </p>
              <p>
                Tempo is vital indicator to the outcome of a race with pace
                often determining the chances of a horse well before the finish.
              </p>
              <p>
                Races run at a slow pace favour horses racing near the lead
                because they are able to conserve energy for the sprint to the
                finish, leaving horses back in the field with a mathematically
                difficult task to run them down in the straight.
              </p>
              <p>
                Conversely, when on-pacers compete for the early lead, a fast
                tempo usually prevails, leaving the runners close to the pace
                vulnerable to tiring in the straight, setting the race up for
                those back in the field on the home turn to sprint home and win.
              </p>
            </div>
          </div>

          {/* Right Column - Speed Sections */}
          <div className="space-y-6">
            {speedSections.map((section, index) => (
              <div
                key={index}
                className={`${index === speedSections.length - 1 ? "" : "border-b-2 border-[#f3f6f8]"} p-6`}
              >
                <h3 className="mb-3 text-[20px] text-lg font-[800]">
                  {section.title}
                </h3>
                <p className="font-[16px] text-gray-700">
                  {section.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default SpeedMap;
