import { Button } from "@/components/ui/button";

export const AdsSectionDesktop = () => {
  return (
    <div className="hidden border-t p-3 pt-4 lg:block lg:p-12 2xl:p-20">
      <div className="mt-3 items-start justify-between lg:flex lg:gap-x-4">
        <div className="flex-none basis-[330px]">
          <h3 className="app-text-h3">SportBet Australia.</h3>
          <p className="2xl:text-body-paragraph mt-4 leading-relaxed app-text-body-medium lg:leading-[1.75]">
            A return to winning ways over 1200 metres at Caulfield on Saturday
            has set Recommendation on course for another crack at Group 1 level
            this spring.Although not as dominant as was his seven-length victory
            in the John Monash Stakes (1100m) at Caulfield two lengths ago,
            Recommendation at least put an end to a losing run over 1200 metres
            when he beat a small field of rivals in the G3 Bletchingly Stakes.
          </p>
        </div>

        <div className="mt-5 overflow-hidden lg:mt-0">
          <div className="flex flex-1 flex-wrap justify-center gap-4 lg:flex-nowrap">
            <img
              src="/img/sample-ads-portrait.jpg"
              className="min-w-0"
              alt=""
            />
            <img
              src="/img/sample-ads-portrait.jpg"
              className="min-w-0"
              alt=""
            />
            <img
              src="/img/sample-ads-portrait.jpg"
              className="min-w-0"
              alt=""
            />
          </div>

          <div className="text-right">
            <Button
              variant="purple"
              className="mt-2.5 h-[55px] w-full rounded-xl app-text-h4 lg:w-[250px]"
            >
              View BetSport Offer
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
