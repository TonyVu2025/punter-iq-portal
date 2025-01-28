"use client";

import * as React from "react";
import * as SliderPrimitive from "@radix-ui/react-slider";

import { cn } from "@/lib/utils";

const Slider = React.forwardRef<
  React.ElementRef<typeof SliderPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof SliderPrimitive.Root>
>(({ className, ...props }, ref) => (
  <SliderPrimitive.Root
    ref={ref}
    className={cn(
      "relative flex w-full touch-none select-none items-center",
      className,
    )}
    {...props}
  >
    <SliderPrimitive.Track className="relative h-2 w-full grow overflow-hidden rounded-full bg-Subtle_dark">
      <SliderPrimitive.Range className="bg-gradient-slider absolute h-full" />
    </SliderPrimitive.Track>
    <SliderPrimitive.Thumb className="block rounded-full ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50">
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width="24" height="24" rx="12" fill="#F37023" />
        <path
          d="M7.11621 16.6408C4.95168 13.4464 6.47925 10.9516 6.47925 10.9516C6.12434 10.8465 4.98926 11.5904 4.98926 11.5904C5.62768 9.25081 9.13914 7.26309 9.13914 7.26309C8.74934 7.12044 7.64963 7.40379 7.64963 7.40379C10.5224 4.63891 14.0343 5.66705 14.0343 5.66705C14.1403 5.0636 15.8791 4 15.8791 4C15.7013 4.17615 15.6295 5.13517 15.6295 5.13517C15.8069 4.81547 16.3754 4.49634 16.3754 4.49634C16.0564 5.24024 16.3754 6.83604 16.3754 6.83604C17.2975 7.75894 18.3258 10.9517 18.3258 10.9517L18.7171 11.519C19.2138 12.2294 19.0312 13.3463 18.5392 13.6112C16.6953 14.6067 16.517 12.796 16.517 12.796C14.9916 12.6187 13.8564 10.9155 13.8564 10.9155C11.7998 11.9793 12.9453 14.9805 13.8333 16.133C14.9742 17.6102 14.1388 20 14.1388 20C14.1388 20 9.25351 19.7977 7.11621 16.6408Z"
          fill="white"
        />
      </svg>
    </SliderPrimitive.Thumb>
  </SliderPrimitive.Root>
));
Slider.displayName = SliderPrimitive.Root.displayName;

export { Slider };
