import { cn } from "@/lib/utils";
import React from "react";

interface ChipProps {
  className?: string;
  text1?: React.ReactNode;
  text2?: React.ReactNode;
  actionText?: React.ReactNode;
}

export const Chip = ({ className, text1, text2, actionText }: ChipProps) => {
  return (
    <div
      className={cn(
        "rounded border px-5 py-3 text-center leading-tight text-Font_SubColor_1 app-text-body-medium",
        className,
      )}
    >
      {text1}
      <br />
      <span className="text-mainFont">{text2}</span>
      {actionText && (
        <button className="w-full rounded-b bg-action1 px-1 py-0.5 text-2xs text-white hover:bg-action3">
          {actionText}
        </button>
      )}
    </div>
  );
};
