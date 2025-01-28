import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { FaRegPlusSquare } from "react-icons/fa";

/**
 * @param {SocialFeedHeaderProps} props
 * @returns
 */
export const BetHeader = ({ wrapperClassName, titleClassName, subTitleClassName }) => {
  return (
    <div
      className={cn(
        "justify-between items-center px-3 lg:px-8 py-4 flex rounded-t-lg bg-action_ll1 text-white",
        wrapperClassName
      )}
    >
      <div className="flex items-center">
        <Image
          width={42}
          height={42}
          alt="ava"
          src="/img/Ellipse 27.png"
        />

        <div className="pl-3">
          <h2 className={cn("text-xl lg:app-text-h3 font-bold", titleClassName)}>Kane Tips </h2>
          <span className={cn("inline-block w-full text-xs lg:text-[13px]", subTitleClassName)}>
            Win-Loss 27-50
          </span>
        </div>
      </div>

      <Button variant="dark" size="sm" className="font-light">
        <FaRegPlusSquare className="mr-2" />
        Follow
      </Button>
    </div>
  );
};
