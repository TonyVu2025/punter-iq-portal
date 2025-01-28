import { BetAccordionCard } from "@/(root)/dashboard/components/BetAccordionCard";
import { PastResultsCard } from "@/(root)/dashboard/components/PastResultsCard";
import { BlackbookCard } from "@/components/BlackbookCard";
import { LuPlus } from "react-icons/lu";
import { Button } from "@/components/ui/button";
import { BetPost } from "@/components/SocialFeedComponents";
import { TopRankingCard } from "@/(root)/dashboard/components/TopRankingCard";
import { RankingRaceCard } from "@/components/RankingRaceCard";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { RankingCardWithVideo } from "@/(root)/dashboard/components/RankingCardWithVideo";
import { FeaturedTipstersCarousel } from "@/(root)/dashboard/components/FeaturedTipstersCarousel";
import { BrandCarousel } from "@/(root)/dashboard/components/BrandCarousel";
import { BetSliderDesktop } from "../../components/BetSliderDesktop";
import { LatestNewDesktop } from "./components/LatestNewsDesktop";
import { AdsSectionDesktop } from "./components/AdsSectionDesktop";
import { HideOnMobile } from "@/components/ui/HideOnMobile";
import { MobileOnly } from "@/components/MobileOnly";
import { DashboardMobile } from "./DashboardMobile";
import { FooterCta } from "@/components/FooterCta";

const headerClassNames = {
  wrapperClassName: "bg-white border-b lg:px-3 lg:py-3.5",
  titleClassName: "text-mainFont lg:app-text-h6 !leading-none",
  subTitleClassName: "text-Font_SubColor_1",
};

