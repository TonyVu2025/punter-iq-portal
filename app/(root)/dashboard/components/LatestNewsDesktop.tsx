import { MoreRaceCard } from "@/(root)/dashboard/components/MoreRaceCard";
import RaceCard from "@/components/HomeComponents/RaceCard";
import { raceNews } from "@/lib/data";

export const LatestNewDesktop = () => {
  return (
    <div className="hidden w-full flex-wrap gap-5 lg:flex 2xl:flex-nowrap">
      <div className="grid flex-grow gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-5 2xl:gap-8">
        {raceNews.slice(0, 5).map((news, index) => (
          <RaceCard key={index} {...news} />
        ))}

        <MoreRaceCard />
      </div>

      <div className="flex flex-grow flex-wrap justify-center gap-8 text-center 2xl:flex-none 2xl:flex-col">
        <img
          alt=""
          src="/img/sample-ads-portrait.jpg"
          className="rounded-lg object-cover 2xl:flex-1"
        />
        <img
          alt=""
          src="/img/sample-ads-portrait.jpg"
          className="rounded-lg object-cover 2xl:flex-1"
        />
      </div>
    </div>
  );
};
