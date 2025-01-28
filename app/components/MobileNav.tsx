import { BIcon } from "@/components/ui/icons/BIcon";
import { SIcon } from "@/components/ui/icons/SIcon";
import { QPIcon } from "./ui/icons/QPIcon";

export const MobileNav = () => {
  return (
    <div className="flex items-center border-y text-Sub_Dark_color lg:hidden">
      <div className="relative box-content flex-1 space-x-2 border-r py-2 text-center">
        <BIcon height="24" className="inline" />
        <span className="bg-blue_misc relative inline-block rounded px-1 py-0.5 leading-none text-white align-middle">
          99
          <span className="border-r-blue_misc absolute right-full top-1/2 h-0 w-0 -translate-y-1/2 border-[4px] border-transparent"></span>
        </span>
      </div>
      <SIcon height="27" className="box-content flex-1 border-r py-2" />
      <QPIcon height="20" className="box-content flex-1 py-2" />
    </div>
  );
};
