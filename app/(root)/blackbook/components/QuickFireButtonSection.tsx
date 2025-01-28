import React from "react";
import { useTopRaceQuickFireButtonQuery } from "../hooks/useTopRaceQuickFireButtonQuery";
import { EditIcon } from "./icons/EditIcon";
import { TripleDotsLoading } from "@/components/ui/TripleDotsLoading";
import { useFormContext } from "react-hook-form";

type Props = {
  raceId: string;
  horseId: string;
  userComment: string;
  userCommentId: string;
};

const QuickFireButtonSection = ({
  raceId,
  horseId,
  userComment,
  userCommentId,
}: Props) => {
  const { reset } = useFormContext();
  const { topButtons, query } = useTopRaceQuickFireButtonQuery({
    horseId,
    raceId,
  });
  return (
    <div className="flex h-full min-h-[68px] flex-none items-stretch">
      {!query.isLoading ? (
        <>
          {topButtons?.map((button) => (
            <div
              key={button.id}
              className="flex flex-col justify-center border-l px-3 text-Font_SubColor_1"
            >
              {button.label.replaceAll("_", " ")}
              <div className="text-black">{button.total_clicks}</div>
            </div>
          ))}
          <div
            className="flex cursor-pointer flex-col justify-center border-l px-3 text-Font_SubColor_1"
            onClick={() => {
              reset({
                raceId,
                horseId,
                comment: userComment || "",
                commentId: userCommentId,
              });
            }}
          >
            <EditIcon />
            Edit
          </div>
          <div className="flex flex-col justify-center border-l px-3 text-Font_SubColor_1">
            <p>{userComment}</p>
          </div>
        </>
      ) : (
        <TripleDotsLoading className="mr-1.5" />
      )}
    </div>
  );
};

export default QuickFireButtonSection;
