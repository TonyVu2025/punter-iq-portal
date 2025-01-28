import { EllipsisIcon } from "lucide-react";
import Link from "next/link";
import { CupIcon } from "../ui/icons/CupIcon";
import HorseIcon from "./HorseIcon.png";
import Image from "next/image";
import { TipIcon } from "../ui/icons/TipIcon";
import { UsersIcon } from "../ui/icons/UsersIcon";

export const FooterMenu = () => {
  return (
    <div className="text-cente fixed bottom-0 left-0 z-40 flex w-full items-stretch justify-between gap-x-4 rounded-t-xl bg-white px-4 py-3 text-center text-xs text-[#808080] shadow lg:hidden">
      <Link className="flex flex-col justify-between" href="/form-guides">
        {/* SVG is buggy so we decide to use PNG instead */}
        <Image src={HorseIcon} alt="horse" className="mx-auto mb-1" />
        Form
      </Link>

      <Link
        className="flex flex-col justify-between"
        href="/form-guides/results"
      >
        <CupIcon className="mx-auto mb-1" />
        Results
      </Link>

      <Link className="flex flex-col justify-between" href="#">
        <div className="flex flex-1 items-center justify-center">
          <TipIcon className="mx-auto mb-1" />
        </div>
        Tips
      </Link>

      <Link className="flex flex-col justify-between" href="/social-feed">
        <UsersIcon className="mx-auto mb-1" /> Social
      </Link>

      <div>
        <EllipsisIcon className="mx-auto mb-1" />
        More
      </div>
    </div>
  );
};
