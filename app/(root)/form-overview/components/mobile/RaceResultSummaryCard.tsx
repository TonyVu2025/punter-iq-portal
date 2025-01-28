import { ChevronRight } from "lucide-react";

export const RaceResultSummaryCard = () => {
  return (
    <div className="flex space-x-2 overflow-auto">
      <div className="flex-shrink-0 rounded bg-white p-2.5">
        <div className="flex">
          <span className="inline-block rounded bg-good_Green px-1 text-2xs text-white">
            1st
          </span>
        </div>

        <strong className="block">Moriconi</strong>

        <p className="mt-1 text-2xs text-Sub_Dark_color">T Townsend 57.5kg</p>
      </div>

      <div className="flex-shrink-0 rounded bg-white p-2.5">
        <div className="flex justify-between text-2xs">
          <span className="inline-block rounded bg-new_dark_1 px-1 text-white">
            2nd
          </span>

          <span className="pl-8">Margin 0.48 L</span>
        </div>

        <strong className="block">Real Hussey</strong>

        <p className="mt-1 text-2xs text-Sub_Dark_color">B Richardson 61kg</p>
      </div>

      <div className="flex-shrink-0 rounded bg-white p-2.5">
        <div className="flex justify-between text-2xs">
          <span className="inline-block rounded bg-new_dark_1 px-1 text-white">
            3rd
          </span>

          <span className="pl-8">Margin 0.48 L</span>
        </div>

        <strong className="block">Barney&apos;s Blaze</strong>

        <p className="mt-1 text-2xs text-Sub_Dark_color">E Bell 59.5kg</p>
      </div>

      <div className="flex-shrink-0 rounded bg-white p-2.5">
        <div className="flex justify-between text-2xs">
          <span className="inline-block rounded bg-new_dark_1 px-1 text-white">
            4th
          </span>

          <span className="pl-8">Margin 0.48 L</span>
        </div>

        <strong className="block">Real Hussey</strong>

        <p className="mt-1 text-2xs text-Sub_Dark_color">B Richardson 61kg</p>
      </div>

      <div className="flex flex-shrink-0 items-center rounded border border-white bg-white bg-opacity-50 p-2.5 text-action_ll1">
        View more
        <button className="ml-2 h-9 w-9 rounded-full bg-action_ll1 text-center">
          <ChevronRight className="inline-block stroke-white" />
        </button>
      </div>
    </div>
  );
};
