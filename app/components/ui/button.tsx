import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline:
          "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
        green:
          "bg-good_Green hover:bg-good_Green hover:bg-opacity-80 text-white",
        purple:
          "bg-action_ll1 hover:bg-action_ll1 hover:bg-opacity-80 text-white",
        muted:
          "bg-Font_SubColor_1 hover:bg-Font_SubColor_1 hover:bg-opacity-80 text-white",
        dark: "bg-mainFont hover:bg-mainFont hover:bg-opacity-80 text-white",
        newDark:
          "bg-new_dark_1 hover:bg-new_dark_1 hover:bg-opacity-80 text-white",
        subtleDark: "bg-Subtle_dark text-mainFont",
        action4: "bg-action4",
      },
      size: {
        default: "h-10 px-4 py-2",
        xs: "h-6 px-1.5 text-xs rounded-sm",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  variant?: Parameters<typeof buttonVariants>[0]["variant"];
  size?: Parameters<typeof buttonVariants>[0]["size"];
  asChild?: boolean;
}

const Button = React.forwardRef<any, React.PropsWithChildren<ButtonProps>>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size }), className)}
        ref={ref}
        {...props}
      />
    );
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
