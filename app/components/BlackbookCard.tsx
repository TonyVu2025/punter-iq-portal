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
      <div className="flex items-center">
        <svg
          width="32"
          height="32"
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clip-path="url(#clip0_6434_35022)">
            <rect width="30" height="30" rx="16" fill="#F37023" />
            <path
              d="M4.88866 29.2816C0.55961 22.8929 3.61476 17.9032 3.61476 17.9032C2.90493 17.6931 0.634766 19.1809 0.634766 19.1809C1.9116 14.5016 8.93453 10.5262 8.93453 10.5262C8.15493 10.2409 5.95552 10.8076 5.95552 10.8076C11.7011 5.27782 18.7249 7.33409 18.7249 7.33409C18.9368 6.12719 22.4145 4 22.4145 4C22.0588 4.3523 21.9153 6.27033 21.9153 6.27033C22.2701 5.63093 23.407 4.99268 23.407 4.99268C22.7691 6.48047 23.407 9.67208 23.407 9.67208C25.2512 11.5179 27.3078 17.9034 27.3078 17.9034L28.0904 19.0381C29.0838 20.4588 28.7187 22.6927 27.7346 23.2225C24.0469 25.2134 23.6902 21.5921 23.6902 21.5921C20.6395 21.2373 18.3691 17.831 18.3691 17.831C14.2559 19.9587 16.5468 25.961 18.3228 28.2659C20.6047 31.2205 18.9339 36 18.9339 36C18.9339 36 9.16326 35.5954 4.88866 29.2816Z"
              fill="white"
            />
          </g>
          <defs>
            <clipPath id="clip0_6434_35022">
              <rect width="32" height="32" rx="16" fill="white" />
            </clipPath>
          </defs>
        </svg>

        <div className="pl-3">
          <span className="block text-base leading-tight text-mainFont lg:app-text-body-medium">
            1. Barney&apos;s Blaze (3)
          </span>
          <span className="mt-1 block text-xs font-normal text-Font_SubColor_1">
            T: Wendy Kelly
          </span>
          <span className="mt-1 block text-xs font-normal text-Font_SubColor_1">
            J: Joe Bowditch (58kg)
          </span>
        </div>

        <span className="self-center whitespace-nowrap pl-4 text-xs font-[400] text-[#F37023] md:text-sm 2xl:pl-8">
          15 Tips
        </span>
      </div>

      <div className="flex flex-row gap-1 whitespace-nowrap rounded-md bg-[#FFE8DB] px-[15.5px] py-2 text-white">
        <Image
          src="/img/best-365.png"
          alt="Tipster Avatar"
          width={24}
          height={24}
        />
        <div className="text-[#F37023]">$ 5.55</div>
      </div>
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
          152<BIcon></BIcon>
        </Button>

        <Button className="w-[80px]" variant="muted">
          View
        </Button>
      </div>
    </div>
  );
};
