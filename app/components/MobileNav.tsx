import { BIcon } from "@/components/ui/icons/BIcon";
import { SIcon } from "@/components/ui/icons/SIcon";
import { QPIcon } from "./ui/icons/QPIcon";

export const MobileNav = () => {
  return (
    <div className="flex items-center border-y text-Sub_Dark_color lg:hidden">
      <div className="relative box-content flex-1 space-x-2 border-r py-2 text-center">
        <BIcon height="24" className="inline" />
        <span className="relative inline-block rounded bg-[#7B68EE] px-1 py-0.5 align-middle leading-none text-white">
          <div className="flex h-full items-center justify-center p-[2px] text-[16px] font-[400]">
            99
          </div>
          <span className="absolute right-full top-1/2 h-0 w-0 -translate-y-1/2 border-[4px] border-transparent border-r-[#7B68EE]"></span>
        </span>
      </div>
      <SIcon height="27" className="box-content flex-1 border-r py-2" />
      <QPIcon height="20" className="box-content flex-1 py-2" />
    </div>
  );
};
