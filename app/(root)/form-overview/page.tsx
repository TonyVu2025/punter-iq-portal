"use client";

import { CloudSnowIcon, ThermometerIcon, WindIcon } from "lucide-react";
import { TrackIcon } from "./components/TrackIcon";
import { StatsTable } from "./components/StatsTable";
import { BlackbookCard } from "@/components/BlackbookCard";
import { Chip } from "./components/Chip";
import { HideOnMobile } from "@/components/ui/HideOnMobile";
import { MobileOnly } from "@/components/MobileOnly";
import { FormDetailsMobile } from "./FormDetailsMobile";
import { Wrapper } from "@/components/Wrapper";
import { RacePagination } from "./components/RacePagination";
import { NewsCard } from "@/components/NewsCard/NewsCard";
import { FooterCta } from "@/components/FooterCta";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { LastStartComments } from "./components/LastStartComments";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectIcon,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { FaCaretDown } from "react-icons/fa6";
import { LlSlider } from "@/components/ui/LlSlider";
import { Pagination } from "swiper/modules";
import { Head2Head } from "./components/Head2Head";
import { FormOverviewTab } from "./components/FormOverviewTab";
import { TabsTriggerProps } from "@radix-ui/react-tabs";
import { twMerge } from "tailwind-merge";
import Odds from "./components/Odds";
import RunnerCompare from "./components/RunnerCompare";
import Market from "./components/Market";
import { TipTracker } from "./components/TipTracker";
import { fetchRaceDetails } from "@/graphql/fetchRacedetails";
import React, { useEffect, useState } from "react";
import { getPunterDayJS } from "@/utils/dateUtils";
import { GetFormGuideOverviewDocument } from "@/gql/graphql";
import { useClientSupabaseQuery } from "@/hooks/useClientSupabaseQuery";
import { TripleDotsLoading } from "@/components/ui/TripleDotsLoading";
import { Calendar } from "@/components/ui/calendar";
import dayjs from "dayjs";

interface OddsNode {
  source: string;
  win_fixed: number;
  place_fixed: number;
  competitor_number: string;
}

interface RaceNode {
  id: string;
  name: string;
  status: string;
  start_time: string;
  race_number: string;
  top_4_numbers: any; // Replace with correct type if known
  oddsCollection: {
    edges: { node: OddsNode }[];
  };
  competitorsCollection: {
    edges: any[]; // Replace with correct type if known
  };
}

interface RacesCollection {
  edges: { node: RaceNode }[];
}

interface CompetitorNode {
  node: {
    horses: {
      age: number;
      sex: string;
      name: string;
    };
    margin: number;
    barrier: number;
    weight_total: number;
    final_position: any; // Adjust type as needed
    elapsed_time_ms: any; // Adjust type as needed
    scratching_type: string;
    failed_to_finish: boolean;
    competitor_number: number;
    failed_to_finish_reason: string;
  };
}

interface RaceDetailNode {
  name: string;
  rail: string;
  class: string;
  status: string;
  tracks: {
    name: string;
    state: string;
    surface: string;
  };
  weather: string;
  distance: number;
  start_time: string;
  competitors: {
    edges: CompetitorNode[];
  };
  prize_money: string;
  top_4_numbers: any; // Adjust type as needed
  track_condition: string;
  competitor_count: number;
}

interface RacesCollectionEdges {
  node: RaceDetailNode;
}

interface RaceDetail {
  racesCollection: {
    edges: RacesCollectionEdges[];
  };
}

const Tab = ({ className, ...props }: TabsTriggerProps) => (
  <TabsTrigger
    className={twMerge(
      "relative h-12 cursor-pointer whitespace-nowrap border-r border-none px-2 text-Font_SubColor_1 hover:text-mainFont data-[state=active]:text-mainFont lg:px-4 lg:text-base lg:leading-10",
      className,
    )}
    {...props}
  />
);

