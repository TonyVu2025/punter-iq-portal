import React from "react";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";

const KaneTipCard = ({ number, name, race, jockey, tips, price, image }) => {
  return (
    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between bg-white rounded-lg p-3 sm:p-4 mb-3 sm:mb-4 shadow-sm">
      <div className="flex items-center mb-2 sm:mb-0">
        <div className="w-8 h-8 sm:w-10 sm:h-10 mr-3 sm:mr-4 flex-shrink-0">
          <Image
            src={image}
            alt="tipper"
            width={40}
            height={40}
            className="rounded-full w-full h-full object-cover"
          />
        </div>
        <div>
          <div className="font-semibold text-base sm:text-lg">
            {number}. {name}
          </div>
          <div className="flex flex-col sm:flex-row sm:gap-2 text-Font_SubColor_1 text-xs sm:text-sm">
            <div>{race}</div>
            <div className="hidden sm:block">•</div>
            <div>{jockey}</div>
          </div>
        </div>
      </div>
      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-3 w-full sm:w-auto mt-2 sm:mt-0">
        <div className="text-xs sm:text-sm text-pink-500">{tips} Tips</div>
        <button className="bg-Font_SubColor_1 rounded-lg text-white text-sm sm:text-base px-3 sm:px-4 py-1.5 sm:py-2 flex gap-1 justify-center items-center w-full sm:w-auto">
          {price}
          <ArrowUpRight size={16} className="sm:w-4 sm:h-4" />
        </button>
      </div>
    </div>
  );
};

export default KaneTipCard;