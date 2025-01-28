"use client";

import { RankingRaceCard } from "@/components/RankingRaceCard";
import Image from "next/image";
import { ComponentProps } from "react";
import { MobileOnly } from "@/components/MobileOnly";
import { LlSlider } from "@/components/ui/LlSlider";

export const BetSliderMobile = () => {
  const settings: ComponentProps<typeof LlSlider> = {
    slidesPerView: 1.25,
  };

  return (
    <MobileOnly>
      <LlSlider {...settings}>
        {new Array(4).fill(null).map((_, index) => (
          <div key={index} className="mb-3 rounded-[10px] bg-white p-2">
            <Image
              src="/img/brands_logo.jpg"
              width={64}
              height={15}
              alt="brand-logo"
              className="mb-[5px]"
            />
            <div className="mb-[5px] flex items-center justify-between">
              <div className="text-base font-bold leading-4 text-mainFont">
                Tauranga
              </div>
              <div className="text-Font_SubColor_1 app-text-category">
                Today at 6:30am
              </div>
            </div>
            <RankingRaceCard
              btnClass="w-[91px] h-[36px] app-text-body-small"
              titleClass="text-nowrap app-text-body-medium"
              customWrapperClass="p-0 mb-0"
              twoLine
            />
          </div>
        ))}
      </LlSlider>
    </MobileOnly>
  );
};
