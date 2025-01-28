import React from "react";
import { UsePastRacesQueryResults } from "../hooks/usePastRacesQuery.type";
import { RaceTrackConditionTag } from "./RaceTrackConditionTag";
import QuickFireButtonSection from "./QuickFireButtonSection";

const PastRace = ({
  pastRace,
  horseId,
}: {
  pastRace: UsePastRacesQueryResults[0];
  horseId: string;
}) => {
  return (
    <div className="flex justify-between overflow-auto border-t px-3 lg:px-12">
      <div className="flex flex-none items-center gap-x-6 pr-3">
        <div>
          <span className="!leading-none app-text-body-paragraph">
            {pastRace.race_data.name}
          </span>
          <span className="-mt-0.5 block text-Font_SubColor_1 app-text-category">
            {pastRace.track_name} {pastRace.track_state}
          </span>
        </div>

        <small className="app-text-small-caption">
          {pastRace.race_data.distance}M {pastRace.race_data.track_condition}{" "}
          {pastRace.competitor_weight}kg ({pastRace.competitor_number})
        </small>

        <RaceTrackConditionTag condition={pastRace.race_data.track_condition} />
      </div>
      <QuickFireButtonSection
        userComment={pastRace.user_comment || ""}
        raceId={BigInt(pastRace.race_id).toString()}
        horseId={horseId}
        userCommentId={BigInt(pastRace.user_comment_id || "").toString()}
      />
    </div>
  );
};
export default PastRace;
