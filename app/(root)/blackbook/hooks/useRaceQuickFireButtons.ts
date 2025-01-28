import { createClient } from "@/utils/supabase/client";
import { useQuery } from "@tanstack/react-query";
import { useMemo } from "react";
import { RaceQuickFireButtonData } from "./useRaceQuickFireButtonQuery.type";

export const useRaceQuickFireButtonQuery = (
  payload: { horseId: string | bigint; raceId: string | bigint },
  queryOptions?: Partial<
    Parameters<typeof useQuery<RaceQuickFireButtonData[]>>[0]
  >,
) => {
  const supabase = createClient();
  const query = useQuery({
    ...queryOptions,
    queryKey: ["getRaceQuickFireButtons", payload.horseId],
    async queryFn() {
      return await supabase
        .rpc("get_race_quick_fire_buttons_appearance_counts", {
          passed_horse_id: payload.horseId,
          passed_race_id: payload.raceId,
        })
        .then((v) => v.data);
    },
  });

  const raceButtons = useMemo(() => {
    return query.data;
  }, [query.data]);

  return { query, raceButtons };
};
