"use client";

import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectIcon,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { cn } from "@/lib/utils";
import { getOrdinalNum } from "@/utils/getOrdinalNum";
import { Bell, ChevronDown } from "lucide-react";
import { useState } from "react";
import { FaCrown } from "react-icons/fa6";

export const RaceDetailCard = () => {
  const [activeTab, setActiveTab] = useState("sale");

  return (
    <div className="mt-6 rounded-xl bg-white p-3">
      <div className="flex items-center justify-between">
        <Select value={activeTab} onValueChange={setActiveTab}>
          <SelectTrigger className="w-auto bg-transparent text-lg font-extrabold">
            <SelectValue />

            <SelectIcon>
              <ChevronDown className="relative top-0.5 ml-1" />
            </SelectIcon>
          </SelectTrigger>

          <SelectContent>
            <SelectItem value="sale">Sale (VIC)</SelectItem>
            <SelectItem value="2">Item 2</SelectItem>
            <SelectItem value="3">Item 3</SelectItem>
            <SelectItem value="4">Item 4</SelectItem>
          </SelectContent>
        </Select>
        <span className="text-xs text-Font_SubColor_1">
          Soft (16) • Fine{" "}
          <svg
            className="inline"
            width="8"
            height="8"
            viewBox="0 0 8 8"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M4.00016 6C3.46973 6 2.96102 5.78929 2.58595 5.41422C2.21088 5.03914 2.00016 4.53044 2.00016 4C2.00016 3.46957 2.21088 2.96086 2.58595 2.58579C2.96102 2.21072 3.46973 2 4.00016 2C4.5306 2 5.0393 2.21072 5.41438 2.58579C5.78945 2.96086 6.00016 3.46957 6.00016 4C6.00016 4.53044 5.78945 5.03914 5.41438 5.41422C5.0393 5.78929 4.5306 6 4.00016 6ZM3.66683 0.333336H4.3335V1.33334H3.66683V0.333336ZM3.66683 6.66667H4.3335V7.66667H3.66683V6.66667ZM1.17183 1.643L1.64316 1.17167L2.35016 1.87867L1.87883 2.35L1.17183 1.64334V1.643ZM5.65016 6.12134L6.1215 5.65L6.8285 6.357L6.35716 6.82834L5.65016 6.12134ZM6.35716 1.17134L6.8285 1.643L6.1215 2.35L5.65016 1.87867L6.35716 1.17167V1.17134ZM1.87883 5.65L2.35016 6.12134L1.64316 6.82834L1.17183 6.357L1.87883 5.65ZM7.66683 3.66667V4.33334H6.66683V3.66667H7.66683ZM1.3335 3.66667V4.33334H0.333496V3.66667H1.3335Z"
              fill="#09121F"
            />
          </svg>
        </span>
      </div>

      <div className="flex justify-between overflow-auto border-y py-1.5">
        {new Array(10).fill("").map((_, index) => (
          <span
            key={index}
            className={cn(
              "flex-shrink-0 px-1.5 py-1 font-light",
              index > 4 && "font-bold",
              index === 9 && "rounded-3xl bg-action_ll1 text-white",
            )}
          >
            R{index + 1}
          </span>
        ))}
      </div>

      <div className="flex justify-between pb-2 pt-4">
        <div className="text-xs">
          <strong className="inline-block w-[160px] overflow-hidden text-ellipsis text-nowrap">
            Ladbrokes Odds Surge Bm70 Handofsdasd...
          </strong>
          <div className="text-Sub_Dark_color">15:30 • 1200m • BM70</div>
        </div>

        <div className="space-x-3">
          <Button variant="newDark">• 23m</Button>
          <Bell className="inline"></Bell>
        </div>
      </div>

      <Tabs defaultValue="results" className="mt-2">
        <TabsList className="flex justify-center space-x-1 bg-white">
          <TabsTrigger value="results" asChild>
            <Button
              variant="subtleDark"
              className="basis-[123px] data-[state=active]:bg-action_ll1 data-[state=active]:text-white"
            >
              Results
            </Button>
          </TabsTrigger>

          <TabsTrigger value="exotic" asChild>
            <Button
              variant="subtleDark"
              className="basis-[123px] data-[state=active]:bg-action_ll1 data-[state=active]:text-white"
            >
              Exotic
            </Button>
          </TabsTrigger>
        </TabsList>
        <TabsContent value="results">
          {new Array(4).fill("").map((_, index) => (
            <div
              key={index}
              className="flex justify-between border-b py-2 last:border-none"
            >
              <div className="flex items-center">
                <div className="relative pb-4">
                  <img src="/img/shirt.png" width="50" alt="" />

                  <span
                    className={cn(
                      "absolute bottom-0 left-0 w-full rounded-[2px] bg-Sub_Dark_color pb-1 pt-0.5 text-center text-2xs font-bold leading-none text-white",
                      index === 0 && "bg-good_Green",
                      (index === 1 || index === 2) && "bg-new_dark_1",
                    )}
                  >
                    {index === 0 && (
                      <FaCrown className="inline align-middle text-action2" />
                    )}
                    <span className="ml-1 align-middle">
                      {getOrdinalNum(index + 1)}
                    </span>
                  </span>
                </div>

                <div className="pl-2 text-2xs">
                  <h2 className="text-xs font-bold">
                    13e. War Drama{" "}
                    <span className="font-normal text-Sub_Dark_color">(9)</span>
                  </h2>
                  <div className="mt-0.5 text-Sub_Dark_color">
                    <b className="text-mainFont">T:</b> Claron Maher
                  </div>
                  <div className="mt-0.5 text-Sub_Dark_color">
                    <b className="text-mainFont">J:</b> S F Field (a3) (57kg)
                  </div>
                </div>
              </div>

              <div className="text-xs">
                <img
                  src="/img/sample-sponsor-2.svg"
                  alt=""
                  className="mb-3 ml-auto block"
                />

                <div className="inline-block">
                  <div className="inline-block border-l px-2 first:border-none last:pr-0.5">
                    <span className="text-2xs text-Sub_Dark_color">
                      {index == 0 ? "Time" : "Margin"}
                    </span>
                    <br />
                    <strong>{index === 0 ? "1:10" : "5.25L"}</strong>
                  </div>

                  <div className="inline-block border-l px-2 first:border-none last:pr-0.5">
                    <span className="text-2xs text-Sub_Dark_color">Win</span>
                    <br />
                    <strong>$4.25</strong>
                  </div>

                  {index > 0 && index < 3 && (
                    <div className="inline-block border-l px-2 first:border-none last:pr-0.5">
                      <span className="text-2xs text-Sub_Dark_color">
                        Place
                      </span>
                      <br />
                      <strong>$1.70</strong>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </TabsContent>

        <TabsContent value="exotic">
          {new Array(4).fill("").map((_, index) => (
            <div
              key={index}
              className="mt-2 flex items-center justify-between space-x-1 border-t pt-2 text-xs first:border-none"
            >
              <div>
                <strong className="block">Quinella</strong>

                <div>
                  {new Array(index + 1).fill(null).map((_, idx) => (
                    <div
                      key={idx}
                      className="inline-block border-r pl-2 pr-4 text-2xs text-Sub_Dark_color first:pl-0 last:border-none"
                    >
                      {getOrdinalNum(idx + 1)} <br />
                      <strong className="inline-block h-[19px] w-[19px] rounded bg-Subtle_dark text-center text-xs leading-[19px] text-mainFont">
                        {7 + idx}
                      </strong>
                    </div>
                  ))}
                </div>
              </div>

              <strong>$3896.90</strong>
            </div>
          ))}
        </TabsContent>
      </Tabs>
    </div>
  );
};
