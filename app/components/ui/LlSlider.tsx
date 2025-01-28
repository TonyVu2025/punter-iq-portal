import React from "react";
import { cn } from "@/lib/utils";
import styles from "./LlSlider.module.scss";

// Import Swiper React components
import { Swiper, SwiperProps, SwiperRef, SwiperSlide } from "swiper/react";

interface LlSliderProps extends SwiperProps {
  manualMode?: boolean;
  ref?: React.LegacyRef<SwiperRef>;
  paginationStyle?: "default" | "alt";
}

export const LlSlider = React.forwardRef<SwiperRef, LlSliderProps>(
  function LlSliderUnforwarded(
    {
      className,
      speed = 500,
      spaceBetween = 10,
      children,
      manualMode = false,
      pagination = false,
      paginationStyle = "default",
      ...props
    },
    ref,
  ) {
    return (
      <Swiper
        speed={speed}
        ref={ref}
        spaceBetween={spaceBetween}
        pagination={pagination}
        {...props}
        className={cn(
          className,
          styles.slider,
          pagination && styles["has-pagination"],
          paginationStyle === "alt" && styles["pagination-alt"],
        )}
      >
        {!manualMode
          ? React.Children.map(children, (child) => (
              <SwiperSlide>{child}</SwiperSlide>
            ))
          : children}
      </Swiper>
    );
  },
);
