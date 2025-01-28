"use client"

import * as React from "react"
import * as AccordionPrimitive from "@radix-ui/react-accordion"
import { ChevronDown } from "lucide-react"

import { cn } from "@/lib/utils"

const OAccordion = AccordionPrimitive.Root

const OAccordionItem = React.forwardRef(({ className, ...props }, ref) => (
  <AccordionPrimitive.Item ref={ref} className={cn("border-b", className)} {...props} />
))
OAccordionItem.displayName = "OAccordionItem"

const OAccordionTrigger = React.forwardRef(({ className, children, iconClassName, ...props }, ref) => {
  const [open, setOpen] = React.useState(false)

  return (
    <AccordionPrimitive.Header className="flex">
      <div
        className={cn(
          "flex flex-1 items-center justify-between py-4 font-medium transition-all relative",
          className
        )}
      >
        {children}
        <AccordionPrimitive.Trigger
          ref={ref}
          className={cn(
            "h-4 w-4 shrink-0 transition-transform duration-200 text-Font_SubColor_1 absolute right-4 top-1/2 transform -translate-y-1/2",
            iconClassName,
            open && "rotate-180"
          )}
          onClick={() => setOpen(!open)}
          {...props}
        >
          <ChevronDown className="h-4 w-4" />
        </AccordionPrimitive.Trigger>
      </div>
    </AccordionPrimitive.Header>
  )
})
OAccordionTrigger.displayName = AccordionPrimitive.Trigger.displayName

const OAccordionContent = React.forwardRef(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Content
    ref={ref}
    className="overflow-hidden text-sm transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down"
    {...props}>
    <div className={cn("pt-0", className)}>{children}</div>
  </AccordionPrimitive.Content>
))
OAccordionContent.displayName = AccordionPrimitive.Content.displayName

export { OAccordion, OAccordionItem, OAccordionTrigger, OAccordionContent }