const DashboardDesktop = () => {
  return (
    <>
      <div className="mx-auto max-w-[1392px] p-3 pb-8 lg:p-10 lg:pb-[100px]">
        <BetSliderDesktop />
        <LatestNewDesktop />

        <div className="mt-10 rounded-lg bg-white">
          <div className="p-3 lg:px-10 lg:py-10 2xl:px-20">
            <BrandCarousel />
          </div>

          <AdsSectionDesktop />
        </div>

        <div className="mt-6 lg:mt-0 lg:flex lg:border-b">
          <div className="lg:flex lg:flex-1 lg:pb-10 lg:pr-4 lg:pt-[50px] 2xl:pr-[45px]">
            <div className="lg:w-1/2">
              <div className="mb-2 flex items-center justify-between lg:mb-5">
                <h4 className="app-text-h4">Your Tips</h4>
                <Button
                  variant="muted"
                  className="h-[28px] app-text-small-caption"
                >
                  View More
                  <LuPlus className="ml-[4px]" />
                </Button>
              </div>
              <BetAccordionCard />
            </div>

            <div className="mt-6 lg:ml-5 lg:mt-0 lg:w-1/2">
              <div className="mb-2 flex items-center justify-between lg:mb-5">
                <h4 className="app-text-h4">Past Results</h4>
                <Button
                  variant="muted"
                  className="h-[28px] app-text-small-caption"
                >
                  View More
                  <LuPlus className="ml-[4px]" />
                </Button>
              </div>
              {new Array(5).fill(null).map((_, key) => (
                <PastResultsCard rounded key={key} />
              ))}
            </div>
          </div>

          <div className="mt-6 lg:mt-0 lg:w-[35%] lg:border-l lg:pl-4 lg:pt-[50px] 2xl:w-[40%] 2xl:pb-11 2xl:pl-11">
            <div className="mb-2 flex items-center justify-between lg:mb-5">
              <h4 className="app-text-h4">Your Blackbook</h4>
              <Button
                variant="muted"
                className="h-[28px] app-text-small-caption"
              >
                View More
                <LuPlus className="ml-[4px]" />
              </Button>
            </div>
            {new Array(7).fill(null).map((_, key) => (
              <BlackbookCard key={key} />
            ))}
          </div>
        </div>

        <FeaturedTipstersCarousel />

        <div className="mt-6 lg:mt-[50px]">
          <h4 className="app-text-h4">Latest wins</h4>
          <div className="mt-3 lg:mt-[22px] lg:flex lg:gap-5 2xl:gap-[43px]">
            <div className="gap-4 lg:flex lg:max-w-[66%] 2xl:max-w-[50%] 2xl:gap-[45px]">
              {new Array(2).fill(null).map((_, index) => (
                <div className="min-w-0" key={index}>
                  <BetPost
                    descriptionClassName="lg:py-2 lg:px-3 lg:max-h-[78px] overflow-hidden"
                    wrapperPostClass="lg:px-3"
                    headerClassNames={headerClassNames}
                    resulted
                    showActions={false}
                  ></BetPost>
                </div>
              ))}
            </div>
            <div className="flex w-full flex-col gap-4 lg:max-w-[600px] 2xl:gap-6">
              <img src="/img/dashboard-ads-2.jpg" alt="" />
              <img src="/img/dashboard-ads-1.jpg" alt="" />
            </div>
          </div>
        </div>

        <div className="mt-6 lg:mt-[50px] lg:flex lg:border-y">
          <div className="lg:w-1/2">
            <div className="lg:h-1/2 lg:border-b lg:pr-6 lg:pt-[30px] 2xl:pr-[55px]">
              <div className="mb-2 flex items-center justify-between lg:mb-5">
                <h4 className="app-text-h4">Most Tipped Horses</h4>
                <Button
                  variant="muted"
                  className="h-[28px] app-text-small-caption"
                >
                  View More
                  <LuPlus className="ml-[4px]" />
                </Button>
              </div>
              {new Array(4).fill(null).map((_, index) => (
                <BlackbookCard key={index} customWrapperClass="lg:mb-5" />
              ))}
            </div>
            <div className="mt-6 lg:mt-0 lg:h-1/2 lg:pr-6 lg:pt-[30px] 2xl:pr-[55px]">
              <div className="mb-2 flex items-center justify-between lg:mb-5">
                <h4 className="app-text-h4">Top BlackBookers</h4>
                <Button
                  variant="muted"
                  className="h-[28px] app-text-small-caption"
                >
                  View More
                  <LuPlus className="ml-[4px]" />
                </Button>
              </div>
              {new Array(4).fill(null).map((_, index) => (
                <BlackbookCard key={index}></BlackbookCard>
              ))}
            </div>
          </div>

          <div className="mt-6 lg:mt-0 lg:w-1/2 lg:border-l lg:pb-[50px] lg:pl-6 lg:pr-0 lg:pt-[30px] 2xl:pl-[54px]">
            <div className="mb-2 flex items-center justify-between lg:mb-[26px]">
              <h4 className="app-text-h4">Top Tippers</h4>
              <Button
                variant="muted"
                className="h-[28px] app-text-small-caption"
              >
                View More
                <LuPlus className="ml-[4px]" />
              </Button>
            </div>
            <div className="ranking-wrapper">
              {new Array(6).fill(null).map((_, index) => (
                <TopRankingCard key={index} rankLevel={index + 1} />
              ))}
            </div>
          </div>
        </div>

        <div className="mt-6 lg:mt-[71px]">
          <div className="mb-2 flex items-center justify-between lg:mb-5">
            <h3 className="app-text-h4 lg:app-text-h3">Past Race Winners</h3>
            <Button variant="muted" className="h-[28px] app-text-small-caption">
              View More
              <LuPlus className="ml-[4px]" />
            </Button>
          </div>
          <div className="mt-4 lg:mt-7">
            <div className="grid-cols-3 gap-[19px] lg:grid">
              {new Array(3).fill(null).map((_, index) => (
                <div className="mt-6 lg:mt-0" key={index}>
                  <h4 className="mb-3 app-text-h4 lg:mb-5">Ballarat</h4>
                  {new Array(5).fill(null).map((_, key) => (
                    <RankingRaceCard
                      key={key}
                      jockeyTextClassname="block ml-0"
                      titleClass="app-text-body-medium lg:text-[16px]"
                    >
                      <Avatar className="mx-2 h-10 w-10 2xl:ml-[21px] 2xl:mr-[30px]">
                        <AvatarImage src="" />
                        <AvatarFallback className="bg-good_Green text-white">
                          W
                        </AvatarFallback>
                      </Avatar>
                    </RankingRaceCard>
                  ))}
                </div>
              ))}
            </div>
          </div>
          <div className="mb-4 mt-6 flex items-center justify-between lg:mb-[31px] lg:mt-[73px]">
            <h4 className="app-text-h4">Free Tips</h4>
            <Button variant="muted" className="h-[28px] app-text-small-caption">
              View More
              <LuPlus className="ml-[4px]" />
            </Button>
          </div>
          <div className="grid-cols-3 gap-[21px] lg:grid">
            {new Array(3).fill(null).map((_, key) => (
              <RankingCardWithVideo
                raceCardProps={{ onlyRanking: true }}
                key={key}
              />
            ))}
          </div>
        </div>
      </div>
      {/* End main content */}

      <FooterCta />
    </>
  );
};

const DashboardPage = () => {
  return (
    <>
      <MobileOnly>
        <DashboardMobile />
      </MobileOnly>

      <HideOnMobile>
        <DashboardDesktop />
      </HideOnMobile>
    </>
  );
};

export default DashboardPage;
