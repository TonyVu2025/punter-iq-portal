import { BIcon } from "@/components/ui/icons/BIcon";
import { TIcon } from "@/components/ui/icons/TIcon";

interface RaceTableRankingIconsProps {
  rank?: number;
  icons?: React.ReactElement[];
}

export const RaceTableRankingIcons = ({
  rank = 1,
  icons = [<TIcon key="1" />, <BIcon key="2" width="20" />],
}: RaceTableRankingIconsProps) => {
  return (
    <div className="flex flex-col items-center space-y-2 overflow-hidden rounded-b-2xl rounded-t-sm bg-mainFont px-1 pb-2 text-white">
      <span>{rank}</span>
      {/* Tip icon */}
      {icons}
    </div>
  );
};
