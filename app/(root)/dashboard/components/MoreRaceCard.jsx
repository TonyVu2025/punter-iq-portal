import React from "react";
import Link from "next/link";

export const MoreRaceCard = () => {
  return (
    <Link
      href=""
      className="mb-3 flex w-full items-center justify-center rounded-[10px] border-0 bg-mainFont py-6 text-center text-white lg:mb-0 lg:py-0"
    >
      <div>
        <div className="text-body-small">Beats the Odds</div>

        <h3 className="mt-1 app-text-h3">
          View More News <br /> +
        </h3>
      </div>
    </Link>
  );
};
