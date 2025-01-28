"use client";

import { Tabs, TabsContent, TabsList } from "@/components/ui/tabs";
import { CustomTrigger } from "./CustomTrigger";
import { MostTippedItem } from "./MostTippedItem";
import {
  Select,
  SelectContent,
  SelectIcon,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ChevronDown } from "lucide-react";
import { FaCaretUp, FaCaretDown } from "react-icons/fa6";
import { useState } from "react";
import Image from "next/image";
import { LlSlider } from "@/components/ui/LlSlider";
import { Pagination } from "swiper/modules";
import Market from "./Market";
import { TipTracker } from "./TipTracker";
import { OddsCard } from "./Odds";
import RunnerCompare from "./RunnerCompare";

export const MostTipped = () => {
  const [runner, setRunner] = useState("runner");
  const [win, setWin] = useState("win");
  const [place, setPlace] = useState("place");
  const [betPlatform, setBetPlatform] = useState("sportsbet");

  return (
    <div className="mt-5">
      <LlSlider pagination modules={[Pagination]} paginationStyle="alt">
        {new Array(4).fill(null).map((_, idx) => (
          <div key={idx}>
            <h4 className="app-text-h4">Kane&apos;s Tips</h4>

            <div className="mt-2 rounded-[10px] bg-white p-[10px]">
              <div className="flex space-x-2">
                {new Array(4).fill("").map((_, index) => (
                  <div
                    className="flex-1 rounded-[6px] bg-Subtle_dark px-3 pb-1 text-sm drop-shadow-md"
                    key={index}
                  >
                    <img
                      src="/img/shirt.png"
                      width={26}
                      alt=""
                      className="inline align-middle"
                    ></img>

                    <div className="inline-block text-center align-middle leading-tight">
                      <span className="text-2xs text-Sub_Dark_color">13.</span>
                      <br />
                      <strong>4.00</strong>
                    </div>
                  </div>
                ))}
              </div>

              <p className="mt-2.5 text-xs leading-relaxed">
                WAR DRAMA (13) peaks and is ready to win for the premier stable.
                Measure his chances on the half-length defeat at Geelong
                two-back and he&apos;ll carry just 54kg with the 3kg claim. BOLD
                RES...
                <button className="font-bold text-action_ll1">Show More</button>
              </p>
            </div>
          </div>
        ))}
      </LlSlider>

      <div>
        {/* Tabs navigation */}
        <Tabs
          defaultValue="overview"
          className="relative mt-4 rounded-xl bg-white p-4"
        >
          <TabsList className="w-full justify-between overflow-auto overflow-y-hidden scroll-auto px-0">
            <CustomTrigger value="overview">Overview</CustomTrigger>
            <CustomTrigger value="full-form">Full Form</CustomTrigger>
            <CustomTrigger value="odds">Odds</CustomTrigger>
            <CustomTrigger value="speed-map">Speed Map</CustomTrigger>
            <CustomTrigger
              value="quick-home"
              className="flex-none whitespace-nowrap"
            >
              Quick Form
            </CustomTrigger>
            <CustomTrigger
              value="runner-compare"
              className="flex-none whitespace-nowrap"
            >
              Runner Compare
            </CustomTrigger>
            <CustomTrigger
              value="market"
              className="flex-none whitespace-nowrap"
            >
              The market
            </CustomTrigger>
            <CustomTrigger
              value="tip-tracker"
              className="flex-none whitespace-nowrap"
            >
              Tip Tracker
            </CustomTrigger>
          </TabsList>

          <div className="mt-3 flex justify-between">
            <Select value={runner} onValueChange={setRunner}>
              <SelectTrigger className="w-auto bg-Subtle_dark px-2 text-sm">
                <SelectValue />

                <SelectIcon className="pl-1 text-[#D9D9D9]">
                  <FaCaretUp></FaCaretUp>
                  <FaCaretDown className="mt-[-7px]"></FaCaretDown>
                </SelectIcon>
              </SelectTrigger>

              <SelectContent>
                <SelectItem value="runner">Runner</SelectItem>
                <SelectItem value="item2">Item 2</SelectItem>
              </SelectContent>
            </Select>

            <Select value={win} onValueChange={setWin}>
              <SelectTrigger className="w-auto text-sm">
                <SelectValue />

                <SelectIcon className="pl-1 text-[#D9D9D9]">
                  <FaCaretUp></FaCaretUp>
                  <FaCaretDown className="mt-[-7px]"></FaCaretDown>
                </SelectIcon>
              </SelectTrigger>

              <SelectContent>
                <SelectItem value="win">Win</SelectItem>
              </SelectContent>
            </Select>

            <Select value={place} onValueChange={setPlace}>
              <SelectTrigger className="w-auto text-sm">
                <SelectValue />

                <SelectIcon className="pl-1 text-[#D9D9D9]">
                  <FaCaretUp></FaCaretUp>
                  <FaCaretDown className="mt-[-7px]"></FaCaretDown>
                </SelectIcon>
              </SelectTrigger>

              <SelectContent>
                <SelectItem value="place">Place</SelectItem>
                <SelectItem value="item2">Item 2</SelectItem>
              </SelectContent>
            </Select>

            <Select value={betPlatform} onValueChange={setBetPlatform}>
              <SelectTrigger className="h-9 w-auto border border-Font_SubColor_1 bg-Subtle_dark px-3 text-sm">
                <SelectValue />

                <SelectIcon className="pl-1 text-Font_SubColor_1">
                  <ChevronDown />
                </SelectIcon>
              </SelectTrigger>

              <SelectContent>
                <SelectItem value="sportsbet">
                  <Image
                    alt=""
                    src="/img/sample-sponsor-2.svg"
                    width={63}
                    height={15}
                  />
                </SelectItem>
                <SelectItem value="item2">Item 2</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Tabs content */}
          <TabsContent value="overview" className="mt-3">
            <MostTippedItem />
            <MostTippedItem />
            <MostTippedItem isFavourite />
            <MostTippedItem disabled />
          </TabsContent>

          <TabsContent value="full-form">Full form</TabsContent>
          <TabsContent value="market">
            <Market />
          </TabsContent>
          <TabsContent value="tip-tracker">
            <TipTracker />
          </TabsContent>
          <TabsContent value="odds">
            <OddsCard />
          </TabsContent>
          <TabsContent value="runner-compare">
            <RunnerCompare />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};
