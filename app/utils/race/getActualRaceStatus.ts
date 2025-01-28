import { GetFormGuideRacesQuery } from "@/gql/graphql";
import dayjs from "dayjs";

export const getActualRaceStatus = (
  race: GetFormGuideRacesQuery["racesCollection"]["edges"][number]["node"],
) => {
  if (race.status === "OPEN" && dayjs(race.start_time).isBefore(new Date())) {
    return "FINAL";
  }

  return race.status;
};
