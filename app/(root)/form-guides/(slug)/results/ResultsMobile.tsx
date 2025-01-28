"use client";

import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ComponentProps, useMemo, useState } from "react";
import { FooterCta } from "@/components/FooterCta";
import { useClientSupabaseQuery } from "@/hooks/useClientSupabaseQuery";
import { getPunterDayJS } from "@/utils/dateUtils";
import { GetFormGuideRacesDocument } from "@/gql/graphql";
import { TripleDotsLoading } from "@/components/ui/TripleDotsLoading";
import groupBy from "lodash/groupBy";
import { useRouter, useSearchParams } from "next/navigation";
import { Dayjs } from "dayjs";
import { QUERY_DATE_FORMAT } from "@/config/date";
import { FormListingItem } from "../../components/mobile/FormListingItem";
import { BetSliderMobile } from "@/components/BetSliderMobile";

const CustomTabsTrigger = (props: ComponentProps<typeof TabsTrigger>) => {
  return (
    <TabsTrigger
      className="flex-none flex-shrink-0 border-action_ll1 text-sm font-bold text-mainFont data-[state=active]:border-b-2"
      {...props}
    />
  );
};

const yesterday = getPunterDayJS().add(-1, "day");
const MAX_DAY_DISPLAY = 4;

export const ResultsMobile = () => {
  const { replace } = useRouter();
  const searchParams = useSearchParams();

  const queryDate = useMemo(() => {
    const dateQuery = searchParams.get("date");

    const parsedDate = getPunterDayJS(dateQuery);
    return parsedDate.isValid() ? parsedDate : yesterday;
  }, [searchParams]);

  const [currentTab, setCurrentTab] = useState(() =>
    queryDate.format("DD/MM/YYYY"),
  );

  const { data, isFetching } = useClientSupabaseQuery(
    ["formGuideMobileOverview", queryDate.toString()],
    GetFormGuideRacesDocument,
    {
      startDate: queryDate.startOf("d").toDate(),
      endDate: queryDate.endOf("d").toDate(),
    },
  );
  const pastResults = useMemo(() => {
    const arr = Array.from({ length: MAX_DAY_DISPLAY }, (_, i) =>
      yesterday.add(-i, "day"),
    );

    if (
      arr.find(
        (item) =>
          queryDate.format(QUERY_DATE_FORMAT) ===
          item.format(QUERY_DATE_FORMAT),
      )
    )
      return arr;

    arr.push(queryDate);

    return arr;
  }, [queryDate]);

  const racesList = useMemo(() => {
    if (!data || !data.racesCollection) return {};

    return groupBy(
      data.racesCollection.edges.map((edge) => edge.node),
      (race) => race.tracks!.id,
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
            {pastResults.map((day, index) => (
              <CustomTabsTrigger
                key={index}
                value={day.format("DD/MM/YYYY")}
                onClick={() => onDateChange(day)}
              >
                {/* If the query date is earlier than four days ago, there will be an extra tab*/}
                {index >= MAX_DAY_DISPLAY
                  ? day.format("DD/MM/YYYY")
                  : day.isSame(yesterday, "date")
                    ? "Yesterday"
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
            <div className="mt-2">
              {Object.values(racesList).map((listItem, index) => (
                <FormListingItem key={index} data={listItem} />
              ))}

              {!Object.keys(racesList).length && (
                <div className="rounded bg-white p-4 text-sm">
                  No races available
                </div>
              )}
            </div>
          </>
        )}
      </Tabs>

      <FooterCta className="mt-8" />
    </>
  );
};
