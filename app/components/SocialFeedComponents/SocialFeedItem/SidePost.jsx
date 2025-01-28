import Image from "next/image";
import { FaRegClock } from "react-icons/fa";
import { cn } from "@/lib/utils";
import { SocialFeedActionCompact } from "./SocialFeedActionCompact";

export const SidePost = ({ className, ...props }) => {
  return (
    <div className={cn("rounded-lg bg-white", className)} {...props}>
      <div className="px-2.5 pt-2.5">
        <img src="/img/sample-feed.jpg" alt="" className="w-full rounded-md" />

        <div className="mt-3 flex items-center">
          <Image width={42} height={42} alt="ava" src="/img/Ellipse 27.png" />

          <div className="pl-3 leading-[1.1]">
            <span>Peter Gelagotis</span>
            <span className="inline-block w-full text-Font_SubColor_1 app-text-body-small">
              <FaRegClock className="inline-block align-middle" />{" "}
              <span className="align-middle">12 minutes ago</span>
            </span>
          </div>
        </div>

        <div className="mt-3 app-text-body-small">
          We love a good success story at Lastleg®, and boy do we have some to
          share! Whenever a Lastleg® goes bang in a major way, we make them
          feel extra special by dedicating an entire article to them. Although,
          we must warn you.
        </div>
      </div>

      <SocialFeedActionCompact />
    </div>
  );
};
