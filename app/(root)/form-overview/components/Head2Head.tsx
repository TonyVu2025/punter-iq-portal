import React, { Fragment, useState } from "react";
import { RankIcon } from "./RankIcon";
import { RefreshCwIcon, SaveIcon, PlusSquareIcon, ArrowUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Chip } from "./Chip";
import { BIcon } from "@/components/ui/icons/BIcon";
import { StarRating } from "@/components/StarRating";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { FullResultDialog } from "./FullResultDialog";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
} from "@/components/ui/accordion";
import { RaceTableRankingIcons } from "./TableCardIcon2";
import styles from "./Head2Head.module.scss";
import { MOCK_COMMENTS } from "@/lib/data";
import { getOrdinalNum } from "@/utils/getOrdinalNum";
import Image from "next/image";
import { cn } from "@/lib/utils";

export const Head2Head = () => {
  const [showRaceDialog, setShowRaceDialog] = useState(false);
  const [openValue, setOpenValue] = useState("");

  return (
    <>
      <FullResultDialog
        open={showRaceDialog}
        onOpenChange={setShowRaceDialog}
      />
      <Accordion
        value={openValue}
        collapsible
        type="single"
        className="mt-7 rounded-xl bg-white py-7 lg:mt-0"
      >
        <div className="overflow-auto">
          <table className={styles.table}>
            <colgroup>
              <col />
              <col />
              <col />
              <col />
              <col />
              <col />
              <col width={80} />
              <col width={80} />
              <col width={80} />
              <col width={80} />
              <col width={80} />
              <col />
              <col />
            </colgroup>

            <thead>
              <tr>
                <th>No.</th>
                <th className="whitespace-nowrap">
                  Horse / Barrier / Trainer / Jockey
                </th>
                <th className="whitespace-nowrap">Last 5</th>
                <th>Career</th>
                <th className="whitespace-nowrap">Gear Chg</th>
                <th>RTG</th>
                <th className="!bg-SubDark_Color_3 !text-center !text-xs">
                  Jockey Score
                </th>
                <th className="!bg-SubDark_Color_3 !text-center !text-xs">
                  Jockey Course
                </th>
                <th className="!bg-SubDark_Color_3 !text-center !text-xs">
                  Trainer Score
                </th>
                <th className="!bg-SubDark_Color_3 !text-center !text-xs">
                  Trainer Course
                </th>
                <th className="!bg-SubDark_Color_3 !text-center !text-xs">
                  RaceBrain Score
                </th>
                <th>Action</th>
                <th>Odds</th>
              </tr>
            </thead>

            <tbody>
              {new Array(5).fill(null).map((_, idx) => (
                <Fragment key={idx}>
                  <tr
                    className={cn(
                      "relative border-b",
                      openValue === `item${idx}` && styles.accordionRowActive,
                    )}
                  >
                    <td className="pl-3 text-center">
                      <div
                        className="absolute left-0 top-0 h-full w-full cursor-pointer"
                        onClick={() =>
                          setOpenValue(
                            openValue === `item${idx}` ? "" : `item${idx}`,
                          )
                        }
                      ></div>
                      {idx === 0 ? <RaceTableRankingIcons /> : idx + 1}
                    </td>
                    <td className="min-w-[160px]">
                      <div className="flex items-center">
                        {idx <= 2 && <RankIcon rank={idx + 1} />}
                        {idx > 2 && (
                          <img src="/img/shirt.png" alt="" width={30} />
                        )}

                        <div className="pl-2.5">
                          <div className="uppercase tracking-wider text-Sub_Dark_color">
                            FORM LINKS: TOTAL 2
                          </div>

                          <div className="mt-1 whitespace-nowrap app-text-body-paragraph">
                            <span>Ladbrokes Park Hillside</span>
                            <span className="app-text-category">
                              {" "}
                              (5) 3yo (G)
                            </span>
                          </div>

                          <p className="app-text-category">
                            T: Wendy Kelly <br /> J: Joe Bowditch (58kg)
                          </p>
                        </div>
                      </div>
                    </td>

                    <td className="text-nowrap">308-0</td>

                    <td className="text-nowrap">43: 0-1-0</td>

                    <td className="relative">
                      <Dialog>
                        <DialogTrigger>
                          <RefreshCwIcon className="cursor-pointer" />
                        </DialogTrigger>

                        <DialogContent contentClassName="p-6 lg:p-10">
                          <h3 className="app-text-h3">Gear changes</h3>

                          <p className="mt-2">
                            <b>5. Divine Karma</b> Blinkers first time
                          </p>
                        </DialogContent>
                      </Dialog>
                    </td>

                    <td>68</td>

                    <td className="bg-Subtle_dark_2 text-center text-sm">
                      81 <br />
                      <StarRating stars={4} />
                    </td>

                    <td className="bg-Subtle_dark_2 text-center text-sm">
                      67 <br />
                      <StarRating stars={4} />
                    </td>

                    <td className="bg-Subtle_dark_2 text-center text-sm">
                      100
                      <br />
                      <StarRating stars={4} />
                    </td>

                    <td className="bg-Subtle_dark_2 text-center text-sm">
                      88 <br />
                      <StarRating stars={4} />
                    </td>

                    <td className="bg-Subtle_dark_2 text-center text-sm">
                      85 <br />
                      <StarRating stars={4} />
                    </td>

                    <td>
                      <div className="relative flex items-center space-x-2">
                        <Button size="xs" variant="dark">
                          <BIcon width={14}></BIcon>
                        </Button>

                        <Button size="xs" variant="dark">
                          <SaveIcon size={14}></SaveIcon>
                        </Button>

                        <Button size="xs" variant="dark">
                          <PlusSquareIcon size={14}></PlusSquareIcon>
                        </Button>
                      </div>
                    </td>

                    <td>
                      <div className="relative flex space-x-2">
                        <Chip
                          className="w-[56px] px-0 py-0"
                          text1="Win"
                          text2="2.80"
                          actionText="Favourite"
                        />
                        <Chip
                          className="w-[56px] px-0 py-0"
                          text1="Place"
                          text2="6.50"
                          actionText="Favourite"
                        />
                      </div>
                    </td>
                  </tr>

                  {openValue && (
                    <AccordionItem
                      asChild
                      className="border-none"
                      value={`item${idx}`}
                    >
                      <tr>
                        <td colSpan={13} className="!p-0">
                          <AccordionContent>
                            <table className={styles.childTable}>
                              <colgroup>
                                <col />
                                <col />
                                <col width={80} />
                                <col width={140} />
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

                              <thead>
                                <tr>
                                  <th></th>
                                  <th className="!text-left">
                                    <span className="block whitespace-nowrap py-2 font-bold text-mainFont app-text-h4">
                                      Form Link Total 3
                                    </span>
                                  </th>

                                  <th className="!text-left">
                                    Days since/Margin
                                  </th>
                                  <th className="!text-left">
                                    Track / Cond / <br />
                                    Dist / Class /Rail
                                  </th>
                                  <th>Barrier</th>
                                  <th>Odds</th>
                                  <th>800m/400m</th>
                                  <th>L600m</th>
                                  <th>Time</th>
                                  <th>W/S</th>
                                  <th></th>
                                  <th></th>
                                  <th></th>
                                </tr>
                              </thead>

                              <tbody>
                                {new Array(3).fill(null).map((_, raceIndex) => (
                                  <Fragment key={raceIndex}>
                                    <tr
                                      className={
                                        raceIndex % 2 === 0
                                          ? styles.oddRace
                                          : styles.evenRace
                                      }
                                    >
                                      <td></td>
                                      <td
                                        colSpan={12}
                                        className="border-b !bg-white"
                                      >
                                        <span className="font-extrabold text-mainFont app-text-h6">
                                          Race {raceIndex + 1}: The Gibson Mdn
                                          Plate
                                        </span>
                                      </td>
                                    </tr>

                                    {MOCK_COMMENTS.map((comment, idx) => (
                                      <tr
                                        key={idx}
                                        className={
                                          raceIndex % 2 === 0
                                            ? styles.oddRace
                                            : styles.evenRace
                                        }
                                      >
                                        <td></td>
                                        <td>
                                          <div className="flex items-center px-4 py-2">
                                            {idx <= 2 && (
                                              <RankIcon rank={idx + 1} />
                                            )}
                                            {idx > 2 && (
                                              <Image
                                                src={"/img/shirt.png"}
                                                width={30}
                                                height={30}
                                                alt="shirt"
                                              />
                                            )}
                                            <div className="ml-2">
                                              <div className="whitespace-nowrap text-base text-mainFont">
                                                {comment.tabNo}. {comment.name}{" "}
                                                ({comment.barrier})
                                              </div>
                                              <div className="text-xs font-light text-Font_SubColor_1">
                                                Sportsbet-Pakenham R7 <br />{" "}
                                                1600m
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
                                            Hawkesburry /{" "}
                                            <b className="text-blue_misc">
                                              Soft 5
                                            </b>{" "}
                                            / 1600m / MDN-BT{" "}
                                            <ArrowUp
                                              className="inline text-good_Green"
                                              size={14}
                                            />{" "}
                                            / True
                                          </span>
                                        </td>

                                        <td className="text-center">10</td>

                                        <td className="text-center">$5.00</td>

                                        <td>
                                          <span>
                                            {comment.formHistory[0]
                                              ?.finishingPosition != null &&
                                            comment.formHistory[0]?.starters !=
                                              null
                                              ? `${getOrdinalNum(comment.formHistory[0].finishingPosition)}/${getOrdinalNum(comment.formHistory[0].starters)}`
                                              : "NA"}
                                          </span>
                                        </td>

                                        <td className="text-center">
                                          <span>33.30</span>
                                        </td>

                                        <td className="text-center">
                                          <span>
                                            {comment.formHistory[0]
                                              ?.raceSectionals &&
                                            comment.formHistory[0]
                                              .raceSectionals.length > 0
                                              ? (comment.formHistory[0]
                                                  .raceSectionals[0]?.seconds ??
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
                                      </tr>
                                    ))}
                                  </Fragment>
                                ))}
                              </tbody>
                            </table>
                          </AccordionContent>
                        </td>
                      </tr>
                    </AccordionItem>
                  )}
                </Fragment>
              ))}
            </tbody>
          </table>
        </div>
      </Accordion>
    </>
  );
};
