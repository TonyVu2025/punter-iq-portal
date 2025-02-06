import React from "react";
import { Search, Ellipsis, Save } from "lucide-react";
import Image from "next/image";
import { Separator } from "@/components/ui/separator";

function SideBar() {
  return (
    <div className="sticky left-0 top-16 hidden h-[calc(100vh-4rem)] w-16 border-r bg-white max-mobile-l:w-10 lg:block">
      <nav className="flex flex-col items-center py-4 text-mainFont">
        <button className="rounded-lg border p-3 hover:bg-action_ll1/10 hover:text-action_ll1 max-mobile-l:p-1">
          <Search className="h-6 w-6 max-mobile-l:h-4 max-mobile-l:w-4" />
        </button>
        <Separator className="my-4 w-3/5" />
        <ul className="flex flex-1 flex-col items-center space-y-2">
          <li>
            <button className="rounded-lg p-3 hover:bg-action_ll1/10 hover:text-action_ll1">
              <Image
                src="/img/icons/note.svg"
                alt="note"
                width={19}
                height={24}
                className="max-mobile-l:h-4 max-mobile-l:w-4"
              />
            </button>
          </li>
          <li>
            <button className="rounded-lg p-3 hover:bg-action_ll1/10 hover:text-action_ll1">
              <Image
                src="/img/icons/tips.svg"
                alt="note"
                width={40}
                height={40}
                className="max-mobile-l:h-4 max-mobile-l:w-4"
              />
            </button>
          </li>
          <li>
            <button className="rounded-lg p-3 hover:bg-action_ll1/10 hover:text-action_ll1">
              <Image
                src="/img/icons/message.svg"
                alt="note"
                width={24}
                height={24}
                className="max-mobile-l:h-4 max-mobile-l:w-4"
              />
            </button>
          </li>
          <li>
            <button className="rounded-lg p-3 hover:bg-action_ll1/10 hover:text-action_ll1">
              <Image
                src="/img/icons/list.svg"
                alt="note"
                width={20}
                height={20}
                className="max-mobile-l:h-4 max-mobile-l:w-4"
              />
            </button>
          </li>
        </ul>
        <button className="mt-14 rounded-lg p-3 hover:bg-action_ll1/10 hover:text-action_ll1">
          <Save className="h-6 w-6 max-mobile-l:h-4 max-mobile-l:w-4" />
        </button>
        <Separator className="my-4 w-3/5" />
        <button className="rounded-lg hover:text-action_ll1">
          <Ellipsis className="h-6 w-6 max-mobile-l:h-4 max-mobile-l:w-4" />
        </button>
      </nav>
    </div>
  );
}

export default SideBar;
