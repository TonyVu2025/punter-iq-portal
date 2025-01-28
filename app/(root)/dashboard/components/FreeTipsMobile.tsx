"use client";

import { RankingCardWithVideo } from "@/(root)/dashboard/components/RankingCardWithVideo";
import { LlSlider } from "@/components/ui/LlSlider";
import Link from "next/link";

export const FreeTipsMobile = () => {
  return (
    <div className="mt-6 lg:mt-[71px]">
      <div className="mb-4 mt-6 flex items-center justify-between lg:mb-[31px] lg:mt-[73px]">
        <h4 className="app-text-h4">Free Tips</h4>

        <Link href="#" className="text-sm text-action_ll1">
          View More+
        </Link>
      </div>
      <div className="grid-cols-3 gap-[21px] lg:grid">
        <LlSlider slidesPerView={1.1}>
          {new Array(3).fill(null).map((_, key) => (
            <RankingCardWithVideo key={key} />
          ))}
        </LlSlider>
      </div>
    </div>
  );
};
