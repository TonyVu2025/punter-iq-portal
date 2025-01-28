import { cn } from "@/lib/utils";
import Image from "next/image";
import { FaRegClock } from "react-icons/fa";

/**
 * @param {SocialFeedHeaderProps} props
 * @returns
 */
export const SocialFeedHeader = ({ wrapperClassName }) => {
  return (
    <div className={cn("justify-between flex pt-4 rounded-t-lg", wrapperClassName)}>
      <div className="flex items-center gap-x-4">
        <Image
          width={42}
          height={42}
          alt="ava"
          className="flex-shrink-0"
          src="/img/Ellipse 27.png"
        />

        <div className="text-sm lg:text-base">
          <span>
            Peter Gelagotis{" "}
            <span className="text-Font_SubColor_1 text-[13px] lg:text-base">@Gelagotis</span>
          </span>
          <span className="inline-block items-center w-full text-Font_SubColor_1 text-[13px]">
            <FaRegClock className="inline align-middle relative bottom-0.5" /> 12 minutes ago
          </span>
        </div>
      </div>

      <div>
        <svg
          width="31"
          height="32"
          viewBox="0 0 31 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M18.4492 13.5498L29.9897 0H27.2549L17.2344 11.7651L9.23097 0H0L12.1027 17.7909L0 32H2.73487L13.3169 19.5756L21.769 32H31L18.4492 13.5498ZM14.7034 17.9477L13.4772 16.1761L3.72028 2.07949H7.92089L15.7948 13.4559L17.0211 15.2275L27.2562 30.0151H23.0556L14.7034 17.9477Z"
            fill="#283036"
          />
        </svg>
      </div>
    </div>
  );
};
