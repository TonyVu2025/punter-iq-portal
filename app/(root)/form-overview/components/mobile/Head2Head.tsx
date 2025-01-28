import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import styles from "./MostTippedItem.module.scss";
import { ChevronDown } from "lucide-react";
import { FaArrowUp } from "react-icons/fa6";
import { RaceResultSummaryCard } from "./RaceResultSummaryCard";

const Head2HeadItem = () => {
  return (
    <Accordion collapsible type="single" className={styles.root}>
      <AccordionItem value="details" className={styles.accordionItem}>
        <div className="w-full pl-2 text-xs text-Sub_Dark_color">
          <AccordionTrigger
            className="w-full flex-1 justify-between py-2 hover:no-underline"
            iconComponent={
              <ChevronDown size={16} className={styles.accordionIcon} />
            }
          >
            <div className="flex items-center space-x-1">
              <strong className="h-[26px] w-[26px] flex-none rounded-full bg-action1 leading-[26px] text-white">
                1st
              </strong>

              <div className="pl-2 text-left">
                <strong>3. Zougo Boss (9)</strong>

                <p className="mt-0.5 rounded-full bg-action2 px-2 py-0.5 text-Sub_Dark_color">
                  J: Joe Bowditch 58kg (a3)
                </p>
              </div>
            </div>
          </AccordionTrigger>
        </div>

        <AccordionContent>
          <div className="mt-1 bg-SubDark_Color_3 p-3 pb-0 text-xs">
            <div className="flex justify-between">
              <div className="basis-[140px]">
                <div className="flex justify-between space-x-5">
                  <b>Track:</b>

                  <span className="text-right">Hawkesbury</span>
                </div>

                <div className="flex justify-between space-x-5">
                  <b>Cond:</b>

                  <strong className="text-right text-Blue_Main_Official_4">
                    Soft 5
                  </strong>
                </div>
              </div>

              <div className="basis-[150px]">
                <div className="flex justify-between space-x-5">
                  <b>Days Since:</b>

                  <span className="text-right">28 Days</span>
                </div>

                <div className="flex justify-between space-x-5">
                  <b>Margin:</b>

                  <span className="text-right">3.1L</span>
                </div>
              </div>
            </div>

            <div className="flex justify-between">
              <div className="basis-[140px]">
                <div className="flex justify-between space-x-5">
                  <b>Dist:</b>

                  <span className="text-right">1600m</span>
                </div>
              </div>

              <div className="basis-[150px]">
                <div className="flex justify-between space-x-5">
                  <b>Barrier:</b>

                  <span className="text-right">10</span>
                </div>
              </div>
            </div>

            <div className="flex justify-between">
              <div className="basis-[140px]">
                <div className="flex items-center justify-between space-x-5">
                  <b>Class:</b>

                  <span className="text-right">
                    MDN-BT{" "}
                    <FaArrowUp
                      className="mb-1 inline text-good_Green"
                      size={12}
                    />
                  </span>
                </div>
              </div>

              <div className="basis-[150px]">
                <div className="flex justify-between space-x-5">
                  <b>Odds:</b>

                  <span className="text-right">$5.00</span>
                </div>
              </div>
            </div>

            <div className="flex justify-between">
              <div className="basis-[140px]">
                <div className="flex items-center justify-between space-x-5">
                  <b>Rail:</b>

                  <span className="text-right">True</span>
                </div>
              </div>

              <div className="basis-[150px]">
                <div className="flex justify-between space-x-5">
                  <b>L600m:</b>

                  <span className="text-right">33.30</span>
                </div>
              </div>
            </div>

            <div className="flex justify-between">
              <div className="basis-[140px]">
                <div className="flex items-center justify-between space-x-5">
                  <b>800m/400m:</b>

                  <span className="text-right">4th/2nd</span>
                </div>
              </div>

              <div className="basis-[150px]">
                <div className="flex justify-between space-x-5">
                  <b>Time:</b>

                  <span className="text-right">1:10</span>
                </div>
              </div>
            </div>

            <div className="flex justify-between">
              <div className="basis-[140px]">
                <div className="flex items-center justify-between space-x-5">
                  <b>W/s:</b>

                  <span className="text-right">3</span>
                </div>
              </div>

              <div className="basis-[150px]"></div>
            </div>

            <div className="mt-4">
              <RaceResultSummaryCard />
            </div>

            <div className="flex justify-between border-y px-2 py-5 text-center">
              <div className="border-r border-[#DAD8D8] pr-4 text-2xs text-Sub_Dark_color last:border-none">
                <b className="text-[13px] text-mainFont">55</b>
                <span className="block leading-tight text-Sub_Dark_color">
                  Blocked for run
                </span>
              </div>

              <div className="border-r border-[#DAD8D8] pr-4 text-2xs text-Sub_Dark_color last:border-none">
                <b className="text-[13px] text-mainFont">22</b>
                <span className="block leading-tight text-Sub_Dark_color">
                  Come from back
                </span>
              </div>

              <div className="border-[#DAD8D8] text-2xs">
                <b className="text-[13px] text-mainFont">12</b>
                <span className="block leading-tight text-Sub_Dark_color">
                  Went back from barrier
                </span>
              </div>
            </div>
          </div>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};

export const Head2Head = () => {
  return (
    <>
      <div className="border-y py-0.5 text-center text-base font-bold">
        Race 4: Barrier Trial
      </div>

      <div className="px-2">
        <Head2HeadItem />
      </div>

      <div className="px-2">
        <Head2HeadItem />
      </div>

      <div className="px-2">
        <Head2HeadItem />
      </div>

      <div className="border-y py-1 text-center text-base font-bold">
        Race 3: Grason Park Mdn
      </div>

      <div className="px-2">
        <Head2HeadItem />
      </div>

      <div className="px-2">
        <Head2HeadItem />
      </div>

      <div className="px-2">
        <Head2HeadItem />
      </div>
    </>
  );
};
