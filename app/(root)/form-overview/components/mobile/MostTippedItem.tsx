"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { BIcon } from "@/components/ui/icons/BIcon";
import { ChevronDown, CirclePlus, SaveIcon } from "lucide-react";
import Image from "next/image";
import { FaStar } from "react-icons/fa6";
import { Slider } from "@/components/ui/slider";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { LongForm } from "./LongForm";
import { Head2Head } from "./Head2Head";
import { ShortForm } from "./ShortForm";
import styles from "./MostTippedItem.module.scss";
import { cn } from "@/lib/utils";
import { DiamondIcon } from "@/components/ui/icons/DiamondIcon";

interface MostTippedItemProps {
  disabled?: boolean;
  isFavourite?: boolean;
}

export const MostTippedItem = ({
  disabled,
  isFavourite,
}: MostTippedItemProps) => {
  return (
    <Accordion
      collapsible
      type="single"
      className={cn(disabled && styles.disabled)}
    >
      <AccordionItem
        value="history-details"
        className="border-b-0 border-t bg-white px-3 pb-3"
      >
        <div className="pt-2">
          <div className="flex justify-between">
            <div className="flex items-start">
              <div>
                <Image alt="" width={28} height={29} src="/img/shirt.png" />

                <AccordionTrigger
                  className="p-0"
                  iconComponent={
                    <ChevronDown className="mx-auto text-Font_SubColor_1"></ChevronDown>
                  }
                ></AccordionTrigger>
              </div>

              <div className="pl-3">
                <div className="flex items-center space-x-1 font-bold">
                  <svg
                    width="25"
                    height="24"
                    viewBox="0 0 25 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      x="0.590332"
                      y="-0.00634766"
                      width="24"
                      height="23.4364"
                      rx="3.60912"
                      fill="#283036"
                    />
                    <path
                      d="M11.4847 16.7102V6.71387H13.6809V16.7102H11.4847ZM8.57666 8.54653V6.71387H16.604V8.54653H8.57666Z"
                      fill="white"
                    />
                  </svg>
                  <BIcon className="rounded bg-mainFont px-2 py-2 text-white" />
                  <span className="text-xs font-normal">
                    1. Kyokushin (5){" "}
                    <span className="inline-flex items-center text-2xs text-Sub_Dark_color">
                      (<FaStar className="inline align-middle text-action1" />
                      92)
                    </span>
                  </span>
                </div>

                <div className="mt-1 flex text-2xs text-Sub_Dark_color">
                  <span className="flex-shrink-0 basis-10">60kg</span>

                  <span>
                    <b className="text-mainFont">T:</b> Claron Maher{" "}
                    <span className="inline-flex items-center text-2xs text-Sub_Dark_color">
                      (<FaStar className="inline align-middle text-action1" />
                      85)
                    </span>
                  </span>
                </div>

                <div className="mt-1 flex text-2xs text-Sub_Dark_color">
                  <span className="flex-shrink-0 basis-10">10x7x</span>

                  <span>
                    <b className="text-mainFont">J:</b> S F Field (a3) (57kg)
                  </span>

                  <span className="ml-1 inline-flex items-center text-2xs text-Sub_Dark_color">
                    (<FaStar className="inline align-middle text-action1" />
                    79)
                  </span>
                </div>
              </div>
            </div>

            <div className="flex items-center space-x-2 pl-3 text-sm font-bold">
              {isFavourite ? (
                <div className="inline-block flex-1 whitespace-nowrap rounded rounded-t bg-Subtle_dark text-center shadow">
                  <DiamondIcon className="mr-1 inline text-good_Green" />
                  <span className="align-middle">26.00</span>

                  <div className="rounded-b bg-action2 px-2 text-2xs">
                    Favourite
                  </div>
                </div>
              ) : (
                <div className="inline-block flex-1 rounded bg-Subtle_dark px-2.5 py-2 shadow">
                  26.00
                </div>
              )}
              <div className="inline-block flex-1 rounded bg-Subtle_dark px-2.5 py-2 shadow">
                4.00
              </div>
            </div>
          </div>

          <div className="mt-3 flex items-center">
            <Slider value={[(Math.random() * 100) | 0]} max={100} step={1} />
            <span className="relative bottom-0.5 pl-4 text-xs">Leader</span>
          </div>
        </div>

        {/* History */}
        <AccordionContent className="pt-5">
          <div className="text-xs">
            <strong className="font-helveticaNowDisplay text-sm">
              Last Start
            </strong>

            <div className="mt-0.5 bg-Subtle_dark_2">
              <div className="flex justify-between border-b px-2 py-2">
                <div className="border-l border-[#DAD8D8] pl-2 text-2xs text-Sub_Dark_color first:border-none">
                  Place <br />
                  <b className="text-[13px] font-medium text-mainFont">4/12</b>
                </div>

                <div className="border-l border-[#DAD8D8] pl-2 text-2xs text-Sub_Dark_color first:border-none">
                  800m/400m <br />
                  <b className="text-[13px] font-medium text-mainFont">
                    4th/2nd
                  </b>
                </div>

                <div className="border-l border-[#DAD8D8] pl-2 text-2xs text-Sub_Dark_color first:border-none">
                  L600 <br />
                  <b className="text-[13px] font-medium text-mainFont">33.30</b>
                </div>

                <div className="border-l border-[#DAD8D8] pl-2 text-2xs text-Sub_Dark_color first:border-none">
                  Dist/Track <br />
                  <b className="text-[13px] font-medium text-mainFont">
                    1600m/Glob
                  </b>
                </div>
              </div>

              <div className="px-1 pb-3">
                <span className="text-2xs text-Sub_Dark_color">
                  Runner comment
                </span>

                <p className="mt-1 text-2xs leading-relaxed">
                  Was well-supported at debut, made some head-way from midfield;
                  2nd of 12 at Pakenham Synthetic Mdn-Sw on August 5 over 1200m,
                  1.75 len behind Si Si Milano carrying 57kg at $3.80. Can build
                  on the right start to his career.
                </p>
              </div>

              <div className="flex justify-between border-y px-2 py-2">
                <div className="border-r border-[#DAD8D8] pr-2 text-2xs text-Sub_Dark_color last:border-none">
                  Prize Money <br />
                  <b className="text-[13px] text-mainFont">$4,590</b>
                </div>

                <div className="border-r border-[#DAD8D8] pr-2 text-2xs text-Sub_Dark_color last:border-none">
                  Overall <br />
                  <b className="text-[13px] text-mainFont">1 0- 1-0</b>
                </div>

                <div className="border-r border-[#DAD8D8] pr-2 text-2xs text-Sub_Dark_color last:border-none">
                  Win/Place <br />
                  <b className="text-[13px] text-mainFont">0% / 100%</b>
                </div>

                <div className="border-r border-[#DAD8D8] pr-2 text-2xs text-Sub_Dark_color last:border-none">
                  Rating <br />
                  <b className="text-[13px] text-mainFont">-</b>
                </div>
              </div>

              <div className="mt-3 flex space-x-1 px-2">
                <Button
                  variant="purple"
                  className="flex-1 shadow shadow-gray-400"
                >
                  <BIcon />
                </Button>

                <Button
                  variant="purple"
                  className="flex-1 shadow shadow-gray-400"
                >
                  <SaveIcon />
                </Button>

                <Button
                  variant="purple"
                  className="flex-1 shadow shadow-gray-400"
                >
                  <CirclePlus />
                </Button>
              </div>

              <Tabs defaultValue="short">
                <TabsList className="mt-3 flex space-x-1 px-2">
                  <TabsTrigger asChild value="short">
                    <Button className={styles.formTabTrigger}>
                      Short Form
                    </Button>
                  </TabsTrigger>

                  <TabsTrigger asChild value="long">
                    <Button className={styles.formTabTrigger}>Long Form</Button>
                  </TabsTrigger>

                  <TabsTrigger asChild value="head2head">
                    <Button className={styles.formTabTrigger}>
                      Head2Head
                      <span className="absolute right-1 top-1 h-4 w-4 rounded-xl bg-action1_bg text-xs text-action1">
                        5
                      </span>
                    </Button>
                  </TabsTrigger>
                </TabsList>

                <TabsContent value="short">
                  <ShortForm />
                </TabsContent>

                <TabsContent value="long">
                  <LongForm />
                </TabsContent>

                <TabsContent value="head2head">
                  <Head2Head />
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};
