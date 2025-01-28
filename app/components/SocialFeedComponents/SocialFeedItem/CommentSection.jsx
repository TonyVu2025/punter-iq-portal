import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuPortal,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import { FaChevronDown } from "react-icons/fa";

export const CommentSection = () => {
  return (
    <div className="px-4 pt-4 lg:px-8 lg:pt-6">
      <div className="flex items-center">
        <img alt="" src="/img/Ellipse 27.png" className="w-8 lg:w-auto" />

        <Input
          type="text"
          placeholder="What's on your mind?"
          className="ml-3 h-10 flex-1 bg-Subtle_dark px-7 lg:ml-6 lg:h-12"
        />
      </div>

      <div className="mt-5">
        <div className="flex justify-between text-sm text-Sub_Dark_color lg:text-base">
          <span>515 Comments</span>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button>
                All Comments <FaChevronDown className="inline" />
              </button>
            </DropdownMenuTrigger>

            <DropdownMenuPortal>
              <DropdownMenuContent
                className="DropdownMenuContent"
                sideOffset={5}
              >
                <DropdownMenuItem>All comments</DropdownMenuItem>

                <DropdownMenuItem>Most related</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenuPortal>
          </DropdownMenu>
        </div>

        <div className="mt-4 flex items-start">
          <img alt="" src="/img/Ellipse 27.png" width="30" height="30" />

          <div className="pl-3">
            <span className="text-sm lg:text-base">Peter Gelagotis</span>

            <span className="ml-3 text-[13px] text-Font_SubColor_1">2hr</span>

            <div className="mt-1 text-xs text-Sub_Dark_color lg:pl-1 lg:text-sm">
              At the end of the day, you’ve probably come to Dabble to join a
              community and place some bets. So, it would be silly of us not to
              mention allllll the betting features we’ve got going for us in our
              app.
            </div>
          </div>
        </div>

        <div className="mt-4 border-t pb-5 pt-3 text-action1">
          <button className="text-sm lg:app-text-body-paragraph">
            Show all comments
          </button>
        </div>
      </div>
    </div>
  );
};
