import { cn } from "@/lib/utils";
import Image from "next/image";

export const SideLiveRanking = ({ className, ...props }) => {
  return (
    <div
      className={cn(
        "max-w-md mx-auto bg-white rounded-lg",
        className
      )}
      {...props}
    >
      <div className="pt-6 px-6">
        <h2 className="text-xl font-semibold">Live Rankings</h2>
        <p className="text-Font_SubColor_1 mb-6 app-text-caption">Friday, 20 April</p>
      </div>

      <div className="space-y-4">
        {new Array(6).fill(null).map((_, index) => (
          <div
            key={index}
            className="flex items-center justify-between border-b border-Subtle_dark_2 py-2 px-3"
          >
            <div className="flex items-center space-x-3">
              <Image
                className="rounded-full"
                width={27}
                height={27}
                src="/img/profile.png"
                alt="Profile Image"
              />
              <div>
                <p className="text-sm lg:app-text-body">{index + 1}. David Strehlau</p>
                <p className="app-text-small-caption text-Font_SubColor_1">15 Leg Multi</p>
              </div>
            </div>
            <p className="font-bold">$1,750</p>
          </div>
        ))}
      </div>

      <button className="w-full py-4 app-text-body-medium text-Font_SubColor_1 text-center hover:text-action_ll1">
        Load More
      </button>
    </div>
  );
};
