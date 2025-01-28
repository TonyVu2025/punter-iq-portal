import { ArrowUpRight } from "lucide-react";
import React from "react";

const MostTippedHorseCard = ({
  number,
  name,
  race,
  price,
  timeAgo,
  image,
  tips,
}) => {
  return (
    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between bg-white rounded-lg p-4 mb-4">
      <div className="flex items-start mb-3 sm:mb-0">
        <div className="w-10 h-10 mr-4 flex-shrink-0">
          <img
            src={image}
            alt="tipper"
            className="w-full h-full rounded-full"
          />
        </div>
        <div className="flex-col gap-2">
          <div className="font-semibold text-lg">
            {number}. {name}
          </div>
          <div className="text-Font_SubColor_1 text-sm">{race}</div>
          <div className="flex flex-wrap gap-2 items-center text-xs text-Font_SubColor_1 mt-2">
            {tips.slice(0, 3).map((tip, tipIn) => (
              <img
                key={tipIn}
                src={tip.image}
                alt="tipper"
                className="w-6 h-6 rounded-full"
              />
            ))}
            <span>Tipped by {tips.length} punters</span>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-1 w-full sm:w-auto mt-3 sm:mt-0">
        <button className="bg-Font_SubColor_1 rounded-lg text-white text-lg px-6 py-2 flex gap-1 justify-center items-center w-full sm:w-auto">
          {price}
          <ArrowUpRight size={20} />
        </button>
        <div className="text-sm text-action1 text-center sm:text-right">
          {timeAgo}
        </div>
      </div>
    </div>
  );
};

export default MostTippedHorseCard;
