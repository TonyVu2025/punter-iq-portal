import { NextToGoRow } from "@/(root)/form-guides/components/desktop/RacingTable.types";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { HOUR_MINUTE_FORMAT } from "@/config/date";
import { cn } from "@/lib/utils";
import { getPunterDayJS } from "@/utils/dateUtils";
import { ChevronDown, ChevronRight } from "lucide-react";
import Link from "next/link";

export const NextToGoFormListingItem = ({ race }: { race: NextToGoRow }) => {
  return (
    <Accordion key={race.id} asChild collapsible type="single">
      <AccordionItem
        className="bg-white transition-colors last:border-0 data-[state=open]:bg-transparent"
        value="child"
      >
        <div className="flex items-center justify-between px-3 pt-1">
          <div className="flex text-xs">
            <div className="h-[30px] w-[30px] flex-none rounded-full bg-[#E7E1E4] text-center leading-[30px]">
              R{race.race_number}
            </div>
            <div className="pl-2 app-text-body-small">
              <strong>{race.name}</strong>
              <br />
              <span className="text-2xs text-Sub_Dark_color">
                {race.distance}m
              </span>
            </div>
          </div>

          <div className="flex items-center space-x-4 pl-3">
            <Button
              variant="dark"
              className={cn(
                "w-[68px] bg-new_dark_1 app-text-body-small",
                race.race_number === 2 &&
                  "border border-[#FFE3EF] bg-[#F7F3F3] text-Sub_Dark_color",
              )}
            >
              {getPunterDayJS(race.start_time).format(HOUR_MINUTE_FORMAT)}
            </Button>

            <AccordionTrigger
              iconComponent={<ChevronDown className="text-Font_SubColor_1" />}
            />
          </div>
        </div>

        <AccordionContent className="pl-[52px] pr-[8%]">
          <table className="w-full">
            <tbody>
              {race.competitors.map((competitor, idx) => (
                <tr key={idx} className="border-b py-2 text-2xs">
                  <td className="py-1 pr-2 leading-normal">
                    <strong className="text-nowrap text-[13px]">
                      {competitor.name}{" "}
                      <span className="font-normal text-Sub_Dark_color">
                        {competitor.tabNo}
                      </span>
                    </strong>
                    <p className="text-xs text-Sub_Dark_color">
                      <b className="text-mainFont">J:</b>{" "}
                      {competitor.jockey ? (
                        <>
                          {competitor.jockey.full_name || "N/A "} (
                          {competitor.jockey.weight}kg)
                        </>
                      ) : (
                        "N/A "
                      )}
                    </p>
                  </td>

                  <td className="text-nowrap px-0.5 text-action_ll2">
                    15 Tips
                  </td>

                  <td className="px-2">
                    <Button
                      variant="muted"
                      className="h-auto w-full px-2.5 py-1 text-2xs"
                    >
                      {Number.isFinite(competitor.prices?.top_tote)
                        ? `$${competitor.prices.top_tote}`
                        : "N/A"}
                    </Button>
                  </td>

                  <td>
                    <img alt="" src="/img/sample-sponsor-2.svg" />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          <Link
            href={"/form-overview"}
            className="block py-2.5 text-center text-action_ll1"
          >
            View Full Form
            <ChevronRight size={20} className="inline align-middle" />
          </Link>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};
