"use client";

import { MobileOnly } from "@/components/MobileOnly";
import { LlSlider } from "@/components/ui/LlSlider";

export const AdsSectionMobile = () => {
  return (
    <MobileOnly>
      <LlSlider slidesPerView={2.1}>
        <img src="/img/sample-ads-portrait.jpg" alt="" />
        <img src="/img/sample-ads-portrait.jpg" alt="" />
        <img src="/img/sample-ads-portrait.jpg" alt="" />
      </LlSlider>
    </MobileOnly>
  );
};
