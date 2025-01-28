import { BrandCarousel } from "@/(root)/dashboard/components/BrandCarousel";
import { BetSliderMobile } from "../../components/BetSliderMobile";
import { LatestNewMobile } from "./components/LatestNewsMobile";
import { AdsSectionMobile } from "./components/AdsSectionMobile";
import { BetAccordionCard } from "@/(root)/dashboard/components/BetAccordionCard";
import { BlackbookCard, BlackbookCardV2 } from "@/components/BlackbookCard";
import { FeaturedTipstersCarousel } from "@/(root)/dashboard/components/FeaturedTipstersCarousel";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Link from "next/link";
import { ComponentProps } from "react";
import { FreeTipsMobile } from "./components/FreeTipsMobile";
import { FooterCta } from "@/components/FooterCta";
import { RankingCardMobile } from "@/components/RankingCard/RankingCard";
import { PastResultsCard } from "./components/PastResultsCard";

const DashboardTabsTrigger = (props: ComponentProps<typeof TabsTrigger>) => {
  return (
    <TabsTrigger
      {...props}
      className="rounded-none border-b-2 border-transparent px-0 text-base text-mainFont data-[state=active]:border-b-2 data-[state=active]:border-primary data-[state=active]:font-extrabold"
    />
  );
};

export const DashboardMobile = () => {
  return (
    <>
      <div className="mx-auto max-w-[1392px] p-3 pb-8 lg:p-10 lg:pb-[100px]">
        <BetSliderMobile />
        <LatestNewMobile />

        <div className="mt-10 rounded-lg bg-white">
          <div className="p-3 lg:px-10 lg:py-10 2xl:px-20">
            <BrandCarousel />
            <div className="mt-4">
              <AdsSectionMobile />
            </div>
          </div>
        </div>

        <Tabs defaultValue="tips" className="mt-4">
          <div className="flex items-center justify-between">
            <TabsList className="space-x-5">
              <DashboardTabsTrigger value="tips">Tips</DashboardTabsTrigger>

              <DashboardTabsTrigger value="results">
                Results
              </DashboardTabsTrigger>

              <DashboardTabsTrigger value="blackbook">
                Blackbook
              </DashboardTabsTrigger>
            </TabsList>

            <Link href="#" className="text-sm text-action_ll1">
              View More+
            </Link>
          </div>

          <TabsContent value="tips">
            <BetAccordionCard />
          </TabsContent>
          <TabsContent value="results" className="space-y-3">
            {new Array(7).fill(null).map((_, key) => (
              <PastResultsCard rounded key={key} />
            ))}
          </TabsContent>
          <TabsContent value="blackbook">
            {new Array(7).fill(null).map((_, key) => (
              <BlackbookCard key={key} />
            ))}
          </TabsContent>
        </Tabs>

        <FeaturedTipstersCarousel />

        <Tabs defaultValue="most-tipped" className="mt-4">
          <div className="flex items-center justify-between">
            <TabsList className="space-x-3">
              <DashboardTabsTrigger value="most-tipped">
                Most tipped
              </DashboardTabsTrigger>

              <DashboardTabsTrigger value="top-bb">Top BB</DashboardTabsTrigger>

              <DashboardTabsTrigger value="top-tippers">
                Top Tippers
              </DashboardTabsTrigger>
            </TabsList>

            <Link href="#" className="text-sm text-action_ll1">
              View More+
            </Link>
          </div>

          <TabsContent value="most-tipped">
            {new Array(7).fill(null).map((_, key) => (
              <BlackbookCard key={key} />
            ))}
          </TabsContent>
          <TabsContent value="top-bb">
            {new Array(7).fill(null).map((_, key) => (
              <BlackbookCardV2 key={key} />
            ))}
          </TabsContent>
          <TabsContent value="top-tippers">
            {new Array(6).fill(null).map((_, index) => (
              <RankingCardMobile key={index} rankLevel={index + 1} />
            ))}
          </TabsContent>
        </Tabs>

        <FreeTipsMobile />
      </div>
      {/* End main content */}

      <FooterCta />
    </>
  );
};
