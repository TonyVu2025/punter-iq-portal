import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { FaRegStar, FaRegUser } from "react-icons/fa6";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import { tipDashboardData } from "@/lib/data";
import { FaChevronUp } from "react-icons/fa";
import { PastResultsCard } from "./PastResultsCard";
import { RankingRaceCard } from "../../../components/RankingRaceCard";

export const BetAccordionCard = () => {
  return (
    <div className="rounded-lg bg-white">
      <div className="flex flex-wrap items-center justify-between gap-1 rounded-t-lg px-3 py-5 text-black lg:px-5 lg:py-2.5">
        <span className="flex-1 text-start text-xs font-extrabold text-mainFont lg:text-sm">
          Bet365 Geelong - Race 1
        </span>
        <span className="flex flex-none">
          <span className="rounded-md bg-[#FFE3EF] p-2 text-action_ll2 app-text-body-small 2xl:text-sm">
            <ul>
              <li className="hidden 2xl:list-item">• 1min 5sec</li>
              <li className="2xl:hidden">• 1m5s</li>
            </ul>
          </span>
        </span>
      </div>

      <div className="border-y px-3 py-2 lg:px-5 lg:py-4">
        <div className="flex items-center justify-between gap-2.5 lg:flex-row">
          <div className="flex items-center">
            <Avatar className="h-[29px] w-[29px]">
              <AvatarImage src="" />
              <AvatarFallback className="bg-good_Green text-white">
                W
              </AvatarFallback>
            </Avatar>

            <div className="pl-3">
              <h2 className="text-sm">Lucas the Younger</h2>

              <h3 className="text-xs font-light text-Font_SubColor_1">
                Total tips $15,500
              </h3>
            </div>
          </div>

          <div>
            <Button variant="muted" className="h-[27px] font-normal">
              Bet Slip
              <FaChevronUp className="ml-[5px]" />
            </Button>
          </div>
        </div>
      </div>

      <PastResultsCard customWrapperClass="lg:mt-0" />

      <div className="flex gap-2 border-t px-3 py-2 lg:justify-normal lg:px-8">
        <Button
          variant="purple"
          className="flex-1 h-[47px] font-light lg:mr-0 lg:h-[31px] 2xl:w-[192px]"
        >
          Copy bet
          <span className="mx-1.5 h-[5px] w-[1px] bg-[#8774FA] lg:mx-3"></span>
          <FaRegUser />
          155
        </Button>

        <Button
          variant="muted"
          className="basis-[104px] h-[47px] align-middle font-light lg:h-[31px] 2xl:w-[85px]"
        >
          <FaRegStar className="mr-1" /> Save
        </Button>
      </div>

      <Accordion className="border-none" type="single" collapsible>
        {tipDashboardData.map((item, index) => (
          <AccordionItem key={index} value={item}>
            <AccordionTrigger
              className={`flex w-full justify-between gap-3 px-3.5 py-2.5 hover:no-underline ${
                index == 0
                  ? "border-tFflex-1 lg:text-smborder-SubDark_Color_3 text-start text-xs font-bold text-mainFont"
                  : ""
              }`}
            >
              <span className="text-start text-xs font-extrabold text-mainFont lg:text-[15px]">
                {item.label.title}
              </span>
              <span className="mr-7 flex flex-none gap-2 2xl:mr-9">
                <span className="rounded-md bg-[#FFE3EF] p-2 text-sm font-normal text-action_ll2">
                  <ul>
                    <li className="hidden 2xl:list-item">
                      • {item.label.time}
                    </li>
                    <li className="2xl:hidden">• {item.label.timeShorten}</li>
                  </ul>
                </span>
              </span>
            </AccordionTrigger>
            <AccordionContent className="overflow-x-hidden bg-Subtle_dark px-2">
              <RankingRaceCard
                btnClass="w-[91px] h-[36px] app-text-body-small font-semibold"
                titleClass="app-text-body-medium"
                customWrapperClass="bg-transparent border-b rounded-none p-2 border-SubDark_Color_3"
                twoLine
              />
              <RankingRaceCard
                btnClass="w-[91px] h-[36px] app-text-body-small font-semibold"
                titleClass="app-text-body-medium"
                customWrapperClass="bg-transparent border-b rounded-none p-2 border-SubDark_Color_3"
                twoLine
              />
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
};
