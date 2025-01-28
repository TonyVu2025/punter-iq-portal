import Image from "next/image";
import styles from "./LastStartComments.module.scss";
import { getOrdinalNum } from "@/utils/getOrdinalNum";
import { ArrowUp, InfoIcon } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { RankIcon } from "./RankIcon";
import { MOCK_COMMENTS } from "@/lib/data";

export const LastStartComments = () => {
  return (
    <div className="my-20 rounded-2xl bg-white pt-10 max-md:my-10">
      <table className={styles.table}>
        <colgroup>
          <col></col>
          <col width={120} />
          <col width={150} />
          <col />
          <col />
          <col />
          <col />
          <col />
          <col />
          <col />
          <col />
          <col />
          <col />
        </colgroup>
        <thead className="h-16 bg-Subtle_dark_2">
          <tr>
            <th className="whitespace-nowrap font-normal !text-mainFont">
              <strong className="pl-4 app-text-h4">Last Start Comments</strong>
            </th>
            <th>Days Since/ Margin</th>
            <th>
              Track / Cond / <br />
              Dist / Class /Rail
            </th>
            <th className="!text-center">Barrier</th>
            <th className="!text-center">Odds</th>
            <th>800m/400m</th>
            <th className="!text-center">L600m</th>
            <th className="!text-center">Time</th>
            <th className="!text-center">W/S</th>
            <th></th>
            <th></th>
            <th></th>
            <th className="!text-right">
              <span className="pr-2">Comments</span>
            </th>
          </tr>
        </thead>
        <tbody className="text-mainFont">
          {MOCK_COMMENTS.map((comment, index) => (
            <tr key={index} className="border-b">
              <td className="py-4">
                <div className="flex items-center px-4 py-2">
                  {index <= 2 && <RankIcon rank={index + 1} />}
                  {index > 2 && (
                    <Image
                      src={"/img/shirt.png"}
                      width={30}
                      height={30}
                      alt="shirt"
                    />
                  )}
                  <div className="ml-2">
                    <div className="whitespace-nowrap text-base text-mainFont">
                      {comment.tabNo}. {comment.name} ({comment.barrier})
                    </div>
                    <div className="text-xs font-light text-Font_SubColor_1">
                      Sportsbet-Pakenham R7 <br /> 1600m
                    </div>
                  </div>
                </div>
              </td>

              <td>
                28 days
                <br />
                M: 3.1L
              </td>

              <td>
                <span>
                  Hawkesburry / <b className="text-blue_misc">Soft 5</b> / 1600m
                  / MDN-BT{" "}
                  <ArrowUp className="inline text-good_Green" size={14} /> /
                  True
                </span>
              </td>

              <td className="text-center">10</td>

              <td className="text-center">$5.00</td>

              <td>
                <span>
                  {comment.formHistory[0]?.finishingPosition != null &&
                  comment.formHistory[0]?.starters != null
                    ? `${getOrdinalNum(comment.formHistory[0].finishingPosition)}/${getOrdinalNum(comment.formHistory[0].starters)}`
                    : "NA"}
                </span>
              </td>

              <td className="text-center">
                <span>33.30</span>
              </td>

              <td className="text-center">
                <span>
                  {comment.formHistory[0]?.raceSectionals &&
                  comment.formHistory[0].raceSectionals.length > 0
                    ? (comment.formHistory[0].raceSectionals[0]?.seconds ??
                      "NA")
                    : "NA"}
                </span>
              </td>

              <td className="text-center">
                <span>3</span>
              </td>

              <td>
                <div className="w-9 text-sm leading-none">
                  <b>55</b>
                  <br />
                  <span className="text-[11px] font-light text-Font_SubColor_1">
                    Blocked for run
                  </span>
                </div>
              </td>

              <td>
                <div className="w-14 text-sm leading-none">
                  <b>22</b>
                  <br />
                  <span className="text-[11px] font-light text-Font_SubColor_1">
                    Come from back
                  </span>
                </div>
              </td>

              <td>
                <div className="w-14 text-sm leading-none">
                  <b>55</b>
                  <br />
                  <span className="text-[11px] font-light text-Font_SubColor_1">
                    Went back from barrier
                  </span>
                </div>
              </td>

              <td className="py-2 text-right">
                <TooltipProvider>
                  <Tooltip delayDuration={200}>
                    <TooltipTrigger asChild>
                      <InfoIcon className="mr-2 inline-block fill-Sub_Dark_color stroke-white" />
                    </TooltipTrigger>

                    <TooltipContent className="p-5">
                      {comment.comment ?? "NA"}
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
