"use client";

import * as React from "react";
import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { ChevronDown } from "lucide-react";

import { cn } from "@/lib/utils";

const Accordion = AccordionPrimitive.Root;

const AccordionItem = React.forwardRef<
  HTMLDivElement,
  AccordionPrimitive.AccordionItemProps
>(({ className, ...props }, ref) => (
  <AccordionPrimitive.Item
    ref={ref}
    className={cn("border-b", className)}
    {...props}
  />
));
AccordionItem.displayName = "AccordionItem";

const AccordionTrigger = React.forwardRef<
  HTMLButtonElement,
  AccordionPrimitive.AccordionTriggerProps & {
    iconClassName?: string;
    iconComponent?: React.ReactNode;
    headerClassName?: string;
  }
>(
  (
    {
      className,
      children,
      iconClassName,
      iconComponent,
      headerClassName,
      ...props
    },
    ref,
  ) => {
    return (
      <AccordionPrimitive.Header asChild className={cn(headerClassName)}>
        <AccordionPrimitive.Trigger
          className="block w-full [&[data-state=open]>div>svg]:rotate-180"
          ref={ref}
          {...props}
        >
          <div
            className={cn(
              "relative flex w-full flex-1 cursor-pointer items-center justify-between py-4 font-medium transition-all",
              className,
            )}
          >
            {children}
            {iconComponent ? (
              iconComponent
            ) : (
              <ChevronDown
                className={cn(
                  "absolute right-4 top-1/2 h-4 w-4 shrink-0 -translate-y-1/2 transform text-Font_SubColor_1 transition-transform duration-200",
                  iconClassName,
                )}
              />
            )}
          </div>
        </AccordionPrimitive.Trigger>
      </AccordionPrimitive.Header>
    );
  },
);

AccordionTrigger.displayName = AccordionPrimitive.Trigger.displayName;

const AccordionContent = React.forwardRef<
  HTMLDivElement,
  AccordionPrimitive.AccordionContentProps
>(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Content
    ref={ref}
    className="overflow-hidden text-sm transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down"
    {...props}
  >
    <div className={cn("pt-0", className)}>{children}</div>
  </AccordionPrimitive.Content>
));

AccordionContent.displayName = AccordionPrimitive.Content.displayName;

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent };
