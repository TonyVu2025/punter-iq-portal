import { RankingRaceCard } from "../../../components/RankingRaceCard";

export const RankingCardWithVideo = ({ raceCardProps }: any) => {
  return (
    <div className="mb-5 overflow-hidden rounded-lg bg-white last:mb-0 lg:mb-0">
      <div className="p-4 lg:px-4 lg:pt-[25px] 2xl:px-[52px]">
        <div className="w-[102px] rounded-[15px] bg-Subtle_dark px-[17px] py-2 text-xs text-mainFont">
          Contenders
        </div>
        <h4 className="app-text-h4">Sportsbet-Ballarat 2000m</h4>
        {new Array(4).fill(null).map((_, key) => (
          <RankingRaceCard
            customWrapperClass="border-b border-Subtle_dark rounded-none pr-0"
            showJockey
            key={key}
            {...raceCardProps}
          >
            <div className="mr-2.5 text-sm text-mainFont">1st</div>
          </RankingRaceCard>
        ))}
      </div>
      <div className="relative cursor-pointer">
        <img alt="" src="/img/video-thumbnail.png" className="mx-auto" />

        <svg
          width="58"
          height="59"
          viewBox="0 0 58 59"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
        >
          <path
            d="M29 6.14583C16.3205 6.14583 6.04167 16.6018 6.04167 29.5C6.04167 42.3981 16.3205 52.8542 29 52.8542C41.6795 52.8542 51.9583 42.3981 51.9583 29.5C51.9583 16.6018 41.6795 6.14583 29 6.14583ZM3.625 29.5C3.625 15.2441 14.9858 3.6875 29 3.6875C43.0142 3.6875 54.375 15.2441 54.375 29.5C54.375 43.7558 43.0142 55.3125 29 55.3125C14.9858 55.3125 3.625 43.7558 3.625 29.5Z"
            fill="white"
          />
          <path
            d="M23.5952 18.5829C23.9881 18.369 24.4648 18.3925 24.8356 18.6439L39.3356 28.4773C39.6718 28.7052 39.8737 29.089 39.8737 29.5C39.8737 29.911 39.6718 30.2948 39.3356 30.5227L24.8356 40.3561C24.4648 40.6075 23.9881 40.631 23.5952 40.4171C23.2023 40.2032 22.957 39.7866 22.957 39.3333V19.6667C22.957 19.2134 23.2023 18.7968 23.5952 18.5829ZM25.3737 21.9634V37.0366L36.487 29.5L25.3737 21.9634Z"
            fill="white"
          />
        </svg>
      </div>
    </div>
  );
};
