"use client";

import RaceCard from "@/components/HomeComponents/RaceCard";
import { MobileOnly } from "@/components/MobileOnly";
import { raceNews } from "@/lib/data";
import type { ComponentProps } from "react";
import { LlSlider } from "@/components/ui/LlSlider";
import Link from "next/link";
import { Pagination } from "swiper/modules";

export const LatestNewMobile = () => {
  const settings: ComponentProps<typeof LlSlider> = {
    slidesPerView: 1,
    pagination: true,
    modules: [Pagination],
  };

  return (
    <MobileOnly>
      <div className="flex items-center justify-between border-t pt-4">
        <h2 className="app-text-h3">Latest News</h2>

        <Link href="#" className="!font-normal text-action_ll1 app-text-h6">
          View More+
        </Link>
      </div>

      <LlSlider className="mt-4" {...settings}>
        {raceNews.slice(0, 5).map((news, index) => (
          <RaceCard key={index} {...news} />
        ))}
      </LlSlider>
    </MobileOnly>
  );
};
