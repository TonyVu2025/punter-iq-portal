import { cn } from "@/lib/utils";
import { cva } from "class-variance-authority";
import { forwardRef, useState } from "react";
import { ControllerRenderProps } from "react-hook-form";

const variants = cva(
  "rounded transition-colors cursor-pointer border px-2 py-2 lg:px-3 lg:py-3 !font-normal text-Font_SubColor_1 app-text-small-caption lg:app-text-body-medium !leading-none",
  {
    variants: {
      variant: {
        default: "",
        active: "bg-action_ll1 border-action_ll1 text-primary-foreground",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
);

export type QuickFireButtonProps = ControllerRenderProps & {
  text: React.ReactNode;
  upvotes?: number;
  className?: string;
  onChange?: (value: number) => void;
};

export const QuickFireButton = forwardRef<HTMLDivElement, QuickFireButtonProps>(
  function QuickFireButtonUnforwarded(
    { text, upvotes, className, onChange, value: checkedProp },
    ref,
  ) {
    const [checked, setChecked] = useState(checkedProp);

    return (
      <div
        ref={ref}
        onClick={() => {
          onChange?.(!checked);
          setChecked(!checked);
        }}
        className={cn(
          variants({ variant: checked ? "active" : undefined }),
          className,
        )}
      >
        <div className="flex h-full flex-col justify-center">
          {text}
          <span className={cn("mt-1 block")}>{upvotes}</span>
        </div>
      </div>
    );
  },
);
