import { StarRating } from "@/components/StarRating";
import { BIcon } from "@/components/ui/icons/BIcon";
import { cn } from "@/lib/utils";
import {
  RefreshCwIcon,
  SaveIcon,
  PlusSquareIcon,
  EllipsisIcon,
} from "lucide-react";
import { useState } from "react";
import { Chip } from "./Chip";
import { FullResultDialog } from "./FullResultDialog";
import { RankIcon } from "./RankIcon";
import styles from "./HorseRaceCard.module.scss";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Dialog,
  DialogContent,
  DialogOverlay,
  DialogPortal,
  DialogTrigger,
} from "@/components/ui/dialog";
import { RaceTableRankingIcons } from "./TableCardIcon2";
import { twMerge } from "tailwind-merge";
import React from "react";

export const FormOverviewTab = () => {
  const [showRaceDialog, setShowRaceDialog] = useState(false);

  return (
    <div className="mt-7 rounded-xl bg-white py-7 lg:mt-0">
      <FullResultDialog
        open={showRaceDialog}
        onOpenChange={setShowRaceDialog}
      />
      <div className="overflow-auto">
        <Accordion type="single" collapsible>
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
              <col width={200} />
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
              {Array.from({ length: 6 }).map((_, index) => (
                <OverviewAccordionItem
                  key={index}
                  value={`item${index}`}
                  index={index}
                  asChild
                  scratched={index === 5}
                  onShowFullResults={() => setShowRaceDialog(true)}
                ></OverviewAccordionItem>
              ))}
            </tbody>
          </table>
        </Accordion>
      </div>
    </div>
  );
};

