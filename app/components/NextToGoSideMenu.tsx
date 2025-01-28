import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Clock10, MoveUpRight } from "lucide-react";
import { NextToGoRow } from "@/(root)/form-guides/components/desktop/RacingTable.types";
import Image from "next/image";
import { useCountdown } from "@/hooks/useCountdown";
import Link from "next/link";
import type { getCompetitorsData } from "@/utils/race/getCompetitorsData";

interface NextToGoSideMenuProps {
  race: Omit<NextToGoRow, "competitors"> & {
    // TODO: refactor this. Instead of using Top4 interface, use ReturnType of mapping function.
    competitors: ReturnType<typeof getCompetitorsData>;
  };
}

const NextToGoSideMenu = ({ race }: NextToGoSideMenuProps) => {
  const countdown = useCountdown(race.start_time.toString());

  return (
    <Accordion type="single" collapsible>
      <AccordionItem value="child">
        <AccordionTrigger
          asChild
          iconComponent={<></>}
          iconClassName={`right-2`}
        >
          <div
            className={`flex w-full justify-between px-7 py-3 hover:no-underline`}
          >
            <span className="w-8/12 text-start font-helveticaNowDisplay font-extrabold text-mainFont">
              {`${race.name} - Race ${race.race_number}`}
            </span>
            <Button
              variant="muted"
              className={`flex h-[2.15rem] w-[106px] items-center space-x-1 rounded-md p-2 font-bold ${
                countdown === "Finished" ? "bg-[#4ADE80]" : "bg-[#EB5757]"
              }`}
            >
              {countdown === "Finished" ? null : <Clock10 size={16} />}
              <span>{countdown}</span>
            </Button>
          </div>
        </AccordionTrigger>
        <AccordionContent className="overflow-x-hidden border-t border-[#F3F6F8] bg-Subtle_dark px-7">
          <table className="w-full">
            <colgroup>
              <col />
              <col width={300} />
              <col width={100} />
              <col />
            </colgroup>
            <tbody>
              {race.competitors.map((competitor, ind) => (
                <tr key={ind} className="border-b last:border-none">
                  <td>
                    <Image
                      className="max-w-none"
                      src="/img/shirt.png"
                      width={30}
                      height={60}
                      alt="shirt"
                    />
                  </td>
                  <td className="px-4 py-1 leading-normal">
                    <span className="text-base">
                      {`${competitor.tabNo} - ${competitor.name}`}

                      {competitor.barrierNo && (
                        <small> ({competitor.barrierNo})</small>
                      )}
                    </span>
                    <div className="mt-1 text-[13px] text-Font_SubColor_1">
                      <span>
                        T:{" "}
                        {competitor.trainer?.full_name
                          ? competitor.trainer.full_name
                          : "N/A"}
                      </span>
                      <br />
                      <span>
                        J:{" "}
                        {competitor.jockey?.full_name
                          ? competitor.jockey.full_name
                          : "N/A"}
                      </span>
                    </div>
                  </td>

                  <td className="text-base text-action_ll2">15 Tips</td>

                  <td className="text-right">
                    <Link href="/form-overview">
                      <Button
                        variant="muted"
                        className="inline-flex h-[2.15rem] w-[80px] justify-between gap-2 rounded-md bg-[#F97316] p-2 font-bold"
                      >
                        <span className="flex-1">
                          {Number.isFinite(competitor.prices?.sp)
                            ? `$ ${competitor.prices.sp}`
                            : "N/A"}
                        </span>
                        <MoveUpRight size={16} />
                      </Button>
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};

export default NextToGoSideMenu;
