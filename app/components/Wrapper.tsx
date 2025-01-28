import { cn } from "@/lib/utils";
import { HTMLAttributes } from "react";

export const Wrapper = ({
  className,
  ...props
}: HTMLAttributes<HTMLDivElement>) => {
  return (
    <div
      className={cn("mx-auto max-w-[1341px] px-4", className)}
      {...props}
    ></div>
  );
};
