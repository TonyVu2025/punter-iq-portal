import { createClient } from "@/utils/supabase/client";
import { useQuery } from "@tanstack/react-query";
import { useMemo } from "react";
import { GetRacesWithBlackBookResponse } from "./useBlackbookQuery.type";
import { useMyProfileStore } from "@/stores/useProfileStore";

export const parseBlackbookData = (
  response: GetRacesWithBlackBookResponse[number],
) => {
  return {
    race: response.race_data[0],
    competitor: response.competitor_data[0],
    horse: response.horse_data[0],
    track: response.track_data[0],
    meeting: response.meeting_data[0],
    jockey: response.jockey_data[0],
    trainer: response.trainer_data[0],
  };
};

export const useBlackbookQuery = () => {
  const supabase = createClient();
  const query = useQuery({
    queryKey: ["getBlackbook"],
    async queryFn() {
      return await supabase
        .rpc("get_next_race_with_black_book", {
          // end_date: getPunterDayJS().endOf("d").format(QUERY_DATE_FORMAT),
          passed_user_id: useMyProfileStore.getState().profile.id,
          // start_date: getPunterDayJS().format(QUERY_DATE_FORMAT),
        })
        .then((v) => v.data as GetRacesWithBlackBookResponse);
    },
  });

  const blackbook = useMemo(() => {
    return query.data || [];
  }, [query.data]);

  return { query, blackbook };
};
