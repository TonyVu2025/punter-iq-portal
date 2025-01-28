"use client";
import * as React from "react";
import * as DrawerPrimitive from "@radix-ui/react-dialog";
import { cva } from "class-variance-authority";

import { cn } from "@/lib/utils";

const Drawer = DrawerPrimitive.Root;

const DrawerTrigger = DrawerPrimitive.Trigger;

const DrawerClose = DrawerPrimitive.Close;

const DrawerPortal = DrawerPrimitive.Portal;

const DrawerOverlay = React.forwardRef<
  HTMLDivElement,
  DrawerPrimitive.DialogOverlayProps
>(({ className, ...props }, ref) => (
  <DrawerPrimitive.Overlay
    className={cn(
      "fixed inset-0 z-50 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
      className,
    )}
    {...props}
    ref={ref}
  />
));
DrawerOverlay.displayName = DrawerPrimitive.Overlay.displayName;

const drawerVariants = cva(
  "fixed z-50 gap-4 bg-background  shadow-lg transition h-[calc(100% - 4rem)] ease-in-out data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:duration-300 data-[state=open]:duration-500",
  {
    variants: {
      side: {
        top: "inset-x-0 top-14 border-b data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top",
        bottom:
          "inset-x-0 bottom-0 border-t data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom",
        left: "inset-y-0 left-0 h-[calc(100% - 4rem)] w-3/4 border-r data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left sm:max-w-md lg:max-w-[547px]",
        right:
          "inset-y-0 right-0 h-[calc(100% - 4rem)] w-3/4  border-l data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right sm:max-w-md lg:max-w-[547px]",
      },
    },
    defaultVariants: {
      side: "right",
    },
  },
);

type DrawerContentProps = DrawerPrimitive.DialogContentProps &
  Parameters<typeof drawerVariants>[0] & {
    overlayProps?: DrawerPrimitive.DialogOverlayProps;
  };
const DrawerContent = React.forwardRef<HTMLDivElement, DrawerContentProps>(
  ({ side = "left", overlayProps, className, children, ...props }, ref) => (
    <DrawerPortal>
      <DrawerOverlay {...overlayProps} />
      <DrawerPrimitive.Content
        ref={ref}
        className={cn(
          drawerVariants({ side }),
          "top-16 h-[calc(100%-4rem)] overflow-y-auto",
          className,
        )}
        {...props}
      >
        {children}
        <DrawerPrimitive.Close className="absolute right-4 top-16 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-secondary">
          <span className="sr-only">Close</span>
        </DrawerPrimitive.Close>
      </DrawerPrimitive.Content>
    </DrawerPortal>
  ),
);
DrawerContent.displayName = DrawerPrimitive.Content.displayName;

const DrawerHeader = ({ className, ...props }) => (
  <div
    className={cn(
      "flex flex-col space-y-2 text-center sm:text-left",
      className,
    )}
    {...props}
  />
);
DrawerHeader.displayName = "DrawerHeader";

const DrawerFooter = ({ className, ...props }) => (
  <div
    className={cn(
      "flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2",
      className,
    )}
    {...props}
  />
);
DrawerFooter.displayName = "DrawerFooter";

const DrawerTitle = React.forwardRef<
  HTMLHeadingElement,
  DrawerPrimitive.DialogTitleProps
>(({ className, ...props }, ref) => (
  <DrawerPrimitive.Title
    ref={ref}
    className={cn("text-lg font-semibold text-foreground", className)}
    {...props}
  />
));
DrawerTitle.displayName = DrawerPrimitive.Title.displayName;

const DrawerDescription = React.forwardRef<
  HTMLParagraphElement,
  DrawerPrimitive.DialogDescriptionProps
>(({ className, ...props }, ref) => (
  <DrawerPrimitive.Description
    ref={ref}
    className={cn("text-sm text-muted-foreground", className)}
    {...props}
  />
));
DrawerDescription.displayName = DrawerPrimitive.Description.displayName;

export {
  Drawer,
  DrawerPortal,
  DrawerOverlay,
  DrawerTrigger,
  DrawerClose,
  DrawerContent,
  DrawerHeader,
  DrawerFooter,
  DrawerTitle,
  DrawerDescription,
};
