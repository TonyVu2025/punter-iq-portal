import { TodaySideMenu } from "@/components/TodaySideMenu";
import { TripleDotsLoading } from "@/components/ui/TripleDotsLoading";
import { GetFormGuideRacesDocument } from "@/gql/graphql";
import { useClientSupabaseQuery } from "@/hooks/useClientSupabaseQuery";
import { getPunterDayJS } from "@/utils/dateUtils";
import groupBy from "lodash/groupBy";
import { useMemo } from "react";

const EmptyList = () => (
  <div className="rounded bg-white p-4 text-sm">No races available</div>
);

const TodayList = () => {
  const today = getPunterDayJS();
  const { data, isLoading } = useClientSupabaseQuery(
    ["SidebarFormGuidesToday"],
    GetFormGuideRacesDocument,
    {
      startDate: today.startOf("d").toDate(),
      endDate: today.endOf("d").toDate(),
    },
  );

  const racesList = useMemo(() => {
    if (!data || !data.racesCollection) return {};

    return groupBy(
      data.racesCollection.edges.map((edge) => edge.node),
      (race) => race.tracks.id,
    );
  }, [data]);

  if (isLoading)
    return (
      <div className="p-4">
        <TripleDotsLoading />
      </div>
    );

  return Object.values(racesList).length ? (
    Object.values(racesList).map((raceData, index) => (
      <TodaySideMenu data={raceData} key={index} />
    ))
  ) : (
    <EmptyList />
  );
};

export default TodayList;
