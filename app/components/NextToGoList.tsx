import NextToGoSideMenu from "@/components/NextToGoSideMenu";
import { getCompetitorsData } from "@/utils/race/getCompetitorsData";
import { TripleDotsLoading } from "@/components/ui/TripleDotsLoading";
import { GetFormGuideRacesDocument } from "@/gql/graphql";
import { useClientSupabaseQuery } from "@/hooks/useClientSupabaseQuery";
import { getRegionAndCountry } from "@/utils/regionUtils";
import { useMemo } from "react";
import { getPunterDayJS } from "@/utils/dateUtils";

const EmptyList = () => (
  <div className="rounded bg-white p-4 text-sm">No races available</div>
);

const NextToGoList = () => {
  const today = getPunterDayJS();

  const { data, isLoading } = useClientSupabaseQuery(
    ["SidebarFormGuidesNextToGo"],
    GetFormGuideRacesDocument,
    {
      startDate: today.toDate(),
      // endDate: today.endOf("d").toDate(),
    },
  );

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

  if (isLoading)
    return (
      <div className="p-4">
        <TripleDotsLoading />
      </div>
    );

  return nextToGoRaces.length ? (
    nextToGoRaces.map((race) => <NextToGoSideMenu race={race} key={race.id} />)
  ) : (
    <EmptyList />
  );
};

export default NextToGoList;
