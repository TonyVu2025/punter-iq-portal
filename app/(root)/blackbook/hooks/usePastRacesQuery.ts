import { createClient } from "@/utils/supabase/client";
import { useQuery } from "@tanstack/react-query";
import { useMemo } from "react";
import { UsePastRacesQueryResults } from "./usePastRacesQuery.type";
import { useMyProfileStore } from "@/stores/useProfileStore";

export const usePastRacesQuery = (
  payload: { horseId: string | bigint },
  queryOptions?: Partial<
    Parameters<typeof useQuery<UsePastRacesQueryResults>>[0]
  >,
) => {
  const supabase = createClient();
  const query = useQuery({
    ...queryOptions,
    queryKey: ["getHorseLastRaces", payload.horseId],
    async queryFn() {
      return await supabase
        .rpc("get_last_3_races_for_black_book_horse", {
          passed_horse_id: payload.horseId,
          passed_user_id: useMyProfileStore.getState().profile.id,
        })
        .then((v) => v.data);
    },
  });
  const pastRaces = useMemo(() => {
    return query.data;
  }, [query.data]);

  return { query, pastRaces };
};
