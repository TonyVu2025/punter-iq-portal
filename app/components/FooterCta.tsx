import { cn } from "@/lib/utils";
import { HTMLAttributes } from "react";

export const FooterCta = ({
  className,
  ...props
}: HTMLAttributes<HTMLDivElement>) => {
  return (
    <div
      className={cn("py-9 lg:py-5 bg-white text-center", className)}
      {...props}
    >
      <h4 className="leading-tight app-text-h4">
        WHAT ARE YOU PREPARED TO LOSE TODAY? SET A DEPOSIT LIMIT.
      </h4>
      <p className="app-text-small-caption mt-1">
        For free and confidential support call{" "}
        <a href="tel: 1800 858 858" className="text-action_ll1">
          1800 858 858
        </a>{" "}
        or visit
        <a href="https://gamblinghelponline.org.au" className="text-action_ll1">
          {" "}
          gamblinghelponline.org.au
        </a>
      </p>
    </div>
  );
};
