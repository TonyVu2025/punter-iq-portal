import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export const PastResultsCard = ({
  rounded,
  customWrapperClass,
  children,
}: any) => {
  return (
    <div
      className={cn(
        `bg-white first:mt-0 lg:mb-0 lg:mt-2.5 ${rounded ? "rounded-[10px]" : ""}`,
        customWrapperClass,
      )}
    >
      <div className="px-3 py-2 lg:px-5 lg:py-3.5">
        <div className="flex items-center justify-between gap-2.5 lg:flex-row">
          <div className="flex items-center">
            <Avatar className="h-[25px] w-[25px]">
              <AvatarImage src="" />
              <AvatarFallback className="bg-good_Green text-white">
                W
              </AvatarFallback>
            </Avatar>

            <div className="pl-3">
              <h2 className="text-sm">Barney&lsquo;s Blaze</h2>

              <h3 className="font-light text-Font_SubColor_1 app-text-small-caption">
                Kyneton-R3 1118 Mdn
              </h3>
            </div>
          </div>

          <div className="flex flex-wrap justify-center gap-2">
            {children ? (
              children
            ) : (
              <>
                <Button
                  variant="green"
                  className="h-[28px] min-w-[50px] px-1 app-text-small-caption"
                >
                  Win
                </Button>
                <Button
                  variant="muted"
                  className="h-[28px] min-w-[50px] px-1 app-text-small-caption"
                >
                  $2.50
                </Button>
              </>
            )}
          </div>
        </div>
      </div>

      <div className="flex w-full border-t">
        <span className="inline-flex basis-1/5 flex-col items-end border-r px-4 pb-2 lg:basis-[33%] 2xl:px-6">
          <span>
            <span className="font-light text-Font_SubColor_1 app-text-body-verysmall">
              Price
            </span>

            <span className="block app-text-body-medium">$10.55</span>
          </span>
        </span>

        <span className="inline-flex basis-2/5 flex-col items-end border-r px-5 pb-2 lg:basis-[25%] lg:items-end lg:px-5 2xl:px-6">
          <span>
            <span className="font-light text-Font_SubColor_1 app-text-body-verysmall">
              Risking
            </span>

            <span className="block app-text-body-medium">$15,55</span>
          </span>
        </span>

        <span className="inline-flex flex-1 basis-1/5 flex-col items-end pb-2 pr-4 lg:basis-0 2xl:pl-8">
          <span>
            <span className="font-light text-Font_SubColor_1 app-text-body-verysmall">
              Win
            </span>

            <span className="block app-text-body-medium">$155,899</span>
          </span>
        </span>
      </div>
    </div>
  );
};