const OverviewAccordionItem = ({
  index,
  onShowFullResults,
  scratched,
  ...props
}: any) => {
  const [openPopup, setOpenPopup] = useState(false);

  return (
    <AccordionItem {...props}>
      <>
        <tr
          className={twMerge(
            "relative",
            scratched && "line-through opacity-50",
          )}
        >
          <td className="pl-3 text-center">
            <AccordionTrigger
              iconComponent={<></>}
              className="absolute left-0 top-0 h-full w-full justify-end"
            />
            {index === 0 ? <RaceTableRankingIcons /> : index + 1}
          </td>
          <td className="min-w-[160px]">
            <div className="flex">
              <RankIcon rank={index + 1} />

              <div className="ml-2">
                <span
                  className={twMerge(
                    "inline-block whitespace-nowrap app-text-body-paragraph",
                    scratched ? "line-through" : "",
                  )}
                >
                  <span>Ladbrokes Park Hillside</span>
                  <span className="app-text-category"> (5) 3yo (G)</span>
                </span>

                <p className="app-text-category">
                  T: Wendy Kelly <br /> J: Joe Bowditch (58kg)
                </p>
              </div>
            </div>
          </td>

          <td className="text-nowrap">308-0</td>

          <td className="text-nowrap">43: 0-1-0</td>

          <td className="relative">
            <Dialog open={openPopup} onOpenChange={setOpenPopup}>
              <DialogTrigger>
                <RefreshCwIcon className="cursor-pointer" />
              </DialogTrigger>

              <DialogContent
                showCloseIcon={false}
                contentClassName="p-6 lg:p-10"
              >
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
            <StarRating
              inactiveClassname={
                scratched && "stroke-Font_SubColor_1 fill-transparent"
              }
              activeClassname={
                scratched && "fill-Font_SubColor_1 stroke-Font_SubColor_1"
              }
              stars={4}
            />
          </td>

          <td className="bg-Subtle_dark_2 text-center text-sm">
            67 <br />
            <StarRating
              inactiveClassname={
                scratched && "stroke-Font_SubColor_1 fill-transparent"
              }
              activeClassname={
                scratched && "fill-Font_SubColor_1 stroke-Font_SubColor_1"
              }
              stars={4}
            />
          </td>

          <td className="bg-Subtle_dark_2 text-center text-sm">
            100
            <br />
            <StarRating
              inactiveClassname={
                scratched && "stroke-Font_SubColor_1 fill-transparent"
              }
              activeClassname={
                scratched && "fill-Font_SubColor_1 stroke-Font_SubColor_1"
              }
              stars={4}
            />
          </td>

          <td className="bg-Subtle_dark_2 text-center text-sm">
            88 <br />
            <StarRating
              inactiveClassname={
                scratched && "stroke-Font_SubColor_1 fill-transparent"
              }
              activeClassname={
                scratched && "fill-Font_SubColor_1 stroke-Font_SubColor_1"
              }
              stars={4}
            />
          </td>

          <td className="bg-Subtle_dark_2 text-center text-sm">
            85 <br />
            <StarRating
              inactiveClassname={
                scratched && "stroke-Font_SubColor_1 fill-transparent"
              }
              activeClassname={
                scratched && "fill-Font_SubColor_1 stroke-Font_SubColor_1"
              }
              stars={4}
            />
          </td>

          <td>
            {scratched ? (
              <div className="text-center">SCRATCHED</div>
            ) : (
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
            )}
          </td>

          <td className="pr-10">
            <div className="flex w-full justify-center space-x-2">
              <Chip className="w-[56px] px-0 py-0" text1="Win" text2="2.80" />
              <Chip className="w-[56px] px-0 py-0" text1="Place" text2="6.50" />
            </div>
          </td>
        </tr>

        <tr>
          <td className="!border-none !p-0" colSpan={13}>
            <AccordionContent asChild>
              <div className="flex flex-wrap justify-between border-b border-Subtle_dark px-4 py-4 app-text-small-caption lg:px-14">
                {new Array(10).fill(null).map((_, index) => (
                  <div key={index} className="text-Font_SubColor_1">
                    <span className="text-mainFont">14</span> 2-4-4 <br />{" "}
                    Career
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap justify-between border-b border-Subtle_dark px-4 py-4 app-text-small-caption lg:px-14">
                {new Array(10).fill(null).map((_, index) => (
                  <div key={index} className="text-Font_SubColor_1">
                    <span className="text-mainFont">14</span> 2-4-4 <br />{" "}
                    Career
                  </div>
                ))}
              </div>

              <div className="space-y-2 bg-Subtle_dark_2 px-4 py-4 app-text-caption lg:px-10">
                <div className="flex">
                  <span className="basis-[130px] font-normal text-Font_SubColor_1 app-text-body-medium">
                    Runner Comment
                  </span>

                  <span className="pl-6 lg:pl-10">
                    First-up after 28 week spell. Resumes well and won at Sale
                    when last first-up. Down in distance. Expect to be right up
                    there.
                  </span>
                </div>

                <div className="flex">
                  <span className="basis-[130px] font-normal text-Font_SubColor_1 app-text-body-medium">
                    Steward Comment
                  </span>

                  <span className="pl-6 lg:pl-10">
                    Experienced interference at the 300m mark but recovered
                    well. No further action taken. Jockey reported the horse
                    felt slightly fatigued towards the end.
                  </span>
                </div>
              </div>

              <div className="overflow-auto lg:pl-10">
                <table className={cn(styles.dataTable)}>
                  <tbody>
                    {new Array(3).fill("").map((_, index) => (
                      <React.Fragment key={index}>
                        <tr>
                          <td rowSpan={2}>
                            <div className="relative whitespace-nowrap rounded bg-Font_SubColor_1 px-2 py-3 font-bold text-white lg:-left-7">
                              7th of 10
                            </div>
                          </td>
                          <td
                            rowSpan={2}
                            className="whitespace-nowrap !align-top"
                          >
                            <p>24 May 2023</p>
                            <p>
                              Cranbourne{" "}
                              <b className="text-Blue_Main_Official_4">
                                Soft 6
                              </b>
                            </p>
                            <p> D.Oliver 58kg Barrier 4</p>
                            <p>1400m 2Y MDN-SW 38K</p>
                            <p>Rail : +2m</p>
                          </td>
                          <td rowSpan={2}>
                            <table>
                              <tbody>
                                <tr>
                                  <td>Margin:</td>
                                  <td>5.1L</td>
                                </tr>
                                <tr>
                                  <td>Settled:</td>
                                  <td>5th</td>
                                </tr>

                                <tr>
                                  <td>800/400m:</td>
                                  <td>9th/5th</td>
                                </tr>
                                <tr>
                                  <td className="text-nowrap">
                                    Starting Price:
                                  </td>
                                  <td>$14.00</td>
                                </tr>
                              </tbody>
                            </table>
                          </td>
                          <td rowSpan={2} className="text-nowrap">
                            <table>
                              <tbody>
                                <tr>
                                  <td>1st Moriconi</td>
                                  <td className="text-Sub_Dark_color">
                                    (T Townsend 57.5kg)
                                  </td>
                                </tr>
                                <tr>
                                  <td>2nd Real Hussey</td>
                                  <td className="text-Sub_Dark_color">
                                    (B Richardson 61kg) 0.75L
                                  </td>
                                </tr>
                                <tr>
                                  <td>3rd Barney&apos;s Blaze</td>
                                  <td className="text-Sub_Dark_color">
                                    (E Bell 59.5kg) 3.00L
                                  </td>
                                </tr>
                              </tbody>
                            </table>

                            <span
                              onClick={() => onShowFullResults?.()}
                              className="cursor-pointer text-Sub_Dark_color app-text-caption"
                            >
                              <EllipsisIcon className="inline" /> See full
                              results
                            </span>
                          </td>
                          <td
                            colSpan={3}
                            className="min-w-[225px] text-nowrap border"
                          >
                            <div className="grid grid-cols-2 gap-x-3">
                              <span>Winning Time</span>
                              <span>: 1:10.57</span>
                            </div>

                            <div className="grid grid-cols-2 gap-x-3">
                              <span>600m Sectional</span>
                              <span>: 32.56</span>
                            </div>
                          </td>
                          <td rowSpan={2} className="!pr-10 !align-middle">
                            {index > 0 ? (
                              <Dialog>
                                <DialogTrigger asChild>
                                  <Button
                                    variant="muted"
                                    size="xs"
                                    className="w-full px-3"
                                  >
                                    Commented
                                  </Button>
                                </DialogTrigger>

                                <DialogPortal>
                                  <DialogOverlay />

                                  <DialogContent className="max-w-[800px]">
                                    <div className="p-10 pb-7">
                                      Lorem ipsum dolor sit amet consectetur
                                      adipisicing elit. Suscipit autem eveniet
                                      repellendus, a possimus enim quasi
                                      accusantium iusto facilis nemo explicabo
                                      neque voluptatibus delectus at voluptate
                                      dolor rem cum qui?
                                    </div>
                                  </DialogContent>
                                </DialogPortal>
                              </Dialog>
                            ) : (
                              <Dialog>
                                <DialogTrigger asChild>
                                  <Button
                                    variant="dark"
                                    size="xs"
                                    className="w-full px-3"
                                  >
                                    Add Comment
                                  </Button>
                                </DialogTrigger>
                                <DialogPortal>
                                  <DialogOverlay />
                                  <DialogContent className="w-[1100px] max-w-full"></DialogContent>
                                </DialogPortal>
                              </Dialog>
                            )}
                          </td>
                        </tr>

                        <tr>
                          <td className="max-w-[65px] border !px-1 font-light lg:!px-4">
                            <b>55</b>
                            <br />{" "}
                            <span className="inline-block text-[11px] leading-tight text-Font_SubColor_1">
                              Blocked for run
                            </span>
                          </td>
                          <td className="max-w-[65px] border !px-1 font-light lg:!px-4">
                            <b>22</b>
                            <br />{" "}
                            <span className="inline-block text-[11px] leading-tight text-Font_SubColor_1">
                              Come from back
                            </span>
                          </td>
                          <td className="max-w-[65px] border !px-1 font-light lg:!px-4">
                            <b>12</b>
                            <br />{" "}
                            <span className="inline-block text-[11px] leading-tight text-Font_SubColor_1">
                              Went <br />
                              back from <br /> barrier
                            </span>
                          </td>
                        </tr>
                      </React.Fragment>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="mt-[-1px] border-t border-Subtle_dark py-6 text-center">
                <Button variant="muted" className="mx-auto max-w-[223px] px-8">
                  <EllipsisIcon className="mr-1.5" />
                  Load More Data
                </Button>
              </div>
            </AccordionContent>
          </td>
        </tr>
      </>
    </AccordionItem>
  );
};
