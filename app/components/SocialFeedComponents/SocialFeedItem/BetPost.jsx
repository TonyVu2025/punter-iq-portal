import { Tabs, TabsList, TabsTrigger } from "../../ui/tabs";
import { Avatar, AvatarFallback, AvatarImage } from "../../ui/avatar";
import { Button } from "../../ui/button";
import { FaRegStar, FaRegUser } from "react-icons/fa6";
import { CommentSection } from "./CommentSection";
import { BetHeader } from "./BetHeader";
import { SocialFeedAction } from "./SocialFeedAction";
import { cn } from "@/lib/utils";

export const BetPost = ({
  resulted,
  headerClassNames,
  wrapperPostClass,
  descriptionClassName,
  showActions = true,
  tagSection = null,
}) => {
  return (
    <div className="mb-6 rounded-lg bg-white lg:mb-0">
      <BetHeader {...headerClassNames} />

      <div className={cn("px-3 lg:px-8", wrapperPostClass)}>
        <div className="flex justify-between">
          <span className="mt-2 text-xs lg:text-2xs">Single Pick</span>

          <Tabs defaultValue="pick">
            <TabsList className="h-auto space-x-6 bg-transparent p-0">
              <TabsTrigger
                className="rounded-none border-t-4 border-transparent pl-0 pt-0.5 app-text-body-verysmall data-[state=active]:border-action_ll1"
                value="pick"
              >
                Pick
              </TabsTrigger>

              <TabsTrigger
                className="rounded-none border-t-4 border-transparent pl-0 pt-0.5 app-text-body-verysmall data-[state=active]:border-action_ll1"
                value="analysis"
              >
                Analysis
              </TabsTrigger>
            </TabsList>
          </Tabs>
        </div>

        <div className="mt-0.5 flex flex-col items-center justify-between gap-2.5 lg:flex-row">
          <div className="flex items-center">
            <Avatar className="h-8 w-8">
              <AvatarImage src="" />
              <AvatarFallback className="bg-good_Green text-white">
                W
              </AvatarFallback>
            </Avatar>

            <div className="pl-3">
              <h2 className="text-sm">Barney&lsquo;s Blaze</h2>

              <h3 className="text-xs text-Font_SubColor_1">
                Kyneton-R3 1118 Mdn
              </h3>
            </div>
          </div>

          <div className="flex flex-wrap gap-2">
            {tagSection ? (
              tagSection
            ) : (
              <>
                <Button
                  variant="green"
                  className="h-[28px] px-1 app-text-small-caption"
                >
                  Win
                </Button>
                <Button
                  variant="muted"
                  className="h-[28px] px-1 app-text-small-caption"
                >
                  $2.50
                </Button>
              </>
            )}
          </div>
        </div>

        <div
          className={cn(
            "mt-4 rounded-md border border-SubDark_Color_3 p-2 text-xs font-light lg:p-6",
            descriptionClassName,
          )}
        >
          Only just missed last start, finishing a neck back from the winner at
          Trentham and comes back to race at a country level. Rates as one of
          the key chancesOnly just missed last start, finishing a neck back from
          the winner at Trentham and comes back to race at a country level.
          Rates as one of the key chances
        </div>
      </div>

      <div className="mt-4 flex w-full border-t">
        <span className="inline-flex basis-[33%] flex-col items-end border-r px-2 pb-1 lg:px-6">
          <span>
            <span className="text-Font_SubColor_1 app-text-body-verysmall">
              Price
            </span>

            <span className="block">$10.55</span>
          </span>
        </span>

        <span className="inline-flex basis-[25%] flex-col items-end border-r px-3 pb-1 lg:px-6">
          <span>
            <span className="text-Font_SubColor_1 app-text-body-verysmall">
              Risking
            </span>

            <span className="block">$15,55</span>
          </span>
        </span>

        <span className="inline-flex flex-1 flex-col pb-1 pl-2 2xl:pl-6">
          <span>
            <span className="text-Font_SubColor_1 app-text-body-verysmall">
              Win
            </span>

            <span className="block">$155,899</span>
          </span>
        </span>
      </div>

      {!resulted ? (
        <div className="flex flex-wrap space-y-2 border-y px-3 py-2 lg:space-x-2 lg:space-y-0 lg:px-8">
          <Button
            variant="purple"
            className="basis-[100%] font-light lg:basis-[60%]"
          >
            Copy bet
            <span className="mx-1.5 h-[5px] w-[1px] bg-[#8774FA] lg:mx-3"></span>
            <FaRegUser />
            155
          </Button>
          <Button variant="muted" className="flex-1 align-middle font-light">
            <FaRegStar className="mr-1" /> Save
          </Button>
        </div>
      ) : (
        <div className="px-3.5 pb-7 pt-2">
          <Button variant="green" className="h-[31px] w-full font-light">
            Resulted
          </Button>
        </div>
      )}

      {!resulted && <CommentSection />}

      {showActions && (
        <SocialFeedAction className="-mt-2 border-t border-Subtle_dark_2" />
      )}
    </div>
  );
};
