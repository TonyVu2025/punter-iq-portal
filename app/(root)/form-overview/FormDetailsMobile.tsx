import { ChevronDown } from "lucide-react";
import { RaceDetailCard } from "./components/mobile/RaceDetailCard";
import { MostTipped } from "./components/mobile/MostTipped";
import { FooterCta } from "@/components/FooterCta";

export const FormDetailsMobile = () => {
  return (
    <>
      <div className="px-4">
        <img
          alt=""
          src="/img/sample-ads-3.jpg"
          className="mx-auto mt-9 h-[70px]"
        />

        <RaceDetailCard />

        <div className="mt-2 text-center text-sm text-action_ll1">
          View more result <ChevronDown className="inline" />
        </div>

        <MostTipped />
      </div>

      <FooterCta className="mt-6" />
    </>
  );
};
