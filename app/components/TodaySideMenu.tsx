import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Clock10, MoveUpRight, Shield } from "lucide-react";
import { useState } from "react";
import { GetFormGuideRacesQuery } from "@/gql/graphql";
import { getPunterDayJS } from "@/utils/dateUtils";
import { HOUR_MINUTE_FORMAT } from "@/config/date";
import { useCountdown } from "@/hooks/useCountdown";
import { getCompetitorsData } from "@/utils/race/getCompetitorsData";
import { FaCaretDown } from "react-icons/fa6";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./ui/tooltip";

interface FormListingItemProps {
  data: GetFormGuideRacesQuery["racesCollection"]["edges"][number]["node"][];
}

const RaceCountdown = ({
  race,
}: {
  race: FormListingItemProps["data"][number];
}) => {
  const raceStartTime = getPunterDayJS(race.start_time);
  const raceCountdown = useCountdown(race.start_time);
  const isHappenInNextHour = raceStartTime
    .add(-1, "hour")
    .isBefore(getPunterDayJS());

  return (
    <Button
      variant="ghost"
      className={cn(
        "font-bold text-white app-text-body-small",
        isHappenInNextHour ? "bg-action4" : "bg-good_Green",
        raceStartTime.isBefore(new Date()) &&
          "border border-[#FFE3EF] bg-[#F7F3F3] text-Sub_Dark_color",
      )}
    >
      <Clock10 size={14} className="mr-1 translate-y-[1px]" />
      {isHappenInNextHour
        ? raceCountdown
        : `Today at ${raceStartTime.format(HOUR_MINUTE_FORMAT)}`}
    </Button>
  );
};

export const TodaySideMenu = ({ data }: FormListingItemProps) => {
  const [isParentExpanded, setIsParentExpanded] = useState(false);
  const races = Object.values(data);
  const track = races[0].tracks;
  const firstUpcomingRace = races.find(
    (race) =>
      race.start_time && getPunterDayJS(race.start_time).isAfter(new Date()),
  );
  const maxRaceNumber = Math.max(
    ...races.map((race) => race.race_number as number),
  );

  return (
    <Accordion collapsible type="single" className="px-3">
      <AccordionItem value="parent">
        <AccordionTrigger
          asChild
          onClick={() => setIsParentExpanded(!isParentExpanded)}
          value="parent"
          iconComponent={
            <FaCaretDown size={14} className="text-Font_SubColor_1" />
          }
          className="rounded-md bg-white px-4"
        >
          <div className="py-1">
            <div className="text-base font-bold text-mainFont">
              {track?.name} - {track?.state}
            </div>
            {firstUpcomingRace && (
              <span className="w-full text-sm text-Font_SubColor_1">
                R{firstUpcomingRace?.race_number} of R{maxRaceNumber}
              </span>
            )}
          </div>
        </AccordionTrigger>

        <AccordionContent>
          {data.map((race) => {
            const isResulted = !!race.top_4_numbers?.length;

            return (
              <Accordion key={race.id} asChild collapsible type="single">
                <AccordionItem
                  className="bg-white transition-colors last:border-0 data-[state=open]:bg-transparent"
                  value="child"
                >
                  <AccordionTrigger iconComponent={<></>} asChild>
                    <div className="flex w-full items-center justify-between px-3 pt-1">
                      <div className="flex items-center text-xs">
                        <div className="h-[30px] w-[30px] flex-none rounded-full bg-[#E7E1E4] text-center leading-[30px]">
                          R{race.race_number}
                        </div>
                        <div className="pl-2 text-base">
                          <strong>{race.name}</strong>
                          <div className="text-xs text-Sub_Dark_color">
                            {race.distance}m
                          </div>
                        </div>
                      </div>

                      {isResulted ? (
                        <Button variant="muted">Resulted</Button>
                      ) : (
                        <RaceCountdown race={race} />
                      )}
                    </div>
                  </AccordionTrigger>

                  <AccordionContent className="pl-[52px] pr-3">
                    <table className="w-full">
                      <tbody>
                        {!isResulted
                          ? getCompetitorsData(race)
                              .sort((a, b) => {
                                if (a.prices.sp === 0) return 1; // Place `a` after all other entries
                                if (b.prices.sp === 0) return -1; // Place `b` after all other entries
                                return a.prices.sp - b.prices.sp; // Standard ascending sort
                              })
                              .slice(0, 3)
                              .map((competitor, idx) => (
                                <tr
                                  key={idx}
                                  className="border-b text-sm last:border-0"
                                >
                                  <td className="py-2 pr-2 leading-normal">
                                    <strong className="text-nowrap">
                                      {competitor.name}{" "}
                                      <span className="font-normal text-Sub_Dark_color">
                                        {competitor.tabNo}
                                      </span>
                                    </strong>
                                    <p className="text-xs text-Sub_Dark_color">
                                      <b className="text-mainFont">J:</b>{" "}
                                      {competitor.jockey ? (
                                        <>
                                          {competitor.jockey.full_name ||
                                            "N/A "}{" "}
                                          ({competitor.jockey.weight}kg)
                                        </>
                                      ) : (
                                        "N/A "
                                      )}
                                    </p>
                                  </td>

                                  <td className="text-nowrap px-0.5 text-action_ll2">
                                    15 Tips
                                  </td>

                                  <td className="text-right">
                                    <Button
                                      variant="muted"
                                      className="inline-flex h-[2.15rem] min-w-[80px] justify-between gap-2 rounded-md bg-[#F97316] p-2 font-bold"
                                    >
                                      <span className="flex-1">
                                        {Number.isFinite(competitor.prices?.sp)
                                          ? `$ ${competitor.prices.sp}`
                                          : "N/A"}
                                      </span>
                                      <MoveUpRight size={16} />
                                    </Button>
                                  </td>
                                </tr>
                              ))
                          : getCompetitorsData(race)
                              .filter((competitor) =>
                                race.top_4_numbers.includes(competitor.tabNo),
                              )
                              .sort((a, b) => {
                                return a.finalPosition - b.finalPosition; // Standard ascending sort
                              })
                              .map((competitor, idx) => (
                                <tr key={idx} className="text-sm last:border-0">
                                  <td className="py-2 pr-2 leading-normal">
                                    <span className="relative inline-block align-middle">
                                      <Shield size={28} />
                                      <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform text-sm text-Sub_Dark_color">
                                        {competitor.finalPosition}
                                      </span>
                                    </span>

                                    <span className="ml-1 text-nowrap align-middle">
                                      <span className="font-normal text-Sub_Dark_color">
                                        {competitor.tabNo}{" "}
                                      </span>

                                      <span className="ml-1 text-action1">
                                        {competitor.name}
                                      </span>
                                    </span>
                                  </td>

                                  <td>
                                    <TooltipProvider>
                                      <Tooltip delayDuration={200}>
                                        <TooltipTrigger asChild>
                                          <span>
                                            TT: ${competitor.prices.top_tote}
                                          </span>
                                        </TooltipTrigger>

                                        <TooltipContent className="p-5">
                                          Top tote
                                        </TooltipContent>
                                      </Tooltip>
                                    </TooltipProvider>
                                  </td>

                                  <td className="px-0.5">
                                    SP: ${competitor.prices.sp}
                                  </td>

                                  <td className="py-2 text-right">
                                    {idx > 0
                                      ? `M: ${competitor.margin} L`
                                      : null}
                                  </td>
                                </tr>
                              ))}
                      </tbody>
                    </table>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            );
          })}
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};
