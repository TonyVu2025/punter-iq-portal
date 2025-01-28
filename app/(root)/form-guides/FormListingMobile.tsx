import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BetSliderMobile } from "../../components/BetSliderMobile";
import { ComponentProps, useMemo, useState } from "react";
import { FooterCta } from "@/components/FooterCta";
import { useClientSupabaseQuery } from "@/hooks/useClientSupabaseQuery";
import { getPunterDayJS } from "@/utils/dateUtils";
import { getRegionAndCountry } from "@/utils/regionUtils";
import { GetFormGuideRacesDocument } from "@/gql/graphql";
import { NextToGoFormListingItem } from "./components/mobile/NextToGoFormListingItem";
import { TripleDotsLoading } from "@/components/ui/TripleDotsLoading";
import { FormListingItem } from "./components/mobile/FormListingItem";
import groupBy from "lodash/groupBy";
import { getCompetitorsData } from "../../utils/race/getCompetitorsData";
import { useRouter, useSearchParams } from "next/navigation";
import { Dayjs } from "dayjs";
import { QUERY_DATE_FORMAT } from "@/config/date";

const CustomTabsTrigger = (props: ComponentProps<typeof TabsTrigger>) => {
  return (
    <TabsTrigger
      className="flex-none flex-shrink-0 border-action_ll1 text-sm font-bold text-mainFont data-[state=active]:border-b-2"
      {...props}
    />
  );
};

const EmptyList = () => (
  <div className="rounded bg-white p-4 text-sm">No races available</div>
);

const today = getPunterDayJS();
const tomorrow = today.add(1, "day");

export const FormListingMobile = () => {
  const { replace } = useRouter();
  const searchParams = useSearchParams();

  const queryDate = useMemo(() => {
    const dateQuery = searchParams.get("date");

    if (dateQuery === "next" || !dateQuery) {
      return "next";
    }

    const parsedDate = getPunterDayJS(dateQuery);
    return parsedDate.isValid() ? parsedDate : today;
  }, [searchParams]);

  const [currentTab, setCurrentTab] = useState<"next" | string>(() =>
    queryDate === "next" ? "next" : queryDate.format("DD/MM/YYYY"),
  );

  const { data, isFetching } = useClientSupabaseQuery(
    ["formGuideMobileOverview", queryDate.toString()],
    GetFormGuideRacesDocument,
    {
      startDate:
        queryDate === "next" ? today.toDate() : queryDate.startOf("d").toDate(),
      endDate:
        queryDate === "next"
          ? today.endOf("d").toDate()
          : queryDate.endOf("d").toDate(),
    },
  );

  const upcomingDays = Array.from({ length: 4 }, (_, i) => today.add(i, "day"));

  const nextToGoRaces = useMemo(() => {
    if (!data || !data.racesCollection) return [];

    return data.racesCollection.edges.map((race) => ({
      distance: race.node.distance,
      id: race.node.id,
      status: race.node.status,
      name: race.node.name,
      race_number: race.node.race_number,
      region: getRegionAndCountry(race.node.tracks.state).region,
      start_time: race.node.start_time,
      competitors: getCompetitorsData(race.node)
        .sort((a, b) => {
          if (a.prices.sp === 0) return 1; // Place `a` after all other entries
          if (b.prices.sp === 0) return -1; // Place `b` after all other entries
          return a.prices.sp - b.prices.sp; // Standard ascending sort
        })
        .slice(0, 3),
    }));
  }, [data]);

  const racesList = useMemo(() => {
    if (!data || !data.racesCollection) return {};

    return groupBy(
      data.racesCollection.edges.map((edge) => edge.node),
      (race) => race.tracks.id,
    );
  }, [data]);

  const onDateChange = (day: "next" | Dayjs) => {
    const params = new URLSearchParams(searchParams.toString());
    const queryDate = day === "next" ? "next" : day.format(QUERY_DATE_FORMAT);

    if (queryDate === params.get("date")) return;

    params.set("date", queryDate);
    replace(window.location.pathname + "?" + params);
  };

  return (
    <>
      <div className="mt-4 px-2">
        <div className="border-b">
          <BetSliderMobile />
        </div>
      </div>

      <Tabs value={currentTab} onValueChange={setCurrentTab} className="mt-3">
        <div className="flex items-center justify-between">
          <TabsList className="h-auto w-full justify-start space-x-3 overflow-auto bg-white pb-0 no-scrollbar">
            <CustomTabsTrigger
              value="next"
              onClick={() => onDateChange("next")}
            >
              Next to go
            </CustomTabsTrigger>
            {upcomingDays.map((day, index) => (
              <CustomTabsTrigger
                key={index}
                value={day.format("DD/MM/YYYY")}
                onClick={() => onDateChange(day)}
              >
                {day.isSame(new Date(), "date")
                  ? "Today"
                  : day.isSame(tomorrow, "date")
                    ? "Tomorrow"
                    : day.format("dddd")}
              </CustomTabsTrigger>
            ))}
          </TabsList>
        </div>

        {isFetching ? (
          <div className="py-8 text-center">
            <TripleDotsLoading />
          </div>
        ) : (
          <>
            <TabsContent value="next">
              {nextToGoRaces.length ? (
                nextToGoRaces.map((race, index) => (
                  <NextToGoFormListingItem key={index} race={race} />
                ))
              ) : (
                <EmptyList />
              )}
            </TabsContent>

            {currentTab !== "next" && (
              <div className="mt-2">
                {Object.values(racesList).map((listItem, index) => (
                  <FormListingItem key={index} data={listItem} />
                ))}

                {!Object.keys(racesList).length && <EmptyList />}
              </div>
            )}
          </>
        )}
      </Tabs>

      <FooterCta className="mt-8" />
    </>
  );
};
