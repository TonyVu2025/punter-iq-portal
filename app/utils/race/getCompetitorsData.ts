import { GetFormGuideRacesQuery } from "@/gql/graphql";

export const getCompetitorsData = (
  race: NotNull<
    GetFormGuideRacesQuery["racesCollection"]
  >["edges"][number]["node"],
) => {
  return race.competitorsCollection!.edges.map((competitor) => {
    return {
      barrierNo: competitor.node.barrier,
      horseNo: competitor.node.horses!.name,
      tabNo: competitor.node.competitor_number,
      name: competitor.node.horses!.name,
      trainer: competitor.node.trainers
        ? {
            id: competitor.node.trainers.id,
            full_name: competitor.node.trainers.full_name,
          }
        : null,
      jockey: {
        weight: competitor.node.weight_total,
        full_name: competitor.node.jockeys?.full_name,
      },
      finalPosition: competitor.node.final_position,
      prices: {
        top_tote: Math.max(
          ...race
            .oddsCollection!.edges.filter(
              (o) =>
                o.node.competitor_number == competitor.node.competitor_number,
            )
            .map((o) => o.node.place_fixed!),
          0,
        ),
        sp: Math.max(
          ...race
            .oddsCollection!.edges.filter(
              (o) =>
                o.node.competitor_number == competitor.node.competitor_number,
            )
            .map((o) => o.node.win_fixed!),
          0,
        ),
      },
      margin: competitor.node.margin,
    };
  });
};
