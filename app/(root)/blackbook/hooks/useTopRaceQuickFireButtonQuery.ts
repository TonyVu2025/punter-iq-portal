import { createClient } from "@/utils/supabase/client";
import { useQuery } from "@tanstack/react-query";
import { useMemo } from "react";
import { TopRaceQuickFireButtonData } from "./useTopRaceQuickFireButtonQuery.type";

export const useTopRaceQuickFireButtonQuery = (
  payload: { horseId: string | bigint; raceId: string | bigint },
  queryOptions?: Partial<
    Parameters<typeof useQuery<TopRaceQuickFireButtonData[]>>[0]
  >,
) => {
  const supabase = createClient();
  const query = useQuery({
    ...queryOptions,
    queryKey: ["getTopRaceQuickFireButtons", payload.horseId],
    async queryFn() {
      return await supabase
        .rpc("get_top_pressed_quick_fire_buttons", {
          passed_horse_id: payload.horseId,
          passed_race_id: payload.raceId,
        })
        .then((v) => v.data);
    },
  });

  const topButtons = useMemo(() => {
    return query.data;
  }, [query.data]);

  return { query, topButtons };
};
