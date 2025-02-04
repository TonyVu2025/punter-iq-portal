import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import styles from "./MostTippedItem.module.scss";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogOverlay,
  DialogPortal,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { getOrdinalNum } from "@/utils/getOrdinalNum";
import { twMerge } from "tailwind-merge";
import { RaceResultSummaryCard } from "./RaceResultSummaryCard";

const LastStartItem = ({ position = 1 }) => {
  return (
    <Accordion collapsible type="single" className={styles.root}>
      <AccordionItem
        value="details"
        className={twMerge(styles.accordionItem, position === 1 && "font-bold")}
      >
        <div className="flex items-center justify-between gap-2 pl-2 text-xs text-Sub_Dark_color">
          <span className="min-w-[50px]">05/08/24</span>
          <span className="min-w-[50px]">HAWK*</span>
          <span className="min-w-[50px]">Good</span>
          <span className="min-w-[50px]">800</span>
          <span
            className={twMerge(
              "min-w-12 rounded-full px-1 py-0.5 text-center",
              position === 1 && "bg-action2 text-center",
            )}
          >
            {getOrdinalNum(position)}/8
          </span>
          <span>
            <AccordionTrigger
              value="what"
              className="p-0"
              iconComponent={<ChevronDown className={styles.accordionIcon} />}
            ></AccordionTrigger>
          </span>
        </div>

        <AccordionContent>
          <div className="mt-1 bg-SubDark_Color_3 p-4 pb-0">
            <div className="flex justify-between">
              <div className="basis-[140px]">
                <div className="flex justify-between space-x-5">
                  <b className="text-[12px] font-[700]">Margin:</b>

                  <span className="text-right text-[12px] font-[400]">4.8L</span>
                </div>

                <div className="flex justify-between space-x-5">
                  <b className="text-[12px] font-[700]">Jockey:</b>

                  <span className="text-right text-[12px] font-[400]">J R Collett</span>
                </div>
              </div>

              <div className="basis-[150px]">
                <div className="flex justify-between space-x-5">
                  <b className="text-[12px] font-[700]">Class:</b>

                  <span className="text-right text-[12px] font-[400]">Mdn</span>
                </div>

                <div className="flex justify-between space-x-5">
                  <b className="text-[12px] font-[700]">Time:</b>

                  <span className="text-right text-[12px] font-[400]">00.56.63</span>
                </div>
              </div>
            </div>

            <div className="flex justify-between">
              <div className="basis-[140px]">
                <div className="flex justify-between space-x-5">
                  <b className="text-[12px] font-[700]">Weight:</b>

                  <span className="text-right text-[12px] font-[400]">56.5kg</span>
                </div>

                <div className="flex justify-between space-x-5">
                  <b className="text-[12px] font-[700]">Barrier:</b>

                  <span className="text-right text-[12px] font-[400]">7</span>
                </div>
              </div>

              <div className="basis-[150px]">
                <div className="flex justify-between space-x-5">
                  <b className="text-[12px] font-[700]">Last 600m:</b>

                  <span className="text-right text-[12px] font-[400]">00.33.61</span>
                </div>

                <div className="flex justify-between space-x-5">
                  <b className="text-[12px] font-[700]">SP:</b>

                  <span className="text-right text-[12px] font-[400]">$13.00</span>
                </div>
              </div>
            </div>

            <div className="mt-4">
              <RaceResultSummaryCard />
            </div>

            <div className="flex justify-between border-y px-2 py-2">
              <div className="border-r border-[#DAD8D8] pr-2 text-2xs text-Sub_Dark_color last:border-none">
                <b className="text-[13px] text-mainFont font-[700]">55</b>
                <span className="block leading-tight text-[#657786] text-[10px] font-[400]">
                  Blocked <br />
                  for run
                </span>
              </div>

              <div className="border-r border-[#DAD8D8] pr-2 text-2xs text-[#657786] last:border-none">
                <b className="text-[13px] text-mainFont font-[700]">4th/2nd</b>
                <span className="block leading-tight text-[#657786] text-[10px] font-[400]">
                  Come from <br />
                  back
                </span>
              </div>

              <div className="border-[#DAD8D8] pr-2 text-2xs">
                <b className="text-[13px] text-mainFont font-[700]">33.30</b>
                <span className="block leading-tight text-[#657786] text-[10px] font-[400]">
                  Went back <br />
                  from barrier
                </span>
              </div>

              <div className="pt-2">
                <Dialog>
                  <DialogTrigger>
                    <Button variant="purple" size="sm" className="text-[13px] font-[700]">
                      Comment
                    </Button>
                  </DialogTrigger>
                  <DialogPortal>
                    <DialogOverlay />
                    <DialogTitle />
                    <DialogContent contentClassName="bg-Subtle_dark_2">
                      <div className="grid grid-cols-5 gap-[10px] pt-8 text-2xs">
                        {new Array(10).fill("").map((_, index) => (
                          <label key={index}>
                            <input type="checkbox" className="peer hidden" />
                            <div className="rounded-lg border border-white p-2 font-normal leading-tight text-Sub_Dark_color peer-checked:bg-action_ll1 peer-checked:text-white lg:p-3 peer-checked:[&>span]:text-white">
                              <span className="peer-checked: mb-0.5 block text-xs font-bold text-mainFont">
                                55
                              </span>
                              Blocked For Run
                            </div>
                          </label>
                        ))}
                      </div>

                      <textarea
                        className="mt-2 w-full rounded border bg-white p-4"
                        rows={10}
                      ></textarea>

                      <div className="mt-2 space-x-2 text-right">
                        <DialogClose asChild>
                          <Button
                            variant="outline"
                            className="border-Sub_Dark_color bg-transparent text-Sub_Dark_color"
                          >
                            Cancel
                          </Button>
                        </DialogClose>
                        <Button variant="green">Add Comment</Button>
                      </div>
                    </DialogContent>
                  </DialogPortal>
                </Dialog>
              </div>
            </div>
          </div>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};

export const LongForm = () => {
  return (
    <>
      <div className="px-2">
        {Array.from({ length: 4 }).map((_, index) => (
          <LastStartItem key={index} position={index + 1} />
        ))}
      </div>

      <div className="bg-[#FFF0C8] py-2 text-center text-2xs text-action1">
        Spell - 201 days
      </div>

      <div className="border-t pt-2 text-center text-2xs">
        Trainer changed from <span className="text-action_ll1">RJ Quinton</span>{" "}
        to <span className="text-action_ll1">Michael Freedman</span>
      </div>

      <div className="px-2">
        <LastStartItem position={5} />
      </div>

      <div className="py-1.5 text-center text-sm text-action_ll1">
        View More <ChevronDown className="mb-0.5 inline" />
      </div>
    </>
  );
};
