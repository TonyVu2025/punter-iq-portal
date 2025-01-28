import React from "react";
import {
  Search,
  Home,
  Mail,
  Settings,
  User,
  Ellipsis,
  Save,
} from "lucide-react";
import { Separator } from "@/components/ui/separator";

function SideBar() {
  return (
    <div className="hidden lg:block w-16 max-mobile-l:w-10 sticky top-16 left-0 h-[calc(100vh-4rem)] border-r bg-white">
      <nav className="flex flex-col items-center py-4 text-mainFont">
        <button className="p-3 max-mobile-l:p-1 hover:bg-action_ll1/10 rounded-lg hover:text-action_ll1 border">
          <Search className="w-6 h-6 max-mobile-l:w-4 max-mobile-l:h-4" />
        </button>
        <Separator className="my-4 w-3/5" />
        <ul className="flex-1 flex flex-col items-center space-y-2">
          <li>
            <button className="p-3 hover:bg-action_ll1/10 rounded-lg hover:text-action_ll1">
              <Home className="w-6 h-6 max-mobile-l:w-4 max-mobile-l:h-4" />
            </button>
          </li>
          <li>
            <button className="p-3 hover:bg-action_ll1/10 rounded-lg hover:text-action_ll1">
              <Mail className="w-6 h-6 max-mobile-l:w-4 max-mobile-l:h-4" />
            </button>
          </li>
          <li>
            <button className="p-3 hover:bg-action_ll1/10 rounded-lg hover:text-action_ll1">
              <Settings className="w-6 h-6 max-mobile-l:w-4 max-mobile-l:h-4" />
            </button>
          </li>
          <li>
            <button className="p-3 hover:bg-action_ll1/10 rounded-lg hover:text-action_ll1">
              <User className="w-6 h-6 max-mobile-l:w-4 max-mobile-l:h-4" />
            </button>
          </li>
        </ul>
        <button className="mt-14 p-3 hover:bg-action_ll1/10 rounded-lg hover:text-action_ll1">
          <Save className="w-6 h-6 max-mobile-l:w-4 max-mobile-l:h-4" />
        </button>
        <Separator className="my-4 w-3/5" />
        <button className="rounded-lg hover:text-action_ll1">
          <Ellipsis className="w-6 h-6 max-mobile-l:w-4 max-mobile-l:h-4" />
        </button>
      </nav>
    </div>
  );
}

export default SideBar;
