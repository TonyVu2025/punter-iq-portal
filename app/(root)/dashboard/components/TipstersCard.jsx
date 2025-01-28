import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { FaRegPlusSquare } from "react-icons/fa";
import { Button } from "@/components/ui/button";

export const TipstersCard = () => {
  return (
    <div className="lg:mb-[78px] rounded-[10px] bg-white hover:bg-action_ll1 py-[15px] flex flex-col items-center group transition-all hover:shadow-tipsterCard hover:offset-2xl">
      <Avatar className="h-20 w-20 mb-2.5">
        <AvatarImage src="/img/tipster-avatar.png" />
        <AvatarFallback>T</AvatarFallback>
      </Avatar>
      <div className="text-center mb-2.5">
        <div className="app-text-body-medium font-bold text-mainFont group-hover:text-white">Horsetipguru</div>
        <div className="app-text-body-medium text-Font_SubColor_1 group-hover:text-white">Tips: 5 BB: 15</div>
      </div>
      <Button variant="purple" size="sm" className="font-light app-text-small-caption group-hover:text-white group-hover:bg-mainFont">
        <FaRegPlusSquare className="mr-2" />
        Follow
      </Button>
    </div>
  );
};