const FormOverviewDesktop = () => {
  const [selectedDate, setSelectedDate] = useState(getPunterDayJS(new Date()));
  const [isCalendarVisible, setIsCalendarVisible] = useState(false);
  const [top4Competitors, setTop4Competitors] = useState([]);
  const [racesCollection, setRacesCollection] = useState<RacesCollection>({
    edges: [],
  });
  const [meeting, setMeeting] = useState("");
  const [raceDetail, setRaceDetail] = useState<RaceDetail>();

  const toggleCalendarVisibility = () => {
    setIsCalendarVisible(!isCalendarVisible);
  };

  const handleDateSelect = (date: Date) => {
    const previousDay = dayjs(date).subtract(1, 'day').toDate();
    setSelectedDate(getPunterDayJS(previousDay));
    setIsCalendarVisible(false); // Hide calendar after selecting a date
  };


  const { data, isFetching, refetch } = useClientSupabaseQuery(
    ["formGuideOverview"],
    GetFormGuideOverviewDocument,
    {
      startDate: selectedDate.startOf("d").toDate(),
      endDate: selectedDate.endOf("d").toDate(),
    }
  );

  useEffect(() => {
    refetch();
  }, [refetch, selectedDate]);

  useEffect(() => {
    if (data?.meetingsCollection.edges.length > 0) {
      const firstMeeting = `${data.meetingsCollection.edges[0].node.tracks.name}-${data.meetingsCollection.edges[0].node.tracks.state}`;
      const checkMetting = data.meetingsCollection.edges.find(
        (item) =>
          `${item.node.tracks.name}-${item.node.tracks.state}` === meeting
      );
      if (!meeting || !checkMetting) {
        setMeeting(firstMeeting);
      }
      const selectedMeeting = data.meetingsCollection.edges.find(
        (item) =>
          `${item.node.tracks.name}-${item.node.tracks.state}` ===
          (meeting || firstMeeting)
      );
      if (selectedMeeting) {
        const formattedRaces = selectedMeeting.node.racesCollection || { edges: [] };
        setRacesCollection(formattedRaces);

        if (formattedRaces.edges.length > 0) {
          getRaceDetails(Number(formattedRaces.edges[0].node.id));
        }
      }
    }
  }, [data, meeting]);

  const getRaceDetails = async (raceID: number) => {
    const raceDetails = await fetchRaceDetails(raceID);
    
    // Format Race Details here if needed before setting state
    setRaceDetail(raceDetails as RaceDetail);
  };

  useEffect(() => {
    if(raceDetail) {
      const topNumber  = raceDetail?.racesCollection.edges[0]?.node.top_4_numbers || [];
      const competitors = raceDetail?.racesCollection.edges[0].node.competitors.edges;
      const topCompetitorDetails = competitors.filter(competitor =>
        topNumber.includes(competitor.node.competitor_number)
      ).sort((a, b) =>
        topNumber.indexOf(a.node.competitor_number) - topNumber.indexOf(b.node.competitor_number)
      );
      setTop4Competitors(topCompetitorDetails);
    }
  },[raceDetail])
  if (isFetching || !data) {
    return (
      <div className="flex h-screen items-center justify-center">
        <TripleDotsLoading />
      </div>
    );
  }
  return (
    <>
      <Wrapper>
        <div>
          <img src="/img/sample-ads-4.jpg" alt="" className="mx-auto mt-9" />

          <div className="flex flex-wrap items-end justify-between lg:flex-nowrap">
            <div>
              <div className="mt-5">
                <Select
                  value={meeting}
                  onValueChange={(value) => {
                    setMeeting(value);
                    const selectedMeeting = data.meetingsCollection.edges.find(
                      (item) =>
                        `${item.node.tracks.name}-${item.node.tracks.state}` ===
                        value,
                    );
                    if (selectedMeeting) {
                      setRacesCollection(selectedMeeting.node.racesCollection);
                    }
                  }}
                >
                  <SelectTrigger>
                    <SelectValue className="app-text-h2" />

                    <SelectIcon>
                      <FaCaretDown className="mb-0.5 ml-4 inline-block align-middle text-Font_SubColor_1" />
                    </SelectIcon>
                  </SelectTrigger>

                  <SelectContent>
                    {data.meetingsCollection.edges.map((item, index) => {
                      return (
                        <SelectItem
                          key={index}
                          value={`${item.node.tracks.name}-${item.node.tracks.state}`}
                        >
                          {item.node.tracks.name}-{item.node.tracks.state}
                        </SelectItem>
                      );
                    })}
                  </SelectContent>
                </Select>
              </div>
              <h2 className="mt-1 text-Sub_Dark_color app-text-small-caption">
                {raceDetail?.racesCollection.edges[0]?.node.name}
              </h2>
            </div>

            <div className="relative mt-4 flex flex-wrap items-stretch gap-3 lg:top-5 lg:mt-0">
              <div className="flex items-center border-r pr-2 lg:px-5">
                <TrackIcon />

                <strong className="ml-2 align-middle lg:app-text-h4">
                  {raceDetail?.racesCollection.edges[0]?.node.distance}m
                </strong>
              </div>

              <div className="flex items-center border-r px-2 lg:px-5">
                <CloudSnowIcon className="inline" />
                <strong className="ml-2 align-middle lg:app-text-h4">
                  {raceDetail?.racesCollection.edges[0]?.node.weather}
                </strong>
              </div>

              <div className="flex items-center px-2 lg:border-r lg:px-5">
                <ThermometerIcon className="inline" />
                <WindIcon className="inline" />

                <strong className="ml-2 align-middle lg:app-text-h4">
                  {raceDetail?.racesCollection.edges[0]?.node.track_condition}
                </strong>
              </div>

              <div className="text-Font_SubColor_1 app-text-small-caption lg:px-5">
                <span className="text-mainFont">Track Rail</span> <br />
                {raceDetail?.racesCollection.edges[0]?.node.rail}
              </div>
              <div className="relative">
                <div
                  onClick={toggleCalendarVisibility}
                  className="mb-2 inline-block max-w-[89px] rounded bg-SubDark_Color_3 px-4 py-1.5 font-helveticaNowDisplay text-[15px] font-bold text-Sub_Dark_color"
                >
                  Final Results
                </div>
                {isCalendarVisible && (
                  <div className="relative z-10">
                    <div
                      className="absolute left-0 mt-1 rounded bg-gray-200 p-2 shadow-lg"
                      style={{ minWidth: "250px" }} // Adjust width as needed
                    >
                      <Calendar onDayClick={handleDateSelect} />
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </Wrapper>

      <div className="mt-5 border-y">
        <Wrapper className="flex items-center overflow-auto px-0">
          <RacePagination className="items-center text-[20px] font-[800]">
            All
          </RacePagination>
          {racesCollection.edges.map((race, index) => (
            <div
              key={index}
              onClick={() => getRaceDetails(Number(race.node.id))}
            >
              <RacePagination raceNumber={race.node.race_number} />
            </div>
          ))}
        </Wrapper>
      </div>

      <div className="border-b py-2 app-text-small-caption lg:px-11">
        <Wrapper className="flex flex-wrap items-center justify-between">
          <Select value="default">
            <SelectTrigger className="w-auto text-xs text-Sub_Dark_color">
              <SelectValue />

              <SelectIcon className="pl-1">
                <FaCaretDown></FaCaretDown>
              </SelectIcon>
            </SelectTrigger>

            <SelectContent>
              <SelectItem value="default">
                Set Weights. {raceDetail?.racesCollection.edges[0]?.node.class}
              </SelectItem>
              <SelectItem value="item2">Item 2</SelectItem>
            </SelectContent>
          </Select>

          <Select value="default">
            <SelectTrigger className="w-auto text-xs text-Sub_Dark_color">
              <SelectValue />

              <SelectIcon className="pl-1">
                <FaCaretDown></FaCaretDown>
              </SelectIcon>
            </SelectTrigger>

            <SelectContent>
              <SelectItem value="default">
                Race Time:{" "}
                {new Date(
                  raceDetail?.racesCollection.edges[0]?.node.start_time,
                ).toLocaleTimeString([], {
                  hour: "2-digit",
                  minute: "2-digit",
                  second: "2-digit",
                })}
              </SelectItem>
              <SelectItem value="item2">Item 2</SelectItem>
            </SelectContent>
          </Select>

          <Select value="default">
            <SelectTrigger className="w-auto text-xs text-Sub_Dark_color">
              <SelectValue />

              <SelectIcon className="pl-1">
                <FaCaretDown></FaCaretDown>
              </SelectIcon>
            </SelectTrigger>

            <SelectContent>
              <SelectItem value="default">
                Prize Money: $
                {raceDetail?.racesCollection.edges[0]?.node.prize_money}
              </SelectItem>
              <SelectItem value="item2">Item 2</SelectItem>
            </SelectContent>
          </Select>
        </Wrapper>
      </div>

      <Wrapper>
        <div className="mt-8">
          {top4Competitors.map((competitor, index) => (
            <div
              key={index}
              className="mt-2 flex flex-wrap justify-between rounded-xl bg-white app-text-caption"
            >
              <div className="relative flex flex-auto flex-wrap justify-between gap-3 pr-4 pt-12 lg:pr-12 lg:pt-0">
                <div className="flex items-center gap-4 pb-4 pl-[24px]">
                  <div
                    className="flex h-[26px] w-[26px] items-center justify-center rounded-2xl text-[10px] leading-[26px] text-white"
                    style={{
                      backgroundColor:
                        index === 0
                          ? "#F37023"
                          : index === 1
                            ? "#0091CD"
                            : index === 2
                              ? "#F5A06E"
                              : "#AAB6BF",
                    }}
                  >
                    {index === 0
                      ? "1st"
                      : index === 1
                        ? "2nd"
                        : index === 2
                          ? "3rd"
                          : "4th"}
                  </div>
                  <img alt="" src="/img/icons/t-shirt-orange.svg" width={43} />
                  <div className="-mt-0.5">
                    <strong className="app-text-h4">
                      {competitor?.node.competitor_number}. Barney’s Blaze - {competitor?.node.barrier}
                    </strong>
                    <p className="text-Font_SubColor_1 app-text-caption">
                      {competitor?.node.horses.age}yoG (b) Rubick x Harvest Queen
                    </p>
                  </div>
                </div>

                <div className="items-center pb-4 lg:pt-10">
                  <table>
                    <tbody>
                      <tr>
                        <td className="pr-3">Trainer</td>
                        <td className="text-Font_SubColor_1">
                          Frankie Stockdale
                        </td>
                      </tr>
                      <tr>
                        <td className="pr-3">Jockey</td>
                        <td className="text-Font_SubColor_1">
                          {competitor?.node.horses.name} (a4)
                        </td>
                      </tr>
                      <tr>
                        <td className="pr-3">Weight</td>
                        <td className="text-Font_SubColor_1">{competitor?.node.weight_total}kg</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <Chip
                  className="ml-4 self-center py-2"
                  text1="Margin"
                  text2={competitor?.node.margin + "L"}
                />
              </div>

              <div className="flex-1 pb-4 pt-3 lg:max-w-[35%] lg:border-l">
                <StatsTable />
              </div>
            </div>
          ))}
        </div>
        <div>
          <div className="mt-10">
            <div className="grid gap-4 lg:grid-cols-4 lg:pl-16 lg:pr-10">
              {new Array(4).fill(null).map((_, index) => (
                <div key={index} className="rounded-xl bg-white p-7">
                  <h3 className="relative app-text-h4">
                    Quinella
                    {index === 0 && (
                      <span className="absolute right-full mr-7 w-16 rounded bg-SubDark_Color_3 py-2 text-center app-text-small-caption">
                        Exotics
                      </span>
                    )}
                  </h3>

                  <table className="mt-3 w-full">
                    <thead>
                      <tr>
                        <th className="pr-3 text-left text-Font_SubColor_1 app-text-caption">
                          1st
                        </th>
                        <th className="px-3 text-left text-Font_SubColor_1 app-text-caption">
                          2nd
                        </th>
                        <th></th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="relative border-b border-Subtle_dark">
                        <td className="py-2 pr-3">
                          {index === 0 && (
                            <span className="absolute right-full mr-7 w-16 rounded bg-SubDark_Color_3 py-2 text-center app-text-small-caption">
                              S-TAB
                            </span>
                          )}

                          <span className="inline-block h-[30px] w-[30px] rounded bg-Subtle_dark text-center leading-[30px] text-Font_SubColor_1">
                            7
                          </span>
                        </td>
                        <td className="px-3 py-2">
                          <span className="inline-block h-[30px] w-[30px] rounded bg-Subtle_dark text-center leading-[30px] text-Font_SubColor_1">
                            9
                          </span>
                        </td>
                        <td className="text-right">
                          <span>$96.90</span>
                        </td>
                      </tr>

                      <tr className="relative border-b border-Subtle_dark">
                        <td className="py-2 pr-3">
                          {index === 0 && (
                            <span className="absolute right-full mr-7 w-16 rounded bg-SubDark_Color_3 py-2 text-center app-text-small-caption">
                              NSW
                            </span>
                          )}
                          <span className="inline-block h-[30px] w-[30px] rounded bg-Subtle_dark text-center leading-[30px] text-Font_SubColor_1">
                            7
                          </span>
                        </td>
                        <td className="px-3 py-2">
                          <span className="inline-block h-[30px] w-[30px] rounded bg-Subtle_dark text-center leading-[30px] text-Font_SubColor_1">
                            9
                          </span>
                        </td>
                        <td className="text-right">
                          <span>$96.90</span>
                        </td>
                      </tr>

                      <tr className="relative">
                        <td className="py-2 pr-3">
                          {index === 0 && (
                            <span className="absolute right-full mr-7 w-16 rounded bg-SubDark_Color_3 py-2 text-center app-text-small-caption">
                              Ubet
                            </span>
                          )}
                          <span className="inline-block h-[30px] w-[30px] rounded bg-Subtle_dark text-center leading-[30px] text-Font_SubColor_1">
                            7
                          </span>
                        </td>
                        <td className="px-3 py-2">
                          <span className="inline-block h-[30px] w-[30px] rounded bg-Subtle_dark text-center leading-[30px] text-Font_SubColor_1">
                            9
                          </span>
                        </td>
                        <td className="text-right">
                          <span>$96.90</span>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="mt-10 border-t pt-10">
          <LlSlider
            slidesPerView={3}
            pagination={{
              clickable: true,
            }}
            autoplay
            paginationStyle="alt"
            modules={[Pagination]}
          >
            <div>
              <div className="mb-4 h-10 app-text-h3">
                <img
                  alt=""
                  src="/img/tipster-avatar.png"
                  className="mr-3 inline align-middle"
                  width={39}
                />
                <span className="align-middle">Kane Tips</span>
              </div>

              <BlackbookCard />
              <BlackbookCard />
              <BlackbookCard />
              <BlackbookCard />
            </div>

            <div>
              <div className="mb-4 h-10 app-text-h3">Most Tipped Horses</div>

              <BlackbookCard />
              <BlackbookCard />
              <BlackbookCard />
              <BlackbookCard />
            </div>

            <div>
              <div className="mb-4 h-10 app-text-h3">Top 4 L600m</div>

              <BlackbookCard />
              <BlackbookCard />
              <BlackbookCard />
              <BlackbookCard />
            </div>

            {new Array(3).fill("").map((_, idx) => (
              <div key={idx}>
                <div className="mb-4 h-10 app-text-h3">Top 4 L600m</div>

                <BlackbookCard />
                <BlackbookCard />
                <BlackbookCard />
                <BlackbookCard />
              </div>
            ))}
          </LlSlider>
        </div>
      </Wrapper>

      <Tabs className="mt-5" defaultValue="overview">
        <TabsList className="mx-auto block h-auto w-full border-y px-0 py-0">
          <Wrapper className="flex justify-between px-0">
            <Tab value="overview">Overview</Tab>
            <Tab value="fullform">Full Form</Tab>
            <Tab value="Head2Head">Head2Head</Tab>
            <Tab value="Odds">Odds</Tab>
            <Tab value="Speed">Speed Map</Tab>
            <Tab value="Quick">Quick Form</Tab>
            <Tab value="Runner">
              Runner Compare
              <span className="absolute right-0 top-0 h-5 w-5 rounded-full bg-[#FFE3D6] text-sm font-bold leading-5 text-action1">
                7
              </span>
            </Tab>
            <Tab value="Market">The Market</Tab>
            <Tab value="Tiptracker">Tip Tracker</Tab>
            <Tab
              value="r"
              onClick={(e) => e.preventDefault()}
              className="border-x border-solid px-6"
            >
              <Select value="runner-number">
                <SelectTrigger>
                  <SelectValue className="text-base" />

                  <SelectIcon>
                    <FaCaretDown className="mb-0.5 ml-2 inline-block align-middle text-Font_SubColor_1" />
                  </SelectIcon>
                </SelectTrigger>

                <SelectContent>
                  <SelectItem value="runner-number">Runner number</SelectItem>
                </SelectContent>
              </Select>
            </Tab>
            <Tab value="f" onClick={(e) => e.preventDefault()}>
              <Select value="sportbet">
                <SelectTrigger>
                  <SelectValue className="text-base" />

                  <SelectIcon>
                    <FaCaretDown className="mb-0.5 ml-2 inline-block align-middle text-Font_SubColor_1" />
                  </SelectIcon>
                </SelectTrigger>

                <SelectContent>
                  <SelectItem value="sportbet">
                    <img alt="" src="/img/sample-sponsor-2.svg" />
                  </SelectItem>
                </SelectContent>
              </Select>
            </Tab>
          </Wrapper>
        </TabsList>

        <TabsContent asChild value="overview">
          <Wrapper className="mt-14">
            <FormOverviewTab />
          </Wrapper>
        </TabsContent>

        <TabsContent asChild value="Speed">
          <Wrapper className="mt-14">{/* <FormOverviewTab /> */}</Wrapper>
        </TabsContent>

        <TabsContent value="Head2Head">
          <Wrapper>
            <div className="space-y-5 lg:mt-14">
              <Head2Head />
            </div>
          </Wrapper>
        </TabsContent>

        <TabsContent value="Odds">
          <Wrapper className="mt-14">
            <Odds />
          </Wrapper>
        </TabsContent>

        <TabsContent value="Runner">
          <Wrapper className="mt-14">
            <RunnerCompare />
          </Wrapper>
        </TabsContent>

        <TabsContent value="Market">
          <Wrapper className="mt-14">
            <Market />
          </Wrapper>
        </TabsContent>

        <TabsContent value="Tiptracker">
          <Wrapper className="mt-14">
            <TipTracker />
          </Wrapper>
        </TabsContent>

        <TabsContent asChild value="fullform">
          Full Form
        </TabsContent>
      </Tabs>

      <Wrapper>
        <LastStartComments />

        <div className="rounded-lg bg-white lg:mt-14 lg:p-10">
          <h2 className="font-bold app-text-h3">Help Guides</h2>

          <div className="mt-7 grid lg:grid-cols-3 lg:gap-x-20 lg:gap-y-6">
            <NewsCard />
            <NewsCard />
            <NewsCard />
          </div>
        </div>

        <img alt="" src="/img/sample-ads-4.jpg" className="mt-12" />
      </Wrapper>

      <FooterCta className="mt-[100px]" />
    </>
  );
};

const FormOverview = () => {
  return (
    <>
      <MobileOnly>
        <FormDetailsMobile />
      </MobileOnly>
      <HideOnMobile>
        <FormOverviewDesktop />
      </HideOnMobile>
    </>
  );
};

export default FormOverview;
