"use client";

import { GetFormGuideOverviewDocument } from "@/gql/graphql";
import { useClientSupabaseQuery } from "@/hooks/useClientSupabaseQuery";
import { marketMovers, mostTipped } from "@/lib/data";
import { getPunterDayJS } from "@/utils/dateUtils";
import { getRegionAndCountry } from "@/utils/regionUtils";
import { useRouter, useSearchParams } from "next/navigation";
import { ComponentProps, useEffect, useMemo, useState } from "react";
import { LONG_DISPLAY_DATE_FORMAT, QUERY_DATE_FORMAT } from "@/config/date";
import {
  FormGuideMenu,
  MarketMoversTable,
  MostTipped,
  RacingTable,
} from "./components/desktop";
import { TripleDotsLoading } from "@/components/ui/TripleDotsLoading";

const FormGuideDesktop = () => {
  const { replace } = useRouter();
  const today = getPunterDayJS();
  const tomorrow = today.add(1, "day");
  const searchParams = useSearchParams();
  let queryDateObj = getPunterDayJS(searchParams.get("date"));
  queryDateObj = queryDateObj.isValid() ? queryDateObj : today; // Default by today
  const [queryDate, setQueryDate] = useState(queryDateObj);

  const { data, isFetching, refetch } = useClientSupabaseQuery(
    ["formGuideOverview"],
    GetFormGuideOverviewDocument,
    {
      startDate: queryDate.startOf("d").toDate(),
      endDate: queryDate.endOf("d").toDate(),
    },
  );

  const dayMeetings = useMemo(() => {
    if (!data) return [];

    return data.meetingsCollection.edges;
  }, [data]);

  const onDayChange: ComponentProps<typeof FormGuideMenu>["onDayChange"] = (
    day,
  ) => {
    const params = new URLSearchParams(searchParams.toString());
    const queryDate = day.format(QUERY_DATE_FORMAT);

    if (queryDate === params.get("date")) return;

    params.set("date", queryDate);

    replace(window.location.pathname + "?" + params);
    setQueryDate(day);
  };

  // Refetch data on day selection
  useEffect(() => {
    refetch();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [queryDate]);

  return (
    <div className="flex min-w-full gap-5 max-xl:flex-col max-sm:px-3 max-sm:py-4 sm:py-8">
      <div className="w-full xl:w-9/12">
        <FormGuideMenu queryDay={queryDate} onDayChange={onDayChange} />

        <div className="my-8 rounded-lg bg-white">
          <h2 className="p-4 text-xl font-bold">
            {today.isSame(queryDate, "date")
              ? "Today's racing"
              : tomorrow.isSame(queryDate, "date")
                ? "Tomorrow's racing"
                : queryDate.format("dddd")}

            <span className="mx-6 text-xs text-Sub_Dark_color/40">
              {queryDate.format(LONG_DISPLAY_DATE_FORMAT)}
            </span>
          </h2>

          {isFetching ? (
            <div className="p-4">
              <TripleDotsLoading />
            </div>
          ) : (
            <RacingTable
              rows={dayMeetings.map((meeting) => ({
                track: {
                  name: meeting.node.tracks.name,
                  state: meeting.node.tracks.state,
                  region: getRegionAndCountry(meeting.node.tracks.state).region,
                },
                races: meeting.node.racesCollection.edges.map((race) => ({
                  name: race.node.name,
                  start_time: new Date(race.node.start_time),
                  status: race.node.status,
                  race_number: race.node.race_number,
                  results: {
                    positions: race.node.competitorsCollection.edges.map(
                      (competitor) => ({
                        tabNo: competitor.node.competitor_number,
                        position: competitor.node.final_position,
                        competitor: {
                          name: competitor.node.horses.name,
                          tabNo: competitor.node.competitor_number,
                          weight: competitor.node.weight_total,
                          prices: {
                            top_tote: Math.max(
                              ...race.node.oddsCollection.edges
                                .filter(
                                  (o) =>
                                    o.node.competitor_number ==
                                    competitor.node.competitor_number,
                                )
                                .map((o) => o.node.place_fixed),
                            ),
                            sp: Math.max(
                              ...race.node.oddsCollection.edges
                                .filter(
                                  (o) =>
                                    o.node.competitor_number ==
                                    competitor.node.competitor_number,
                                )
                                .map((o) => o.node.win_fixed),
                            ),
                          },
                          margin: competitor.node.margin,
                        },
                      }),
                    ),
                  },
                  id: race.node.id,
                })),
              }))}
            />
          )}
        </div>
      </div>
      <div className="flex w-full flex-col xl:w-3/12">
        <div
          className="relative h-80 min-w-full rounded-xl bg-cover bg-center"
          style={{ backgroundImage: "url('/img/Rectangle204.png')" }}
        >
          <div className="absolute bottom-10 left-0 flex w-10/12 origin-top-left transform flex-col items-start rounded-r-xl bg-gradient-to-r from-purple-950 to-purple-800 px-8 py-5 text-white shadow-md">
            <span className="text-2xl font-semibold">Beat the Odds</span>
            <span className="text-3xl font-bold">Get Free Trial</span>
          </div>
        </div>
        <div className="my-4 rounded-lg bg-white">
          <h2 className="px-4 py-5 text-lg font-bold">Market Movers</h2>
          <MarketMoversTable data={marketMovers} />
        </div>
        <div className="my-4 rounded-lg bg-white">
          <h2 className="px-4 py-5 text-lg font-bold">Most Tipped</h2>
          <MostTipped data={mostTipped} />
        </div>
      </div>
    </div>
  );
};

export default FormGuideDesktop;
