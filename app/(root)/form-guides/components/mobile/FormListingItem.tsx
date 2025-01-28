import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import {
  ChevronDown,
  ChevronRight,
  CircleMinus,
  CirclePlus,
} from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { GetFormGuideRacesQuery } from "@/gql/graphql";
import { getCompetitorsData } from "../../../../utils/race/getCompetitorsData";
import { getPunterDayJS } from "@/utils/dateUtils";
import { HOUR_MINUTE_FORMAT } from "@/config/date";
import { useCountdown } from "@/hooks/useCountdown";
import { twMerge } from "tailwind-merge";

interface FormListingItemProps {
  data: GetFormGuideRacesQuery["racesCollection"]["edges"][number]["node"][];
}

export const FormListingItem = ({ data }: FormListingItemProps) => {
  const [isParentExpanded, setIsParentExpanded] = useState(false);
  const races = Object.values(data);
  const track = races[0].tracks;
  const firstUpcomingRace = races.find(
    (race) =>
      race.start_time && getPunterDayJS(race.start_time).isAfter(new Date()),
  );

  const upcomingRaceCountdown = useCountdown(firstUpcomingRace?.start_time);

  return (
    <Accordion collapsible type="single" className="px-3">
      <AccordionItem value="parent">
        <AccordionTrigger
          onClick={() => setIsParentExpanded(!isParentExpanded)}
          value="parent"
          className="justify-between rounded-md bg-white px-4"
          iconComponent={isParentExpanded ? <CircleMinus /> : <CirclePlus />}
        >
          <div className="flex flex-1 items-center justify-between pr-3 text-right">
            <span
              className={twMerge(
                "text-left text-sm",
                races[0]?.status === "ABANDONED" && "text-red-600 line-through",
              )}
            >
              {track.name}
              <span className="text-Font_SubColor_1"> {track.state}</span>
            </span>

            {firstUpcomingRace && (
              <div className="flex-shrink-0 flex-grow space-x-2 pl-4">
                <Button
                  asChild
                  variant="outline"
                  className="w-[38px] bg-Subtle_dark_2 app-text-body-small"
                >
                  <div className="no-underline">
                    R{firstUpcomingRace?.race_number}
                  </div>
                </Button>
                <Button
                  asChild
                  variant="dark"
                  className="bg-new_dark_1 px-3 app-text-body-small"
                >
                  <div className="no-underline">• {upcomingRaceCountdown}</div>
                </Button>
              </div>
            )}
          </div>
        </AccordionTrigger>

        <AccordionContent>
          {data.map((race) => (
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
                        getPunterDayJS(race.start_time).isBefore(new Date()) &&
                          "border border-[#FFE3EF] bg-[#F7F3F3] text-Sub_Dark_color",
                      )}
                    >
                      {getPunterDayJS(race.start_time).format(
                        HOUR_MINUTE_FORMAT,
                      )}
                    </Button>

                    <AccordionTrigger
                      iconComponent={
                        <ChevronDown className="text-Font_SubColor_1" />
                      }
                    />
                  </div>
                </div>

                <AccordionContent className="pl-[52px] pr-[8%]">
                  <table className="w-full">
                    <tbody>
                      {getCompetitorsData(race)
                        .sort((a, b) => {
                          return b.prices.top_tote - a.prices.top_tote;
                        })
                        .slice(0, 3)
                        .map((competitor, idx) => (
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
                                {competitor.prices.top_tote
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
          ))}
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};
