import Image from "next/image";
import { cn } from "@/lib/utils";
import { BIcon } from "./ui/icons/BIcon";
import { Button } from "./ui/button";

export const BlackbookCard: React.FC<{ customWrapperClass?: string }> = ({
  customWrapperClass,
}) => {
  return (
    <div
      className={cn(
        "mb-4 flex flex-wrap items-center justify-between gap-1.5 rounded-[10px] bg-white px-2 py-3 last:mb-0 lg:mb-[17px] lg:px-4 lg:py-[18.5px] lg:pr-4 2xl:px-7",
        customWrapperClass,
      )}
    >
      <div className="flex">
        <Image
          className="self-center"
          src="/img/shirt.png"
          width={30}
          height={60}
          alt="shirt"
        />

        <div className="pl-3">
          <span className="block text-base leading-tight text-mainFont lg:app-text-body-medium">
            4. Lucas the Younger
          </span>
          <span className="mt-1 block text-xs font-normal text-Font_SubColor_1">
            Sportsbet-Pakenham R7
          </span>
        </div>

        <span className="self-center whitespace-nowrap pl-4 text-xs text-action_ll2 md:text-sm 2xl:pl-8">
          15 Tips
        </span>
      </div>

      <button className="whitespace-nowrap rounded-md bg-Font_SubColor_1 px-5 py-1.5 text-white">
        $ 5.55
      </button>
    </div>
  );
};

export const BlackbookCardV2: React.FC<{ customWrapperClass?: string }> = ({
  customWrapperClass,
}) => {
  return (
    <div
      className={cn(
        "mb-4 rounded-[10px] bg-white px-5 py-3 last:mb-0 lg:mb-[17px] lg:px-4 lg:py-[18.5px] lg:pr-4 2xl:px-7",
        customWrapperClass,
      )}
    >
      <div className="flex justify-between">
        <div className="flex">
          <Image
            className="self-center"
            src="/img/shirt.png"
            width={30}
            height={60}
            alt="shirt"
          />

          <div className="pl-3">
            <span className="block text-base leading-tight text-mainFont lg:app-text-body-medium">
              4. Lucas the Younger
            </span>
            <span className="mt-1 block text-xs font-normal text-Font_SubColor_1">
              Sportsbet-Pakenham R7
            </span>
          </div>
        </div>

        <span className="self-center whitespace-nowrap pl-4 text-xs text-action_ll2 md:text-sm 2xl:pl-8">
          15 Tips
        </span>
      </div>

      <div className="mt-2 space-x-2 text-right">
        <Button className="w-[120px]" variant="dark">
          152<BIcon className="ml-2"></BIcon>
        </Button>

        <Button className="w-[80px]" variant="muted">View</Button>
      </div>
    </div>
  );
};
